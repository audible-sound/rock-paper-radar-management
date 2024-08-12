import DashboardAccountsBody from '../../../components/Dashboard/DashboardAcountsBody'
import AdminLayout from '../../../components/Layouts/AdminLayout'
import Header from '../../../components/ui/Header'

const DashboardAccounts = () => {
  return (
    <AdminLayout>
      <Header>
        <span className='text-2xl'><b>Total Account Created</b></span>
      </Header>
      <DashboardAccountsBody />
      
    </AdminLayout>
  )
}

export default DashboardAccounts
