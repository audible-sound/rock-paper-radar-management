import React from 'react'
import UserLayout from './UserLayout'
import AdminLayout from './AdminLayout'
import ProfileSection from '../Profile/ProfileSection'
import AdminProfileSection from '../Profile/AdminProfileSection'
import { useLocation } from 'react-router-dom';

const ProfileLayout = ({ children }) => {
    const location = useLocation();
    const isEmployee = location.pathname.includes('admin') || location.pathname.includes('staff');
    if(isEmployee){
        return (
            <AdminLayout>
                <AdminProfileSection />
                {children}
            </AdminLayout>
        )
    }else{
        return (
            <UserLayout>
                <ProfileSection />
                {children}
            </UserLayout>
        )

    }
}

export default ProfileLayout
