import DashboardUsersBody from '../../../components/Dashboard/DashboardUsersBody'
import AdminLayout from '../../../components/Layouts/AdminLayout'
import Header from '../../../components/ui/Header'

const DashboardUsers = () => {
  return (
    <AdminLayout>
      <Header>
        <span className='text-2xl'><b>Total User</b></span>
      </Header>
      <DashboardUsersBody />
      
    </AdminLayout>
  )
}

export default DashboardUsers
