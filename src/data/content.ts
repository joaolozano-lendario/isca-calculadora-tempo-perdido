// Calculadora do Tempo Perdido - Content Data
// Conectado à Narrativa: O Dia que Não Rende

export const heroContent = {
  headline: 'Quanto custa você fazer trabalho de funcionário?',
  subheadline: 'A calculadora brutal que revela o preço do seu tempo mal usado.',
  cta: 'Calcular Meu Desperdício'
}

export const painPoints = [
  {
    icon: 'clock',
    title: 'Trabalha 12 horas e sente que não saiu do lugar',
    description: 'Você chega cedo, sai tarde — mas o estratégico não avança.'
  },
  {
    icon: 'messageCircle',
    title: 'Responde as mesmas perguntas',
    description: 'A equipe te interrompe 50x por dia com dúvidas que deveriam saber.'
  },
  {
    icon: 'flame',
    title: 'Apaga incêndios',
    description: 'Seu dia é uma sequência de urgências que nunca deveriam existir.'
  },
  {
    icon: 'userMinus',
    title: 'Faz trabalho de funcionário',
    description: 'Tarefas que você deveria delegar mas "é mais rápido eu fazer".'
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
    label: 'Buscando informações',
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
    level: 'Médio',
    color: 'amber',
    title: 'Sinal amarelo aceso',
    description: 'Você está desperdiçando tempo significativo em atividades operacionais. É hora de agir.',
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
    description: 'A conta não fecha. Você está trabalhando como funcionário e ganhando como dono — mas pagando como dono.',
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
  title: 'Os 4 Ralos do Tempo do Empresário',
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
      title: 'O Ralo das Reuniões',
      problem: 'Tudo vira reunião de alinhamento',
      cost: '50% das reuniões não precisavam existir',
      solution: 'Docs assíncronos + Stand-ups curtos + Decisões claras',
      icon: 'users'
    },
    {
      number: 3,
      title: 'O Ralo do "Só Eu Sei"',
      problem: 'Conhecimento preso na sua cabeça',
      cost: 'Você vira gargalo de tudo',
      solution: 'Documentação sistemática + Treinamento + Delegação',
      icon: 'brain'
    },
    {
      number: 4,
      title: 'O Ralo dos Incêndios',
      problem: 'Operação não roda sem você',
      cost: 'Dia inteiro em modo reativo',
      solution: 'Processos preventivos + Autonomia da equipe + Sistemas',
      icon: 'flame'
    }
  ]
}

export const cta = {
  title: 'Quer parar de ser funcionário da própria empresa?',
  description: 'Na Formação Lendária, você aprende a construir sistemas que liberam seu tempo — usando IA como multiplicador.',
  buttonText: 'Conhecer a Formação',
  buttonUrl: 'https://lendario.ai/formacao/'
}

export const socialProof = [
  {
    quote: 'Recuperei 15 horas por semana automatizando respostas de FAQ com IA.',
    author: 'Carlos M.',
    role: 'CEO, Agência Digital'
  },
  {
    quote: 'Antes eu apagava incêndios o dia todo. Agora tenho sistema que previne 80% deles.',
    author: 'Fernanda L.',
    role: 'Diretora, E-commerce'
  },
  {
    quote: 'A conta que essa calculadora mostrou me fez agir. Em 3 meses deleguei metade do operacional.',
    author: 'Ricardo S.',
    role: 'Fundador, SaaS'
  }
]
