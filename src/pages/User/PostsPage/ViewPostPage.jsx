import ViewPostBody from '../../../components/Posts/ViewPostBody'
import UserLayout from '../../../components/Layouts/UserLayout'
import Header from '../../../components/ui/Header'
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ViewPostPage = () => {
  const [searchParams] = useSearchParams();
  const postId = searchParams.get('p');
  const navigate = useNavigate();
  useEffect(() => {
    if (!postId) {
      navigate('/user/posts');
    }
  }, [])
  return (
    <UserLayout>
      <Header>
        <span className='text-2xl'><b>Posts</b></span>
      </Header>
      <ViewPostBody postId={postId} />
    </UserLayout>
  )
}

export default ViewPostPage
