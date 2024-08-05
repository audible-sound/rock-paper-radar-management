import { Link } from 'react-router-dom'

import face from "../../assets/images/Lucas.jpg"
import logoutIcon from '../../assets/images/LogoutIcon.svg'
import BlogIcon from "../../assets/images/BlogIcon.svg"
import StaffIcon from "../../assets/images/StaffIcon.svg"
import StatsIcon from "../../assets/images/StatsIcon.svg"
import WriteBlogIcon from "../../assets/images/WriteBlogIcon.svg"


const Navbar = () => {

    return (
        <div className='flex flex-col h-full'>
            <ul className="fixed menu bg-base-100 h-dvh p-0 pt-8 justify-between">
                <div>
                    <li>
                        <Link to="/admin/profile" className='tooltip tooltip-right pt-4 pb-4 ' data-tip="Profile">
                            <div className='avatar'>
                                <div className='ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2'>
                                    <img src={face} alt="" />
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="tooltip tooltip-right pt-2 pb-2" data-tip="Posts">
                            <img src={StatsIcon} alt="" className='w-8' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/blogs" className="tooltip tooltip-right pt-2 pb-2" data-tip="Travel Plan">
                            <img src={BlogIcon} alt="" className='w-10' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/staff-view" className="tooltip tooltip-right pt-2 pb-2" data-tip="Travel Plan">
                            <img src={StaffIcon} alt="" className='w-10' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/user-guide" className="tooltip tooltip-right pt-2 pb-2" data-tip="Travel Plan">
                            <img src={WriteBlogIcon} alt="" className='w-10' />
                        </Link>
                    </li>
                </div>


                <li>
                    <Link to="/signin" className='tooltip tooltip-right pt-2 pb-2 mb-8' data-tip="Log Out">
                        <img src={logoutIcon} alt="" className='w-10' />
                    </Link>
                </li>
            </ul>

        </div>

    )
}

export default Navbar
