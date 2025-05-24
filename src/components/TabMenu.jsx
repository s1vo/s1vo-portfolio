import React from 'react'

const tabs = [
    { key: 'about', label: 'Обо мне' },
    { key: 'experience', label: 'Опыт' },
    { key: 'stack', label: 'Навыки' },
    { key: 'portfolio', label: 'Работы' },
]

const TabMenu = ({ activeTab, setActiveTab }) => (
    <div className="relative">
        {/* Fade для мобилы */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-6 z-10 block md:hidden"
             style={{background: 'linear-gradient(90deg, #fff 70%, rgba(255,255,255,0))'}}/>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-6 z-10 block md:hidden"
             style={{background: 'linear-gradient(-90deg, #fff 70%, rgba(255,255,255,0))'}}/>

        {/* Мобильная версия */}
        <nav className="
      flex md:hidden overflow-x-auto gap-2 px-2 py-2
      bg-white scrollbar-hide rounded-xl
    ">
            {tabs.map(({ key, label }) => (
                <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`
            px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap transition
            ${activeTab === key
                        ? 'bg-[#3576F5] text-white'
                        : 'bg-neutral-100 text-neutral-400'}
          `}
                    style={{ minWidth: '85px' }}
                >
                    {label}
                </button>
            ))}
        </nav>

        {/* Десктопная версия */}
        <div className="hidden md:flex border-b border-neutral-200 bg-white">
            {tabs.map(({ key, label }) => (
                <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`py-4 px-6 font-medium focus:outline-none transition-colors text-base
            ${
                        activeTab === key
                            ? 'text-primary-700 border-b-2 border-primary-500'
                            : 'text-neutral-500 hover:text-primary-600'
                    }`}
                >
                    {label}
                </button>
            ))}
        </div>
    </div>
)

export default TabMenu
