import StaffLayout from "../../components/layouts/StaffLayout"
import staffStore from "../../stores/staffStore.jsx"
import AdminProfileSection from "../../components/layouts/AdminProfileSection.jsx"
import BlogCard from "../../components/ui/BlogCard.jsx"
import { useEffect } from "react"

const StaffProfile = () => {
    const blogs = staffStore((state) => state.blogs);
    const getMyBlogs = staffStore((state) => state.getMyBlogs);

    useEffect(() => {
        const fetchMyBlogs = async () => {
            await getMyBlogs();
        }
        fetchMyBlogs();
    }, [getMyBlogs])

    return (
        <StaffLayout>
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
                    <div className="col-span-full text-center py-8">
                        <p className="text-xl text-gray-600">You haven't written any blogs yet.</p>
                        <p className="mt-2">Start sharing your thoughts by creating your first blog post!</p>
                    </div>
                )}
            </div>
        </StaffLayout>
    )
}

export default StaffProfile;