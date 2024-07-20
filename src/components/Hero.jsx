import React from 'react'

import Header from './ui/Header'
import UtilsBar from './ui/UtilsBar'
import Posts from './Posts/Posts'


const Hero = () => {
    return (
        <div className='h-screen w-screen'>
            <Header
                title={"Community"}
            />
            <UtilsBar />
            <Posts />
        </div>
    )
}

export default Hero
