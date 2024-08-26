import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import mainAxios from "../../api/mainAxios";
import Cookies from "js-cookie";

const UserGuideContent = ({ content = [], onDelete, onEdit }) => {
  const location = useLocation();
  const isAdmin = location.pathname.includes("admin");
  const [deleteId, setDeleteId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editedContent, setEditedContent] = useState({});

  useEffect(() => {
    if (editingId) {
      const originalContent = content.find(item => item.id === editingId);
      setEditedContent({ ...originalContent });
    }
  }, [editingId, content]);

  const handleDelete = async (deleteId, section) => {
    if (deleteId) {
      try {
        await mainAxios.delete(`/userguide/${deleteId}`, {
          headers: {
            authorization: Cookies.get('token')
          }
        });
        onDelete(deleteId, section);
        setDeleteId(null);
        window.location.reload();
      } catch (error) {
        console.error('Error deleting user guide:', error);
      }
    }
  };

  const handleEdit = async (id) => {
    if (editingId === id) {
      try {
        await onEdit(id, {
          title: editedContent.title,
          content: editedContent.desc,
          forUserType: editedContent.forUserType,
          section: editedContent.section
        });
        setEditingId(null);
        setEditedContent({});
        window.location.reload();
      } catch (error) {
        console.error('Error editing user guide:', error);
      }
    } else {
      setEditingId(id);
    }
  };

  return (
    <div className="w-screen">
      {content.map((item, index) => (
        <div key={index} className="px-7 py-5 bg-slate-100 w-full h-full">
          <div className="flex flex-row justify-between">
            {editingId === item.id ? (
              <input
                type="text"
                value={editedContent.title || ''}
                onChange={(e) => setEditedContent({...editedContent, title: e.target.value})}
                className="card-title font-bold text-3xl mb-4"
              />
            ) : (
              <h2 className="card-title font-bold text-3xl mb-4">{item.title}</h2>
            )}
            {isAdmin && (
              <div className="flex gap-2">
                <button onClick={() => handleEdit(item.id)} className="btn btn-primary">
                  {editingId === item.id ? 'Save' : 'Edit'}
                </button>
                <button onClick={() => handleDelete(item.id, item.section)} className="btn btn-error">
                  Delete User Guide
                </button>
              </div>
            )}
          </div>
          <div className="border-t-2 border-slate-300 py-2 space-y-4">
            {editingId === item.id ? (
              <textarea
                value={editedContent.desc || ''}
                onChange={(e) => setEditedContent({...editedContent, desc: e.target.value})}
                className="w-full h-40 p-2"
              />
            ) : (
              item?.desc?.split("\n").map((paragraph, index) => (
                <p key={index} className="my-3 text-pretty">
                  {paragraph.trim()}
                </p>
              ))
            )}
          </div>
        </div>
      ))}

      {/* Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete this user guide?</p>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setDeleteId(null)} className="btn btn-ghost">Cancel</button>
              <button onClick={handleDelete} className="btn btn-error">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserGuideContent;