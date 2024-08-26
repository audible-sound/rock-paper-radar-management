import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import logoutIcon from '../../assets/icons/logOut.svg';
import BlogIcon from "../../assets/icons/blog.svg";
import FeedbackIcon from "../../assets/icons/feedbackIcon.svg";
import WriteBlogIcon from "../../assets/icons/writeBlog.svg";
import ReportManagementIcon from "../../assets/icons/userReport.svg";
import staffStore from '../../stores/staffStore';

const VerticalNavbar = () => {

    const checkLogin = staffStore(state => state.checkLogin);
    const profilePictureUrl = staffStore(state => state.profilePictureUrl);
    const logout = staffStore(state => state.logout);
    const navigate = useNavigate();
    const removeCookie = () => {
        Cookies.remove('username', { path: '/' });
        Cookies.remove('token', { path: '/' });
        Cookies.remove('profilePictureUrl', { path: '/' });
        Cookies.remove('bannerPic', { path: '/' });
        Cookies.remove('role', { path: '/' });
        navigate('/', 'replace');
        checkLogin();
        logout();
    }
    return (
        <div className='flex flex-col h-full'>
            <ul className="fixed menu bg-base-100 h-dvh p-0 pt-8 justify-between z-50">
                <div>
                    <li>
                        <Link to="/staff/profile" className='tooltip tooltip-right pt-4 pb-4 ' data-tip="Profile">
                            <div className='avatar'>
                                <div className='ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2'>
                                    <img src={profilePictureUrl} alt="" />
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/staff/blogs" className="tooltip tooltip-right pt-2 pb-2" data-tip="Blogs">
                            <img src={BlogIcon} alt="" className='w-10' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/staff/user-guide" className="tooltip tooltip-right pt-2 pb-2" data-tip="User Guide">
                            <img src={WriteBlogIcon} alt="" className='w-10' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/staff/report-management" className="tooltip tooltip-right pt-2 pb-2" data-tip="Report Management">
                            <img src={ReportManagementIcon} alt="" className='w-10' />
                        </Link>
                    </li>
                    <li className='mb-2'>
                        <Link to="/staff/feedback" className="tooltip tooltip-right pt-2 pb-2" data-tip="Feedback">
                            <img src={FeedbackIcon} alt="" className='w-8' />
                        </Link>
                    </li>
                </div>

                <li>
                    <div className='tooltip tooltip-right pt-2 pb-2 mb-8' data-tip="Log Out" onClick={removeCookie}>
                        <img src={logoutIcon} alt="" className='w-10' />
                    </div>
                </li>
            </ul>

        </div>

    )
}

export default VerticalNavbar