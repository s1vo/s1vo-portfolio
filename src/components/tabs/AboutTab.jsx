import React from 'react'
import Avatar from '../../assets/photo.jpg';
import SectionTitle from '../ui/SectionTitle'

// Для анимации (можно также использовать framer-motion для супер-гладкости)
const avatarAnimationClass =
    'transition-transform duration-700 ease-in-out transform hover:scale-105 motion-safe:animate-fadeInUp shadow-lg';

const skills = [
    'Разработка на PHP и JS',
    'Интеграция REST и SOAP API',
    'Архитектура баз данных',
    'UI/UX-дизайн и адаптивная вёрстка',
    'Код-ревью',
    'Проектирование архитектуры и принятие технических решений',
    'CI/CD и автоматизация процессов',
    'Техническая документация и работа с командой',
];

const AboutTab = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Фото и навыки */}
            <div className="md:col-span-1 flex flex-col items-center md:items-stretch">
                <div className="mb-4 w-32 h-32 sm:w-36 sm:h-36 md:w-full md:h-auto flex justify-center items-center mx-auto md:mx-0">
                    <img
                        src={Avatar}
                        alt="Фото профиля"
                        className={
                            "rounded-full object-cover w-32 h-32 sm:w-36 sm:h-36 md:rounded-xl md:w-full md:h-auto " +
                            avatarAnimationClass
                        }
                        style={{ boxShadow: '0 8px 32px rgba(52,101,255,0.13)' }}
                    />
                </div>
                <div className="bg-primary-50 p-4 rounded-lg w-full">
                    <SectionTitle>Ключевые навыки</SectionTitle>
                    {/* На мобиле компактно и чипсами, на десктопе как раньше */}
                    <ul className="flex flex-wrap gap-2 md:block md:space-y-2 md:gap-0 justify-center md:justify-start mt-2 md:mt-0">
                        {skills.map((skill) => (
                            <li
                                key={skill}
                                className="flex items-center bg-white md:bg-transparent px-3 py-1 rounded-full md:rounded-none text-xs md:text-base font-medium shadow-sm md:shadow-none border border-primary-100 md:border-0"
                            >
                <span className="material-symbols-outlined mr-2 text-primary-500 text-base md:text-xl">
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary-700 text-center md:text-left">
                    Привет, я Михаил!
                </h2>
                <p className="text-base sm:text-lg mb-4 md:mb-6 leading-relaxed text-center md:text-left">
                    Я Fullstack-разработчик с уклоном в Frontend и более чем 7-летним опытом. Создаю веб- и мобильные приложения, интегрирую API и проектирую архитектуру систем. Уделяю большое внимание чистоте кода, пользовательскому опыту и технической документации.
                </p>
                <p className="text-base sm:text-lg mb-4 md:mb-6 leading-relaxed text-center md:text-left">
                    Уверенно владею React, React Native, Node.js, PHP, а также работаю с базами данных и брокерами сообщений. Постоянно развиваюсь, осваиваю новые технологии (TypeScript, Electron, Redux, Storybook) и участвую в технических интервью, код-ревью и внедрении CI/CD.
                </p>
                <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 max-w-xl mx-auto md:mx-0">
                    <h3 className="font-semibold text-base md:text-lg mb-2 text-center md:text-left">Образование</h3>
                    <p className="mb-1 text-sm md:text-base text-center md:text-left">
                        <strong>МГУТУ им. К.Г. Разумовского, Москва</strong>
                    </p>
                    <p className="mb-2 text-sm md:text-base text-center md:text-left">
                        Прикладная информатика, 2019 — среднее специальное
                    </p>
                    <p className="mb-1 text-sm md:text-base text-center md:text-left">
                        <strong>МГУТУ им. К.Г. Разумовского, Москва</strong>
                    </p>
                    <p className="mb-3 text-sm md:text-base text-center md:text-left">
                        Программирование в компьютерных системах, 2016 — техник-программист
                    </p>
                    <p className="mb-1 text-sm md:text-base font-medium text-center md:text-left">
                        Курсы и сертификаты
                    </p>
                    <ul className="list-disc ml-5 text-sm md:text-base space-y-1 text-center md:text-left">
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
