import ViewPostBody from '../../../components/Posts/ViewPostBody'
import UserLayout from '../../../components/Layouts/UserLayout'
import Header from '../../../components/ui/Header'
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoadingSpinner from "../../../components/ui/LoadingSpinner";

const ViewPostPage = () => {
  const [searchParams] = useSearchParams();
  const postId = searchParams.get('p');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (!postId) {
      navigate('/user/posts');
    }
    setIsLoading(false);
  }, [postId, navigate]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

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