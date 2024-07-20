import React from 'react'
import AuthorCard from '../ui/AuthorCard'

const Posts = () => {
    return (
        <div className='flex flex-wrap p-8 bg-[#EDE8F5] bg-opacity-50 w-screen h-screen'>
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
        </div>
    )
}

export default Posts
