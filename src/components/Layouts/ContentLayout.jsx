import React from 'react'

const ContentLayout = ({ children }) => {
    return (
        <div className='flex flex-col bg-[#EDE8F5] bg-opacity-50 h-screen w-full'>
            {children}
        </div>
    )
}

export default ContentLayout
