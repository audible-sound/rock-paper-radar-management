import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import logoutIcon from '../../assets/images/LogoutIcon.svg';
import BlogIcon from "../../assets/images/BlogIcon.svg";
import StaffIcon from "../../assets/images/StaffIcon.svg";
import StatsIcon from "../../assets/images/StatsIcon.svg";
import WriteBlogIcon from "../../assets/images/WriteBlogIcon.svg";
import FeedbackManagementIcon from "../../assets/images/FeedbackManagementIcon.svg";
import staffStore from '../../stores/staffStore';
import ReportManagementIcon from "../../assets/images/UserReport.svg";

const Navbar = () => {

    const checkLogin = staffStore(state => state.checkLogin);
    const profilePictureUrl = Cookies.get('profilePictureUrl');
    const logout = staffStore(state => state.logout);
    const navigate = useNavigate();
    const removeCookie = () => {
        Cookies.remove('username', { path: '/' });
        Cookies.remove('token', { path: '/' });
        Cookies.remove('profilePictureUrl', { path: '/' });
        Cookies.remove('bannerPic', { path: '/' });
        checkLogin();
        logout();
        navigate('/admin', 'replace')
    }
    return (
        <div className='flex flex-col h-full'>
            <ul className="fixed menu bg-base-100 h-dvh p-0 pt-8 justify-between z-50">
                <div>
                    <li>
                        <Link to="/admin/profile" className='tooltip tooltip-right pt-4 pb-4 ' data-tip="Profile">
                            <div className='avatar'>
                                <div className='ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2'>
                                    <img src={profilePictureUrl} alt="" />
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="tooltip tooltip-right pt-2 pb-2" data-tip="Dashboard">
                            <img src={StatsIcon} alt="" className='w-8' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/blogs" className="tooltip tooltip-right pt-2 pb-2" data-tip="Blogs">
                            <img src={BlogIcon} alt="" className='w-10' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/staff-view" className="tooltip tooltip-right pt-2 pb-2" data-tip="Staff">
                            <img src={StaffIcon} alt="" className='w-10' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/user-guide" className="tooltip tooltip-right pt-2 pb-2" data-tip="User Guide">
                            <img src={WriteBlogIcon} alt="" className='w-10' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/feedback-management" className="tooltip tooltip-right pt-2 pb-2" data-tip="Feedback Management">
                            <img src={FeedbackManagementIcon} alt="" className='w-10' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/report-management" className="tooltip tooltip-right pt-2 pb-2" data-tip="Feedback Management">
                            <img src={ReportManagementIcon} alt="" className='w-10' />
                        </Link>
                    </li>
                </div>

                <li>
                    <Link className='tooltip tooltip-right pt-2 pb-2 mb-8' data-tip="Log Out" onClick={removeCookie}>
                        <img src={logoutIcon} alt="" className='w-10' />
                    </Link>
                </li>
            </ul>

        </div>

    )
}

export default Navbar
