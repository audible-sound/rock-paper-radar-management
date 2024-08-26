import mainAxios from '../../api/mainAxios'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import LoadingSpinner from '../ui/LoadingSpinner'

const ViewBlogBody = ({ blogId }) => {
    const [blogData, setBlogData] = useState(null);

    const getBlogDetails = async (blogId) => {
        try {
            const response = await mainAxios.get(`/blog/post/${blogId}`, {
                headers: {
                    authorization: Cookies.get('token'),
                }
            });
            const data = response.data.data;
            setBlogData(data[0]);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBlogDetails(blogId);
    }, [blogId]);

    if (!blogData) {
        return <LoadingSpinner />
    }

    return (
        <div className='flex flex-col w-full h-screen bg-white overflow-y-auto'>
            <div className='flex flex-row items-center px-5 py-2'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <b className='text-lg'>{blogData.blogTitle}</b>
                </div>
            </div>
            <div className="flex-shrink-0">
                <img src={blogData.blogPicture} alt="" className="w-full h-64 object-cover" />
            </div>
            <div className="flex flex-col flex-grow p-5">
                <div className="text-gray-400 mb-4">
                    Published On {new Date(blogData.createdAt).toLocaleDateString()} by {blogData.staff.username}
                </div>
                <div className="flex-grow">
                    <p className="text-base">{blogData.blogContent}</p>
                </div>
            </div>
        </div>
    )
}

export default ViewBlogBody