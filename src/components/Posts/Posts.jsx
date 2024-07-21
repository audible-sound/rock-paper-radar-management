import React from 'react'
import AuthorCard from '../ui/AuthorCard'
import Header from '../ui/Header'
import UtilsBar from '../ui/UtilsBar'

const Posts = () => {
    return (
        <div>
            <UtilsBar />
            <div className='flex flex-wrap justify-self-auto p-4 bg-[#EDE8F5] bg-opacity-50 w-full h-screen'>
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
            </div>
        </div>

    )
}

export default Posts
