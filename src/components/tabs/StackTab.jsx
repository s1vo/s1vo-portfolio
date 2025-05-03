import React from 'react'
import SectionTitle from '../ui/SectionTitle'

const stackItems = [
    {
        title: 'React',
        icon: 'fa-brands fa-react',
        color: 'text-sky-500',
        description: 'Компоненты, хуки, Redux, Context API, оптимизация производительности.',
    },
    {
        title: 'JavaScript',
        icon: 'fa-brands fa-js',
        color: 'text-yellow-500',
        description: 'ES6+, async/await, работа с API, функциональное программирование.',
    },
    {
        title: 'HTML5 & CSS3',
        icon: 'fa-brands fa-html5',
        color: 'text-orange-500',
        description: 'Семантика, адаптивная вёрстка, Flexbox, Grid, анимации и transitions.',
    },
    {
        title: 'TypeScript',
        icon: 'fa-solid fa-code',
        color: 'text-purple-500',
        description: 'Типизация, интерфейсы, дженерики, надёжность и поддерживаемость кода.',
    },
    {
        title: 'Styled Components & Tailwind',
        icon: 'fa-solid fa-brush',
        color: 'text-emerald-500',
        description: 'CSS-in-JS, utility-first подход, темизация и условные стили.',
    },
    {
        title: 'Инструменты и технологии',
        icon: 'fa-solid fa-toolbox',
        color: 'text-indigo-500',
        description: 'Git, Vite/Webpack, Jest, Storybook, CI/CD, Docker, Next.js.',
    },
]

const extraSkills = [
    'GraphQL',
    'REST API',
    'SOAP API',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'RabbitMQ',
    'Axios / Fetch',
    'React Router',
    'Jest',
    'Storybook',
    'Electron',
    'Figma',
    'Docker',
    'GitLab CI/CD',
]


const StackTab = () => {
    return (
        <div>
            <SectionTitle>Технологический стек</SectionTitle>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stackItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center mb-4">
                            <i className={`${item.icon} ${item.color} text-2xl mr-3`}></i>
                            <h3 className="text-lg font-semibold text-neutral-800">{item.title}</h3>
                        </div>
                        <p className="text-sm text-neutral-600">{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4 text-neutral-800">Дополнительные навыки</h3>
                <div className="flex flex-wrap gap-3">
                    {extraSkills.map((skill, i) => (
                        <span
                            key={i}
                            className="px-4 py-1 bg-neutral-100 text-sm rounded-full border border-neutral-300 text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition"
                        >
              {skill}
            </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StackTab
