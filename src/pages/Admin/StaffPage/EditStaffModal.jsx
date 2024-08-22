import { useState } from 'react'
import mainAxios from '../../../api/mainAxios'
import Cookies from 'js-cookie'

const EditStaffModal = ({ staffId, staffName, userType, onEdit }) => {
    const [selectedUserType, setSelectedUserType] = useState(userType)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await mainAxios.put(`/staff/${staffId}`, { userType: selectedUserType }, {
                headers: {
                    Authorization: Cookies.get('token')
                }
            })
        }catch(error){
            console.error("Error updating staff:", error)
        }finally{
            onEdit(staffId, selectedUserType)
            document.getElementById(`editStaff${staffId}`).close()
        }
    }

    return (
        <dialog id={`editStaff${staffId}`} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Staff: {staffName}</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-control border-2 rounded-lg p-2 mb-2">
                        <label className="label cursor-pointer">
                            <span className="label-text">Staff</span>
                            <input
                                type="radio"
                                name="userType"
                                className="radio"
                                value="staff"
                                checked={selectedUserType === 'staff'}
                                onChange={() => setSelectedUserType('staff')}
                            />
                        </label>
                    </div>
                    <div className="form-control border-2 rounded-lg p-2 mb-2">
                        <label className="label cursor-pointer">
                            <span className="label-text">Admin</span>
                            <input
                                type="radio"
                                name="userType"
                                className="radio"
                                value="admin"
                                checked={selectedUserType === 'admin'}
                                onChange={() => setSelectedUserType('admin')}
                            />
                        </label>
                    </div>
                    <div className="modal-action">
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                        <button type="button" className="btn" onClick={() => document.getElementById(`editStaff${staffId}`).close()}>Cancel</button>
                    </div>
                </form>
            </div>
        </dialog>
    )
}

export default EditStaffModal