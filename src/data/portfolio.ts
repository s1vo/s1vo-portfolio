export type Image = { src: string; width: number; height: number; alt: string };

export type Project = {
  id: string;
  slug: string;
  category: string;
  title: string;
  summary: string;
  tags: string[];
  featured: boolean;
  image: Image;
  description: string;
  workAreas: string[];
  stack: string[];
  role?: string;
  period?: string;
  results?: string[];
  url?: string;
};

export const profile = {
  name: 'Михаил Сивоконь',
  firstName: 'Михаил',
  lastName: 'Сивоконь',
  role: 'CTO / Head of Development',
  heroLabel: 'CTO / Head of Development',
  status: 'Открыт к предложениям',
  tagline: ['Развиваю системы.', 'Усиливаю команды.'],
  summary: 'Корпоративные и государственные системы — от архитектуры до production.',
  experienceText:
    'Прошёл путь от разработчика до технического директора. Проектирую архитектуру, развиваю команду и участвую в реализации.',
  facts: [
    { value: '8+', label: 'лет в разработке' },
    { value: 'до 10', label: 'разработчиков в команде' },
  ],
  directions: ['Архитектура', 'Команда', 'Разработка'],
  careerSteps: ['Junior', 'Middle', 'Senior', 'Team Lead', 'CTO'],
  competencies: ['Архитектура и интеграции', 'Техническое руководство', 'Модернизация legacy'],
  stack: ['React', 'TypeScript', 'Node.js', 'PHP', 'PostgreSQL', 'Docker'],
  stackGroups: [
    { title: 'Управление и архитектура', note: 'Проектирую систему целиком и веду команду до 10 разработчиков', items: ['System Design', 'Техническая стратегия', 'Руководство командой', 'Планирование', 'Code Review', 'Модернизация legacy'] },
    { title: 'Интеграции', note: 'Связываю систему с внешними и государственными сервисами', items: ['REST', 'SOAP', 'OpenAPI', 'RabbitMQ', 'Webhooks'] },
    { title: 'Frontend', note: 'Интерфейсы корпоративных систем и картографических модулей', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'SCSS', 'Tailwind', 'Vite'] },
    { title: 'Backend', note: 'API, бизнес-логика и фоновые задачи', items: ['Node.js', 'NestJS', 'Express.js', 'Laravel', 'PHP'] },
    { title: 'Данные', note: 'Схемы, миграции, оптимизация запросов и геоданные', items: ['PostgreSQL', 'PostGIS', 'SQL', 'MongoDB'] },
    { title: 'Инфраструктура', note: 'Docker-окружения, CI/CD и выпуск в production', items: ['Docker', 'GitLab CI', 'GitHub Actions', 'Nginx', 'Linux'] },
    { title: 'Инструменты', note: 'Ежедневная работа команды', items: ['Git', 'Figma', 'Postman', 'ESLint'] },
  ],
  resumeHighlights: [
    'Более 8 лет разработки и развития корпоративных и государственных информационных систем.',
    'Путь от Junior через Middle, Senior и Team Lead до технического директора.',
    'Работа над архитектурой, техническими подходами, декомпозицией требований, организацией команды и выпуском изменений в production.',
    'Руководство командой до 10 разработчиков, code review и помощь в технических решениях.',
    'Практическая работа с React, TypeScript, Node.js, PHP, PostgreSQL, REST/SOAP, RabbitMQ, Docker и CI/CD.',
    'Постепенная модернизация legacy, взаимодействие с заказчиками, аналитиками, QA и внешними подрядчиками.',
  ],
  resumeStack: ['React', 'TypeScript', 'Node.js', 'PHP', 'PostgreSQL', 'REST / SOAP', 'RabbitMQ', 'Docker', 'CI/CD'],
  resumePdfUrl: null as string | null,
};

export const contacts = {
  telegram: { url: 'https://t.me/s1vo13', label: '@s1vo13' },
  github: { url: 'https://github.com/s1vo', label: 'GitHub' },
};

export const heroImage: Image = { src: '/images/hero-architecture.png', width: 520, height: 372, alt: '' };
export const heroCaptions = { top: ['Системы', 'Люди', 'Развитие'], bottom: ['Больше', 'чем код'] };

export const projects: Project[] = [
  {
    id: 'infrastructure',
    slug: 'infrastructure-platform',
    category: 'Государственные системы',
    title: 'Платформа управления инфраструктурой',
    summary: 'Модули, интеграции и развитие архитектуры',
    tags: ['PHP', 'PostgreSQL', 'REST / SOAP'],
    featured: true,
    image: { src: '/images/project-infrastructure.png', width: 625, height: 205, alt: '' },
    description:
      'Развитие государственной информационной системы для учёта объектов инфраструктуры, аналитики и автоматизации рабочих процессов.',
    workAreas: [
      'Проектирование и развитие функциональных модулей',
      'REST/SOAP-интеграции с внешними и государственными системами',
      'Оптимизация PostgreSQL и постепенное снижение технического долга',
    ],
    stack: ['PHP', 'PostgreSQL', 'REST', 'SOAP', 'JavaScript', 'Docker'],
  },
  {
    id: 'modernization',
    slug: 'corporate-platform-modernization',
    category: 'Корпоративные системы',
    title: 'Модернизация корпоративной платформы',
    summary: 'От PHP 5.6 к React и Laravel',
    tags: ['React', 'Laravel', 'Docker'],
    featured: false,
    image: { src: '/images/project-modernization.png', width: 190, height: 190, alt: '' },
    description:
      'Постепенный перевод legacy-системы на современную frontend- и backend-архитектуру без остановки ключевых процессов.',
    workAreas: [
      'Миграция с PHP 5.6 на React SPA и Laravel API',
      'Разделение интерфейса, бизнес-логики и интеграционного слоя',
      'Настройка Docker-окружений и CI/CD',
    ],
    stack: ['React', 'TypeScript', 'Laravel', 'PHP', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'gis',
    slug: 'geoinformation-platform',
    category: 'Геоинформационные системы',
    title: 'Геоинформационная платформа',
    summary: 'Карты, слои и пространственные данные',
    tags: ['React', 'PostGIS', 'REST'],
    featured: false,
    image: { src: '/images/project-gis.png', width: 215, height: 190, alt: '' },
    description:
      'Картографический интерфейс для отображения и анализа объектов инфраструктуры и связанных данных.',
    workAreas: [
      'Пользовательские слои, фильтрация и кластеризация объектов',
      'Пространственные данные и PostgreSQL/PostGIS',
      'Интеграция картографического модуля с внутренними API',
    ],
    stack: ['React', 'Leaflet', 'OpenLayers', 'PostgreSQL', 'PostGIS', 'REST'],
  },
  {
    id: 'portal',
    slug: 'government-services-portal',
    category: 'Государственные сервисы',
    title: 'Портальные сервисы государственных услуг',
    summary: 'Команда из 10 разработчиков',
    tags: ['PHP', 'PostgreSQL', 'REST / SOAP'],
    featured: false,
    image: { src: '/images/project-portal.svg', width: 215, height: 190, alt: '' },
    description:
      'Разработка и сопровождение портальных сервисов с участием команды из 10 разработчиков.',
    workAreas: [
      'Техническое руководство командой и контроль реализации задач',
      'Проектирование архитектуры модулей и структуры данных',
      'Взаимодействие с аналитиками, QA, заказчиком и подрядчиками',
    ],
    stack: ['PHP', 'PostgreSQL', 'REST', 'SOAP', 'Git', 'Linux'],
  },
  {
    id: 'bot',
    slug: 'telegram-bot',
    category: 'Боты',
    title: 'Telegram-бот для оперативной работы',
    summary: 'Данные, события, подписки и уведомления',
    tags: ['Node.js', 'NestJS', 'Telegram Bot API'],
    featured: false,
    image: { src: '/images/project-bot.svg', width: 215, height: 190, alt: '' },
    description:
      'Бот для получения данных, навигации по событиям, подписок и уведомлений пользователей.',
    workAreas: [
      'Интеграция с внутренним API и обработка пользовательских сценариев',
      'Фильтрация, пагинация, подписки и уведомления об изменениях',
      'Подготовка к стабильной работе и сопровождению в production',
    ],
    stack: ['Node.js', 'NestJS', 'TypeScript', 'Telegram Bot API', 'PostgreSQL'],
  },
];

export const findProject = (slug: string | undefined) => projects.find((p) => p.slug === slug);

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  demonstrates: string[];
  status: string;
  screenshot?: Image;
  logo: string;
};

export const products: Product[] = [
  {
    id: 'agentdesk', slug: 'agentdesk', name: 'Agentdesk', tagline: 'Task Tracker for AI Agents', status: 'Работает',
    description: 'Таск-трекер, в который пишут задачи вы, Claude Code и Codex. Агент через MCP находит работу в коде и заводит задачу, а вы видите её во «Входящих» и решаете, что делать дальше.',
    features: [
      'Агенты создают задачи через MCP: чеклист, приоритет и стабильный externalId без дублей',
      'Канбан с drag-and-drop (мышь, touch, клавиатура), список с серверной сортировкой и фильтрами в URL',
      'Токены агентов ограничены проектами и операциями, отзыв действует со следующего запроса',
      'Оптимистичные блокировки, Idempotency-Key, атомарная нумерация и append-only история',
      'Адаптивный интерфейс от 375 px',
      'Self-hosted: Docker Compose, Caddy с HTTPS, бэкап и проверка восстановления',
    ],
    stack: ['React', 'TypeScript', 'Fastify', 'PostgreSQL', 'MCP', 'Drizzle', 'Docker'],
    demonstrates: ['AI-агенты / MCP', 'System Design', 'Security', 'Fullstack'],
    screenshot: { src: '/images/products/agentdesk.png', width: 1440, height: 900, alt: 'Канбан-доска Agentdesk' },
    logo: '/images/products/logo-agentdesk.png',
  },
  {
    id: 'trainer-journal', slug: 'trainer-journal', name: 'Журнал тренера', tagline: 'CRM для спортивной секции', status: 'В разработке',
    description: 'Веб-приложение для спортивной секции: база клиентов с контактами родителей, группы и расписание, отметка посещаемости с телефона, учёт абонементов по количеству занятий, email-рассылки и выгрузка в Excel.',
    features: [
      'Отметка посещаемости с телефона за минуту: крупные кнопки и индикатор абонемента у каждого клиента',
      'Абонементы на период с автосписанием, неоплаченными посещениями и автозачётом при оплате',
      'Отработки пропущенных занятий в других группах',
      'Группы с расписанием и автогенерацией занятий без дублей',
      'Email-рассылки с изображениями, предпросмотром, отпиской и отчётом по доставке',
      'Два кабинета, администратор и тренер, с правами на уровне сервера; выгрузки в XLSX',
    ],
    stack: [],
    demonstrates: ['Сложная бизнес-логика', 'RBAC', 'Mobile-first', 'Email-рассылки'],
    logo: '/images/products/logo-trainer-journal.svg',
  },
];

export const findProduct = (slug: string | undefined) => products.find((p) => p.slug === slug);
