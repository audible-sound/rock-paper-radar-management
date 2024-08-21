import ViewBlogBody from '../../../components/Blog/ViewBlogBody'
import AdminLayout from '../../../components/Layouts/AdminLayout'
import UserLayout from '../../../components/Layouts/UserLayout'
import Header from '../../../components/ui/Header'
import staffStore from '../../../stores/staffStore'
import { useParams, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

const ViewBlogPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const isStaff = staffStore.getState().profilePictureUrl ? true : false;
  const Layout = isStaff ? AdminLayout : UserLayout;
  useEffect(() => {
    if(!blogId){
      navigate(-1)
    }
  }, [blogId, navigate])

  if(!blogId){
    return null
  }

  return (
    <Layout>
      <Header>
        <span className='text-2xl'><b>Blogs</b></span>
      </Header>
      <ViewBlogBody 
      blogId={blogId}
      />
    </Layout>
  )
}

export default ViewBlogPage
