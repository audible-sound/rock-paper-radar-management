import AuthorCard from './AuthorCard'
import UtilsBar from '../ui/UtilsBar'
import { useEffect, useState } from 'react'
import userStore from "../../stores/userStore"
import LoadingSpinner from "../ui/LoadingSpinner"

const Posts = () => {
    const getCommunityPosts = userStore((state) => state.getCommunityPosts);
    const communityPosts = userStore((state) => state.communityPosts);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true)
            try {
                await getCommunityPosts()
            } catch (error) {
                console.error("Error fetching community posts:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchPosts()
    }, [getCommunityPosts]);

    useEffect(() => {
        setFilteredPosts(communityPosts);
    }, [communityPosts]);

    const handleFilter = ({ category, searchTerm, sortBy }) => {
        let filtered = [...communityPosts];

        if (category) {
            filtered = filtered.filter(post => post.PostTags.some(tag => tag.name === category));
        }

        if (searchTerm) {
            filtered = filtered.filter(post => 
                post.postTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.postContent.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (sortBy) {
            switch (sortBy) {
                case 'Latest':
                    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    break;
                case 'Oldest':
                    filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                    break;
                case 'Most Liked':
                    filtered.sort((a, b) => b.likes - a.likes);
                    break;
                default:
                    break;
            }
        }

        setFilteredPosts(filtered);
    };

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div>
            <UtilsBar onFilter={handleFilter} />
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-opacity-50 '>
                {filteredPosts.map(({ id, pictureUrl, postTitle, postContent, User, createdAt, PostTags }) => (
                    <AuthorCard
                        key={id}
                        postId={id}
                        pictureUrl={pictureUrl}
                        postTitle={postTitle}
                        postContent={postContent}
                        username={User.username}
                        createdAt={new Date(createdAt)}
                        tags={PostTags}
                        profilePictureUrl={User.UserProfile.profilePictureUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default Posts