import React from 'react'
import SectionTitle from '../ui/SectionTitle'

// Дополни свои объекты новым полем "level" и "badge" если надо
const stackItems = [
    {
        title: 'React',
        icon: 'fa-brands fa-react',
        color: 'text-sky-500',
        description: 'Компоненты, хуки, Redux, Context API, оптимизация производительности.',
        level: '3 года',
    },
    {
        title: 'JavaScript',
        icon: 'fa-brands fa-js',
        color: 'text-yellow-500',
        description: 'ES6+, async/await, работа с API, функциональное программирование.',
        level: '+7 лет',
    },
    {
        title: 'HTML5 & CSS3',
        icon: 'fa-brands fa-html5',
        color: 'text-orange-500',
        description: 'Семантика, адаптивная вёрстка, Flexbox, Grid, анимации и transitions.',
        level: '+7 лет',
    },
    {
        title: 'TypeScript',
        icon: 'fa-solid fa-code',
        color: 'text-purple-500',
        description: 'Типизация, интерфейсы, дженерики, надёжность и поддерживаемость кода.',
        level: '2 года',
    },
    {
        title: 'Styled Components & Tailwind',
        icon: 'fa-solid fa-brush',
        color: 'text-emerald-500',
        description: 'CSS-in-JS, utility-first подход, темизация и условные стили.',
        level: 'Pro',
    },
    {
        title: 'Инструменты и технологии',
        icon: 'fa-solid fa-toolbox',
        color: 'text-indigo-500',
        description: 'Git, Vite/Webpack, Jest, Storybook, CI/CD, Docker, Next.js.',
        level: 'Fullstack',
    },
]

const extraSkills = [
    { name: 'GraphQL', tip: 'Создание схем, интеграция Apollo/Relay' },
    { name: 'REST API', tip: 'Пишу backend и интеграции' },
    { name: 'SOAP API', tip: 'Опыт enterprise-проектов' },
    { name: 'MongoDB' },
    { name: 'MySQL' },
    { name: 'PostgreSQL' },
    { name: 'RabbitMQ' },
    { name: 'Axios / Fetch' },
    { name: 'React Router' },
    { name: 'Jest' },
    { name: 'Storybook' },
    { name: 'Electron', badge: 'Изучаю сейчас' },
    { name: 'Figma' },
    { name: 'Docker' },
    { name: 'GitLab CI/CD' },
]

const StackTab = () => {
    return (
        <div>
            <SectionTitle>Технологический стек</SectionTitle>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stackItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow animate-fadeInUp"
                        style={{ animationDelay: `${idx * 80}ms`, animationFillMode: 'both' }}
                    >
                        <div className="flex items-center mb-4">
                            <i className={`${item.icon} ${item.color} text-2xl mr-3`}></i>
                            <h3 className="text-lg font-semibold text-neutral-800">{item.title}</h3>
                            {/* Бейдж уровня */}
                            {item.level && (
                                <span className="ml-3 px-2 py-0.5 rounded-full bg-primary-50 text-primary-700 text-xs font-medium border border-primary-100">
                                  {item.level}
                              </span>
                            )}
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
                            className="group relative px-4 py-1 bg-neutral-100 text-sm rounded-full border border-neutral-300 text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition cursor-default"
                        >
                            {skill.name}
                            {/* Бейдж "Изучаю сейчас" */}
                            {skill.badge && (
                                <span className="ml-2 px-2 py-0.5 bg-gradient-to-r from-pink-400 to-violet-400 text-white rounded-full text-[11px] font-semibold"> {skill.badge}</span>
                            )}
                            {/* Тултип */}
                            {skill.tip && (
                                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-neutral-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap shadow">
                                    {skill.tip}
                                </span>
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StackTab
