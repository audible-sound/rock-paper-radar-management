import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Input from '../ui/Input'

const SignUpForm = () => {
    const {register, formState: {errors}, getValues} = useFormContext();
    return(
        <div className="w-full flex flex-col max-w-[300px]">
        <Input 
            type="radio"
            left={"User Type"} 
            registerInput={"userType"}
            placeholder={"Either 'staff' or 'admin'"}
            required={"This is required"}
        />
        <Input 
            type="text"
            left={"Full Name"} 
            registerInput={"fullName"}
            placeholder={"Enter your full name"}
            required={"This is required"}
        />
        <Input 
            type="text"
            left={"Username"} 
            registerInput={"username"}
            placeholder={"Enter your username"}
            required={"This is required"}
        />
        <Input 
            type="password"
            left={"Password"} 
            registerInput={"password"}
            placeholder={"Enter your password"}
            required={"This is required"}
        />
        <Input 
            type="password"
            left={"Re-type Password"} 
            registerInput={"confirmPassword"}
            placeholder={"Enter your password again"}
            required={"This is required"}
        />
        <Input 
            type="email"
            left={"Email"} 
            registerInput={"email"}
            placeholder={"Enter your email"}
            required={"This is required"}
        />
    </div>
    )
}

export default SignUpForm