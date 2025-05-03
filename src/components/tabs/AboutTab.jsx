import React from 'react'

import Avatar from '../../assets/photo.jpg';
import SectionTitle from '../ui/SectionTitle'
const AboutTab = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Фото и навыки */}
            <div className="md:col-span-1">
                <div className="rounded-xl overflow-hidden mb-4 transform transition-transform hover:scale-105">
                    <img
                        src={Avatar}
                        alt="Фото профиля"
                        className="w-full object-cover h-64 md:h-auto"
                    />
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                    <SectionTitle>Ключевые навыки</SectionTitle>
                    <ul className="space-y-2">
                        {[
                            'Разработка на PHP и JS',
                            'Интеграция REST и SOAP API',
                            'Архитектура баз данных',
                            'UI/UX-дизайн и адаптивная вёрстка',
                            'Код-ревью',
                            'Проектирование архитектуры и принятие технических решений',
                            'CI/CD и автоматизация процессов',
                            'Техническая документация и работа с командой',
                        ].map((skill) => (
                            <li key={skill} className="flex items-center">
                <span className="material-symbols-outlined mr-2 text-primary-500">
                  check_circle
                </span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Описание и образование */}
            <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-primary-700">Привет, я Михаил!</h2>
                <p className="text-lg mb-6 leading-relaxed">
                    Я Fullstack-разработчик с уклоном в Frontend и более чем 7-летним опытом. Создаю веб- и мобильные приложения, интегрирую API и проектирую архитектуру систем. Уделяю большое внимание чистоте кода, пользовательскому опыту и технической документации.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                    Уверенно владею React, React Native, Node.js, PHP, а также работаю с базами данных и брокерами сообщений. Постоянно развиваюсь, осваиваю новые технологии (TypeScript, Electron, Redux, Storybook) и участвую в технических интервью, код-ревью и внедрении CI/CD.
                </p>
                <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-lg mb-2">Образование</h3>

                    <p className="mb-1">
                        <strong>МГУТУ им. К.Г. Разумовского, Москва</strong>
                    </p>
                    <p className="mb-2">Прикладная информатика, 2019 — среднее специальное</p>

                    <p className="mb-1">
                        <strong>МГУТУ им. К.Г. Разумовского, Москва</strong>
                    </p>
                    <p className="mb-3">Программирование в компьютерных системах, 2016 — техник-программист</p>

                    <p className="mb-1"><strong>Курсы и сертификаты</strong></p>
                    <ul className="list-disc ml-5 space-y-1">
                        <li>Полный курс по JavaScript + React — Udemy (2022)</li>
                        <li>Веб-дизайн в Figma, основы UX/UI (2022)</li>
                        <li>ReactJS, HTML5/CSS3, PHP, Yii2, SQL — Stepik, Нетология (2017)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutTab
