import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../Layouts/AdminLayout';
import Header from '../ui/Header';
import mainAxios from '../../api/mainAxios';
import Cookies from 'js-cookie';
import LoadingSpinner from '../ui/LoadingSpinner';

const BugReportSingleView = () => {
  const { id } = useParams();
  const [bugData, setBugData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [bugStatus, setBugStatus] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBugData = async () => {
      setIsLoading(true);
      try {
        const response = await mainAxios.get(`/bugreport/${id}`, {
          headers: { Authorization: Cookies.get('token') }
        });
        const bugObject = response.data.data;
        setBugData(bugObject.BugReports);
        setUserData(bugObject.dataUser);
        setBugStatus(bugObject.BugReports.bugState);
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
      await mainAxios.put(`/bugreport/${id}`, 
        { bugState: newStatus },
        { headers: { Authorization: Cookies.get('token') } }
      );
      setBugStatus(newStatus);
    } catch (error) {
      console.error('Error updating bug status:', error);
      setError('Failed to update bug status. Please try again.');
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

  return (
    <AdminLayout>
      <Header>
        <span className="text-2xl"><b>Bug Report Details</b></span>
      </Header>
      <div className="p-6 bg-white">
        {bugData ? (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 border-b pb-4">
              <img
                src={
                  bugData.userType === 'user'
                    ? userData?.UserProfile?.profilePictureUrl
                    : userData?.staffProfile?.pictureUrl || '/default-profile-picture.png'
                }
                alt={`${userData?.username || 'User'}'s profile`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="text-sm text-gray-600">
                  <p>Submitted by: {userData?.username || 'Unknown User'}</p>
                  <p>User Type: {bugData.userType}</p>
                  <p>Date Reported: {new Date(bugData.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold">{bugData.bugTitle}</h2>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Description:</h3>
              <p className="bg-gray-100 p-4 rounded">{bugData.bugDescription}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Steps to Reproduce:</h3>
              <p className="bg-gray-100 p-4 rounded">{bugData.bugSteps}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Bug State:</h3>
              <select 
                value={bugStatus} 
                onChange={(e) => handleStatusChange(e.target.value)}
                className="select select-bordered w-full max-w-xs"
                disabled={isUpdating}
              >
                <option value={bugStatus}>{bugStatus}</option>
                <option value="Unread">Unread</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Closed">Closed</option>
              </select>
              {isUpdating && <span className="ml-2 text-sm text-gray-600">Updating...</span>}
            </div>
          </div>
        ) : (
          <p>No bug report data available.</p>
        )}
      </div>
    </AdminLayout>
  );
};

export default BugReportSingleView;