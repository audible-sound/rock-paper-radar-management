import { Link } from "react-router-dom"
import Header from "../../components/layouts/Header"
import StaffLayout from "../../components/layouts/StaffLayout"
import BlogUtils from "../../components/layouts/BlogUtils"
import BlogCard from "../../components/ui/BlogCard"
import { useState, useEffect, useCallback } from "react"
import { useLocation } from "react-router-dom"
import staffStore from "../../stores/staffStore"
import LoadingSpinner from "../../components/ui/LoadingSpinner"

const BlogPage = () => {
    const getBlogs = staffStore((state) => state.getBlogs);
    const getMyBlogs = staffStore((state) => state.getMyBlogs);
    const blogs = staffStore((state) => state.blogs);
    const [filteredBlogs, setFilteredPosts] = useState([]);
    const [fetchState, setFetchState] = useState({ isLoading: true, error: null });
    const location = useLocation();
    const isStaff = location.pathname.includes("/admin");
    const username = staffStore((state) => state.username);
    
    const fetchBlogs = useCallback(async () => {
        setFetchState({ isLoading: true, error: null });
        try {
            if (location.pathname.includes("profile")) {
                await getMyBlogs(username);
            } else {
                await getBlogs();
            }
            setFilteredPosts(currentBlogs => {
                return currentBlogs;
            });
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setFetchState({ isLoading: false, error: "Failed to fetch blogs. Please try again." });
        } finally {
            setFetchState({ isLoading: false, error: null });
        }
    }, [getBlogs, getMyBlogs, location.pathname]);

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs]);

    useEffect(() => {
        setFilteredPosts(blogs);
    }, [blogs]);

    const handleFilter = ({ searchTerm, sortBy }) => {
        let filtered = [...blogs]; // Start with the original blogs data
        console.log(searchTerm);

        if (searchTerm) {
            filtered = filtered.filter(post =>
                post.blogTitle.toLowerCase().includes(searchTerm.toLowerCase())
                ||
                post.blogContent.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (sortBy) {
            switch (sortBy) {
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

    if (fetchState.isLoading) {
        return <LoadingSpinner />
    }

    if (fetchState.error) {
        return <div className="text-center text-red-500">{fetchState.error}</div>
    }

    return (
        <StaffLayout>
            <Header className={"flex flex-row justify-between items-center"}>
                <span className='text-2xl'><b>Blog</b></span>
                <Link to="/blog/create" className="btn btn-primary ml-5">Add Blog</Link>
            </Header>
            <BlogUtils onFilter={handleFilter} />
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-opacity-50 '>
                {filteredBlogs && filteredBlogs.length > 0 ? (
                    filteredBlogs.map(({ id, blogPicture, blogTitle, blogContent, staff }) => (
                        <BlogCard
                            key={id}
                            blogId={id}
                            image={blogPicture}
                            title={blogTitle}
                            description={blogContent}
                            isStaff={isStaff}
                            username={staff.username}
                        />
                    ))
                ) : (
                    <p>No blogs found.</p>
                )}
            </div>
        </StaffLayout>
    )
}

export default BlogPage