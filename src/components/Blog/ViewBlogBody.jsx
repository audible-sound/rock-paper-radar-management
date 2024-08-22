import Lucas from '../../assets/images/Lucas.jpg'
import travel from '../../assets/images/travel-pic.png'
import mainAxios from '../../api/mainAxios'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import LoadingSpinner from '../ui/LoadingSpinner'

const ViewBlogBody = ({blogId}) => {
    const [blogData, setBlogData] = useState(null);

    const getBlogDetails = async (blogId) => {
        try {
            const response = await mainAxios.get(`/blog/${blogId}`, {
                headers: {
                    authorization: Cookies.get('token'),
                }
            });
            const data = response.data.data;
            setBlogData(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBlogDetails(blogId);
    }, [blogId]);

    if(!blogData){
        return <LoadingSpinner />
    }

    return (
        <div className='flex flex-col w-full h-full bg-white'>
            <div className='flex flex-row items-center px-5 py-2'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <b className='text-lg'>{blogData.blogTitle}</b>
                </div>
            </div>
            <div className="flex flex-col w-full h-30 border-solid border-2">
                <img src={blogData.blogPicture} alt="" className="object-cover h-64" />
            </div>

            <div className="flex flex-col w-full h-30">
                <div className="flex flex-col w-full p-5 text-gray-400">
                    Published On {new Date(blogData.createdAt).toLocaleDateString()} by {blogData.username}
                </div>


                <div className="flex flex-col w-full h-30 p-5 text-2xl">
                    <p className="text-base"><b>{blogData.blogContent}</b>
                    </p>
                </div>
            </div>
        </div>






    )
}

export default ViewBlogBody