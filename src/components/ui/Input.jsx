import { useFormContext } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'

const Input = ({ right, left, rightB, placeholder, registerInput = "", required = {} }) => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <label className="form-control w-full max-w-md">
            <div className="label">
                <span className="label-text">{left}</span>
                <span className="label-text-alt">{right}</span>
            </div>
            <input type="text" placeholder={placeholder} className="input input-bordered w-full max-w-md" {...registerInput ? register(registerInput, { required: required }) : ""} />
            <div className="label">
                {<ErrorMessage errors={errors} name={registerInput} as="p" />}
                <span className="label-text-alt">{rightB}</span>
            </div>
        </label>
    )
}

export default Input
