import { useFormContext } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'

const Input = ({ left = "", placeholder = "", registerInput = "", required = "", inputValue = "", type = "" }) => {
    const { register, formState: { errors } } = useFormContext()

    if(type == "text" || type == "email"){
        return (
            <div className="form-control w-full max-w-md">
                <div className='flex justify-between w-full mb-2'>
                    <p className="label-text">{left}</p>
                    <ErrorMessage errors={errors} name={registerInput} as="p" className="text-red-600" />
                </div>
                <label className="input input-bordered flex items-center gap-2">
                    <input type={type} className="grow" placeholder={placeholder} {...register(registerInput, { required: required })} defaultValue={inputValue} />
                </label>
            </div>
        )
    }else if(type == "radio"){
        return (
            <div className="form-control w-full max-w-md">
                <div className='flex justify-between w-full mb-2'>
                    <p className="label-text">{left}</p>
                    <ErrorMessage errors={errors} name={registerInput} as="p" className="text-red-600" />
                </div>
                <div className="flex flex-col gap-2">
                    {options.map((option, index) => (
                        <label key={index} className="flex items-center gap-2">
                            <input
                                type="radio"
                                value={option.value}
                                {...register(registerInput, { required: required })}
                                defaultChecked={inputValue === option.value}
                                className="radio"
                            />
                            <span>{option.label}</span>
                        </label>
                    ))}
                </div>
            </div>
        )
    }
}

export default Input
