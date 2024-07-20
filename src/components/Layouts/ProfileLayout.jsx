import React from 'react'
import UserLayout from './UserLayout'
import ProfileSection from '../Profile/ProfileSection'

const ProfileLayout = ({ children }) => {
    return (
        <UserLayout>
            <ProfileSection />
            {children}
        </UserLayout>
    )
}

export default ProfileLayout
