import staffStore from "../../stores/staffStore";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import StaffRow from "./StaffRow";

const StaffTable = ({onEdit}) => {
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
    <div className="bg-white h-full w-full flex flex-col">
      <div className="overflow-auto flex-grow">
        <table className="table w-full h-full">
          {/* head */}
          <thead className="bg-blue-400 sticky top-0">
            <tr>
              <th>StaffID</th>
              <th>Name</th>
              <th>Job</th>
              <th>Joined Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="h-full">
          {
            employees.map((employee) => (
              <StaffRow
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
    </div>
  )
}

export default StaffTable