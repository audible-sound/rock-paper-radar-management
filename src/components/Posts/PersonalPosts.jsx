import AuthorCard from '../Posts/AuthorCard'
import userStore from "../../stores/userStore"
import { useEffect } from 'react'
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

const PersonalPosts = () => {
    const username = userStore((state) => state.username);
    const getUserPosts = userStore((state) => state.getUserPosts);
    const userProfile = userStore((state) => state.userProfile);
    const posts = userStore((state) => state.profilePosts);
    const [searchParams] = useSearchParams();
    const profileUsername = searchParams.get('u');
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
        if (profileUsername) {
            getUserPosts(profileUsername);
        } else if (pathname === '/user/profile') {
            getUserPosts(username);
        } else {
            navigate('/user/profile', { replace: true });
        }
    }, [username, getUserPosts, profileUsername, pathname]);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
            {(!posts) ? 'No posts yet' : (posts.map((element, index) => {
                return (<AuthorCard
                    key={index}
                    postId={element.id}
                    postTitle={element.postTitle}
                    pictureUrl={element.pictureUrl}
                    postContent={element.postContent}
                    createdAt={new Date(element.createdAt)}
                    tags={element.PostTags}
                    username={userProfile.username}
                    profilePictureUrl={userProfile.profilePictureUrl}
                />)
            }))}
        </div>

    )
}

export default PersonalPosts