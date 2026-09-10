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
  },
];

export const findProject = (slug: string | undefined) => projects.find((p) => p.slug === slug);
