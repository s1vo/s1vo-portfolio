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
  screenshot: Image;
};

const shot = (id: string, name: string): Image => ({ src: `/images/products/${id}.webp`, width: 1440, height: 900, alt: `Интерфейс ${name}` });

export const products: Product[] = [
  {
    id: 'nexus', slug: 'nexus', name: 'Nexus', tagline: 'Server Control Center', status: 'В разработке',
    description: 'Единая панель управления серверами и Docker-контейнерами: метрики CPU, RAM и диска в реальном времени, потоковые логи, health-check сервисов, перезапуск и алерты.',
    features: ['Серверы и Docker-контейнеры в одном списке', 'CPU / RAM / Disk в реальном времени', 'Realtime-логи сервисов', 'Health-check и рестарты сервисов', 'Алерты по порогам'],
    stack: ['React', 'Next.js', 'NestJS', 'PostgreSQL', 'RabbitMQ', 'Docker', 'Nginx'],
    demonstrates: ['System Design', 'Realtime', 'DevOps', 'Backend'],
    screenshot: shot('nexus', 'Nexus'),
  },
  {
    id: 'forge', slug: 'forge', name: 'Forge', tagline: 'Self-hosted Deployment Platform', status: 'В разработке',
    description: 'Собственная платформа деплоя: репозиторий на GitHub или GitLab превращается в Docker-образ и выкатывается через очередь сборок, с переменными окружения, логами и откатом.',
    features: ['Git-репозиторий → build → Docker → deploy', 'Environment variables по окружениям', 'Логи сборки в реальном времени', 'Rollback на предыдущий деплой', 'Очередь сборок на RabbitMQ'],
    stack: ['React', 'NestJS', 'Docker', 'GitLab / GitHub', 'Nginx', 'RabbitMQ'],
    demonstrates: ['CI/CD', 'Docker', 'Очереди', 'Архитектура'],
    screenshot: shot('forge', 'Forge'),
  },
  {
    id: 'vault', slug: 'vault', name: 'Vault', tagline: 'Password Manager', status: 'В разработке',
    description: 'Менеджер паролей с шифрованием на клиенте: хранилища, папки и теги, генератор паролей, история изменений и двухфакторная аутентификация.',
    features: ['Хранилища, папки и теги', 'Генератор паролей', 'Encrypted storage: шифрование на клиенте', 'История изменений записи', '2FA и аудит безопасности'],
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
    demonstrates: ['Security', 'Полноценный Fullstack'],
    screenshot: shot('vault', 'Vault'),
  },
  {
    id: 'pulse', slug: 'pulse', name: 'Pulse', tagline: 'Monitoring Platform', status: 'В разработке',
    description: 'Мониторинг сайтов и API из нескольких регионов: uptime, задержки, срок SSL-сертификатов, история инцидентов и уведомления через webhook и email.',
    features: ['Мониторинг сайтов и API', 'Uptime и latency по регионам', 'Контроль SSL-сертификатов', 'История инцидентов', 'Webhook / email-уведомления'],
    stack: ['React', 'NestJS', 'PostgreSQL', 'RabbitMQ'],
    demonstrates: ['Background jobs', 'Аналитика', 'API'],
    screenshot: shot('pulse', 'Pulse'),
  },
  {
    id: 'flow', slug: 'flow', name: 'Flow', tagline: 'API Development Studio', status: 'В разработке',
    description: 'Студия для работы с REST и SOAP API: коллекции запросов, окружения с переменными, история вызовов и импорт из OpenAPI.',
    features: ['REST / SOAP-клиент', 'Окружения и переменные', 'Коллекции запросов', 'История вызовов', 'Импорт OpenAPI и WSDL'],
    stack: ['React', 'TypeScript', 'Node.js', 'OpenAPI'],
    demonstrates: ['Developer Tools', 'REST / SOAP'],
    screenshot: shot('flow', 'Flow'),
  },
  {
    id: 'mesh', slug: 'mesh', name: 'Mesh', tagline: 'Architecture Designer', status: 'В разработке',
    description: 'Визуальный редактор архитектуры: сервисы, базы данных и очереди на одной схеме, описание связей между ними и экспорт документации.',
    features: ['Визуальные схемы сервисов, БД и очередей', 'Описание связей и протоколов', 'Свойства и владельцы компонентов', 'Экспорт документации: Markdown, Mermaid, PNG'],
    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL'],
    demonstrates: ['System Design', 'Frontend-архитектура'],
    screenshot: shot('mesh', 'Mesh'),
  },
  {
    id: 'drop', slug: 'drop', name: 'Drop', tagline: 'Private Cloud Storage', status: 'В разработке',
    description: 'Приватное облачное хранилище на S3: файлы и папки, предпросмотр, загрузка частями с возобновлением, публичные ссылки и права доступа.',
    features: ['Файлы, папки и предпросмотр', 'Загрузка частями с возобновлением', 'Публичные ссылки с паролем и сроком', 'Права доступа участникам', 'Версии файлов в S3'],
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'S3', 'Docker'],
    demonstrates: ['Storage', 'Permissions', 'Backend-архитектура'],
    screenshot: shot('drop', 'Drop'),
  },
  {
    id: 'relay', slug: 'relay', name: 'Relay', tagline: 'Integration Hub', status: 'В разработке',
    description: 'Хаб интеграций: подключение сторонних API и webhook, конвейер трансформации событий, повторные попытки и dead-letter queue на RabbitMQ.',
    features: ['Подключение сторонних API и webhook', 'Transformation pipeline', 'Retry с экспоненциальной задержкой', 'Dead-letter queue и разбор ошибок', 'Идемпотентность по идентификатору события'],
    stack: ['React', 'NestJS', 'RabbitMQ', 'PostgreSQL'],
    demonstrates: ['Интеграции', 'RabbitMQ', 'Reliability'],
    screenshot: shot('relay', 'Relay'),
  },
  {
    id: 'querylab', slug: 'querylab', name: 'QueryLab', tagline: 'Database Explorer', status: 'В разработке',
    description: 'Инструмент для работы с PostgreSQL: подключения, SQL-редактор, таблицы и связи, план выполнения EXPLAIN и список медленных запросов.',
    features: ['Подключения к PostgreSQL', 'SQL-редактор с подсветкой', 'Таблицы и связи между ними', 'EXPLAIN ANALYZE с подсказками', 'Медленные запросы за период'],
    stack: ['React', 'NestJS', 'PostgreSQL'],
    demonstrates: ['Базы данных', 'Performance', 'Developer Tooling'],
    screenshot: shot('querylab', 'QueryLab'),
  },
  {
    id: 'workspace', slug: 'workspace', name: 'Workspace', tagline: 'Team Platform', status: 'В разработке',
    description: 'Платформа для команды: проекты, задачи на доске, документы, комментарии, лента активности и роли с разграничением прав.',
    features: ['Проекты и задачи на kanban-доске', 'Документы с версиями', 'Комментарии и упоминания', 'Лента активности', 'Роли и права: RBAC'],
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'RabbitMQ'],
    demonstrates: ['RBAC', 'Сложная бизнес-логика'],
    screenshot: shot('workspace', 'Workspace'),
  },
];

export const findProduct = (slug: string | undefined) => products.find((p) => p.slug === slug);
