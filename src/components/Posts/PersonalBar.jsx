import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const PersonalBar = () => {
    const location = useLocation();
    const isEmployee = location.pathname.includes('admin') || location.pathname.includes('staff');
    if(isEmployee){
        return (
            <div className='flex flex-row bg-white items-center justify-between border-solid border-t-2 px-8 py-4'>
                <span className='text-2xl'><b>Your Blogs</b></span>
                <Link to="/admin/blog-create" className='btn bg-[#7091E6] text-white hover:cursor-pointer'>Add Blog</Link>
            </div>
        )
    }else{
        return (
            <div className='flex flex-row bg-white items-center justify-between border-solid border-t-2 px-8 py-4'>
                <span className='text-2xl'><b>Your Posts</b></span>
                <Link to="/user/post-create" className='btn bg-[#7091E6] text-white hover:cursor-pointer'>Add Post</Link>
            </div>
        )
    }
}

export default PersonalBar
