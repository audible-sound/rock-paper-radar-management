import ProfileLayout from "../../../components/Layouts/ProfileLayout"
import PersonalPosts from '../../../components/Posts/PersonalPosts'
import PersonalBar from '../../../components/Posts/PersonalBar'
import {useLocation} from 'react-router-dom'
import UserProtectedRoute from '../../../components/Navigation/UserProtectedRoute.jsx'
import EmployeeProtectedRoute from '../../../components/Navigation/EmployeeProtectedRoute.jsx'
import Blogs from '../../../components/Blog/Blogs'
import { useEffect } from 'react'
import staffStore from "../../../stores/staffStore.js"

const PersonalProfile = () => {
    const location = useLocation();
    const isEmployee = location.pathname.includes('admin') || location.pathname.includes('staff');
    const getMyBlogs = staffStore((state) => state.getMyBlogs);

    useEffect(() => {
        const fetchMyBlogs = async () => {
            await getMyBlogs();
        }
        fetchMyBlogs();
    }, [getMyBlogs])

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
