import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'


const SignUpForm = () => {
  const { register, formState: { errors }, handleSubmit } = useFormContext()
  return (
    <div className="w-full flex flex-col max-w-[300px] justify-center items-center">
      <div className="w-full flex flex-col">
        <p className="text-base mt-2">Username</p>
        <input
          type="text"
          placeholder="Enter Username"
          className="pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
          {...register("username", { required: "This is required" })}
        />
        <ErrorMessage errors={errors} name="username" as="p" />

        <p className="text-base mt-2">Password</p>
        <input
          type="password"
          placeholder="Enter Password"
          className="pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
          {...register("password", { required: "This is required" })}
        />
        <ErrorMessage errors={errors} name="password" as="p" />

        <p className="text-base mt-2">Email</p>
        <input
          type="email"
          placeholder="Enter Email"
          className="pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
          {...register("email", { required: "This is required" })}
        />
        <ErrorMessage errors={errors} name="email" as="p" />

      </div>
    </div>
  )
}

export default SignUpForm
