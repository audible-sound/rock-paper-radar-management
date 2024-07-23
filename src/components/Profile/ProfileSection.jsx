import React from 'react'
import profimg from "../../assets/images/Wavy-pic.jpg"
import face from "../../assets/images/Lucas.jpg"
import DotMenu from "../../assets/images/DotMenu.svg"
import EditLogo from "../../assets/images/EditLogo.svg"

const ProfileSection = () => {
    return (
        <div className='flex flex-col bg-white w-full'>
            <img src={profimg} alt="" className='object-cover h-32 min-w-0' />
            <div className='flex flex-row items-center justify-between p-4'>
                <div className='flex flex-row items-center'>
                    <div className='avatar'>
                        <div className='ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 m-2 mr-8'>
                            <img src={face} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-3xl font-bold mb-2'>Lucas Monroe</span>
                        <span className='text-xl text-[#ABABAB]'>Joined in 24/12/2024</span>
                    </div>
                </div>

                <div className='flex flex-row items-center w-fit'>
                    <img src={EditLogo} alt="" className='w-12 mr-4' />
                    <span className='text-2xl mb-2'>100 Posts</span>
                    <img src={DotMenu} alt="" className='w-12 ml-4' />
                </div>
            </div>
        </div>
    )
}

export default ProfileSection
