import React from 'react'

const Header = ({ title }) => {
    return (
        <div className='w-full border-solid border-2 p-4 '>
            <span className='text-2xl'><b>{title}</b></span>
        </div>
    )
}

export default Header
