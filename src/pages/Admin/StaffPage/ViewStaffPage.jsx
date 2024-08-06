import AdminLayout from "../../../components/Layouts/AdminLayout"
import Header from "../../../components/ui/Header"
import Table from "../../../components/ui/Table"

const ViewStaffPage = () =>{
  return (
    <AdminLayout>
        <Header className={"flex flex-row justify-between items-center"}>
          <span>Staff Accounts</span>
          <button className="btn btn-primary ml-5">Add Account</button>
        </Header>
        {/* util bar here */}
        <Table></Table>
    </AdminLayout>
  )
}

export default ViewStaffPage
