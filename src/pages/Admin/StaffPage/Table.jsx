import staffStore from "../../../stores/staffStore.js";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../../components/ui/LoadingSpinner";
import TableRow from "./TableRow";

const Table = ({onEdit}) => {
  const getEmployees = staffStore(state => state.getEmployees);
  const employees = staffStore(state => state.employees);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async() => {
      setIsLoading(true);
      try{
        await getEmployees();
      }catch(error){
        console.error("Error fetching employees:", error);
      }finally{
        setIsLoading(false);
      }
    }
    fetchEmployees();
  }, [getEmployees]);

  const handleDeleteStaff = async () => {
    await getEmployees();
  };

  if(isLoading){ return <LoadingSpinner />}

  return (
    <div className="overflow-x-auto bg-white h-full w-full flex flex-col justify-start p-6 items-center">
  <table className="table w-full my-12 p-20 rounded-xl">
    {/* head */}
    <thead className="bg-blue-400">
      <tr>
        <th>StaffID</th>
        <th>Name</th>
        <th>Job</th>
        <th>Joined Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
      employees.map((employee) => (
        <TableRow
          key={employee.id}
          staffId={employee.id}
          image={employee.staffProfile.pictureUrl}
          name={employee.fullName}
          country={employee.country}
          userType={employee.userType}
          jobTitle={employee.jobTitle}
          joinedDate={employee.createdAt}
          onDelete={handleDeleteStaff}
          onEdit={onEdit}
        />
      ))
    }
    </tbody>
  </table>
</div>
  )
}

export default Table
