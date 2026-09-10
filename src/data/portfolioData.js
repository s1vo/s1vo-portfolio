import {
  Atom,
  Brain,
  Braces,
  CheckCircle2,
  Compass,
  Container,
  Database,
  FileCode,
  FileText,
  FolderOpen,
  GitBranch,
  Hammer,
  Link2,
  Mail,
  Map,
  Network,
  Package,
  Puzzle,
  RefreshCw,
  Recycle,
  Send,
  Server,
  Settings,
  User,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';

export const titleTabs = [
  { href: '#hero', icon: FileText, label: '~/portfolio' },
  { href: '#about', icon: User, label: 'about.md' },
  { href: '#skills', icon: Zap, label: 'skills.json' },
  { href: '#stack', icon: Package, label: 'stack.config.js' },
  { href: '#projects', icon: FolderOpen, label: 'projects/' },
  { href: '#services', icon: Wrench, label: 'services.ts' },
  { href: '#contact', icon: Mail, label: 'contact.sh' },
];

export const sidebarGroups = [
  {
    label: 'Explorer',
    items: [
      { href: '#hero', icon: FileCode, label: 'index.html' },
      { href: '#about', icon: User, label: 'about.md' },
      { href: '#whatido', icon: Zap, label: 'whatido.ts' },
      { href: '#skills', icon: Braces, label: 'skills.json' },
      { href: '#stack', icon: Package, label: 'stack.config.js' },
    ],
  },
  {
    label: 'Projects',
    items: [
      { href: '#projects', icon: FolderOpen, label: 'projects/' },
      { href: '#projects', icon: FileCode, label: 'gov-infra.ts', sub: true },
      { href: '#projects', icon: FileCode, label: 'gov-services.ts', sub: true },
      { href: '#projects', icon: FileCode, label: 'legacy-migration.ts', sub: true },
      { href: '#projects', icon: FileCode, label: 'geo-platform.ts', sub: true },
      { href: '#projects', icon: FileCode, label: 'telegram-bot.ts', sub: true },
    ],
  },
  {
    label: 'Workspace',
    items: [
      { href: '#approach', icon: Brain, label: 'approach.md' },
      { href: '#services', icon: Wrench, label: 'services.ts' },
      { href: '#why', icon: CheckCircle2, label: 'why-me.txt' },
      { href: '#process', icon: RefreshCw, label: 'process.sh' },
      { href: '#contact', icon: Mail, label: 'contact.sh' },
    ],
  },
];

export const heroBadges = [
  { text: '● доступен', className: 'badge green' },
  { text: '8+ лет в IT', className: 'badge blue' },
  { text: 'CTO · Head of Development', className: 'badge' },
];

export const stats = [
  { value: '8+', label: 'лет в разработке' },
  { value: '10', label: 'человек в команде' },
  { value: '4', label: 'этапа карьерного роста' },
  { value: '+40%', label: 'к производительности' },
];

export const aboutParagraphs = [
  'Более 8 лет занимаюсь разработкой и развитием корпоративных и государственных информационных систем. Начал карьеру с позиции Junior-разработчика и последовательно вырос до Middle, Senior, Team Lead и технического директора.',
  'Сейчас отвечаю за архитектуру решений, технические подходы, декомпозицию требований, организацию работы команды и выпуск изменений в production. Руководил командой до 10 разработчиков, проводил code review и помогал принимать сложные технические решения.',
  'Сохраняю практическое участие в разработке: работаю с React, TypeScript, Node.js, PHP, PostgreSQL, REST/SOAP-интеграциями, RabbitMQ, Docker и CI/CD.',
  'Имею опыт модернизации legacy-систем, работы с государственными информационными системами и взаимодействия с заказчиками, аналитиками, QA и внешними подрядчиками.',
];

export const whatIDoCards = [
  {
    icon: Network,
    title: 'Архитектура систем',
    desc: 'Проектирую модули, API, структуру данных и интеграционные контуры с учетом масштабируемости, надежности и дальнейшего сопровождения.',
  },
  {
    icon: Compass,
    title: 'Техническое руководство',
    desc: 'Организую полный цикл реализации: анализ требований, оценка, декомпозиция, распределение задач, контроль сроков и выпуск в production.',
  },
  {
    icon: Users,
    title: 'Развитие команды',
    desc: 'Провожу code review, менторю разработчиков, помогаю принимать архитектурные решения и выстраивать понятные инженерные процессы.',
  },
  {
    icon: Recycle,
    title: 'Legacy-модернизация',
    desc: 'Планирую постепенный рефакторинг и перенос устаревших систем на современный стек без остановки ключевых бизнес-процессов.',
  },
  {
    icon: Link2,
    title: 'API и интеграции',
    desc: 'Проектирую REST/SOAP API и сценарии обмена данными с внутренними сервисами, внешними платформами и государственными системами.',
  },
  {
    icon: Server,
    title: 'Инфраструктура и качество',
    desc: 'Развиваю Docker-окружения, CI/CD, Git-стратегию, техническую документацию и контроль качества релизов.',
  },
];

export const skillBars = [
  { label: 'System Architecture', value: '90%', blue: true },
  { label: 'Team Leadership', value: '88%' },
  { label: 'Backend / API', value: '90%' },
  { label: 'React / TypeScript', value: '92%' },
  { label: 'PostgreSQL', value: '88%' },
  { label: 'Docker / CI/CD', value: '82%' },
];

export const techCategories = [
  {
    title: 'Management / Architecture',
    icon: Brain,
    pills: [
      { text: 'System Design', style: { color: '#c792ea', borderColor: '#c792ea25' } },
      { text: 'Team Leadership', style: { color: '#82aaff', borderColor: '#82aaff25' } },
      { text: 'Code Review', style: { color: '#89ddff', borderColor: '#89ddff25' } },
      { text: 'Technical Strategy', style: { color: '#ffcb6b', borderColor: '#ffcb6b25' } },
      { text: 'Legacy Modernization', style: { color: '#f78c6c', borderColor: '#f78c6c25' } },
    ],
  },
  {
    title: 'Frontend',
    icon: Atom,
    pills: [
      { text: 'React', style: { color: '#61dafb', borderColor: '#61dafb25' } },
      { text: 'Next.js', style: { color: '#e2e2e2', borderColor: '#e2e2e225' } },
      { text: 'TypeScript', style: { color: '#3178c6', borderColor: '#3178c625' } },
      { text: 'JavaScript', style: { color: '#f7df1e', borderColor: '#f7df1e25' } },
      { text: 'SCSS', style: { color: '#cc6699', borderColor: '#cc669925' } },
      { text: 'Tailwind', style: { color: '#38bdf8', borderColor: '#38bdf825' } },
      { text: 'Vite', style: { color: '#646cff', borderColor: '#646cff25' } },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    pills: [
      { text: 'Node.js', style: { color: '#68a063', borderColor: '#68a06325' } },
      { text: 'NestJS', style: { color: '#e0234e', borderColor: '#e0234e25' } },
      { text: 'Express.js', style: { color: '#888', borderColor: '#88888825' } },
      { text: 'Laravel', style: { color: '#ff2d20', borderColor: '#ff2d2025' } },
      { text: 'PHP', style: { color: '#8993be', borderColor: '#8993be25' } },
      { text: 'REST', style: { color: '#85ea2d', borderColor: '#85ea2d25' } },
      { text: 'SOAP', style: { color: '#a259ff', borderColor: '#a259ff25' } },
    ],
  },
  {
    title: 'Databases / Messaging',
    icon: Database,
    pills: [
      { text: 'PostgreSQL', style: { color: '#336791', borderColor: '#33679125' } },
      { text: 'MongoDB', style: { color: '#47a248', borderColor: '#47a24825' } },
      { text: 'SQL', style: { color: '#e2e2e2', borderColor: '#e2e2e225' } },
      { text: 'RabbitMQ', style: { color: '#ff6600', borderColor: '#ff660025' } },
    ],
  },
  {
    title: 'DevOps',
    icon: Container,
    pills: [
      { text: 'Docker', style: { color: '#2496ed', borderColor: '#2496ed25' } },
      { text: 'GitLab CI', style: { color: '#fc6d26', borderColor: '#fc6d2625' } },
      { text: 'GitHub Actions', style: { color: '#e2e2e2', borderColor: '#e2e2e225' } },
      { text: 'Nginx', style: { color: '#009639', borderColor: '#00963925' } },
      { text: 'Linux', style: { color: '#fcc624', borderColor: '#fcc62425' } },
    ],
  },
  {
    title: 'Tools',
    icon: Hammer,
    pills: [
      { text: 'Git', style: { color: '#f05032', borderColor: '#f0503225' } },
      { text: 'Figma', style: { color: '#a259ff', borderColor: '#a259ff25' } },
      { text: 'Postman', style: { color: '#ff6c37', borderColor: '#ff6c3725' } },
      { text: 'OpenAPI', style: { color: '#85ea2d', borderColor: '#85ea2d25' } },
      { text: 'ESLint', style: { color: '#4b32c3', borderColor: '#4b32c325' } },
    ],
  },
];

export const projects = [
  {
    type: 'government information system',
    name: 'Платформа управления инфраструктурой',
    desc: 'Развитие государственной информационной системы для учета объектов инфраструктуры, аналитики и автоматизации рабочих процессов.',
    tasks: [
      'Проектирование и развитие новых функциональных модулей',
      'REST/SOAP-интеграции с внешними и государственными системами',
      'Оптимизация PostgreSQL и постепенное снижение технического долга',
    ],
    stack: ['PHP', 'PostgreSQL', 'REST', 'SOAP', 'JavaScript', 'Docker'],
  },
  {
    type: 'government services',
    name: 'Портальные сервисы государственных услуг',
    desc: 'Разработка и сопровождение портальных сервисов с участием команды из 10 разработчиков.',
    tasks: [
      'Техническое руководство командой и контроль реализации задач',
      'Проектирование архитектуры модулей и структуры данных',
      'Взаимодействие с аналитиками, QA, заказчиком и подрядчиками',
    ],
    stack: ['PHP', 'PostgreSQL', 'REST', 'SOAP', 'Git', 'Linux'],
  },
  {
    type: 'legacy modernization',
    name: 'Модернизация корпоративной платформы',
    desc: 'Постепенный перевод legacy-системы на современную frontend- и backend-архитектуру без остановки ключевых процессов.',
    tasks: [
      'Миграция с PHP 5.6 на React SPA и Laravel API',
      'Разделение интерфейса, бизнес-логики и интеграционного слоя',
      'Настройка Docker-окружений и CI/CD-процессов',
    ],
    stack: ['React', 'TypeScript', 'Laravel', 'PHP', 'PostgreSQL', 'Docker'],
  },
  {
    type: 'geo-information system',
    name: 'Геоинформационная платформа',
    desc: 'Картографический интерфейс для отображения и анализа объектов инфраструктуры и связанных данных.',
    tasks: [
      'Пользовательские слои, фильтрация и кластеризация объектов',
      'Работа с пространственными данными и PostgreSQL/PostGIS',
      'Интеграция картографического модуля с внутренними API',
    ],
    stack: ['React', 'Leaflet', 'OpenLayers', 'PostgreSQL', 'PostGIS', 'REST'],
  },
  {
    type: 'bot development',
    name: 'Telegram-бот для оперативной работы',
    desc: 'Бот для получения данных, навигации по событиям, подписок и уведомлений пользователей.',
    tasks: [
      'Интеграция с внутренним API и обработка пользовательских сценариев',
      'Фильтрация, пагинация, подписки и уведомления об изменениях',
      'Подготовка к стабильной работе и сопровождению в production',
    ],
    stack: ['Node.js', 'NestJS', 'TypeScript', 'Telegram Bot API', 'PostgreSQL'],
  },
];

export const approachItems = [
  {
    title: 'Сначала контекст, потом решение',
    desc: 'Перед выбором архитектуры разбираюсь в бизнес-задаче, ограничениях, рисках и требованиях к сопровождению.',
  },
  {
    title: 'Эволюция вместо переписывания',
    desc: 'Предпочитаю постепенную модернизацию системы с контролируемым риском, измеримым результатом и сохранением работающих процессов.',
  },
  {
    title: 'Прозрачная техническая реализация',
    desc: 'Фиксирую решения, оценки, зависимости и риски. Команда и заказчик должны понимать состояние задачи и причины технических решений.',
  },
  {
    title: 'Качество как часть процесса',
    desc: 'Code review, типизация, документация, CI/CD и тестирование должны быть встроены в разработку, а не добавляться перед релизом.',
  },
];

export const serviceCards = [
  {
    icon: Compass,
    title: 'Техническое руководство',
    desc: 'Аудит разработки, организация процессов, планирование технического развития и помощь команде в реализации сложных задач.',
  },
  {
    icon: Puzzle,
    title: 'Проектирование архитектуры',
    desc: 'Проектирование новой системы или развитие существующей: модули, API, данные, интеграции и инфраструктура.',
  },
  {
    icon: Recycle,
    title: 'Модернизация legacy',
    desc: 'План постепенного рефакторинга и перехода на современный стек без рискованного полного переписывания.',
  },
  {
    icon: Link2,
    title: 'API и интеграции',
    desc: 'REST/SOAP API, интеграционные контуры и обмен данными с внутренними, внешними и государственными системами.',
  },
  {
    icon: Map,
    title: 'Корпоративные и ГИС-системы',
    desc: 'Внутренние платформы, административные интерфейсы, аналитические и картографические модули.',
  },
  {
    icon: Settings,
    title: 'Разработка и инфраструктура',
    desc: 'Практическая реализация на React, Node.js, PHP и PostgreSQL, Docker-окружения и CI/CD.',
  },
];

export const whyItems = [
  {
    title: 'Вижу систему целиком',
    desc: 'Понимаю взаимосвязь бизнеса, архитектуры, кода, данных, инфраструктуры и процессов команды.',
  },
  {
    title: 'Прошел путь разработчика',
    desc: 'Вырос от Junior-разработчика до CTO, поэтому понимаю задачи и ограничения команды на каждом уровне.',
  },
  {
    title: 'Сохраняю hands-on подход',
    desc: 'Могу обсуждать стратегию с заказчиком и при необходимости самостоятельно разобраться в коде, API или SQL-запросе.',
  },
  {
    title: 'Управляю через прозрачность',
    desc: 'Фиксирую задачи, решения, риски и статус реализации. Команда понимает приоритеты и ожидаемый результат.',
  },
  {
    title: 'Работаю с legacy без иллюзий',
    desc: 'Учитываю ограничения существующей системы и предлагаю реалистичный план постепенной модернизации.',
  },
  {
    title: 'Ориентируюсь на результат',
    desc: 'Техническое решение должно приносить пользу проекту, сокращать риски и оставаться сопровождаемым.',
  },
];

export const processSteps = [
  {
    number: '01 /',
    title: 'Погружение',
    desc: 'Изучаю бизнес-задачу, текущее состояние системы, ограничения, риски и ожидания участников.',
  },
  {
    number: '02 /',
    title: 'Проектирование',
    desc: 'Формирую архитектурный подход, границы модулей, контракты API, структуру данных и план реализации.',
  },
  {
    number: '03 /',
    title: 'Декомпозиция',
    desc: 'Разбиваю решение на этапы, оцениваю зависимости, распределяю ответственность и определяю критерии готовности.',
  },
  {
    number: '04 /',
    title: 'Реализация',
    desc: 'Контролирую разработку, провожу code review, снимаю технические блокеры и синхронизирую участников.',
  },
  {
    number: '05 /',
    title: 'Релиз',
    desc: 'Организую тестирование, выпуск изменений, проверку production и контроль рисков после запуска.',
  },
  {
    number: '06 /',
    title: 'Развитие',
    desc: 'Анализирую результат, фиксирую технический долг и формирую следующие шаги развития системы.',
  },
];

export const contacts = [
  {
    href: 'mailto:s1vo13@yandex.ru',
    icon: Mail,
    label: 'Email',
    value: 's1vo13@yandex.ru',
  },
  {
    href: 'https://t.me/s1vo13',
    icon: Send,
    label: 'Telegram',
    value: '@s1vo13',
    blank: true,
  },
  {
    href: 'https://github.com/s1vo',
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/s1vo',
    blank: true,
  },
];

export const terminalCommands = {
  help: [
    ['t-ok', 'Доступные команды:'],
    ['', '  whoami    — кто это?'],
    ['', '  skills    — навыки'],
    ['', '  stack     — технологический стек'],
    ['', '  projects  — проекты'],
    ['', '  contact   — контакты'],
    ['', '  status    — текущий статус'],
    ['', '  clear     — очистить терминал'],
    ['', '  hire me   — →'],
  ],
  whoami: [
    ['t-info', 'Михаил Сивоконь'],
    ['', 'Technical Director (CTO) / Head of Development'],
    ['', '8+ лет в разработке и техническом руководстве'],
    ['', 'Architecture · Team Leadership · React · Node.js · PHP · PostgreSQL'],
  ],
  skills: [
    ['t-ok', '// Management / Architecture'],
    ['', '   System Design, Team Leadership, Code Review, Legacy Modernization'],
    ['t-ok', '// Backend'],
    ['', '   Node.js, NestJS, Express.js, Laravel, PHP, REST, SOAP'],
    ['t-ok', '// Frontend'],
    ['', '   React, Next.js, TypeScript, SCSS, Vite'],
    ['t-ok', '// Data / Infra'],
    ['', '   PostgreSQL, MongoDB, RabbitMQ, Docker, GitLab CI, Linux'],
  ],
  stack: [
    ['t-warn', '{'],
    ['', '  "management": ["System Design", "Team Leadership", "Code Review"],'],
    ['', '  "backend":    ["Node.js", "Laravel", "PHP", "REST", "SOAP"],'],
    ['', '  "frontend":   ["React", "Next.js", "TypeScript"],'],
    ['', '  "infra":      ["PostgreSQL", "RabbitMQ", "Docker", "CI/CD"]'],
    ['t-warn', '}'],
  ],
  projects: [
    ['t-info', '~/projects'],
    ['', '  ├── Платформа управления инфраструктурой  (PHP · PostgreSQL · SOAP)'],
    ['', '  ├── Портальные сервисы госуслуг           (PHP · PostgreSQL · REST)'],
    ['', '  ├── Модернизация корпоративной платформы  (React · Laravel · Docker)'],
    ['', '  ├── Геоинформационная платформа           (React · PostGIS · REST)'],
    ['', '  └── Telegram-бот                          (Node.js · NestJS · TS)'],
  ],
  contact: [
    ['t-ok', '✓ Открыт к предложениям'],
    ['', '  Email:    sivokonma@gmail.com'],
    ['', '  Telegram: @s1vo13'],
    ['', '  GitHub:   github.com/s1vo'],
  ],
  status: [
    ['t-ok', '● ONLINE — открыт к предложениям'],
    ['', '  Формат:     Москва / Remote'],
    ['', '  Роли:       CTO / Head of Development / Technical Lead'],
    ['', '  Занятость:  полная или проектная'],
  ],
  'hire me': [
    ['t-ok', '✓ Давайте обсудим задачу'],
    ['', '  Email:    sivokonma@gmail.com'],
    ['', '  Telegram: @s1vo13'],
    ['t-info', '  Отвечу и предложу следующий шаг'],
  ],
};
