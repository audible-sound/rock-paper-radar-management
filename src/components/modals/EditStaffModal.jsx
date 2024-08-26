import { useState } from 'react'
import mainAxios from '../../api/mainAxios'
import Cookies from 'js-cookie'

const EditStaffModal = ({ staffId, staffName, userType, onEdit }) => {
    const [selectedUserType, setSelectedUserType] = useState(userType)
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (newPassword !== confirmPassword) {
            setPasswordError("Passwords don't match")
            return
        }
        try {
            const updateData = { userType: selectedUserType }
            if (newPassword) {
                updateData.password = newPassword
            }
            const response = await mainAxios.put(`/staff/update/${staffId}`, {
                userType: selectedUserType,
                password: newPassword
            }, {
                headers: {
                    Authorization: Cookies.get('token')
                }
            })
            onEdit(staffId, selectedUserType)
            document.getElementById(`editStaff${staffId}`).close()
        } catch (error) {
            console.error("Error updating staff:", error)
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
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">New Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="input input-bordered"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            className="input input-bordered"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    {passwordError && <p className="text-red-500 mb-2">{passwordError}</p>}
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