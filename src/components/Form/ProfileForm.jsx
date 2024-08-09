import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

const ProfileForm = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className="w-full flex flex-col max-w-[300px] justify-center items-center">
            <div className="w-full flex flex-col">
                <div className='flex justify-between w-full mt-2'>
                    <p className="text-base">Username</p>
                    <ErrorMessage errors={errors} name="username" as="p" className="text-red-600" />
                </div>
                <input
                    type="text"
                    placeholder="Enter Username"
                    className="pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
                    {...register("username", { required: "*required" })}
                />
                <div className='flex justify-between w-full mt-2'>
                    <p className="text-base">Profile Picture</p>
                    <ErrorMessage errors={errors} name="profilePicture" as="p" className="text-red-600" />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    className="my-2"
                    {...register("profilePicture", { required: "*required" })}
                />
                <div className="flex justify-between w-full mt-2">
                    <p className="text-base">Description</p>
                    <ErrorMessage errors={errors} name="description" as="p" className="text-red-600" />
                </div>
                <textarea
                placeholder="Enter Description"
                    rows="4"
                    cols="8"
                    name="description"
                    className="pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
                    {...register("description", { required: "*required" })}
                >
                </textarea>
            </div>
        </div>
    )
};

export default ProfileForm;