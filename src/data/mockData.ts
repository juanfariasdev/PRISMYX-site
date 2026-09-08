import { ServicePillar, TeamMember, TechItem, MethodologyStep, FaqItem, StatKpi } from '../types';

export const STAT_KPIS: StatKpi[] = [
  {
    id: 'kpi-1',
    label: 'Portfólio Concluído',
    value: '200+',
    subLabel: 'Projetos Web Entregues',
    description: 'Plataformas, e-commerces B2B e landing pages de conversão estruturadas com alto padrão de código.',
    icon: 'CheckCircle2'
  },
  {
    id: 'kpi-2',
    label: 'Capacidade Técnica',
    value: 'Full-Stack',
    subLabel: 'Engenharia Ponta a Ponta',
    description: 'Do design system reativo ao cluster de dados e esteiras CI/CD seguras sem terceirização opaca.',
    icon: 'Network'
  },
  {
    id: 'kpi-3',
    label: 'Infra & Nuvem',
    value: 'AWS • Cloud',
    subLabel: 'Arquitetura Elástica',
    description: 'Provisionamento modular, microsserviços desacoplados e balanceamento otimizado para picos operacionais.',
    icon: 'Cloud'
  },
  {
    id: 'kpi-4',
    label: 'Disponibilidade',
    value: '99,9%',
    subLabel: 'Uptime Alvo Contratual',
    description: 'Ambientes redundantes com replicação síncrona de dados e health checks automatizados a cada 30 segundos.',
    icon: 'Gauge',
    highlight: true
  },
  {
    id: 'kpi-5',
    label: 'Agilidade de Entrega',
    value: '6 dias',
    subLabel: 'Lead Time Médio por Sprint',
    description: 'Ciclos curtos e iterativos com homologação contínua, permitindo feedback imediato de stakeholders.',
    icon: 'Timer'
  },
  {
    id: 'kpi-6',
    label: 'Índice de Confiança',
    value: '+70',
    subLabel: 'NPS de Satisfação Técnica',
    description: 'Avaliação consistente de gestores de produto, CTOs e lideranças empresariais após go-live.',
    icon: 'Smile'
  }
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'pillar-1',
    slug: 'sites-e-landing-pages',
    pillarNumber: 'PILAR 01',
    title: 'Sites e Landing Pages de Alta Performance',
    shortDesc: 'Páginas ultrarrápidas, acessíveis e otimizadas para motores de busca e tráfego massivo pago. Arquitetura voltada para pontuação máxima em Core Web Vitals e taxas de conversão elevadas.',
    fullDesc: 'Desenvolvemos sites corporativos, portais institucionais e páginas de aterrissagem hiper-otimizadas com arquitetura estática/híbrida de carregamento instantâneo. Eliminamos gargalos de renderização, garantimos indexação avançada em mecanismos de busca (SEO Técnico) e preparamos seu produto para absorver picos de tráfego de campanhas pagas sem degradação.',
    iconName: 'Rocket',
    features: [
      'SEO Técnico avançado & metatags dinâmicas',
      'Core Web Vitals nota 95+ garantida',
      'Integração de tags (GA4, GTM, Pixel Server-Side)',
      'Design System atômico e responsivo'
    ],
    deliverables: [
      'Lighthouse Audit Score 95+ em Mobile e Desktop',
      'Configuração Server-Side de Google Tag Manager (sGTM)',
      'Componentização reativa em Tailwind CSS e TypeScript',
      'Hospedagem em Edge CDN com certificado SSL e HTTP/3'
    ],
    stack: ['React', 'Next.js', 'Vue', 'Tailwind'],
    metrics: [
      { label: 'Tempo Médio de Carregamento (LCP)', value: '< 1.1s' },
      { label: 'Score Core Web Vitals', value: '98/100' },
      { label: 'Taxa de Conversão Aumentada', value: '+34%' }
    ],
    targetAudience: 'Empresas em escala que investem em mídia de alta performance e precisam de máxima retenção de visitantes.'
  },
  {
    id: 'pillar-2',
    slug: 'aplicacoes-web-paineis-apps',
    pillarNumber: 'PILAR 02',
    title: 'Aplicações Web, Painéis e Apps Sob Medida',
    shortDesc: 'Sistemas internos, portais de clientes B2B, plataformas SaaS e dashboards com processamento em tempo real, controle granular de permissões (RBAC) e segurança ponta a ponta.',
    fullDesc: 'Projetamos softwares web robustos desenhados sob medida para automatizar operações complexas, unificar fluxos de trabalho e criar produtos digitais lucrativos. Da modelagem de banco de dados relacional à arquitetura de microsserviços, garantimos que sua aplicação escale com previsibilidade e zero débitos técnicos acumulados.',
    iconName: 'LayoutDashboard',
    features: [
      'APIs RESTful e GraphQL de alto throughput',
      'Autenticação OAuth2 / JWT / MFA',
      'Modelagem e orquestração de banco relacional e NoSQL',
      'Painéis analíticos com atualização por WebSockets'
    ],
    deliverables: [
      'Contratos de API rigorosamente versionados em OpenAPI 3.0',
      'Matriz de Controle de Acesso Baseada em Funções (RBAC)',
      'Pipeline de testes automatizados unitários e de integração (Jest/Cypress)',
      'Painéis com visualização de dados reativa e tempo real'
    ],
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    metrics: [
      { label: 'Throughput de API', value: '15.000 req/s' },
      { label: 'Latência p95', value: '< 38ms' },
      { label: 'Conformidade de Segurança', value: 'OWASP Top 10' }
    ],
    targetAudience: 'Fintechs, indústrias, healthtechs e empresas B2B com operações operacionais críticas que exigem sistemas proprietários confiáveis.'
  },
  {
    id: 'pillar-3',
    slug: 'integracoes-automacoes-crm',
    pillarNumber: 'PILAR 03',
    title: 'Integrações, Automações e CRM',
    shortDesc: 'Conexão orquestrada de ecossistemas operacionais e comerciais. Elimine o trabalho manual unificando leads, funis de vendas, emissão fiscal e notificações críticas de backoffice.',
    fullDesc: 'Integramos sistemas legados, CRMs corporativos e plataformas de pagamento com pipelines inteligentes de automação. Criamos fluxos bidirecionais resilientes a falhas de rede, equipados com filas de reprocessamento automático (Dead Letter Queues) e monitoramento de integridade.',
    iconName: 'Workflow',
    features: [
      'Configuração avançada de HubSpot CRM & Kommo',
      'Pipelines de automação com n8n self-hosted ou Zapier',
      'Webhooks bidirecionais com retry queue garantido',
      'Disparo automático de contratos, notas fiscais e e-mails'
    ],
    deliverables: [
      'Mapeamento completo de fluxo de dados e entidades',
      'Servidores dedicados de n8n configurados em contêineres Docker',
      'Webhooks assinados criptograficamente com validação de payload',
      'Painel de auditoria e reenvio de transações com falha'
    ],
    stack: ['HubSpot', 'Kommo', 'n8n', 'Webhooks'],
    metrics: [
      { label: 'Horas Operacionais Economizadas/Mês', value: '180h+' },
      { label: 'Confiabilidade de Entrega de Webhook', value: '99.99%' },
      { label: 'Sincronização em Tempo Real', value: '< 2s' }
    ],
    targetAudience: 'Operações comerciais com alto volume de contatos e vendas que perdem receita por lentidão de follow-up ou retrabalho manual.'
  }
];

export const TECH_DOMAINS: { title: string; icon: string; color: string; items: TechItem[] }[] = [
  {
    title: 'Frontend',
    icon: 'Layout',
    color: 'text-brand-primary',
    items: [
      { name: 'React', category: 'Frontend', tag: 'v18+', versionOrType: 'v18+', description: 'Biblioteca reativa base para interfaces modulares' },
      { name: 'Next.js', category: 'Frontend', tag: 'App Router', versionOrType: 'App Router', description: 'Framework full-stack com SSR, SSG e rota dinâmica' },
      { name: 'Vue.js', category: 'Frontend', tag: 'Composition', versionOrType: 'Composition', description: 'Framework progressivo reativo' },
      { name: 'Tailwind CSS', category: 'Frontend', tag: 'Tokens', versionOrType: 'Tokens', description: 'Estilização atômica orientada a tokens de design' }
    ]
  },
  {
    title: 'Backend',
    icon: 'Terminal',
    color: 'text-brand-tertiary',
    items: [
      { name: 'Node.js', category: 'Backend', tag: 'LTS Engine', versionOrType: 'LTS Engine', description: 'Runtime assíncrono de alta performance' },
      { name: 'TypeScript', category: 'Backend', tag: 'Strict Type', versionOrType: 'Strict Type', description: 'Tipagem estrita para segurança de contratos' },
      { name: 'Python', category: 'Backend', tag: 'FastAPI', versionOrType: 'FastAPI', description: 'Processamento de dados e microsserviços ágeis' },
      { name: 'GraphQL / REST', category: 'Backend', tag: 'Contracts', versionOrType: 'Contracts', description: 'Padronização de comunicação cliente-servidor' }
    ]
  },
  {
    title: 'Dados',
    icon: 'Database',
    color: 'text-brand-primary',
    items: [
      { name: 'PostgreSQL', category: 'Dados', tag: 'ACID', versionOrType: 'ACID', description: 'Banco relacional com integridade transacional' },
      { name: 'MySQL', category: 'Dados', tag: 'InnoDB', versionOrType: 'InnoDB', description: 'Base comprovada para transações comerciais' },
      { name: 'MongoDB', category: 'Dados', tag: 'NoSQL', versionOrType: 'NoSQL', description: 'Document store flexível para dados não estruturados' },
      { name: 'SQL Server', category: 'Dados', tag: 'Legacy DB', versionOrType: 'Legacy DB', description: 'Integrações corporativas com ecossistemas legados' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: 'Cloud',
    color: 'text-indigo-400',
    items: [
      { name: 'AWS Services', category: 'Cloud & DevOps', tag: 'ECS/S3/RDS', versionOrType: 'ECS/S3/RDS', description: 'Infraestrutura em nuvem elástica e escalável' },
      { name: 'Docker', category: 'Cloud & DevOps', tag: 'Containers', versionOrType: 'Containers', description: 'Ambientes padronizados e portáveis' },
      { name: 'CI / CD', category: 'Cloud & DevOps', tag: 'GH Actions', versionOrType: 'GH Actions', description: 'Esteiras automatizadas de teste e build' },
      { name: 'Nginx / SSL', category: 'Cloud & DevOps', tag: 'Zero-trust', versionOrType: 'Zero-trust', description: 'Proxy reverso, terminação TLS e segurança perimetral' }
    ]
  },
  {
    title: 'Automação & CRM',
    icon: 'Cpu',
    color: 'text-emerald-400',
    items: [
      { name: 'HubSpot', category: 'Automação & CRM', tag: 'API Hub', versionOrType: 'API Hub', description: 'Orquestração avançada de vendas e marketing' },
      { name: 'Kommo', category: 'Automação & CRM', tag: 'Sales Bot', versionOrType: 'Sales Bot', description: 'Automação conversacional e funil de atendimento' },
      { name: 'n8n', category: 'Automação & CRM', tag: 'Workflows', versionOrType: 'Workflows', description: 'Engine self-hosted para fluxos complexos' },
      { name: 'Zapier', category: 'Automação & CRM', tag: 'Webhooks', versionOrType: 'Webhooks', description: 'Conexões rápidas com centenas de SaaS externos' }
    ]
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: '01',
    phase: 'FASE 1',
    title: 'Diagnóstico & Requisitos',
    description: 'Mapeamento holístico de regras de negócio, auditoria de segurança da informação, levantamento de restrições de infraestrutura e enquadramento de privacidade (LGPD).',
    tags: ['Documento de Visão', 'Matriz de Riscos', 'Escopo Congelado'],
    duration: 'Sprint 0 (1 semana)',
    artifacts: ['Documento de Requisitos de Software (SRS)', 'Matriz de Impacto Regulatório LGPD', 'Diagrama de Arquitetura Conceitual']
  },
  {
    step: '02',
    phase: 'FASE 2',
    title: 'Interface & Arquitetura',
    description: 'Desenho de fluxos no Figma com Design System proprietário acessível, paralelamente à modelagem de diagramas de banco de dados, contratos de API e provisionamento IaC.',
    tags: ['Protótipo Navegável', 'Schema DB', 'OpenAPI Specs'],
    duration: 'Sprint 1 (1 a 2 semanas)',
    artifacts: ['Protótipo de Alta Fidelidade (Figma)', 'Especificação OpenAPI 3.0', 'Scripts Terraform / IaC']
  },
  {
    step: '03',
    phase: 'FASE 3',
    title: 'Desenvolvimento & Sprints',
    description: 'Implementação ágil em ciclos quinzenais ou semanais. Todo commit passa por testes unitários estritos, linting e checagem de vulnerabilidades em esteiras automatizadas.',
    tags: ['Demos Quinzenais', 'Branching GitFlow', 'Ambiente de Staging'],
    duration: 'Sprints Quinzenais',
    artifacts: ['Releases versionadas com Semantic Versioning', 'Relatórios de Cobertura de Testes (>85%)', 'Ambiente de Homologação Ativo']
  },
  {
    step: '04',
    phase: 'FASE 4',
    title: 'Integrações, Testes & QA',
    description: 'Homologação de webhooks, sincronização de payloads com o CRM, testes de carga ponta a ponta e auditoria técnica de conformidade com privacidade liderada pelo DPO.',
    tags: ['Testes E2E Cypress', 'Auditoria LGPD', 'Stress Testing'],
    duration: '1 Sprint antes do Go-Live',
    artifacts: ['Relatório de Testes de Carga (k6 / Artillery)', 'Checklist de Conformidade DPO', 'Certificação de Segurança OWASP']
  },
  {
    step: '05',
    phase: 'FASE 5',
    title: 'Deploy, Monitoramento & Evolução',
    description: 'Virada de chave zero-downtime com rollback automático. Ativação de telemetria 24/7, dashboards de métricas operacionais e comitê de melhoria contínua mensal.',
    tags: ['Zero-Downtime Blue/Green', 'Logs Centralizados', 'SLA Ativo'],
    duration: 'Contínuo com SLA',
    artifacts: ['Dashboard Grafana / Datadog em Tempo Real', 'Runbook de Incidentes e Resposta a Desastres', 'Revisões Mensais de Performance']
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'laura-evelyn',
    initials: 'LE',
    name: 'Laura Evelyn',
    role: 'Gerente de Projetos',
    department: 'PRODUTO & AGILE',
    tagColor: 'primary',
    bio: 'Lidera os ritos ágeis, cronogramas de entrega e a ponte direta entre stakeholders de negócio e a esteira de engenharia.',
    fullBio: 'Com mais de 8 anos liderando equipes de desenvolvimento de software em ambientes corporativos de alta demanda, Laura Evelyn garante que metas comerciais sejam transformadas em entregas previsíveis, com cerimônias ágeis estruturadas e feedback frequente.',
    specialties: ['Scrum Master Certified', 'Kanban Management', 'Product Roadmapping', 'Gestão de Riscos'],
    badge: 'Scrum / Kanban',
    iconName: 'Award',
    certifications: ['PSM II (Professional Scrum Master)', 'PMP - Project Management Professional'],
    projectsDelivered: '45+ projetos de grande porte entregues no prazo'
  },
  {
    id: 'naomi-cielo',
    initials: 'NC',
    name: 'Naomi Cielo',
    role: 'DPO (Encarregada de Dados - LGPD)',
    department: 'COMPLIANCE & PRIVACY',
    tagColor: 'tertiary',
    bio: 'Supervisiona a segurança de ponta a ponta, auditorias de fluxo de dados, políticas de consentimento e conformidade com a Lei 13.709/2018.',
    fullBio: 'Especialista em Direito Digital, Governança de TI e Segurança da Informação. Naomi atua diretamente na esteira de desenvolvimento para certificar que nenhuma linha de código viole diretrizes de privacidade por padrão (Privacy by Design).',
    specialties: ['LGPD (Lei 13.709/2018)', 'ISO/IEC 27001', 'Privacy by Design', 'Auditoria de Logs'],
    badge: 'LGPD / ISO 27001',
    iconName: 'ShieldCheck',
    certifications: ['CIPM - Certified Information Privacy Manager', 'Lead Auditor ISO 27001'],
    projectsDelivered: '100% de aprovação em auditorias de compliance externas'
  },
  {
    id: 'juan-pablo',
    initials: 'JP',
    name: 'Juan Pablo Farias',
    role: 'Desenvolvedor Full-Stack',
    department: 'CORE ENGINEERING',
    tagColor: 'primary',
    bio: 'Especialista em microsserviços Node.js, arquitetura de banco de dados relacional e esteiras de integração contínua (CI/CD).',
    fullBio: 'Arquiteto de sistemas sênior com profundo domínio em ecossistemas de alta concorrência. Desenvolve APIs resilientes, modelos relacionais otimizados e clusters escaláveis na AWS com foco em tolerância a falhas.',
    specialties: ['Node.js & TypeScript', 'AWS Cloud Architecture', 'React & Next.js', 'Bancos Relacionais (SQL)', 'CI/CD Automatizado'],
    badge: 'Node / AWS / SQL / React / Typescript',
    iconName: 'Code2',
    certifications: ['AWS Certified Solutions Architect - Professional', 'MongoDB Certified Developer'],
    projectsDelivered: 'Mais de 120 microsserviços em produção'
  },
  {
    id: 'amanda-dias',
    initials: 'AD',
    name: 'Amanda Dias',
    role: 'Desenvolvedora Full-Stack',
    department: 'FRONTEND & UX ENGIN',
    tagColor: 'primary',
    bio: 'Focada em arquitetura de interfaces performáticas em React/Next.js, otimização de Core Web Vitals e design systems corporativos.',
    fullBio: 'Engenheira de software frontend dedicada à construção de experiências digitais com altíssima pontuação de performance e acessibilidade (WCAG 2.1). Constrói design systems atômicos que reduzem o tempo de desenvolvimento de novas features em até 40%.',
    specialties: ['React 19 & Next.js', 'Tailwind CSS & Design Tokens', 'Web Performance & CWV', 'Acessibilidade WCAG AA'],
    badge: 'React / TypeScript',
    iconName: 'Layout',
    certifications: ['Frontend Masters Web Performance Expert', 'Web Accessibility Specialist (WAS)'],
    projectsDelivered: '80+ plataformas com nota 95+ no Google PageSpeed'
  },
  {
    id: 'rodrigo-comercial',
    initials: 'RC',
    name: 'Responsável Comercial',
    role: 'Liderança de Novos Negócios',
    department: 'EXPANSÃO & CONTRATOS',
    tagColor: 'indigo',
    bio: 'Estruturação de propostas comerciais sob medida, alinhamento orçamentário e acordos de nível de serviço (SLA) para novas operações.',
    fullBio: 'Responsável pela ponte executiva e de investimentos. Avalia necessidades estratégicas da diretoria de tecnologia do cliente para montar contratos com marcos claros, previsibilidade orçamentária e SLAs garantidos.',
    specialties: ['Enterprise SLA Design', 'Alinhamento Orçamentário', 'Contratos de Governança', 'Expansão B2B'],
    badge: 'SLA / Enterprise',
    iconName: 'Briefcase',
    certifications: ['ITIL v4 Strategic Leader', 'MBA em Gestão Empresarial'],
    projectsDelivered: 'Mais de R$ 50M em projetos tecnológicos viabilizados'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Governança',
    question: 'Como a Prismyx define governança de TI e garante alinhamento aos negócios?',
    answer: 'Nossa governança se apoia em documentação viva, reuniões de sincronização com métricas quantitativas e contratos de API versionados. Antes de escrever uma única linha de código, o time de engenharia alinha KPIs de conversão, custos projetados de infraestrutura e metas de negócio diretamente com as lideranças do projeto.'
  },
  {
    id: 'faq-2',
    category: 'SLA & Telemetria',
    question: 'Quais mecanismos de monitoramento de desempenho e SLAs são adotados?',
    answer: 'Implementamos telemetria em tempo real com health checks automatizados a cada 30 segundos, alertas integrados para incidentes em canais privados (Slack/Teams) e garantia contratual de 99,9% de disponibilidade em nós de produção AWS, além de relatórios mensais de throughput e latência p95.'
  },
  {
    id: 'faq-3',
    category: 'Compliance & LGPD',
    question: 'Como integram metodologias Ágeis, DevOps e LGPD desde a concepção?',
    answer: 'Através da figura central da nossa DPO (Naomi Cielo), cada feature passa por validação de necessidade de dados (data minimization). As sprints incorporam testes automatizados de segurança (SAST) em pipelines Docker/CI-CD, garantindo conformidade regulatória sem comprometer a cadência de entrega contínua.'
  },
  {
    id: 'faq-4',
    category: 'Contratação',
    question: 'Qual o prazo típico de resposta e início do diagnóstico?',
    answer: 'Retornamos qualquer solicitação de contato qualificada em menos de 1 dia útil. O workshop de diagnóstico de arquitetura e escopo técnico preliminar costuma ocorrer em até 72 horas úteis após o alinhamento de confidencialidade mútuo (NDA).'
  },
  {
    id: 'faq-5',
    category: 'Governança',
    question: 'Quem é dono do código-fonte e dos artefatos produzidos?',
    answer: 'A sua empresa possui 100% da propriedade intelectual do código-fonte, schemas de dados, configurações IaC e documentação desde o primeiro dia. Trabalhamos diretamente no repositório do cliente (GitHub ou GitLab) com permissões transparentes.'
  },
  {
    id: 'faq-6',
    category: 'SLA & Telemetria',
    question: 'Como lidam com picos repentinos de acessos ou tráfego de campanhas?',
    answer: 'Provisionamos arquiteturas elásticas com autoscaling automatizado em AWS ECS/Kubernetes e distribuição global em Edge CDN. Suportamos de milhares a milhões de requisições simultâneas sem quedas nem lentidão na base de dados relacional.'
  }
];
