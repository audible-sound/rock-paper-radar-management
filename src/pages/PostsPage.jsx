import React from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const PostsPage = () => {
    return (
        <div className='flex flex-row w-screen h-screen' data-theme="light">
            <Navbar />
            <Hero />
        </div>
    )
}

export default PostsPage
