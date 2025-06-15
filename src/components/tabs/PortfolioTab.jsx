import React from 'react'
import SectionTitle from '../ui/SectionTitle'

import reactSnake from '../../assets/react-snake.png' // или путь к новому изображению

const projects = [
    {
        title: 'React snake',
        description: 'Реализация классической игры змейка на react с поддержкой управления с клавиатуры и мобильных устройств, счетчиком очков и таблицей рекордов.',
        tags: ['react', 'game', 'snake', 'javascript'],
        image: reactSnake,
        link: 'https://react-snake-silk.vercel.app/',
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

                        <div className="relative w-full aspect-[4/3] bg-neutral-100 flex items-center justify-center">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="max-h-44 w-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>


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
                                target="_blank"
                                rel="noopener noreferrer"
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
