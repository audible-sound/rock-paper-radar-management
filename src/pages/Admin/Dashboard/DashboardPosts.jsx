import DashboardPostsBody from '../../../components/Dashboard/DashboardPostsBody'
import AdminLayout from '../../../components/Layouts/AdminLayout'
import Header from '../../../components/ui/Header'

const DashboardPosts = () => {
  return (
    <AdminLayout>
      <Header>
        <span className='text-2xl'><b>Total Number of Post</b></span>
      </Header>
      <DashboardPostsBody />
      
    </AdminLayout>
  )
}

export default DashboardPosts
