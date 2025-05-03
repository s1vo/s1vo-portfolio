import React, { useState } from 'react'
import Header from '../components/Header'
import TabMenu from '../components/TabMenu'
import AboutTab from '../components/tabs/AboutTab'
import ExperienceTab from '../components/tabs/ExperienceTab'
import StackTab from '../components/tabs/StackTab'
import PortfolioTab from '../components/tabs/PortfolioTab'
import ContactsTab from '../components/tabs/ContactsTab'

const TABS = {
    about: <AboutTab />,
    experience: <ExperienceTab />,
    stack: <StackTab />,
    portfolio: <PortfolioTab />,
    contacts: <ContactsTab />,
}

const Profile = () => {
    const [activeTab, setActiveTab] = useState('about')

    return (
        <div
            id="webcrumbs"
            className="min-h-screen bg-gradient-to-br from-primary-50 to-neutral-100 px-4 py-12 font-sans text-neutral-800 mb-3"
        >
            <div className="max-w-5xl mx-auto">
                <Header />

                <div className="bg-white rounded-4xl shadow-lg overflow-hidden border border-neutral-200 mt-6 h-auto flex flex-col mb-10">
                    <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
                    <div className="px-6 sm:px-8 pt-6 pb-8 overflow-y-auto flex-1">
                        {TABS[activeTab]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
