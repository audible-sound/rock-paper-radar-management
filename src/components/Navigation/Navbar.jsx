import { Link } from 'react-router-dom'

import Mapicon from '../../assets/images/MapIcon.svg'
import CalendarIcon from '../../assets/images/CalendarIcon.svg'
import face from "../../assets/images/Lucas.jpg"
import logoutIcon from '../../assets/images/LogoutIcon.svg'

const Navbar = () => {

    return (
        <div className='flex flex-col h-full'>
            <ul className="fixed menu bg-base-100 h-dvh p-0 pt-8 justify-between">
                <div>
                    <li>
                        <Link to="/user/profile" className='tooltip tooltip-right pt-4 pb-4 ' data-tip="Profile">
                            <div className='avatar'>
                                <div className='ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2'>
                                    <img src={face} alt="" />
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/posts" className="tooltip tooltip-right pt-2 pb-2" data-tip="Posts">
                            <img src={Mapicon} alt="" className='w-8' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/travel-itenary" className="tooltip tooltip-right pt-2 pb-2" data-tip="Travel Plan">
                            <img src={CalendarIcon} alt="" className='w-10' />
                        </Link>
                    </li>
                </div>


                <li>
                    <Link to="/user/signin" className='tooltip tooltip-right pt-2 pb-2 mb-8' data-tip="Log Out">
                        <img src={logoutIcon} alt="" className='w-10' />
                    </Link>
                </li>
            </ul>

        </div>

    )
}

export default Navbar
