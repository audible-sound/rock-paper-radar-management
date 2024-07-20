import React from 'react'
import profimg from "../../assets/images/Wavy-pic.jpg"

const ProfileSection = () => {
    return (
        <div className='flex flex-col bg-white'>
            <img src={profimg} alt="" className='object-cover h-32' />
            <div className='flex flex-row'>
                <img src="" alt="" />
                <div className='flex flex-col'>
                    <p>Hi 1</p>
                    <p>Hi 2</p>
                </div>
                <div className='flex flex-row'>
                    <img src="" alt="" />
                    <p>Hi 3</p>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProfileSection
