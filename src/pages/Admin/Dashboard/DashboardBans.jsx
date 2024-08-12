import DashboardBansBody from '../../../components/Dashboard/DashboardBansBody'
import AdminLayout from '../../../components/Layouts/AdminLayout'
import Header from '../../../components/ui/Header'

const DashboardBans = () => {
  return (
    <AdminLayout>
      <Header>
        <span className='text-2xl'><b>Total Ban User</b></span>
      </Header>
      <DashboardBansBody />
      
    </AdminLayout>
  )
}

export default DashboardBans
