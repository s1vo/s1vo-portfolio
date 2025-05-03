import React from 'react'

const tabs = [
    { key: 'about', label: 'Обо мне' },
    { key: 'experience', label: 'Опыт работы' },
    { key: 'stack', label: 'Технический стек' },
    { key: 'portfolio', label: 'Проекты' },
    { key: 'contacts', label: 'Контакты' },
]

const TabMenu = ({ activeTab, setActiveTab }) => (
    <div className="flex flex-wrap border-b border-neutral-200">
        {tabs.map(({ key, label }) => (
            <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`py-4 px-6 font-medium focus:outline-none transition-colors ${
                    activeTab === key
                        ? 'text-primary-700 border-b-2 border-primary-500'
                        : 'text-neutral-500 hover:text-primary-600'
                }`}
            >
                {label}
            </button>
        ))}
    </div>
)

export default TabMenu
