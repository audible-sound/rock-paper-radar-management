import { useEffect } from 'react'
import staffStore from "../../stores/staffStore.jsx"
import AdminLayout from "../../components/layouts/AdminLayout"
import AdminProfileSection from "../../components/layouts/AdminProfileSection.jsx"
import BlogCard from "../../components/ui/BlogCard"

const PersonalProfile = () => {
    const blogs = staffStore((state) => state.blogs);
    const getMyBlogs = staffStore((state) => state.getMyBlogs);

    useEffect(() => {
        const fetchMyBlogs = async () => {
            await getMyBlogs();
        }
        fetchMyBlogs();
    }, [getMyBlogs])

    return (
        <AdminLayout>
            <AdminProfileSection />
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-opacity-50'>
                {blogs && blogs.length > 0 ? (
                    blogs.map(({ id, blogPicture, blogTitle, blogContent, staff }) => (
                        <BlogCard
                            key={id}
                            blogId={id}
                            image={blogPicture}
                            title={blogTitle}
                            description={blogContent}
                            isStaff={true}
                            username={staff.username}
                        />
                    ))
                ) : (
                    <p>No blogs found.</p>
                )}
            </div>
        </AdminLayout>
    )
}

export default PersonalProfile