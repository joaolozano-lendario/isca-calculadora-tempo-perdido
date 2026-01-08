// ============================================================================
// QUIZ DIAGNÓSTICO IA - Content Data (NOVA ISCA)
// Conectado ao evento: Imersão Prática de IA para Negócios (24-25/Jan/2026)
// Narrativa: "Não sei por onde começar" (41% do ICP)
// Template base: destrave-seu-repertorio
// ============================================================================

import { evento } from './content'

// HERO - Página de captura do quiz
export const quizHero = {
  badge: `DIAGNÓSTICO GRATUITO | ${evento.data}`,
  headline: 'Por onde começar com IA no seu negócio?',
  headlineLine2: 'Descubra em 2 minutos.',
  subheadline: '6 perguntas para identificar seu perfil e receber um plano personalizado de implementação.',
  cta: 'Fazer Diagnóstico Gratuito',
  ctaSecondary: '2 minutos • 100% personalizado'
}

// PERGUNTAS DO QUIZ
export interface QuizQuestion {
  id: number
  question: string
  subtext?: string
  options: {
    id: string
    text: string
    profile: 'sobrecarregado' | 'curioso-travado' | 'tecnico-frustrado' | 'lider-isolado'
    points: number
    tagCRM: string
  }[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é sua situação atual com IA?',
    subtext: 'Seja honesto — não tem resposta certa.',
    options: [
      {
        id: '1a',
        text: 'Já uso no dia a dia e funciona bem',
        profile: 'tecnico-frustrado',
        points: 1,
        tagCRM: '[IA][USA-BEM]'
      },
      {
        id: '1b',
        text: 'Já testei mas não funcionou como esperava',
        profile: 'tecnico-frustrado',
        points: 3,
        tagCRM: '[IA][TENTOU-FALHOU]'
      },
      {
        id: '1c',
        text: 'Sei que preciso mas não comecei',
        profile: 'curioso-travado',
        points: 3,
        tagCRM: '[IA][NAO-COMECOU]'
      },
      {
        id: '1d',
        text: 'Nem sei o que é possível fazer',
        profile: 'curioso-travado',
        points: 2,
        tagCRM: '[IA][NAO-SABE]'
      }
    ]
  },
  {
    id: 2,
    question: 'Qual seu papel no negócio?',
    options: [
      {
        id: '2a',
        text: 'Sou o dono/sócio e toco praticamente tudo',
        profile: 'sobrecarregado',
        points: 3,
        tagCRM: '[PAPEL][DONO-OPERACIONAL]'
      },
      {
        id: '2b',
        text: 'Sou gestor de uma área específica',
        profile: 'lider-isolado',
        points: 2,
        tagCRM: '[PAPEL][GESTOR]'
      },
      {
        id: '2c',
        text: 'Sou parte do time executivo/diretoria',
        profile: 'lider-isolado',
        points: 2,
        tagCRM: '[PAPEL][EXECUTIVO]'
      },
      {
        id: '2d',
        text: 'Sou consultor/prestador de serviço',
        profile: 'tecnico-frustrado',
        points: 1,
        tagCRM: '[PAPEL][CONSULTOR]'
      }
    ]
  },
  {
    id: 3,
    question: 'Qual seu maior desafio operacional hoje?',
    options: [
      {
        id: '3a',
        text: 'Tempo consumido em tarefas repetitivas',
        profile: 'sobrecarregado',
        points: 3,
        tagCRM: '[DOR][TEMPO-REPETITIVO]'
      },
      {
        id: '3b',
        text: 'Dificuldade de escalar sem contratar mais',
        profile: 'sobrecarregado',
        points: 3,
        tagCRM: '[DOR][ESCALAR]'
      },
      {
        id: '3c',
        text: 'Processos desorganizados e inconsistentes',
        profile: 'curioso-travado',
        points: 2,
        tagCRM: '[DOR][PROCESSOS]'
      },
      {
        id: '3d',
        text: 'Equipe que não acompanha o ritmo',
        profile: 'lider-isolado',
        points: 3,
        tagCRM: '[DOR][EQUIPE]'
      }
    ]
  },
  {
    id: 4,
    question: 'O que mais te impede de implementar IA?',
    options: [
      {
        id: '4a',
        text: 'Não sei por onde começar',
        profile: 'curioso-travado',
        points: 3,
        tagCRM: '[BARREIRA][NAO-SABE-COMECAR]'
      },
      {
        id: '4b',
        text: 'Não tenho tempo para aprender',
        profile: 'sobrecarregado',
        points: 3,
        tagCRM: '[BARREIRA][TEMPO]'
      },
      {
        id: '4c',
        text: 'Já tentei e não funcionou',
        profile: 'tecnico-frustrado',
        points: 3,
        tagCRM: '[BARREIRA][JA-TENTOU]'
      },
      {
        id: '4d',
        text: 'Medo de investir errado',
        profile: 'curioso-travado',
        points: 2,
        tagCRM: '[BARREIRA][MEDO-INVESTIR]'
      }
    ]
  },
  {
    id: 5,
    question: 'Se pudesse resolver UMA coisa com IA, seria:',
    options: [
      {
        id: '5a',
        text: 'Automatizar atendimento e vendas',
        profile: 'sobrecarregado',
        points: 2,
        tagCRM: '[INTERESSE][ATENDIMENTO-VENDAS]'
      },
      {
        id: '5b',
        text: 'Gerar conteúdo e marketing',
        profile: 'curioso-travado',
        points: 2,
        tagCRM: '[INTERESSE][CONTEUDO-MKT]'
      },
      {
        id: '5c',
        text: 'Organizar processos internos',
        profile: 'lider-isolado',
        points: 2,
        tagCRM: '[INTERESSE][PROCESSOS]'
      },
      {
        id: '5d',
        text: 'Analisar dados para decisões',
        profile: 'tecnico-frustrado',
        points: 2,
        tagCRM: '[INTERESSE][DADOS-DECISOES]'
      }
    ]
  },
  {
    id: 6,
    question: `Disponibilidade nos dias ${evento.data}?`,
    subtext: 'Imersão presencial em SP + opção online.',
    options: [
      {
        id: '6a',
        text: 'Consigo me dedicar 100%',
        profile: 'sobrecarregado',
        points: 0,
        tagCRM: '[EVENTO][DISPONIVEL-100]'
      },
      {
        id: '6b',
        text: 'Consigo participar parcialmente',
        profile: 'sobrecarregado',
        points: 0,
        tagCRM: '[EVENTO][DISPONIVEL-PARCIAL]'
      },
      {
        id: '6c',
        text: 'Não tenho disponibilidade',
        profile: 'sobrecarregado',
        points: 0,
        tagCRM: '[EVENTO][INDISPONIVEL]'
      },
      {
        id: '6d',
        text: 'Preciso verificar minha agenda',
        profile: 'sobrecarregado',
        points: 0,
        tagCRM: '[EVENTO][VERIFICAR]'
      }
    ]
  }
]

// PERFIS DE RESULTADO
export interface QuizProfile {
  id: 'sobrecarregado' | 'curioso-travado' | 'tecnico-frustrado' | 'lider-isolado'
  title: string
  emoji: string
  subtitle: string
  description: string
  insight: string
  prioridade: string
  solucaoEvento: string
  color: 'amber' | 'cyan' | 'purple' | 'emerald'
  tagCRM: string
}

export const quizProfiles: Record<string, QuizProfile> = {
  'sobrecarregado': {
    id: 'sobrecarregado',
    title: 'O Sobrecarregado',
    emoji: '🔥',
    subtitle: 'Você faz tudo e não tem tempo pra nada',
    description: 'Você sabe que IA pode ajudar, mas não tem tempo nem de pesquisar. Seu dia é uma sequência de urgências. Enquanto isso, tarefas repetitivas consomem horas que deveriam ser estratégicas.',
    insight: 'Você precisa de AUTOMAÇÃO imediata. Não de curso. De sistemas prontos que funcionem amanhã.',
    prioridade: 'Automação de tarefas repetitivas',
    solucaoEvento: 'Na Imersão você implementa assistente IA + automações em 48h. Time técnico faz COM você.',
    color: 'amber',
    tagCRM: '[PERFIL][SOBRECARREGADO]'
  },
  'curioso-travado': {
    id: 'curioso-travado',
    title: 'O Curioso Travado',
    emoji: '🤔',
    subtitle: 'Você sabe que precisa, mas não sabe por onde começar',
    description: 'Você já viu vídeos, já leu artigos, talvez até testou ChatGPT. Mas na hora de IMPLEMENTAR de verdade no seu negócio... trava. Falta um mapa claro do que fazer primeiro.',
    insight: 'Você não precisa de mais informação. Precisa de IMPLEMENTAÇÃO GUIADA com quem já fez.',
    prioridade: 'Mapa de implementação personalizado',
    solucaoEvento: 'Na Imersão você recebe diagnóstico do seu negócio e sai com plano de ação + primeiro sistema rodando.',
    color: 'cyan',
    tagCRM: '[PERFIL][CURIOSO-TRAVADO]'
  },
  'tecnico-frustrado': {
    id: 'tecnico-frustrado',
    title: 'O Técnico Frustrado',
    emoji: '😤',
    subtitle: 'Você tentou, não funcionou, está cético',
    description: 'Você já investiu tempo (e talvez dinheiro) em IA. Testou ferramentas. Os resultados foram... meh. Agora está cético se isso realmente funciona pro seu contexto.',
    insight: 'O problema não foi IA. Foi a ABORDAGEM. Você começou pela ferramenta, não pelo problema.',
    prioridade: 'Estratégia antes de ferramenta',
    solucaoEvento: 'Na Imersão você descobre ONDE aplicar IA pro máximo impacto. Depois implementa do jeito certo.',
    color: 'purple',
    tagCRM: '[PERFIL][TECNICO-FRUSTRADO]'
  },
  'lider-isolado': {
    id: 'lider-isolado',
    title: 'O Líder Isolado',
    emoji: '🏝️',
    subtitle: 'Você entende, mas sua equipe não acompanha',
    description: 'Você vê o potencial da IA. Mas quando tenta implementar, a equipe resiste ou não consegue usar direito. Você acaba fazendo sozinho — ou desiste.',
    insight: 'Você precisa de um FRAMEWORK de adoção, não só de ferramentas. E de sistemas que a equipe consiga usar.',
    prioridade: 'Capacitação da equipe + sistemas simples',
    solucaoEvento: 'Na Imersão você cria sistemas que QUALQUER pessoa da equipe consegue operar. Sem depender de você.',
    color: 'emerald',
    tagCRM: '[PERFIL][LIDER-ISOLADO]'
  }
}

// CTA DO RESULTADO
export const quizCta = {
  badge: `IMERSÃO PRÁTICA | ${evento.data}`,
  title: 'Você não precisa de mais informação.',
  titleLine2: 'Precisa de implementação.',
  subtitle: 'Em 48 horas de Imersão Prática, você sai com sistemas de IA funcionando no seu negócio.',

  beneficiosPorPerfil: {
    'sobrecarregado': [
      'Assistente IA que responde sua equipe (para de te interromper)',
      'Automações de tarefas repetitivas prontas',
      'Processos documentados automaticamente'
    ],
    'curioso-travado': [
      'Diagnóstico personalizado do seu negócio',
      'Mapa de implementação passo a passo',
      'Primeiro sistema rodando em 48h'
    ],
    'tecnico-frustrado': [
      'Framework estratégico: onde aplicar IA primeiro',
      'Implementação do jeito certo (com especialistas)',
      'ROI mensurável desde o dia 1'
    ],
    'lider-isolado': [
      'Sistemas que qualquer pessoa da equipe usa',
      'Framework de adoção para o time',
      'Treinamento incluído'
    ]
  },

  garantia: evento.garantia,
  preco: evento.precos.earlyBird.valor,

  buttonText: 'QUERO IMPLEMENTAR EM 48H',
  buttonUrl: "/imersao",

  urgencia: "Vagas limitadas - Early Bird"
}

// TAGS CRM
export const quizTagsCRM = {
  isca: '[ISCA][QUIZ-DIAGNOSTICO][JAN26]',
  iniciou: '[QUIZ][INICIOU]',
  completou: '[QUIZ][COMPLETOU]',
  abandonou: '[QUIZ][ABANDONOU]'
}
