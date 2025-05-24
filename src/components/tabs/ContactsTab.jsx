import React from 'react'
import SectionTitle from '../ui/SectionTitle'

const contacts = [
    {
        icon: 'call',
        text: '+7 (919) 999-13-94',
        link: 'tel:+79199991394',
    },
    {
        icon: 'mail',
        text: 's1vo13@yandex.ru',
        link: 'mailto:s1vo13@yandex',
    },
    {
        icon: 'fa-brands fa-github',
        text: 'github.com/s1vo',
        link: 'https://github.com/s1vo',
        isFa: true,
    },
    {
        icon: 'fa-brands fa-telegram',
        text: 'Предпочитаемый способ связи — Telegram',
        isFa: true,
        link: 'https://t.me/s1vo13',
    },
]

const ContactsTab = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <SectionTitle>Контакты</SectionTitle>

            <p className="text-center text-neutral-700 mb-10 text-lg">
                Открыт к новым проектам и интересным вызовам — давайте обсудим, как я могу быть полезен вашей команде
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contacts.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 bg-white border border-neutral-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition group"
                    >
                        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-primary-50 text-primary-600 text-xl shrink-0">
                            {item.isFa ? (
                                <i className={item.icon}></i>
                            ) : (
                                <span className="material-symbols-outlined">{item.icon}</span>
                            )}
                        </div>

                        <div className="flex flex-col justify-center">
                            {item.link ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base font-medium text-primary-700 hover:underline"
                                >
                                    {item.text}
                                </a>
                            ) : (
                                <span className="text-base text-neutral-800 font-medium">{item.text}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactsTab
