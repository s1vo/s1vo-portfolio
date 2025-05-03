// src/components/ui/SectionTitle.jsx
import React from 'react'

const SectionTitle = ({ children }) => {
    return (
        <div className="relative inline-block mb-8">
            <h2 className="text-3xl font-bold text-neutral-900">{children}</h2>
            <span className="absolute left-0 -bottom-1 w-3/4 h-[4px] bg-gradient-to-r from-primary-500 to-primary-300 rounded-full"></span>
        </div>
    )
}

export default SectionTitle
