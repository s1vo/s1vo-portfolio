import React from 'react'

const Header = () => (
    <header className="mb-7 mt-10 text-center">
        <h1 className="text-5xl font-bold mb-3 text-primary-800 transition-all duration-300 hover:text-primary-600">Михаил Сивоконь</h1>
        <p className="text-xl text-neutral-600">Full Stack Разработчик</p>
        <div className="flex justify-center mt-6 space-x-4">
            <a href="#" className="text-neutral-500 hover:text-primary-600 transition-transform hover:scale-110">
                <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a href="#" className="text-neutral-500 hover:text-primary-600 transition-transform hover:scale-110">
                <i className="fa-brands fa-telegram text-2xl"></i>
            </a>
            <a href="#" className="text-neutral-500 hover:text-primary-600 transition-transform hover:scale-110">
                <span className="material-symbols-outlined text-2xl">mail</span>
            </a>
        </div>
    </header>
)

export default Header
