import ViewBlogBody from '../../components/ui/ViewBlogBody'
import AdminLayout from '../../components/layouts/AdminLayout'
import StaffLayout from '../../components/layouts/StaffLayout'
import Header from '../../components/layouts/Header'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

const ViewBlogPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const userRole = Cookies.get('role');

  useEffect(() => {
    if(!blogId){
      navigate(-1)
    }
  }, [blogId, navigate])

  if(!blogId){
    return null
  }

  const Layout = userRole === 'staff' ? StaffLayout : AdminLayout;

  return (
    <Layout>
      <Header>
        <span className='text-2xl'><b>Blog Post</b></span>
      </Header>
      <ViewBlogBody 
        blogId={blogId}
      />
    </Layout>
  )
}

export default ViewBlogPage