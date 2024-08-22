import AdminLayout from "../../../components/Layouts/AdminLayout"
import AddStaffModal from "../../../components/Staff/AddStaffModal"
import Header from "../../../components/ui/Header"
import Table from "./Table"
import staffStore from "../../../stores/staffStore"

const ViewStaffPage = () => {
  const updateStaff = staffStore(state => state.updateStaff)
  const getEmployees = staffStore(state => state.getEmployees)

  const handleEditStaff = async (staffId, newUserType) => {
    try {
      await getEmployees();
    } catch (error) {
      console.error("Error updating staff:", error)
    }
  }

  return (
    <AdminLayout>
      <Header className={"flex flex-row justify-between items-center"}>
        <span className='text-2xl'>Staff Accounts</span>
        <AddStaffModal/>
      </Header>
      <Table onEdit={handleEditStaff}></Table>
    </AdminLayout>
  )
}

export default ViewStaffPage