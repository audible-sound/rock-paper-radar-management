import ProfileLayout from "../../../components/Layouts/ProfileLayout"
import PersonalPosts from '../../../components/Posts/PersonalPosts'
import PersonalBar from '../../../components/Posts/PersonalBar'
import {useLocation} from 'react-router-dom'
import UserProtectedRoute from '../../../components/Navigation/UserProtectedRoute.jsx'
import EmployeeProtectedRoute from '../../../components/Navigation/EmployeeProtectedRoute.jsx'
import Blogs from '../../../components/Blog/Blogs'

const PersonalProfile = () => {
    const location = useLocation();
    const isEmployee = location.pathname.includes('admin') || location.pathname.includes('staff');
    if(isEmployee){
        return (
            <EmployeeProtectedRoute>
                <ProfileLayout>
                    <PersonalBar />
                    <Blogs isPersonalProfile={true}/>
                </ProfileLayout>
            </EmployeeProtectedRoute>
        )
    }else{
        return (
            <UserProtectedRoute>
                <ProfileLayout>
                    <PersonalBar />
                    <PersonalPosts />
                </ProfileLayout>
            </UserProtectedRoute>
        )
    }
}

export default PersonalProfile
