import Badge from '../ui/Badge'
import { useEffect, useState } from 'react'
import staffStore from "../../stores/staffStore"
import LoadingSpinner from "../ui/LoadingSpinner";

const PostBody = ({ postId }) => {
    const getPostDetails = staffStore((state) => state.getPostDetails);
    const postDetails = staffStore((state) => state.postDetails);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPostDetails = async () => {
            setIsLoading(true);
            await getPostDetails(postId);
            setIsLoading(false);
        };

        fetchPostDetails();
    }, [postId]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className='flex flex-col w-full h-full bg-white'>
            <div className='flex flex-row items-center border-solid border-x-2 px-8 py-4'>
                <div
                    className="flex items-center gap-4"
                >
                    <div className="avatar">
                        <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-2">
                            <img src={postDetails?.User.UserProfile.profilePictureUrl} alt="" />
                        </div>
                    </div>
                    <b className='text-lg'>{postDetails?.User.username}</b>
                </div>
                <div className='flex items-center ml-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
                        <circle cx="12" cy="9" r="3" />
                    </svg>
                    <b>{postDetails?.location}</b>
                </div>
            </div>

            <div className="w-full border-solid border-x-2 max-h-[500px] overflow-hidden">
                <img src={postDetails?.pictureUrl} alt="" className="object-contain w-full h-full" />
            </div>

            <div className="flex flex-col w-full">
                <div className="flex justify-between items-center w-full py-5 px-5 text-gray-400 border-x-2">
                    <b className='text-black text-2xl'>{postDetails?.postTitle}</b>
                    <span>Published On {postDetails && new Date(postDetails.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex flex-col w-full px-5 border-x-2">
                    <p className="text-base mb-4">{postDetails?.postContent}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {postDetails?.PostTags.map((tag, index) => (
                            <Badge category={tag.name} key={tag.id || index} />
                        ))}
                    </div>
                </div>
                <div className="flex items-center w-full p-5 border-x-2 border-b-2">
                    <span className="font-bold">
                        {postDetails?.postLikes} {postDetails?.postLikes === 1 ? "Like" : "Likes"}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PostBody