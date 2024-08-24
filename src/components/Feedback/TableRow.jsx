import { Link } from 'react-router-dom';
import mainAxios from '../../api/mainAxios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const TableRow = ({ item, type }) => {
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
  const [username, setUsername] = useState(null);
  const isBug = type === 'Bug Report';
  var userId = "";
  if(isBug){
    userId = item.userID;
  }else{
    userId = item.userId;
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await mainAxios.post(`/feedback/getUserData`, {
        reqUserType: item.userType,
        reqID: userId
      },{
        headers: {
          authorization: Cookies.get('token')
        }
      });
      setUsername(response.data.data.username);
      if(item.userType === "user"){
        setProfilePictureUrl(response.data.data.UserProfile.profilePictureUrl);
      }else{
        setProfilePictureUrl(response.data.data.staffProfile.pictureUrl);
      }
    };
    fetchData();
  }, [item.userId]);
 
  return (
    <tr>
      <td>{item.id}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={profilePictureUrl || "https://via.placeholder.com/150"}
                alt="User Avatar"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{username}</div>
            <div className="text-sm opacity-50">{item.userType}</div>
          </div>
        </div>
      </td>
      <td>{type === 'Feedback' ? item.feedbackTitle : item.bugTitle}</td>
      <td>{new Date(item.createdAt).toLocaleDateString()}</td>
      {isBug && (
        <td>
          {item.bugState === 'Unread' ? (
            <span className="bg-red-500 text-white px-2 py-1 rounded">
              {item.bugState}
            </span>
          ) : item.bugState === 'In Progress' ? (
            <span className="bg-yellow-500 text-white px-2 py-1 rounded">
              {item.bugState}
            </span>
          ) : item.bugState === 'Resolved' ? (
            <span className="bg-green-500 text-white px-2 py-1 rounded">
              {item.bugState}
            </span>
          ) : (
            item.bugState
          )}
        </td>
      )}
      <td>
        {isBug ? (
          <Link to={`/admin/bugreport/${item.id}`} className="btn btn-ghost btn-xs">
            View Details
          </Link>
        ):(
          <Link to={`/admin/feedback/${item.id}`} className="btn btn-ghost btn-xs">
            View Details
          </Link>
        )}
      </td>
    </tr>
  );
};

export default TableRow;