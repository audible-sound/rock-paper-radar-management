import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PublicProfileSection from '../../components/layouts/PublicProfileSection';
import AdminLayout from '../../components/layouts/AdminLayout';
import StaffLayout from '../../components/layouts/StaffLayout';
import BlogCard from '../../components/ui/BlogCard';
import staffStore from '../../stores/staffStore';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import Cookies from 'js-cookie';

const PublicProfile = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const getPublicBlogs = staffStore((state) => state.getPublicBlogs);
    const blogs = staffStore((state) => state.blogs);
    const userRole = Cookies.get('role');

    useEffect(() => {
        if (!username) {
            navigate(-1);
            return;
        }

        const fetchPublicBlogs = async () => {
            setIsLoading(true);
            try {
                await getPublicBlogs(username);
            } catch (err) {
                console.error('Error fetching public blogs:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPublicBlogs();
    }, [username, getPublicBlogs, navigate]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    const Layout = userRole === 'staff' ? StaffLayout : AdminLayout;

    return (
        <Layout>
            <PublicProfileSection username={username} />
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-opacity-50'>
                {blogs.length > 0 ? (
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
        </Layout>
    );
};

export default PublicProfile;