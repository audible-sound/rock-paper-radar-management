import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

const PersonalForm = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className="w-full flex flex-col max-w-[300px]">
            <div className="w-full flex flex-col">
                <div className='flex justify-between w-full mt-2'>
                    <p className="text-base">Birth Date</p>
                    <ErrorMessage errors={errors} name="birthDate" as="p" className="text-red-600" />
                </div>
                <input
                    type="date"
                    className="placeholder: pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
                    {...register("birthDate", { required: "*required" })}
                />
                <p className="text-base mt-1">Gender</p>
                <div className='flex flex-row gap-8'>
                    <div className="flex flex-row">
                        <label className="label justify-start gap-4 cursor-pointer">
                            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked value="male"
                                {...register("gender")}
                            />
                            <span className="label-text">Male</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label justify-start gap-4 cursor-pointer">
                            <input type="radio" name="radio-10" className="radio checked:bg-red-500" defaultChecked value="female"
                                {...register("gender")}
                            />
                            <span className="label-text">Female</span>
                        </label>
                    </div>
                </div>
                <div className='flex justify-between w-full mt-2'>
                    <p className="text-base">Country</p>
                    <ErrorMessage errors={errors} name="country" as="p" className="text-red-600" />
                </div>
                <input
                    type="text"
                    placeholder="Enter Country"
                    className="placeholder: pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
                    {...register("country", { required: "*required" })}
                />
                <div className='flex justify-between w-full mt-2'>
                    <p className="text-base">Phone Number</p>
                    <ErrorMessage errors={errors} name="phoneNumber" as="p" className="text-red-600" />
                </div>
                <input
                    type="text"
                    placeholder="Enter Number"
                    className="placeholder: pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
                    {...register("phoneNumber", { required: "*required" })}
                />
            </div>
        </div>
    )
}

export default PersonalForm
