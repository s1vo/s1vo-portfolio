export const titleTabs = [
  { href: '#hero', icon: '📄', label: '~/portfolio' },
  { href: '#about', icon: '👤', label: 'about.md' },
  { href: '#skills', icon: '⚡', label: 'skills.json' },
  { href: '#stack', icon: '📦', label: 'stack.config.js' },
  { href: '#projects', icon: '📂', label: 'projects/' },
  { href: '#services', icon: '🔧', label: 'services.ts' },
  { href: '#contact', icon: '✉️', label: 'contact.sh' },
];

export const sidebarGroups = [
  {
    label: 'Explorer',
    items: [
      { href: '#hero', icon: '📄', label: 'index.html' },
      { href: '#about', icon: '👤', label: 'about.md' },
      { href: '#whatido', icon: '⚡', label: 'whatido.ts' },
      { href: '#skills', icon: '🔷', label: 'skills.json' },
      { href: '#stack', icon: '📦', label: 'stack.config.js' },
    ],
  },
  {
    label: 'Projects',
    items: [
      { href: '#projects', icon: '📂', label: 'projects/' },
      { href: '#projects', icon: '🔹', label: 'analytics.ts', sub: true },
      { href: '#projects', icon: '🔹', label: 'monitoring.ts', sub: true },
      { href: '#projects', icon: '🔹', label: 'geo-platform.ts', sub: true },
      { href: '#projects', icon: '🔹', label: 'crm-system.ts', sub: true },
      { href: '#projects', icon: '🔹', label: 'snake.tsx', sub: true },
      { href: '#projects', icon: '🔹', label: 'telegram-bot.ts', sub: true },
      { href: '#projects', icon: '🔹', label: 'max-bot.ts', sub: true },
    ],
  },
  {
    label: 'Workspace',
    items: [
      { href: '#approach', icon: '🧠', label: 'approach.md' },
      { href: '#services', icon: '🔧', label: 'services.ts' },
      { href: '#why', icon: '✅', label: 'why-me.txt' },
      { href: '#process', icon: '🔄', label: 'process.sh' },
      { href: '#contact', icon: '✉️', label: 'contact.sh' },
    ],
  },
];

export const heroBadges = [
  { text: '● доступен', className: 'badge green' },
  { text: '8+ лет опыта', className: 'badge blue' },
  { text: 'Fullstack · Technical Lead', className: 'badge' },
];

export const stats = [
  { value: '8+', label: 'лет в разработке' },
  { value: '30+', label: 'завершённых проектов' },
  { value: '5', label: 'ключевых стеков' },
  { value: '∞', label: 'строк кода' },
];

export const aboutParagraphs = [
  '8 лет пишу системы, которые работают под нагрузкой, не ломаются в production и которые не стыдно передать другому инженеру.',
  'Начинал с frontend, вырос до полного стека. Сейчас закрываю задачи от проектирования базы данных до настройки Nginx и CI/CD пайплайна.',
  'Работал с корпоративными системами, геоинформационными платформами, аналитическими сервисами и системами мониторинга. Понимаю, как выглядит техдолг, и знаю, как его не создавать.',
  'Умею вести задачу от требований до деплоя. Пишу документацию. Делаю код-ревью. Настраиваю инфраструктуру.',
];

export const whatIDoCards = [
  {
    icon: '🏗️',
    title: 'Архитектура систем',
    desc: 'Проектирую масштабируемые системы с нуля. Выбираю стек под задачу, а не под моду.',
  },
  {
    icon: '⚡',
    title: 'Высоконагруженные системы',
    desc: 'Оптимизирую под реальный трафик. Работаю с ClickHouse, очередями, кешированием.',
  },
  {
    icon: '📊',
    title: 'Аналитические платформы',
    desc: 'Строю data pipelines, дашборды и системы агрегации больших объёмов данных.',
  },
  {
    icon: '🗺️',
    title: 'Геоинформационные системы',
    desc: 'Разрабатываю ГИС-приложения с картами, геозонами и пространственными запросами.',
  },
  {
    icon: '🖥️',
    title: 'Корпоративные веб-приложения',
    desc: 'Внутренние системы, CRM, ERP-модули, административные панели под бизнес-процессы.',
  },
  {
    icon: '🐳',
    title: 'DevOps / Инфраструктура',
    desc: 'Docker, CI/CD, Nginx, Traefik. Настраиваю среды — от local до production.',
  },
];

export const skillBars = [
  { label: 'React / Next.js', value: '95%' },
  { label: 'TypeScript', value: '93%' },
  { label: 'Node.js / NestJS', value: '90%' },
  { label: 'PostgreSQL', value: '88%' },
  { label: 'Docker / DevOps', value: '82%' },
  { label: 'System Design', value: '85%', blue: true },
];

export const techCategories = [
  {
    title: 'Frontend',
    icon: '⚛️',
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
    icon: '🟢',
    pills: [
      { text: 'Node.js', style: { color: '#68a063', borderColor: '#68a06325' } },
      { text: 'NestJS', style: { color: '#e0234e', borderColor: '#e0234e25' } },
      { text: 'Express.js', style: { color: '#888', borderColor: '#88888825' } },
      { text: 'PHP', style: { color: '#8993be', borderColor: '#8993be25' } },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    pills: [
      { text: 'PostgreSQL', style: { color: '#336791', borderColor: '#33679125' } },
      { text: 'ClickHouse', style: { color: '#facd00', borderColor: '#facd0025' } },
      { text: 'MongoDB', style: { color: '#47a248', borderColor: '#47a24825' } },
      { text: 'MySQL', style: { color: '#00758f', borderColor: '#00758f25' } },
    ],
  },
  {
    title: 'DevOps',
    icon: '🐳',
    pills: [
      { text: 'Docker', style: { color: '#2496ed', borderColor: '#2496ed25' } },
      { text: 'GitLab CI', style: { color: '#fc6d26', borderColor: '#fc6d2625' } },
      { text: 'Nginx', style: { color: '#009639', borderColor: '#00963925' } },
      { text: 'Traefik', style: { color: '#24a1c1', borderColor: '#24a1c125' } },
      { text: 'Linux', style: { color: '#fcc624', borderColor: '#fcc62425' } },
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
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
    type: 'analytics platform',
    name: 'DataCore Analytics',
    desc: 'Аналитическая платформа для обработки и визуализации больших объёмов событийных данных в реальном времени.',
    tasks: [
      'Приём и агрегация десятков миллионов событий в сутки',
      'Построение кастомных дашбордов с drill-down',
      'Оптимизация ClickHouse-запросов для sub-second ответов',
    ],
    stack: ['Next.js', 'NestJS', 'ClickHouse', 'PostgreSQL', 'Docker', 'TypeScript'],
  },
  {
    type: 'monitoring system',
    name: 'Pulse Monitor',
    desc: 'Система мониторинга инфраструктуры и бизнес-метрик с алертингом и историческим анализом инцидентов.',
    tasks: [
      'Сбор метрик с 200+ сервисов в реальном времени',
      'Настраиваемые правила алертинга и эскалации',
      'Интеграция с Telegram / Slack / Email',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'GitLab CI'],
  },
  {
    type: 'geo-information system',
    name: 'GeoTrack Platform',
    desc: 'Геоинформационная платформа для управления объектами на карте, геозонами и маршрутами с аналитикой перемещений.',
    tasks: [
      'Интерактивные карты с кластеризацией тысяч объектов',
      'Геозоны, триггеры входа/выхода, история треков',
      'Пространственные запросы через PostGIS',
    ],
    stack: ['React', 'MapLibre GL', 'NestJS', 'PostgreSQL+PostGIS', 'Nginx'],
  },
  {
    type: 'corporate system',
    name: 'OpsDesk CRM',
    desc: 'Корпоративная система управления задачами, клиентами и внутренними процессами с ролевой моделью доступа.',
    tasks: [
      'Гибкая RBAC-модель для 10+ типов пользователей',
      'Система уведомлений и журналирования действий',
      'REST + WebSocket API, OpenAPI-документация',
    ],
    stack: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Docker', 'Traefik'],
  },
  {
    type: 'pet project',
    name: 'SNAKE',
    desc: 'Браузерная версия классической змейки на React с быстрым управлением и адаптивным интерфейсом.',
    tasks: [
      'Реализована игровая логика и управление змейкой на React',
      'Интерфейс и layout собраны на Tailwind CSS',
      {
        text: 'Демо: react-snake-silk.vercel.app',
        href: 'https://react-snake-silk.vercel.app/',
      },
    ],
    stack: ['React', 'Tailwind'],
  },
  {
    type: 'bot development',
    name: 'Telegram Bots',
    desc: 'Разработка Telegram-ботов под бизнес-задачи: автоматизация, уведомления, команды и сценарии общения с пользователями.',
    tasks: [
      'Интеграция с внешними API и CRM/ERP-системами',
      'Сценарии команд, меню, состояния и обработка пользовательских потоков',
      'Логирование, мониторинг и стабильная работа в production',
    ],
    stack: ['Node.js', 'TypeScript', 'Telegram Bot API'],
  },
  {
    type: 'bot development',
    name: 'MAX Bots',
    desc: 'Разработка и поддержка ботов для MAX с кастомными сценариями взаимодействия и интеграцией внутренних сервисов.',
    tasks: [
      'Проектирование диалоговых сценариев и команд',
      'Подключение backend-логики и сервисных интеграций',
      'Подготовка к масштабированию и сопровождению',
    ],
    stack: ['Node.js', 'TypeScript', 'MAX Bot API'],
  },
];

export const approachItems = [
  {
    title: 'Архитектура — первее кода',
    desc: 'Не пишу код до тех пор, пока не понятно, как система будет работать под нагрузкой через год.',
  },
  {
    title: 'Типизация везде',
    desc: 'TypeScript строгий, без any, с явными интерфейсами на границах слоёв. Это не педантизм — это скорость будущих изменений.',
  },
  {
    title: 'CI/CD с первого дня',
    desc: 'GitLab CI, автотесты, линтер в pipeline. В main не попадает ничего непроверенного.',
  },
  {
    title: 'Документация не опциональна',
    desc: 'OpenAPI, README, ADR-решения. Код должен быть понятен без созвона с автором.',
  },
];

export const serviceCards = [
  {
    icon: '🔨',
    title: 'Fullstack разработка',
    desc: 'Разработка web-приложений под ключ: архитектура, backend, frontend, деплой. От ТЗ до релиза.',
  },
  {
    icon: '🧩',
    title: 'Проектирование архитектуры',
    desc: 'Аудит текущей системы, проектирование новой или рефакторинг. С учётом масштабирования и нагрузки.',
  },
  {
    icon: '📈',
    title: 'Аналитические системы',
    desc: 'Дашборды, ETL-процессы, работа с ClickHouse и большими данными.',
  },
  {
    icon: '🔗',
    title: 'API и интеграции',
    desc: 'REST и WebSocket API с OpenAPI-документацией. Интеграции с внешними сервисами.',
  },
  {
    icon: '🏢',
    title: 'Корпоративные системы',
    desc: 'CRM, внутренние панели управления, системы отчётности под бизнес-процессы.',
  },
  {
    icon: '⚙️',
    title: 'DevOps и инфраструктура',
    desc: 'Docker, CI/CD, Nginx/Traefik, настройка сред на Linux-серверах.',
  },
];

export const whyItems = [
  {
    title: 'Полный стек без пробелов',
    desc: 'Закрываю задачи от БД до UI. Не нужен отдельный девопс или фронтендер.',
  },
  {
    title: 'Не создаю техдолг',
    desc: 'Пишу так, чтобы через год это можно было поддерживать. Код-ревью, типизация, тесты.',
  },
  {
    title: 'Понимаю бизнес-контекст',
    desc: 'Могу сам поставить задачу, если ТЗ нет. Задаю правильные вопросы.',
  },
  {
    title: 'Проверен на сложных задачах',
    desc: 'Работал с highload, GIS, аналитикой, корпоративными системами.',
  },
  {
    title: 'Асинхронная коммуникация',
    desc: 'Статус работы прозрачен. Пишу понятные коммиты, веду документацию, не исчезаю.',
  },
  {
    title: 'Продуктовое мышление',
    desc: 'Предлагаю технические решения с учётом целей продукта, а не только «как написать код».',
  },
];

export const processSteps = [
  {
    number: '01 /',
    title: 'Разбор задачи',
    desc: 'Анализирую требования, задаю вопросы, выявляю узкие места до написания кода.',
  },
  {
    number: '02 /',
    title: 'Архитектура',
    desc: 'Проектирую структуру системы: схема БД, API-контракты, стек, CI/CD.',
  },
  {
    number: '03 /',
    title: 'Разработка',
    desc: 'Итеративная разработка с демо на каждом этапе. Приоритет — рабочий продукт.',
  },
  {
    number: '04 /',
    title: 'Тестирование',
    desc: 'Юнит-тесты, интеграционные проверки, нагрузочное тестирование при необходимости.',
  },
  {
    number: '05 /',
    title: 'Деплой',
    desc: 'Docker, CI/CD, мониторинг после релиза. Не пропадаю после сдачи.',
  },
  {
    number: '06 /',
    title: 'Поддержка',
    desc: 'Документация, передача кода, консультации по поддержке и развитию.',
  },
];

export const contacts = [
  {
    href: 'mailto:mikhail@sivokon.dev',
    icon: '✉️',
    label: 'Email',
    value: 'mikhail@sivokon.dev',
  },
  {
    href: 'https://t.me/sivokon',
    icon: '✈️',
    label: 'Telegram',
    value: '@sivokon',
    blank: true,
  },
  {
    href: 'https://github.com/sivokon',
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/sivokon',
    blank: true,
  },
  {
    href: 'https://linkedin.com/in/sivokon',
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/sivokon',
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
    ['', '  hire me   — 🚀'],
  ],
  whoami: [
    ['t-info', 'Михаил Сивоконь'],
    ['', 'Fullstack Developer & Technical Lead'],
    ['', '8+ лет коммерческой разработки'],
    ['', 'React · Node.js · TypeScript · NestJS · Docker'],
  ],
  skills: [
    ['t-ok', '// Frontend'],
    ['', '   React, Next.js, TypeScript, SCSS, Tailwind, Vite'],
    ['t-ok', '// Backend'],
    ['', '   Node.js, NestJS, Express.js, PHP'],
    ['t-ok', '// Databases'],
    ['', '   PostgreSQL, ClickHouse, MongoDB, MySQL'],
    ['t-ok', '// DevOps'],
    ['', '   Docker, GitLab CI, Nginx, Traefik, Linux'],
  ],
  stack: [
    ['t-warn', '{'],
    ['', '  "primary":  ["React", "Next.js", "TypeScript", "NestJS"],'],
    ['', '  "database": ["PostgreSQL", "ClickHouse"],'],
    ['', '  "infra":    ["Docker", "GitLab CI", "Nginx"]'],
    ['t-warn', '}'],
  ],
  projects: [
    ['t-info', '📂 ~/projects'],
    ['', '  ├── DataCore Analytics    (Next.js · NestJS · ClickHouse)'],
    ['', '  ├── Pulse Monitor         (React · Node.js · PostgreSQL)'],
    ['', '  ├── GeoTrack Platform     (React · NestJS · PostGIS)'],
    ['', '  ├── OpsDesk CRM           (Next.js · TypeScript · Docker)'],
    ['', '  ├── SNAKE                 (React · Tailwind)'],
    ['', '  ├── Telegram Bots         (Node.js · TypeScript · Telegram Bot API)'],
    ['', '  └── MAX Bots              (Node.js · TypeScript · MAX Bot API)'],
  ],
  contact: [
    ['t-ok', '✓ Доступен для проектов'],
    ['', '  Email:    s1vo13@yandex.ru'],
    ['', '  Telegram: @s1vo13'],
    ['', '  GitHub:   github.com/s1vo'],
  ],
  status: [
    ['t-ok', '● ONLINE — доступен для новых проектов'],
    ['', '  Режим:     Remote / Worldwide'],
    ['', '  Занятость: частичная или полная'],
    ['', '  Ответ:     в течение нескольких часов'],
  ],
  'hire me': [
    ['t-ok', '✓ Отличный выбор!'],
    ['', '  Email:    s1vo13@yandex.ru'],
    ['', '  Telegram: @s1vo13'],
    ['t-info', '  Напиши — обсудим проект 🚀'],
  ],
};
