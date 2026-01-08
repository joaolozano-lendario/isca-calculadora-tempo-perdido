import { useState } from 'react'

// URL da API proxy
const API_URL = import.meta.env.VITE_API_URL || 'https://api-proxy-activecampaign.vercel.app'

export interface ResultData {
  email: string
  nome?: string
  horasPerdidasSemana: number
  custoAnualEstimado: number
  principalRalo: string
  nivelDor: 'baixo' | 'medio' | 'alto'
  percentualTempo: number
  valorHora: number
  atividades: Record<string, number>
}

interface UseResultSubmitOptions {
  onSuccess?: () => void
  onError?: (error: string) => void
}

interface UseResultSubmitReturn {
  submitResult: (data: ResultData) => Promise<boolean>
  loading: boolean
  error: string | null
  success: boolean
}

/**
 * Hook para enviar dados de qualificacao da calculadora para ActiveCampaign
 *
 * TAXONOMIA DE GOVERNANCA (atualizado 08/Jan/2026):
 *
 * Lista:
 * - ID 56: 03_MKT_Lista_IscaCalculadoraTempo_TEMP_JAN26
 *
 * Tags:
 * - 230: MKT_Tag_IscaCalculadoraTempo (origem)
 * - 231: MKT_Tag_CompletouCalculadora
 * - 232: MKT_Tag_QualDorBaixa
 * - 233: MKT_Tag_QualDorMedia
 * - 234: MKT_Tag_QualDorAlta
 *
 * Campos customizados:
 * - 166: Horas Perdidas Semana (HORAS_PERDIDAS_SEMANA)
 * - 167: Custo Anual Estimado (CUSTO_ANUAL_ESTIMADO)
 * - 168: Principal Ralo Tempo (PRINCIPAL_RALO_TEMPO)
 * - 169: Nivel Dor Tempo (NIVEL_DOR_TEMPO)
 * - 170: Data Calculo Tempo (DATA_CALCULO_TEMPO)
 */
export function useResultSubmit(options: UseResultSubmitOptions = {}): UseResultSubmitReturn {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const submitResult = async (data: ResultData): Promise<boolean> => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      // Mapear nivel de dor para tag ID
      const dorTagMap = {
        baixo: 232, // MKT_Tag_QualDorBaixa
        medio: 233, // MKT_Tag_QualDorMedia
        alto: 234   // MKT_Tag_QualDorAlta
      }

      // Preparar payload para a API proxy
      const payload = {
        email: data.email,
        nome: data.nome || '',
        isca: 'calculadora-tempo',
        listId: 56, // 03_MKT_Lista_IscaCalculadoraTempo_TEMP_JAN26
        tags: [
          230, // MKT_Tag_IscaCalculadoraTempo
          231, // MKT_Tag_CompletouCalculadora
          dorTagMap[data.nivelDor]
        ],
        fieldValues: [
          { field: 166, value: String(data.horasPerdidasSemana) },
          { field: 167, value: String(data.custoAnualEstimado) },
          { field: 168, value: data.principalRalo },
          { field: 169, value: data.nivelDor },
          { field: 170, value: new Date().toISOString().split('T')[0] }
        ],
        // Dados extras para tracking/analytics
        meta: {
          percentualTempo: data.percentualTempo,
          valorHora: data.valorHora,
          atividades: data.atividades
        }
      }

      // Disparar evento de conversão do Meta Pixel
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'CompleteRegistration', {
          content_name: 'calculadora-tempo-resultado',
          content_category: 'lead-qualification',
          value: data.custoAnualEstimado,
          currency: 'BRL'
        })
      }

      // Disparar evento GTM
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'calculator_completed',
          calculator_type: 'tempo-perdido',
          nivel_dor: data.nivelDor,
          horas_perdidas: data.horasPerdidasSemana,
          custo_anual: data.custoAnualEstimado
        })
      }

      const response = await fetch(`${API_URL}/api/lead/qualify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Erro ao enviar resultado')
      }

      setSuccess(true)
      options.onSuccess?.()
      return true
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro desconhecido'
      setError(message)
      options.onError?.(message)
      return false
    } finally {
      setLoading(false)
    }
  }

  return { submitResult, loading, error, success }
}

/**
 * Hook para desenvolvimento local (sem backend)
 * Salva resultado no localStorage e console.log
 */
export function useLocalResultSubmit(options: UseResultSubmitOptions = {}): UseResultSubmitReturn {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const submitResult = async (data: ResultData): Promise<boolean> => {
    setLoading(true)
    setError(null)

    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 500))

    try {
      // Disparar eventos de tracking (mesmo em dev)
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'CompleteRegistration', {
          content_name: 'calculadora-tempo-resultado',
          content_category: 'lead-qualification'
        })
      }

      // Salvar no localStorage
      const results = JSON.parse(localStorage.getItem('_dev_calculator_results') || '[]')
      results.push({
        ...data,
        timestamp: new Date().toISOString(),
      })
      localStorage.setItem('_dev_calculator_results', JSON.stringify(results))

      console.log('[DEV] Resultado da calculadora enviado:', data)
      console.log('[DEV] Tags que seriam aplicadas:', {
        origem: '[ISCA][Calculadora-Tempo-Perdido]',
        completou: '[ISCA][Completou-Calculadora]',
        dor: `[QUALIFICACAO][Dor-${data.nivelDor.charAt(0).toUpperCase() + data.nivelDor.slice(1)}]`
      })
      console.log('[DEV] Campos customizados:', {
        horasPerdidasSemana: data.horasPerdidasSemana,
        custoAnualEstimado: data.custoAnualEstimado,
        principalRalo: data.principalRalo,
        nivelDor: data.nivelDor
      })

      setSuccess(true)
      options.onSuccess?.()
      return true
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro desconhecido'
      setError(message)
      options.onError?.(message)
      return false
    } finally {
      setLoading(false)
    }
  }

  return { submitResult, loading, error, success }
}
