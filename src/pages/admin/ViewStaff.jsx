import AdminLayout from "../../components/layouts/AdminLayout"
import AddStaffModal from "../../components/modals/AddStaffModal"
import Header from "../../components/layouts/Header"
import StaffTable from "../../components/ui/StaffTable"
import staffStore from "../../stores/staffStore"

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
      <StaffTable onEdit={handleEditStaff}></StaffTable>
    </AdminLayout>
  )
}

export default ViewStaffPage