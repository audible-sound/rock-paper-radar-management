import BlogCard from "./BlogCard"
import { useState, useEffect } from "react"
import staffStore from "../../stores/staffStore"
import LoadingSpinner from "../ui/LoadingSpinner"

const Blogs = () => {
    const getBlogs = staffStore((state) => state.getBlogs);
    const blogs = staffStore((state) => state.blogs);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            setIsLoading(true);
            try{
                await getBlogs();
            }catch(error){
                console.error("Error fetching blogs:", error);
            }finally{
                setIsLoading(false);
            }
        }

        fetchBlogs();
    }, [getBlogs]);

    if(isLoading){
        return <LoadingSpinner />
    }

return (
    <div>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-opacity-50 '>
            {blogs.map(({ id, blogPicture, blogTitle, blogContent}) => {
                return (<BlogCard
                    blogId={id}
                    image={blogPicture}
                    title={blogTitle}
                    description={blogContent}
                />)
            }

            )}
        </div>
    </div>

)
}

export default Blogs
