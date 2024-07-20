import React from 'react'

const ContentLayout = ({ children }) => {
    return (
        <div className='flex flex-col h-screen'>
            {children}
        </div>
    )
}

export default ContentLayout
