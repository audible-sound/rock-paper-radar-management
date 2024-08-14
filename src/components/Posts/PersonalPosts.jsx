import AuthorCard from '../Posts/AuthorCard'
import userStore from "../../stores/userStore"
import { useEffect } from 'react'

const PersonalPosts = () => {
    const username = userStore((state) => state.username);
    const getUserPosts = userStore((state) => state.getUserPosts);
    const userProfile = userStore((state) => state.userProfile);
    const posts = userStore((state) => state.profilePosts);
    useEffect(() => {
        getUserPosts(username);
    }, []);
    return (
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-opacity-50 '>
            {(!posts) ? 'No posts yet' : (posts.map((element, index) => {
                return (<AuthorCard 
                    key={index}
                    postId={element.id}
                    postTitle = {element.postTitle}
                    pictureUrl = {element.pictureUrl}
                    postContent={element.postContent}
                    createdAt={new Date(element.createdAt)}
                    tags = {element.PostTags}
                    username = {userProfile.username}
                    profilePictureUrl = {userProfile.profilePictureUrl}
                />)
            }))}
        </div>

    )
}

export default PersonalPosts
