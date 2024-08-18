import Input from '../ui/Input'
import React, { useState } from 'react';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        userType: '',
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    })
    const [errors, setErrors] = useState({})

    const validateField = (name, value) => {
        let error = ''
        switch (name) {
            case 'fullName':
                if (value.length < 2) error = 'Full name must be at least 2 characters long'
                break
            case 'username':
                if (value.length < 3) error = 'Username must be at least 3 characters long'
                break
            case 'password':
                if (value.length < 8) error = 'Password must be at least 8 characters long'
                break
            case 'confirmPassword':
                if (value !== formData.password) error = 'Passwords do not match'
                break
            case 'email':
                if (!/\S+@\S+\.\S+/.test(value)) error = 'Email is invalid'
                break
        }
        return error
    }

    const handleChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }))
        const error = validateField(name, value)
        setErrors(prev => ({ ...prev, [name]: error }))
    }
    
    return(
        <div className="w-full flex flex-col max-w-[300px]">
        <Input 
            type="radio"
            options={[
                {value: "staff", label: "Staff"},
                {value: "admin", label: "Admin"}
            ]}
            left={"User Type"} 
            registerInput={"userType"}
            required={"This is required"}
        />
        <Input 
            type="text"
            left={"Full Name"} 
            registerInput={"fullName"}
            placeholder={"Enter your full name"}
            required={"This is required"}
            onChange={(value) => handleChange('fullName', value)}
            error={errors.fullName}
        />
        <Input 
            type="text"
            left={"Username"} 
            registerInput={"username"}
            placeholder={"Enter your username"}
            required={"This is required"}
            onChange={(value) => handleChange('username', value)}
            error={errors.username}
        />
        <Input 
            type="password"
            left={"Password"} 
            registerInput={"password"}
            placeholder={"Enter your password"}
            required={"This is required"}
            onChange={(value) => handleChange('password', value)}
            error={errors.password}
        />
        <Input 
            type="password"
            left={"Re-type Password"} 
            registerInput={"confirmPassword"}
            placeholder={"Enter your password again"}
            required={"This is required"}
            onChange={(value) => handleChange('confirmPassword', value)}
            error={errors.confirmPassword}
        />
        <Input 
            type="email"
            left={"Email"} 
            registerInput={"email"}
            placeholder={"Enter your email"}
            required={"This is required"}
            onChange={(value) => handleChange('email', value)}
            error={errors.email}
        />
    </div>
    )
}

export default SignUpForm