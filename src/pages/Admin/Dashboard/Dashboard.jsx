import DashboardBody from '../../../components/Dashboard/DashboardBody'
import AdminLayout from '../../../components/Layouts/AdminLayout'
import Header from '../../../components/ui/Header'

const dashboard = () => {
  return (
    <AdminLayout>
      <Header>
        <span className='text-2xl'><b>Dashboard</b></span>
      </Header>
      <DashboardBody />
      
    </AdminLayout>
  )
}

export default dashboard
