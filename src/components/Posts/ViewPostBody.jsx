import Badge from '../ui/Badge'
import DotMenu from "../../assets/images/DotMenu.svg"
import PersonalComments from './PersonalComments'
import { useEffect } from 'react'
import userStore from "../../stores/userStore"

const ViewPostBody = ({ postId }) => {
    const getPostDetails = userStore((state) => state.getPostDetails);
    const postDetails = userStore((state) => state.postDetails);
    useEffect(() => {
        getPostDetails(postId);
    }, []);
    return (
        <div className='flex flex-col w-full h-full bg-white'>
            <div className='flex flex-row items-center border-solid border-x-2 px-8 py-2'>
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-14 h-14 rounded-full ring ring-offset-2">
                        <img src={(postDetails) ? postDetails.authorDetails.profilePictureUrl : ''} alt="" />
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center w-full px-8 py-2'>
                    <b className='text-lg'>{(postDetails) ? postDetails.authorDetails.username : ''}</b>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-black ml-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
                        <circle cx="12" cy="9" r="3" />
                    </svg>
                    <b>{(postDetails) ? postDetails.post.location : ''}</b>
                </div>
            </div>
            <div className="flex flex-col w-full h-30 border-solid border-x-2">
                <img src={(postDetails) ? postDetails.post.pictureUrl : ''} alt="" className="object-cover h-fit" />
            </div>

            <div className="flex flex-col w-full h-30">
                <div className="flex flex-row justify-between w-full py-5 px-5 text-gray-400 border-x-2">
                    <b className='text-black text-2xl'>{(postDetails) ? postDetails.post.postTitle : ''}</b>
                    <section>Published On {(postDetails) ? `${String(new Date(postDetails.post.createdAt).getDate()).padStart(2, '0')}/${String(new Date(postDetails.post.createdAt).getMonth() + 1).padStart(2, '0')}/${new Date(postDetails.post.createdAt).getFullYear()}` : ''}</section>
                </div>
                <div className="flex flex-col w-full h-30 px-5 border-x-2 text-2xl">
                    <p className="text-base">
                        {(postDetails) ? postDetails.post.postContent : ''}
                    </p>
                    <div className="flex p-5">
                        {(!postDetails) ? '' : postDetails.post.PostTags.map((tag, index) => {
                            return <Badge category={tag.name} key={index} />
                        }
                        )}
                    </div>
                </div>
                <div className="flex flex-row items-center w-full h-30 p-5 border-x-2 border-b-2 text-2xl">
                    <button className="p-4 w-14 h-14 hover:pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-gray-500"
                            fill="white"
                            viewBox="0 0 24 24"
                            stroke="black">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                    <div className="px-5 text-lg">
                        <b>{(postDetails) ? postDetails.post.postLikes : ''} Likes</b>
                    </div>
                    <div className='p-4'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 4h16c1.104 0 2 .896 2 2v12c0 1.104-.896 2-2 2H6l-4 4v-4H4c-1.104 0-2-.896-2-2V6c0-1.104.896-2 2-2z" />
                        </svg>

                    </div>
                    <div className="px-5 text-lg">
                        <b>4,000 Comments</b>
                    </div>
                    <img src={DotMenu} alt="" className="w-8 ml-auto" />
                </div>
                <div className="flex flex-row items-center w-full h-30 p-5 border-x-2 border-b-2 text-2xl ">
                    <input
                        type="text"
                        placeholder="Type a comment"
                        className="input input-bordered bg-[#E6E6E6] w-full max-w-7xl" />
                    <button className="btn w-14 h-14 ml-auto bg-transparent border-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 9l18-6-7 18-3-9-8-3z" />
                        </svg>
                    </button>
                </div>
                <PersonalComments />
            </div>
        </div>
    )
}

export default ViewPostBody