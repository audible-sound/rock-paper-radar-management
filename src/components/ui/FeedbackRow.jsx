import { Link } from 'react-router-dom';
import mainAxios from '../../api/mainAxios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const FeedbackRow = ({ item, type }) => {
    console.log(item)
    const [profilePictureUrl, setProfilePictureUrl] = useState(null);
    const [username, setUsername] = useState(null);
    const isBug = type === 'Bug Report';
    let userId = "";
    if (isBug) {
        userId = item.userID;
    } else {
        userId = item.userID;
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await mainAxios.post(`/feedback/getUserData`, {
                reqUserType: item.userType,
                reqID: userId
            }, {
                headers: {
                    authorization: Cookies.get('token')
                }
            });
            setUsername(response.data.data.username);
            if (item.userType === "user") {
                setProfilePictureUrl(response.data.data.UserProfile.profilePictureUrl);
            } else {
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
            <td>{type === 'Feedback' ? item.feedbackContent.split('\n')[0].replace('Title: ', '') : item.bugContent.split('\n')[0].replace('Title: ', '')}</td>
            <td>{new Date(item.createdAt).toLocaleDateString()}</td>
            <td>
                {isBug ? (
                    <span className={`badge ${item.bugState === 'Unread' ? 'badge-error' : item.bugState === 'In Progress' ? 'badge-warning' : 'badge-success'}`}>
                        {item.bugState}
                    </span>
                ) : (
                    <span className={`badge ${item.status === 'unread' ? 'badge-error' : 'badge-success'}`}>
                        {item.status}
                    </span>
                )}
            </td>
            <td>
                {isBug ? (
                    <Link to={`/admin/bugreport/${item.id}`} className="btn btn-ghost btn-xs">
                        View Details
                    </Link>
                ) : (
                    <Link to={`/admin/feedback/${item.id}`} className="btn btn-ghost btn-xs">
                        View Details
                    </Link>
                )}
            </td>
        </tr>
    );
};

export default FeedbackRow;