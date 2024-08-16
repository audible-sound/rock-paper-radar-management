import ProfileLayout from '../../../components/Layouts/ProfileLayout'
import UserProtectedRoute from '../../../components/Navigation/UserProtectedRoute'
import PersonalPosts from '../../../components/Posts/PersonalPosts'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import userStore from '../../../stores/userStore'
import LoadingSpinner from "../../../components/ui/LoadingSpinner";

const PublicProfile = () => {
    const [params] = useSearchParams();
    const usernameParam = params.get('u');
    const navigate = useNavigate();
    const username = userStore((state) => state.username);
    const getPublicProfile = userStore((state) => state.getPublicProfile);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            setIsLoading(true);
            if (usernameParam === username) {
                navigate('/user/profile', { replace: true });
            } else if (usernameParam) {
                await getPublicProfile(usernameParam);
            }
            setIsLoading(false);
        };

        fetchProfile();
    }, [usernameParam, username, navigate, getPublicProfile]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <UserProtectedRoute>
            <ProfileLayout>
                <PersonalPosts />
            </ProfileLayout>
        </UserProtectedRoute>
    )
}

export default PublicProfile