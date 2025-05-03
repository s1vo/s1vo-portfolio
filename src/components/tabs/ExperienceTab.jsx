import React from 'react'
import SectionTitle from '../ui/SectionTitle'

const experiences = [
    {
        title: 'Ведущий инженер-программист',
        company: 'ООО «РусЭнергоСервис»',
        location: 'Москва',
        period: 'Январь 2018 — настоящее время',
        description: `Ключевой участник команды разработки. Занимаюсь созданием и поддержкой информационных систем высокого уровня.`,
        responsibilities: [
            'Разработка и интеграция API (SOAP, REST)',
            'Проектирование архитектуры баз данных',
            'Разработка интерфейсов на React и React Native',
            'Работа с брокерами сообщений (RabbitMQ)',
            'Код-ревью и написание документации',
        ],
        stack: ['React', 'React Native', 'Node.js', 'Express.js', 'RabbitMQ', 'SQL', 'REST', 'SOAP'],
    },
    {
        title: 'Главный специалист — Отдел ИТ',
        company: 'ГКУ МО "АРКИ"',
        location: 'Москва',
        period: 'Ноябрь 2022 — Ноябрь 2024',
        description: 'Разработка, оптимизация и внедрение новых функций в рамках существующей системы.',
        responsibilities: [
            'Разработка новых компонентов и улучшение UI',
            'Интеграция REST и SOAP API',
            'Работа с базами данных',
            'Участие в код-ревью и обсуждении архитектурных решений',
        ],
        stack: ['JavaScript', 'React', 'UI/UX', 'REST', 'SOAP'],
    },
    {
        title: 'Frontend-разработчик',
        company: 'ГБУ МО "ЦРЦТ"',
        location: 'Москва',
        period: 'Ноябрь 2024 — Апрель 2025',
        description: 'Разработка и поддержка портальных сервисов государственных услуг.',
        responsibilities: [
            'Интеграция с гос. системами через REST и SOAP',
            'Проектирование функциональных модулей',
            'Оптимизация производительности',
            'Работа с SQL и архитектурой данных',
        ],
        stack: ['React', 'REST', 'SOAP', 'SQL', 'ГИС'],
    },
]

const ExperienceTab = () => {
    return (
        <div>
            <SectionTitle>Опыт работы</SectionTitle>

            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-all"
                    >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
                            <div>
                                <h3 className="text-xl font-semibold text-neutral-900">{exp.title}</h3>
                                <p className="text-sm text-primary-700 font-medium">{exp.company}</p>
                            </div>
                            <div className="bg-primary-100 text-primary-700 text-sm font-medium px-4 py-1 rounded-full w-max">
                                {exp.period}
                            </div>
                        </div>

                        <p className="text-sm text-neutral-700 mb-4">{exp.description}</p>

                        <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-700 mb-4">
                            {exp.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-3">
                            {exp.stack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-neutral-100 text-sm text-neutral-700 px-3 py-1 rounded-full border border-neutral-200 hover:bg-primary-50 hover:text-primary-700 transition"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperienceTab
