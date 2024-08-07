import ProfileLayout from "../../../components/Layouts/ProfileLayout"
import Posts from '../../../components/Posts/Posts'
import PersonalBar from '../../../components/Posts/PersonalBar'
import UserProtedRoute from '../../../components/Navigation/UserProtectedRoute.jsx'

const PersonalProfile = () => {
    return (
        <UserProtedRoute>
            <ProfileLayout>
                <PersonalBar />
                <Posts />
            </ProfileLayout>
        </UserProtedRoute>
    )
}

export default PersonalProfile
