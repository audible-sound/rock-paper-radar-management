import React from 'react'

const Navbar = () => {
    return (
        <div>
            {["Home", "Travel Plan", "Map"].map((item) => {
                return item
            })}
        </div>
    )
}

export default Navbar
