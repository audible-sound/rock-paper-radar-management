import React from 'react'

const SignInForm = ({ formData, setFormData }) => {
  return (
    <div className="w-full flex flex-col max-w-[300px] justify-center items-center">
      <div className="w-full flex flex-col">
        <p className="text-base mt-2">Username</p>
        <input
          type="text"
          placeholder="Enter Username"
          className="pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
          value={formData.username}
          onChange={(event) => {
            setFormData({ ...formData, username: event.target.value })
          }

          }
        />

        <p className="text-base mt-2">Password</p>
        <input
          type="password"
          placeholder="Enter Password"
          className="pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />

        <p className="text-base mt-2">Email</p>
        <input
          type="email"
          placeholder="Enter Email"
          className="pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />

      </div>
    </div>
  )
}

export default SignInForm
