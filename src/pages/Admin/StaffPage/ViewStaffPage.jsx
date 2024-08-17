import AdminLayout from "../../../components/Layouts/AdminLayout"
import AddStaffModal from "../../../components/Staff/AddStaffModal"
import Header from "../../../components/ui/Header"
import Table from "./Table"

const ViewStaffPage = () =>{
  return (
    <AdminLayout>
        <Header className={"flex flex-row justify-between items-center"}>
          <span className='text-2xl'>Staff Accounts</span>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <AddStaffModal/>
        </Header>
        {/* util bar here */}
        <Table></Table>
    </AdminLayout>
  )
}

export default ViewStaffPage
