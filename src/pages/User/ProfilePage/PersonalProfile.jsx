import ProfileLayout from "../../../components/Layouts/ProfileLayout"
import PersonalPosts from '../../../components/Posts/PersonalPosts'
import PersonalBar from '../../../components/Posts/PersonalBar'
import UserProtectedRoute from '../../../components/Navigation/UserProtectedRoute.jsx'

const PersonalProfile = () => {
    return (
        <UserProtectedRoute>
            <ProfileLayout>
                <PersonalBar />
                <PersonalPosts />
            </ProfileLayout>
        </UserProtectedRoute>
    )
}

export default PersonalProfile
