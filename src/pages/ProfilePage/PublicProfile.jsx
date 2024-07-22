import React from 'react'
import ProfileLayout from '../../components/Layouts/ProfileLayout'
import Posts from '../../components/Posts/Posts'


const PublicProfile = () => {
    return (
        <div>
            <ProfileLayout>
                <Posts />
            </ProfileLayout>
        </div>
    )
}

export default PublicProfile
