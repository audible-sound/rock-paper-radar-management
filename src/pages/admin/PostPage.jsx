import PostBody from '../../components/ui/PostBody'
import AdminLayout from '../../components/layouts/AdminLayout'
import Header from '../../components/layouts/Header'
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import BackButton from '../../components/navigation/BackButton';

const ViewPostPage = () => {
  const [searchParams] = useSearchParams();
  const postId = searchParams.get('p');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (!postId) {
      navigate('/admin/posts');
    }
    setIsLoading(false);
  }, [postId, navigate]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <AdminLayout>
      <Header className='flex flex-row items-center gap-6'>
        <BackButton to="/admin/posts"  />
        <span className='text-2xl'><b>Posts</b></span>
      </Header>
      <PostBody postId={postId} />
    </AdminLayout>
  )
}

export default ViewPostPage