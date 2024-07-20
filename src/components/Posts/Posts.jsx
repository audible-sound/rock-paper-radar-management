import React from 'react'
import AuthorCard from '../ui/AuthorCard'

const Posts = () => {
    return (
        <div className='flex flex-wrap justify-self-auto p-4 bg-[#EDE8F5] bg-opacity-50 w-screen h-screen'>
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
        </div>
    )
}

export default Posts
