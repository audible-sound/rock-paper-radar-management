import React from 'react'

const Header = ({ title }) => {
    return (
        <div className='w-screen border-solid border-2 p-6 '>
            <span className='text-2xl'><b>{title}</b></span>
        </div>
    )
}

export default Header
