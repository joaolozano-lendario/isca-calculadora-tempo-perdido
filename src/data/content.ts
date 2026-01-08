// Calculadora do Tempo Perdido - Content Data
// Conectado a Narrativa: O Dono que Virou Funcionario + O Dia que Não Rende
// Funil: Isca → Qualificacao → Imersão Pratica de IA para Negocios (24-25/Jan/2026)

export const heroContent = {
  // Narrativa: O Dono que Virou Funcionario (jornada caos→clareza)
  preHeadline: 'A conta que todo empresário evita fazer',
  headline: 'Você abriu uma empresa para ter liberdade. Hoje trabalha mais do que quando era CLT.',
  tensionLine: 'A pergunta que vai doer:',
  headlineQuestion: 'Quanto essa "liberdade" está custando?',
  subheadline: 'Em 2 minutos, descubra quantas horas você perde por semana em tarefas que não precisavam de você — e o custo real em reais.',
  cta: 'Fazer a Conta'
}

export const painPoints = [
  {
    icon: 'clock',
    title: 'O dia acaba e você não sabe onde foi',
    description: '12 horas de trabalho, zero horas de estratégia. O operacional engoliu seu dia.',
    internalConflict: 'Você sabe que precisa parar, mas não consegue.'
  },
  {
    icon: 'messageCircle',
    title: 'Sua equipe não funciona sem você',
    description: 'Cada decisão passa por você. Cada dúvida vira uma interrupção. Você virou o gargalo.',
    internalConflict: 'Você contratou pra delegar, mas continua fazendo.'
  },
  {
    icon: 'flame',
    title: 'Vive apagando incêndio',
    description: 'Seu dia é uma sequência de urgências. O importante fica pra "depois" — que nunca chega.',
    internalConflict: 'Você sabe que é insustentável, mas não vê saída.'
  },
  {
    icon: 'userMinus',
    title: 'Ganha como dono, trabalha como funcionário',
    description: 'Abriu empresa pra ter liberdade. Hoje não consegue tirar férias sem o celular na mão.',
    internalConflict: 'A gaiola é dourada, mas continua sendo gaiola.'
  }
]


export const activityCategories = [
  {
    id: 'duvidas',
    label: 'Respondendo dúvidas da equipe',
    description: 'Tempo gasto explicando processos, tirando dúvidas, alinhando',
    icon: 'helpCircle',
    color: 'red'
  },
  {
    id: 'reunioes',
    label: 'Em reuniões de alinhamento',
    description: 'Reuniões que poderiam ser um documento ou async',
    icon: 'users',
    color: 'orange'
  },
  {
    id: 'tarefas',
    label: 'Fazendo tarefas que deveria delegar',
    description: 'Atividades operacionais que outros poderiam fazer',
    icon: 'clipboard',
    color: 'yellow'
  },
  {
    id: 'incendios',
    label: 'Apagando incêndios',
    description: 'Resolvendo problemas urgentes, crises, emergências',
    icon: 'flame',
    color: 'red'
  },
  {
    id: 'informacao',
    label: 'Buscando informacoes',
    description: 'Procurando dados, arquivos, respostas que deveriam estar acessíveis',
    icon: 'search',
    color: 'blue'
  }
]


export const insights = {
  low: {
    level: 'Baixo',
    color: 'emerald',
    title: 'Você está no caminho certo',
    description: 'Seu tempo está relativamente bem alocado, mas ainda há espaço para otimização.',
    recommendations: [
      'Documente os processos restantes que ainda estão na sua cabeça',
      'Automatize as tarefas repetitivas que ainda faz',
      'Considere um assistente virtual para filtragem de demandas'
    ]
  },
  medium: {
    level: 'Medio',
    color: 'amber',
    title: 'Sinal amarelo aceso',
    description: 'Você está desperdicando tempo significativo em atividades operacionais. É hora de agir.',
    recommendations: [
      'Priorize documentar os processos que mais geram perguntas',
      'Implemente checkpoints de delegação progressiva',
      'Crie um FAQ interno para sua equipe',
      'Avalie automações para tarefas repetitivas'
    ]
  },
  high: {
    level: 'Alto',
    color: 'red',
    title: 'Você virou funcionário da própria empresa',
    description: 'A conta não fecha. Você está trabalhando como funcionário e ganhando como dono - mas pagando como dono.',
    recommendations: [
      'URGENTE: Liste todas as tarefas que só você faz e comece a documentar',
      'Contrate ou promova alguém para assumir operação',
      'Implemente sistema de SOPs para todo processo crítico',
      'Invista em automação de perguntas frequentes',
      'Considere um programa estruturado de delegação'
    ]
  }
}


export const framework = {
  title: 'Os 4 Ralos do Tempo do Empresario',
  description: 'Não é falta de tempo. É vazamento de tempo. Todo empresário que virou funcionário da própria empresa tem esses mesmos 4 ralos.',
  ralos: [
    {
      number: 1,
      title: 'O Ralo das Perguntas',
      problem: 'Equipe pergunta antes de fazer',
      cost: 'Interrupções constantes destroem foco',
      solution: 'FAQ interno + SOPs + Cultura de autonomia',
      icon: 'helpCircle'
    },
    {
      number: 2,
      title: 'O Ralo das Reunioes',
      problem: 'Tudo vira reunião de alinhamento',
      cost: '50 por cento das reuniões não precisavam existir',
      solution: 'Docs assíncronos + Stand-ups curtos + Decisões claras',
      icon: 'users'
    },
    {
      number: 3,
      title: 'O Ralo do Só Eu Sei',
      problem: 'Conhecimento preso na sua cabeça',
      cost: 'Você vira gargalo de tudo',
      solution: 'Documentação sistemática + Treinamento + Delegacao',
      icon: 'brain'
    },
    {
      number: 4,
      title: 'O Ralo dos Incendios',
      problem: 'Operação não roda sem você',
      cost: 'Dia inteiro em modo reativo',
      solution: 'Processos preventivos + Autonomia da equipe + Sistemas',
      icon: 'flame'
    }
  ]
}


// CTA Principal - Conecta a Imersão de IA
export const cta = {
  title: 'E se você recuperasse esse tempo em 48 horas?',
  description: 'Na Imersão Pratica de IA para Negocios, nosso time de especialistas implementa automações no seu negócio — junto com você. Sistema funcionando ou dinheiro de volta.',
  buttonText: 'QUERO IMPLEMENTAR IA NO MEU NEGOCIO',
  buttonUrl: 'https://imersao.academialendaria.ai/?utm_source=calculadora&utm_medium=lp&utm_content=cta-resultado&utm_campaign=imersao-jan26&src=calculadora_lp'
}

// Social Proof - Dados REAIS da pesquisa (98 empresários)
export const socialProof = {
  headline: 'O que descobrimos pesquisando empresários como você:',
  stats: [
    {
      percentage: '41%',
      description: 'não sabem por onde começar com IA',
      icon: 'pieChart'
    },
    {
      percentage: '23%',
      description: 'dizem que falta de tempo é a maior barreira',
      icon: 'clock'
    },
    {
      percentage: '58%',
      description: 'querem soluções práticas, não teoria',
      icon: 'zap'
    }
  ],
  conclusion: 'Você não está sozinho nesse caos. E existe um caminho pra sair dele.'
}


// Guia Entregavel - 5 Automacoes Praticas
export const guiaEntregavel = {
  titulo: 'Guia Pratico: 5 Automacoes que Recuperam seu Tempo',
  subtitulo: 'Templates prontos para implementar hoje - sem programação',
  automações: [
    {
      numero: 1,
      nome: 'FAQ Inteligente da Equipe',
      problema: 'Equipe pergunta 50x por dia as mesmas coisas',
      solução: 'Bot de perguntas frequentes no WhatsApp/Slack',
      tempoRecuperado: '5-8 horas/semana',
      ferramentas: ['ChatGPT/Claude', 'Zapier', 'WhatsApp Business'],
      dificuldade: 'Facil',
      tempoImplementacao: '2-3 horas'
    },
    {
      numero: 2,
      nome: 'Triagem Automatica de E-mails',
      problema: 'Caixa de entrada vira lista de tarefas dos outros',
      solução: 'Filtros + respostas automáticas + categorização',
      tempoRecuperado: '3-5 horas/semana',
      ferramentas: ['Gmail/Outlook', 'Filtros nativos', 'Templates'],
      dificuldade: 'Facil',
      tempoImplementacao: '1-2 horas'
    },
    {
      numero: 3,
      nome: 'Reuniao que Não Precisava Existir',
      problema: 'Tudo vira reunião de alinhamento',
      solução: 'Template de decisão assíncrona + critérios de reunião',
      tempoRecuperado: '4-6 horas/semana',
      ferramentas: ['Notion/Google Docs', 'Loom', 'Slack'],
      dificuldade: 'Medio',
      tempoImplementacao: '3-4 horas'
    },
    {
      numero: 4,
      nome: 'SOP Generator com IA',
      problema: 'Conhecimento preso na sua cabeça',
      solução: 'Gravar processo 1x, IA transforma em documentação',
      tempoRecuperado: '6-10 horas/semana (após documentar)',
      ferramentas: ['Loom/Tango', 'ChatGPT', 'Notion'],
      dificuldade: 'Medio',
      tempoImplementacao: '4-5 horas'
    },
    {
      numero: 5,
      nome: 'Dashboard de Autonomia',
      problema: 'Equipe espera sua aprovação para tudo',
      solução: 'Matriz de decisão clara + limites de autonomia',
      tempoRecuperado: '5-8 horas/semana',
      ferramentas: ['Planilha', 'Notion', 'Comunicação clara'],
      dificuldade: 'Medio',
      tempoImplementacao: '3-4 horas'
    }
  ],
  bônus: {
    titulo: 'Bonus: Checklist de Implementacao',
    descricao: 'Ordem recomendada para implementar as 5 automações em 30 dias'
  }
}


// Qualificacao para ActiveCampaign
export const qualificação = {
  niveis: {
    baixo: {
      horasPerdidas: '0-10',
      custoAnual: 'ate50k',
      temperatura: 'frio',
      sequência: 'nurture-longo'
    },
    médio: {
      horasPerdidas: '10-20',
      custoAnual: '50k-150k',
      temperatura: 'morno',
      sequência: 'nurture-médio'
    },
    alto: {
      horasPerdidas: '20+',
      custoAnual: '150k+',
      temperatura: 'quente',
      sequência: 'nurture-curto'
    }
  },
  camposAC: {
    horasPerdidasSemana: 'horas_perdidas_semana',
    custoAnualEstimado: 'custo_anual_estimado',
    principalRalo: 'principal_ralo_tempo',
    nivelDor: 'nivel_dor_tempo',
    dataCalculo: 'data_calculo_tempo'
  }
}

// Tags do ActiveCampaign
export const tagIds = {
  // Tags de origem
  origemIsca: '[ISCA][Calculadora-Tempo-Perdido]',
  completouCalculadora: '[ISCA][Completou-Calculadora]',
  
  // Tags de qualificação
  dorBaixa: '[QUALIFICACAO][Dor-Baixa]',
  dorMedia: '[QUALIFICACAO][Dor-Media]',
  dorAlta: '[QUALIFICACAO][Dor-Alta]',
  
  // Tags de interesse
  interesseAutomacao: '[INTERESSE][Automacao]',
  interesseDelegacao: '[INTERESSE][Delegacao]',
  interesseProcessos: '[INTERESSE][Processos]',
  
  // Tags de engajamento
  baixouGuia: '[ENGAJAMENTO][Baixou-Guia]',
  abriuGuia: '[ENGAJAMENTO][Abriu-Guia]'
}

// Evento Principal - Imersão Pratica de IA para Negocios
export const evento = {
  nome: 'Imersão Pratica de IA para Negocios',
  subtitulo: 'Implemente IA na sua empresa em 48 horas',
  data: '24-25 de Janeiro de 2026',
  dataObj: new Date('2026-01-24'),
  garantia: 'Sistema funcionando em 48h ou dinheiro de volta',
  diferencial: 'Time de especialistas implementando COM você',
  precos: {
    earlyBird: { valor: 348, ate: '14/Jan' },
    regular: { valor: 368, ate: '19/Jan' },
    lastCall: { valor: 388, ate: '23/Jan' }
  },
  beneficios: [
    'Framework de priorização de IA',
    'Sistema funcionando em 48h',
    'PS noturno com especialistas',
    'Gravações + materiais',
    'Certificado de participação'
  ],
  // Narrativas conectadas
  narrativas: [
    'O Dono que Virou Funcionario',
    'O Dia que Não Rende',
    'O Jogo Desigual'
  ]
}

