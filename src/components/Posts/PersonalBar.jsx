import React from 'react'
import { Link } from 'react-router-dom'

const PersonalBar = () => {
    return (
        <div className='flex flex-row bg-white items-center justify-between border-solid border-2 px-8 py-4'>
            <span className='text-2xl'><b>Your Posts</b></span>
            <Link to="/posts-create" className='btn bg-[#7091E6] text-white'>Add Post</Link>
        </div>
    )
}

export default PersonalBar
