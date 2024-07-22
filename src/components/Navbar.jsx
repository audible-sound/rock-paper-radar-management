import React from 'react'
import { Link } from 'react-router-dom'

import Mapicon from '../assets/images/MapIcon.svg'
import CalendarIcon from '../assets/images/CalendarIcon.svg'
import face from "../assets/images/Lucas.jpg"


const Navbar = () => {
    return (
        <ul className="menu bg-base-100 rounded-box p-0 pt-8">
            <li>
                <Link to="/profile" className='tooltip tooltip-right pt-4 pb-4 ' data-tip="Profile">
                    <div className='avatar'>
                        <div className='ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2'>
                            <img src={face} alt="" />
                        </div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/posts" className="tooltip tooltip-right pt-2 pb-2" data-tip="Posts">
                    <img src={Mapicon} alt="" className='w-8' />
                </Link>
            </li>
            <li>
                <Link className="tooltip tooltip-right pt-2 pb-2" data-tip="Calendar">
                    <img src={CalendarIcon} alt="" className='w-10' />
                </Link>
            </li>
        </ul>
    )
}

export default Navbar
