import { useState } from 'react'

// URL da API proxy
const API_URL = import.meta.env.VITE_API_URL || 'https://api-proxy-indol-tau.vercel.app'

export interface LeadData {
  email: string
  nome: string
  whatsapp?: string
  cargo?: string
  empresa?: string
  perfil?: string // Resultado do quiz/diagnostico
}

interface UseLeadCaptureOptions {
  isca: string // Identificador da isca (ex: 'destrave-repertorio')
  onSuccess?: (data: { contactId: string }) => void
  onError?: (error: string) => void
}

interface UseLeadCaptureReturn {
  submitLead: (data: LeadData) => Promise<boolean>
  loading: boolean
  error: string | null
  success: boolean
}

/**
 * Hook para captura de leads integrado com ActiveCampaign
 *
 * Uso:
 * ```tsx
 * const { submitLead, loading, error, success } = useLeadCapture({
 *   isca: 'destrave-repertorio',
 *   onSuccess: () => navigate('/entrega'),
 * })
 *
 * const handleSubmit = async (e) => {
 *   e.preventDefault()
 *   await submitLead({ email, nome, whatsapp, cargo, empresa })
 * }
 * ```
 */
export function useLeadCapture(options: UseLeadCaptureOptions): UseLeadCaptureReturn {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const submitLead = async (data: LeadData): Promise<boolean> => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      // Disparar evento de conversão do Meta Pixel
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: options.isca,
          content_category: 'lead-magnet',
        })
      }

      // Disparar evento GTM
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'lead_capture',
          isca: options.isca,
          email: data.email,
        })
      }

      const response = await fetch(`${API_URL}/api/lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          isca: options.isca,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Erro ao registrar lead')
      }

      const result = await response.json()
      setSuccess(true)
      options.onSuccess?.(result)
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

  return { submitLead, loading, error, success }
}

/**
 * Hook para desenvolvimento local (sem backend)
 * Salva leads no localStorage e console.log
 */
export function useLocalLeadCapture(options: UseLeadCaptureOptions): UseLeadCaptureReturn {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const submitLead = async (data: LeadData): Promise<boolean> => {
    setLoading(true)
    setError(null)

    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 800))

    try {
      // Disparar eventos de tracking (mesmo em dev)
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: options.isca,
          content_category: 'lead-magnet',
        })
      }

      // Salvar no localStorage
      const leads = JSON.parse(localStorage.getItem('_dev_leads') || '[]')
      leads.push({
        ...data,
        isca: options.isca,
        timestamp: new Date().toISOString(),
      })
      localStorage.setItem('_dev_leads', JSON.stringify(leads))

      console.log('[DEV] Lead capturado:', { ...data, isca: options.isca })

      setSuccess(true)
      options.onSuccess?.({ contactId: `dev-${Date.now()}` })
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

  return { submitLead, loading, error, success }
}
