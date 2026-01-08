/**
 * Configuracao do ActiveCampaign para a Calculadora de Tempo Perdido
 *
 * TAXONOMIA DE GOVERNANCA:
 * - Formato: [CODIGO]_[AREA]_[TIPO]_[Nome]
 * - Areas: MKT, COM, CS, PROD, MASTER
 * - Tipos: Lista, Tag, Auto, Pipe, Form, Camp, Pro
 * - Temporarios: sufixo _TEMP_[MES][ANO]
 *
 * IDs atualizados em: 08/Jan/2026
 * Ambiente: Academia Lendaria (3997823)
 */

export const AC_CONFIG = {
  // Lista para leads da calculadora
  // Taxonomia: 03_MKT_Lista_IscaCalculadoraTempo_TEMP_JAN26
  list: {
    id: 56,
    name: '03_MKT_Lista_IscaCalculadoraTempo_TEMP_JAN26'
  },

  // Campos customizados (nao mudam com taxonomia)
  fields: {
    horasPerdidasSemana: {
      id: 166,
      perstag: 'HORAS_PERDIDAS_SEMANA',
      type: 'text'
    },
    custoAnualEstimado: {
      id: 167,
      perstag: 'CUSTO_ANUAL_ESTIMADO',
      type: 'text'
    },
    principalRaloTempo: {
      id: 168,
      perstag: 'PRINCIPAL_RALO_TEMPO',
      type: 'dropdown',
      options: {
        duvidas: 'Respondendo duvidas da equipe',
        reunioes: 'Em reunioes de alinhamento',
        tarefas: 'Fazendo tarefas que deveria delegar',
        incendios: 'Apagando incendios',
        informacao: 'Buscando informacoes'
      }
    },
    nivelDorTempo: {
      id: 169,
      perstag: 'NIVEL_DOR_TEMPO',
      type: 'dropdown',
      options: {
        baixo: 'Baixo (0-10h/semana)',
        medio: 'Medio (10-20h/semana)',
        alto: 'Alto (20h+/semana)'
      }
    },
    dataCalculoTempo: {
      id: 170,
      perstag: 'DATA_CALCULO_TEMPO',
      type: 'date'
    }
  },

  // Tags - NOVA TAXONOMIA
  tags: {
    // Origem - MKT_Tag_IscaCalculadoraTempo
    origemIsca: {
      id: 230,
      name: 'MKT_Tag_IscaCalculadoraTempo'
    },
    // Completou - MKT_Tag_CompletouCalculadora
    completouCalculadora: {
      id: 231,
      name: 'MKT_Tag_CompletouCalculadora'
    },
    // Qualificacao por nivel de dor
    dorBaixa: {
      id: 232,
      name: 'MKT_Tag_QualDorBaixa'
    },
    dorMedia: {
      id: 233,
      name: 'MKT_Tag_QualDorMedia'
    },
    dorAlta: {
      id: 234,
      name: 'MKT_Tag_QualDorAlta'
    }
  },

  // Automacoes relacionadas (para referencia)
  // Formato esperado: MKT_Auto_NurtureCalculadora
  automations: {
    nurtureLongo: null, // Para leads com dor baixa
    nurtureMedio: null, // Para leads com dor media
    nurtureCurto: null  // Para leads com dor alta (prioridade)
  },

  // Mapeamento de nivel de dor para tag ID
  getDorTagId: (nivel: 'baixo' | 'medio' | 'alto'): number => {
    const map = {
      baixo: 232, // MKT_Tag_QualDorBaixa
      medio: 233, // MKT_Tag_QualDorMedia
      alto: 234   // MKT_Tag_QualDorAlta
    }
    return map[nivel]
  }
}

export default AC_CONFIG
