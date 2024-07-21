import React from 'react'
import profimg from "../../assets/images/Wavy-pic.jpg"
import face from "../../assets/images/Lucas.jpg"

const ProfileSection = () => {
    return (
        <div className='flex flex-col bg-white w-[94.3]'>
            <img src={profimg} alt="" className='object-cover h-32 min-w-0' />
            <div className='flex flex-row items-center justify-between p-4 min-w-0 flex-wrap'>
                <div className='flex flex-row items-center'>
                    <div className='avatar'>
                        <div className='ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2 m-4'>
                            <img src={face} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span>Lucas Monroe</span>
                        <span>Joined in 24/12/2024</span>
                    </div>
                </div>

                <div className='flex flex-row min-w-0'>
                    <span>100 Posts</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileSection
