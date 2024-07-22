import React from 'react'

const Input = ({ right, left, rightB, leftB, placeholder }) => {
    return (
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">{left}</span>
                <span className="label-text-alt">{right}</span>
            </div>
            <input type="text" placeholder={placeholder} className="input input-bordered w-full max-w-xs" />
            <div className="label">
                <span className="label-text-alt">{leftB}</span>
                <span className="label-text-alt">{rightB}</span>
            </div>
        </label>
    )
}

export default Input
