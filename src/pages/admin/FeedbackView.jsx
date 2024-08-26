import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../../components/layouts/AdminLayout';
import Header from '../../components/layouts/Header';
import mainAxios from '../../api/mainAxios';
import Cookies from 'js-cookie';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

const FeedbackSingleView = () => {
  const { id } = useParams();
  const [feedbackData, setFeedbackData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [replyContent, setReplyContent] = useState('');
  const [isReplying, setIsReplying] = useState(false);
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [editedReplyContent, setEditedReplyContent] = useState('');

  useEffect(() => {
    const fetchFeedbackData = async () => {
      setIsLoading(true);
      try {
        const response = await mainAxios.get(`/feedback/${id}/replies`, {
          headers: { Authorization: Cookies.get('token') }
        });
        setFeedbackData(response.data.data);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedbackData();
  }, [id]);

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    setIsReplying(true);
    try {
      await mainAxios.post('/feedback/reply', 
        { feedbackId: id, replyContent },
        { headers: { authorization: Cookies.get('token') } }
      );
      setReplyContent('');
      // Refresh the feedback data to show the new reply
      const response = await mainAxios.get(`/feedback/${id}/replies`, {
        headers: { Authorization: Cookies.get('token') }
      });
      setFeedbackData(response.data.data);
    } catch (error) {
      console.error('Error submitting reply:', error);
    } finally {
      setIsReplying(false);
    }
  };

  const handleStatusUpdate = async () => {
    try {
      await mainAxios.patch(`/feedback/${id}/status`, { status: 'read' }, {
        headers: { Authorization: Cookies.get('token') }
      });
      // Refresh feedback data after updating status
      const response = await mainAxios.get(`/feedback/${id}`, {
        headers: { Authorization: Cookies.get('token') }
      });
      setFeedbackData(response.data.data);
    } catch (error) {
      console.error('Error updating feedback status:', error);
    }
  };

  const handleDeleteReply = async (replyId) => {
    try {
      await mainAxios.delete(`/feedback/reply/${replyId}`, {
        headers: { Authorization: Cookies.get('token') }
      });
      // Refresh the feedback data to reflect the deleted reply
      const response = await mainAxios.get(`/feedback/${id}/replies`, {
        headers: { Authorization: Cookies.get('token') }
      });
      setFeedbackData(response.data.data);
    } catch (error) {
      console.error('Error deleting reply:', error);
    }
  };

  const handleEditReply = async (replyId, currentContent) => {
    if (editingReplyId === replyId) {
      try {
        await mainAxios.put(`/feedback/reply/${replyId}`, 
          { replyContent: editedReplyContent },
          { headers: { Authorization: Cookies.get('token') } }
        );
        // Refresh the feedback data to reflect the edited reply
        const response = await mainAxios.get(`/feedback/${id}/replies`, {
          headers: { Authorization: Cookies.get('token') }
        });
        setFeedbackData(response.data.data);
        setEditingReplyId(null);
        setEditedReplyContent('');
      } catch (error) {
        console.error('Error editing reply:', error);
      }
    } else {
      setEditingReplyId(replyId);
      setEditedReplyContent(currentContent);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <LoadingSpinner />
      </AdminLayout>
    );
  }

  if (!feedbackData) {
    return (
      <AdminLayout>
        <p>No feedback data available.</p>
      </AdminLayout>
    );
  }

  const { feedbackContent, pictureUrl, createdAt, userType, status, FeedbackReplies } = feedbackData;
  const [title, description] = feedbackContent.split('\n');

  return (
    <AdminLayout>
      <Header>
        <span className="text-2xl"><b>Feedback Details</b></span>
      </Header>
      <div className="p-6 bg-white">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src={pictureUrl}
              alt="Feedback"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <div className="text-sm text-gray-600">
                <p>User Type: {userType}</p>
                <p>Date Reported: {new Date(createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-b py-4">
            <h2 className="text-2xl font-bold text-center">{title.replace('Title: ', '')}</h2>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Description:</h3>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              value={description.replace('Description: ', '')}
              readOnly
            />
          </div>
        </div>
        <button 
          onClick={handleStatusUpdate}
          className="btn btn-primary mt-4"
          disabled={status === 'read'}
        >
          {status === 'unread' ? 'Mark as Read' : 'Already Read'}
        </button>
        <div className="mt-8 border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Reply to Feedback</h3>
          <form onSubmit={handleReplySubmit}>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mb-2"
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Type your reply here..."
              rows="4"
            />
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isReplying || !replyContent.trim()}
            >
              {isReplying ? 'Sending Reply...' : 'Send Reply'}
            </button>
          </form>
        </div>
        <div className="mt-8 border-t pt-4">
          <h3 className="text-lg font-semibold mb-4">Replies</h3>
          {FeedbackReplies && FeedbackReplies.length > 0 ? (
            FeedbackReplies.map((reply) => (
              <div key={reply.id} className="bg-gray-100 p-4 rounded-lg mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <img
                      src={reply.staff.staffProfile.pictureUrl}
                      alt={reply.staff.username}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="font-semibold">{reply.staff.username}</span>
                  </div>
                  <div>
                    <button
                      onClick={() => handleEditReply(reply.id, reply.replyContent)}
                      className="btn btn-sm btn-primary mr-2"
                    >
                      {editingReplyId === reply.id ? 'Save' : 'Edit'}
                    </button>
                    <button
                      onClick={() => handleDeleteReply(reply.id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {editingReplyId === reply.id ? (
                  <textarea
                    value={editedReplyContent}
                    onChange={(e) => setEditedReplyContent(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                    rows="3"
                  />
                ) : (
                  <p>{reply.replyContent}</p>
                )}
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(reply.createdAt).toLocaleString()}
                </p>
              </div>
            ))
          ) : (
            <p>No replies yet.</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default FeedbackSingleView;