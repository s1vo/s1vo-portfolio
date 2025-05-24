import React from 'react'
import SectionTitle from '../ui/SectionTitle'

const projects = [
    {
        title: 'Портальные сервисы госуслуг',
        description: 'Разработка и поддержка сервисов оказания государственных услуг с интеграцией с ГИС, REST и SOAP API.',
        tags: ['React', 'SQL', 'SOAP', 'REST', 'ГИС'],
        image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7',
        link: '#',
    },
    {
        title: 'Информационные системы компании',
        description: 'Масштабные системы автоматизации процессов в энергетике и промышленности. Полный стек: от API до UI.',
        tags: ['React', 'Node.js', 'RabbitMQ', 'PHP', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
        link: '#',
    },
    {
        title: 'Картографическое веб-приложение',
        description: 'Интерактивные карты с использованием Leaflet и кастомными источниками данных.',
        tags: ['Leaflet', 'React', 'GeoJSON', 'UI/UX'],
        image: 'https://images.unsplash.com/photo-1502920917128-1aa500764ce7',
        link: '#',
    },
    {
        title: 'Мобильное приложение на React Native',
        description: 'Мобильный клиент для внутренней CRM-системы. Поддержка оффлайн-режима и push-уведомлений.',
        tags: ['React Native', 'Redux', 'Expo', 'REST'],
        image: 'https://images.unsplash.com/photo-1551817958-a340a5e0ed4c',
        link: '#',
    },
]

const PortfolioTab = () => {
    return (
        <div>
            <SectionTitle>Мои проекты</SectionTitle>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="group relative flex flex-col bg-white rounded-2xl border border-neutral-200 shadow-sm transition-all overflow-hidden hover:shadow-lg hover:border-primary-300 hover:scale-[1.01]"
                    >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-lg font-semibold text-neutral-900 mb-2">{project.title}</h3>
                            <p className="text-sm text-neutral-600 mb-4 flex-grow">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, j) => (
                                    <span
                                        key={j}
                                        className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full border border-primary-100 hover:bg-primary-100 transition-all"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                className="mt-auto text-sm font-medium text-primary-600 hover:text-primary-800 flex items-center transition"
                            >
                                Подробнее
                                <span className="material-symbols-outlined ml-1 text-base">arrow_forward</span>
                            </a>
                        </div>

                        {/* Glow border effect */}
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-primary-300 group-hover:ring-offset-2 pointer-events-none transition-all duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PortfolioTab
