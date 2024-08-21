import BlogCard from "./BlogCard"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import staffStore from "../../stores/staffStore"
import LoadingSpinner from "../ui/LoadingSpinner"
import BlogUtilBar from "./BlogUtilBar"

const Blogs = ({isPersonalProfile = false}) => {
    const getBlogs = staffStore((state) => state.getBlogs);
    const getMyBlogs = staffStore((state) => state.getMyBlogs);
    const blogs = staffStore((state) => state.blogs);
    const [filteredBlogs, setFilteredPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const isStaff = location.pathname.includes("/admin");

    useEffect(() => {
        const fetchBlogs = async () => {
            setIsLoading(true);
            try{
                if(isPersonalProfile){
                    await getMyBlogs();
                }else{
                    await getBlogs();
                }
            }catch(error){
                console.error("Error fetching blogs:", error);
            }finally{
                setIsLoading(false);
            }
        }

        fetchBlogs();
    }, [getBlogs, getMyBlogs]);
    
    useEffect(() => {
        setFilteredPosts(blogs);
    }, [blogs]);

    const handleFilter = ({ searchTerm, sortBy }) => {
        let filtered = [...blogs];

        if(searchTerm){
            filtered = filtered.filter(post => 
                post.blogTitle.toLowerCase().includes(searchTerm.toLowerCase())
                ||
                post.blogContent.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if(sortBy){
            switch(sortBy){
                case "Latest":
                    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    break;
                case "Oldest":
                    filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                    break;
                default:
                    break;
            }
        }

        setFilteredPosts(filtered);
    }

    if(isLoading){
        return <LoadingSpinner />
    }

return (
    <div>
        <BlogUtilBar onFilter={handleFilter}/>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-opacity-50 '>
            {filteredBlogs.map(({ id, blogPicture, blogTitle, blogContent, username}) => {
                return (<BlogCard
                    blogId={id}
                    image={blogPicture}
                    title={blogTitle}
                    description={blogContent}
                    isStaff={isStaff}
                    username={username}
                />)
            })
            }
        </div>
    </div>

)
}

export default Blogs
