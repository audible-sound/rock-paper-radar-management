import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/layouts/AdminLayout';
import Header from '../../components/layouts/Header';
import mainAxios from '../../api/mainAxios';
import Cookies from 'js-cookie';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

const BugReportSingleView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bugData, setBugData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBugData = async () => {
      setIsLoading(true);
      try {
        const response = await mainAxios.get(`/bugreport/${id}`, {
          headers: { Authorization: Cookies.get('token') }
        });
        setBugData(response.data.data);
      } catch (error) {
        console.error('Error fetching bug report data:', error);
        setError('Failed to load bug report data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBugData();
  }, [id]);

  const handleStatusChange = async (newStatus) => {
    setIsUpdating(true);
    try {
      await mainAxios.put(`/bugreport/${id}/state`, 
        { bugState: newStatus },
        { headers: { Authorization: Cookies.get('token') } }
      );
      setBugData(prevData => ({ ...prevData, bugState: newStatus }));
    } catch (error) {
      console.error('Error updating bug status:', error);
      setError('Failed to update bug status. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async () => {
    setIsUpdating(true);
    try {
      await mainAxios.delete(`/bugreport/${id}`, {
        headers: { Authorization: Cookies.get('token') }
      });
      // Redirect to the bug report list page after successful deletion
      navigate('/admin/feedback-management');
    } catch (error) {
      console.error('Error deleting bug report:', error);
      setError('Failed to delete bug report. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <LoadingSpinner />
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="p-6 text-center text-red-600">{error}</div>
      </AdminLayout>
    );
  }

  if (!bugData) {
    return (
      <AdminLayout>
        <div className="p-6 text-center">No bug report data available.</div>
      </AdminLayout>
    );
  }

  const { bugContent, pictureUrl, bugState, createdAt, userType } = bugData;
  const [title, description, steps] = bugContent.split('\n');

  return (
    <AdminLayout>
      <Header>
        <span className="text-2xl"><b>Bug Report Details</b></span>
      </Header>
      <div className="p-6 bg-white">
        <div className="space-y-6">
          <div className="flex items-center space-x-4 border-b pb-4">
            <img
              src={pictureUrl}
              alt="Bug Report"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <div className="text-sm text-gray-600">
                <p>User Type: {userType}</p>
                <p>Date Reported: {new Date(createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold">{title.replace('Title: ', '')}</h2>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Description:</h3>
            <p className="bg-gray-100 p-4 rounded">{description.replace('Description: ', '')}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Steps to Reproduce:</h3>
            <p className="bg-gray-100 p-4 rounded">{steps.replace('Steps to Reproduce: ', '')}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Bug State:</h3>
            <select 
              value={bugState} 
              onChange={(e) => handleStatusChange(e.target.value)}
              className="select select-bordered w-full max-w-xs"
              disabled={isUpdating}
            >
              <option value="Unread">Unread</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
              <option value="Closed">Closed</option>
            </select>
            {isUpdating && <span className="ml-2 text-sm text-gray-600">Updating...</span>}
          </div>
          {bugData.bugState === 'Resolved' && (
            <div>
              <button
                onClick={handleDelete}
                className="btn btn-error mt-4"
                disabled={isUpdating}
              >
                {isUpdating ? 'Deleting...' : 'Delete Bug Report'}
              </button>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default BugReportSingleView;