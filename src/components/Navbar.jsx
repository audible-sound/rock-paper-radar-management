import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            {["Home", "Travel Plan", "Map"].map((item) => {
                return (
                    <NavLink to={"/" + item.toLowerCase()}>{item}</NavLink>
                )
            })}
        </nav>
    )
}

export default Navbar
