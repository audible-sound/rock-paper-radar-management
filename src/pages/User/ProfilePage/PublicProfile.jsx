import ProfileLayout from '../../../components/Layouts/ProfileLayout'
import Posts from '../../../components/Posts/Posts'


const PublicProfile = () => {
    return (
        <UserProtectedRoute>
            <ProfileLayout>
                {/* <Posts /> */}
            </ProfileLayout>
        </UserProtectedRoute>
    )
}

export default PublicProfile
