import ViewBlogBody from '../../../components/Blog/ViewBlogBody'
import AdminLayout from '../../../components/Layouts/AdminLayout'
import Header from '../../../components/ui/Header'
import BackButton from '../../../components/ui/BackButton'

const ViewBlogPage = () => {
  return (
    <AdminLayout>
      <Header>
        <span className='text-2xl'><b>Posts</b></span>
      </Header>
      <ViewBlogBody />
    </AdminLayout>
  )
}

export default ViewBlogPage
