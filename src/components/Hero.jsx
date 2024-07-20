import React from 'react'

import Header from './ui/Header'
import UtilsBar from './ui/UtilsBar'
import Posts from './Posts'


const Hero = () => {
    return (
        <div>
            <Header
                title={"Community"}
            />
            <UtilsBar />
            <Posts />
        </div>
    )
}

export default Hero
