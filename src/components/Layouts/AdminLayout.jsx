import AdminNavbar from '../Navigation/AdminNavbar'
import ContentLayout from './ContentLayout'

const AdminLayout = ({ children }) => {
    return (
        <div className="flex flex-row w-full h-dvh scrollbar-hidden ">
            <AdminNavbar />
            <ContentLayout>
                {children}
            </ContentLayout>
        </div>

    )
}

export default AdminLayout