import { useFormContext } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'

const Input = ({ 
    left = "", 
    placeholder = "", 
    registerInput = "", 
    required = "", 
    inputValue = "", 
    type = "", 
    options = "",
    onChange = "",
    error = "",

}) => {
    const handleInputChange = (e) => {
        if (onChange) {
            onChange(e.target.value)
        }
    }

    const { register, formState: { errors } } = useFormContext()

    if(type == "text" || type == "email" || type == "password" || type == "date" || type == "number"){
        return (
            <div className="form-control w-full max-w-md">
                <div className='flex justify-between w-full mb-2'>
                    <p className="label-text">{left}</p>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                    <input 
                        type={type} 
                        className="grow" 
                        placeholder={placeholder} 
                        {...register(registerInput, { required: required })} 
                        defaultValue={type === "date" ? inputValue || new Date().toISOString().split('T')[0] : inputValue} 
                        onChange={handleInputChange}
                    />
                </label>
                {error && <p className="text-red-600">{error}</p>}
                <br></br>
            </div>
        )
    }else if(type == "radio"){
        return (
            <div className="form-control w-full max-w-md">
                <div className='flex justify-between w-full mb-2'>
                    <p className="label-text">{left}</p>
                    <ErrorMessage errors={errors} name={registerInput} as="p" className="text-red-600" />
                </div>
                <div className={`flex ${options.length === 2 ? 'flex-row justify-between' : 'flex-col'} gap-2`}>
                    {options.map((option, index) => (
                        <label key={index} className="flex items-center gap-2">
                            <input
                                type="radio"
                                value={option.value}
                                {...register(registerInput, { required: required })}
                                defaultChecked={inputValue === option.value}
                                className="radio"
                                onChange={handleInputChange}
                            />
                            <span>{option.label}</span>
                        </label>
                    ))}
                </div>
                {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
                <br></br>
            </div>
        )
    } else if(type == "file") {
        return (
            <div className="form-control w-full max-w-md">
                <div className='flex justify-between w-full mb-2'>
                    <p className="label-text">{left}</p>
                    <ErrorMessage errors={errors} name={registerInput} as="p" className="text-red-600" />
                </div>
                <label className="input flex items-center gap-2">
                    <input 
                        type="file" 
                        accept="image/*"
                        className="file-input file-input-bordered w-full" 
                        {...register(registerInput, { 
                            required: required,
                            validate: {
                                lessThan10MB: files => files[0]?.size < 10000000 || "Max 10MB",
                                acceptedFormats: files =>
                                    ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) ||
                                    "Only PNG, JPEG and GIF"
                            }
                        })} 
                    />
                </label>
                <br></br>
            </div>
        )
    } else if(type == "selectCountry") {
        return (
            <div className="form-control w-full max-w-md">
                <div className='flex justify-between w-full mb-2'>
                    <p className="label-text">{left}</p>
                    <ErrorMessage errors={errors} name={registerInput} as="p" className="text-red-600" />
                </div>
                <select 
                    className="select select-bordered w-full"
                    {...register(registerInput, { required: required })}
                    defaultValue={inputValue}
                    onChange={handleInputChange}
                >
                    <option value="" disabled>Select {left}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
                <br></br>
            </div>
        )
    } else if(type == "select") {
        return (
            <div className="form-control w-full max-w-md">
                <div className='flex justify-between w-full mb-2'>
                    <p className="label-text">{left}</p>
                    <ErrorMessage errors={errors} name={registerInput} as="p" className="text-red-600" />
                </div>
                <select 
                    className="select select-bordered w-full"
                    {...register(registerInput, { required: required })}
                    defaultValue={inputValue}
                    onChange={handleInputChange}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
                <br></br>
            </div>
        )
    }
}

export default Input
