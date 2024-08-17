import { Link } from "react-router-dom"
import Dropdown from "../../../components/ui/Dropdown"
// import DeleteStaffModal from "./DeleteStaffModal"
// import EditStaffModal from "./EditStaffModal"

// code created with reference to src/components/Blog/BlogCard.jsx
// TODO need modals for edit and delete staff
// TODO modify Link to to actual staff profile

const TableRow = ({staffId, image, name, country, userType, jobTitle, joinedDate}) => {

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
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <Link to={`/admin/staff-view/${staffId}`}>
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
          </Link>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm">{userType}</span>
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
    )
}

export default TableRow
