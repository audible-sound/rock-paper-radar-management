import React from 'react'
import Header from '../ui/Header'

const ContentLayout = ({ children, title }) => {
    return (
        <div>
            <Header title={title} />
            {children}
        </div>
    )
}

export default ContentLayout
