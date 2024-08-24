import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../Layouts/AdminLayout';
import Header from '../ui/Header';
import mainAxios from '../../api/mainAxios';
import Cookies from 'js-cookie';
import LoadingSpinner from '../ui/LoadingSpinner';

const FeedbackSingleView = () => {
  const { id } = useParams();
  const [feedbackData, setFeedbackData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbackData = async () => {
      setIsLoading(true);
      try {
        const response = await mainAxios.get(`/feedback/${id}`, {
          headers: { Authorization: Cookies.get('token') }
        });
        const feedbackObject = response.data.data;
        console.log(feedbackObject);
        if (feedbackObject) {
          setFeedbackData(feedbackObject.feedbacks);
          setUserData(feedbackObject.dataUser);
        }
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedbackData();
  }, [id]);

  if (isLoading) {
    return (
      <AdminLayout>
        <LoadingSpinner />
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <Header>
        <span className="text-2xl"><b>Feedback Details</b></span>
      </Header>
      <div className="p-6 bg-white">
        {feedbackData ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src={
                  feedbackData.userType === 'user'
                    ? userData.UserProfile.profilePictureUrl
                    : userData.staffProfile.pictureUrl || '/default-profile-picture.png'
                }
                alt={`${userData.username}'s profile`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="text-sm text-gray-600">
                  <p>Submitted by: {userData.username}</p>
                  <p>User Type: {feedbackData.userType}</p>
                  <p>Date Reported: {new Date(feedbackData.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            <div className="border-t border-b py-4">
              <h2 className="text-2xl font-bold text-center">{feedbackData.feedbackTitle}</h2>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Description:</h3>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                value={feedbackData.feedbackDescription}
                readOnly
              />
            </div>
            {feedbackData.bugState && (
              <div>
                <h3 className="text-lg font-semibold">Bug State:</h3>
                <p>{feedbackData.bugState}</p>
              </div>
            )}
            {feedbackData.stepsToReproduce && (
              <div>
                <h3 className="text-lg font-semibold">Steps to Reproduce:</h3>
                <p>{feedbackData.stepsToReproduce}</p>
              </div>
            )}
          </div>
        ) : (
          <p>No feedback data available.</p>
        )}
      </div>
    </AdminLayout>
  );
};

export default FeedbackSingleView;