import React from 'react'
import AuthorCard from '../ui/AuthorCard'
import Header from '../ui/Header'
import UtilsBar from '../ui/UtilsBar'

const Posts = () => {
    return (
        <div>
            <UtilsBar />
            <div className='grid grid-cols-4 bg-opacity-50 '>
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
