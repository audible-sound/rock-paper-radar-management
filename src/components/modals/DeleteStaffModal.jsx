import { useState } from 'react';
import staffStore from '../../stores/staffStore';

const DeleteStaffModal = ({ staffId, staffName, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteStaff = staffStore((state) => state.deleteStaff);
  const getEmployees = staffStore((state) => state.getEmployees);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteStaff(staffId);
      await getEmployees();
      onDelete(staffId);
    } catch (error) {
      console.error('Error deleting staff:', error);
    } finally {
      setIsDeleting(false);
      document.getElementById(`deleteStaff${staffId}`).close();
    }
  };

  return (
    <dialog id={`deleteStaff${staffId}`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Delete Staff Member</h3>
        <p className="py-4">Are you sure you want to delete {staffName}?</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-outline mr-2">Cancel</button>
            <button
              className="btn btn-error"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default DeleteStaffModal;