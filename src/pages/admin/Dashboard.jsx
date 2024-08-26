import Header from '../../components/layouts/Header'
import DashboardBody from '../../components/layouts/DashboardBody'
import AdminLayout from '../../components/layouts/AdminLayout'
import AdminProfileSection from '../../components/layouts/AdminProfileSection'

const dashboard = () => {
    return (
        <AdminLayout>
            <Header>
                <span className='text-2xl'><b>Dashboard</b></span>
            </Header>
            <AdminProfileSection />
            <DashboardBody />
        </AdminLayout>
    )
}

export default dashboard