import ProfileLayout from '../../../components/Layouts/ProfileLayout'
import UserProtectedRoute from '../../../components/Navigation/UserProtectedRoute'
import PersonalPosts from '../../../components/Posts/PersonalPosts'

const PublicProfile = () => {
    return (
        <UserProtectedRoute>
            <ProfileLayout>
                <PersonalPosts />
            </ProfileLayout>
        </UserProtectedRoute>
    )
}

export default PublicProfile
