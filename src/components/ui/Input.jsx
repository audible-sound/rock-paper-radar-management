import { useFormContext } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'

const Input = () => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <div className="form-control w-full max-w-md">
            <div className='flex justify-between w-full mb-2'>
                <p className="label-text">Title</p>
                <ErrorMessage errors={errors} name="postTitle" as="p" className="text-red-600" />
            </div>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Enter Title" {...register("postTitle", { required: "*required" })} />
            </label>
        </div>
    )
}

export default Input
