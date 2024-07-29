import ProfileLayout from "../../../components/Layouts/ProfileLayout"
import Posts from '../../../components/Posts/Posts'
import PersonalBar from '../../../components/Posts/PersonalBar'

const PersonalProfile = () => {
    return (
        <ProfileLayout>
            <PersonalBar />
            <Posts />
        </ProfileLayout>
    )
}

export default PersonalProfile
