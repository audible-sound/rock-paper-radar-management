import React from 'react'

const ContentLayout = ({ children }) => {
    return (
        <div className='flex flex-col h-dvh bg-[#EDE8F5] bg-opacity-50 w-full pl-[4.5rem]'>
            {children}
        </div>
    )
}

export default ContentLayout
