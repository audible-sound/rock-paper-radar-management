import Dropdown from "../../../components/ui/Dropdown"
import DeleteStaffModal from "./DeleteStaffModal"
import EditStaffModal from "./EditStaffModal"

const TableRow = ({staffId, image, name, country, userType, joinedDate, onDelete, onEdit}) => {

    const items = [
        {
            label: "Edit Staff",
            action: () => document.getElementById(`editStaff${staffId}`).showModal(),
        },
        {
            label: "Delete Staff",
            action: () => document.getElementById(`deleteStaff${staffId}`).showModal(),
        },
    ]

    return(
        <>
        <tr>
        <td>
          <div className="text-center font-bold">{staffId}</div>
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{country}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost text-base">{userType.charAt(0).toUpperCase() + userType.slice(1)}</span>
        </td>
        <td>{joinedDate}</td>
        <th>
          <button className="btn btn-ghost btn-xs">
            <Dropdown
                items={items}
            />
          </button>
        </th>
        </tr>
        <DeleteStaffModal staffId={staffId} staffName={name} onDelete={onDelete}/>
        <EditStaffModal staffId={staffId} staffName={name} userType={userType} onEdit={onEdit}/>
        </>
    )
}

export default TableRow