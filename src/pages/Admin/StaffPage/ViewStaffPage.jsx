import AdminLayout from "../../../components/Layouts/AdminLayout"
import Header from "../../../components/ui/Header"
import Table from "../../../components/ui/Table"

const ViewStaffPage = () =>{
  return (
    <AdminLayout>
        <Header>Staff Account List</Header>
        {/* util bar here */}
        <Table></Table>
    </AdminLayout>
  )
}

export default ViewStaffPage
