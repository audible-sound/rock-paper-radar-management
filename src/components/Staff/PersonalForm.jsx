import Input from '../ui/Input'
import React, { useState, useEffect } from 'react';

const PersonalForm = () => {
    const [formData, setFormData] = useState({
        birthDate: '',
        country: '',
        phoneNumber: '',
    })
    const [errors, setErrors] = useState({})
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name')
            .then(response => response.json())
            .then(data => {
                const countryNames = data.map(country => country.name.common).sort()
                setCountries(countryNames)
            })
            .catch(error => console.error('Error fetching countries:', error))
    }, [])

    const validateField = (name, value) => {
        let error = ''
        switch (name) {
            case 'birthDate':
                const fiveYearsAgo = new Date();
                fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);
                const selectedDate = new Date(value);
                if (selectedDate > fiveYearsAgo) {
                    error = 'You must be at least 5 years old';
                }
                break
            //TODO - LIST OF COUNTRIES - IF NOT IN LIST OF COUNTRY, THROW ERROR
            case 'country':
                if (!countries.includes(value)) {
                    error = 'Please select a valid country from the list';
                }
                break
            case 'phoneNumber':
                if (value.length < 10) error = 'Enter a phone number with the format of 01XXXXXXXX'
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
                type="date"
                left={"Birth Date"} 
                registerInput={"birthDate"}
                required={"This is required"}
                onChange={(value) => handleChange('birthDate', value)}
                error={errors.birthDate}
            />
            <Input
                type="radio"
                options={[
                    {value: "male", label: "Male"},
                    {value: "female", label: "Female"}
                ]}
                left={"Gender"} 
                registerInput={"gender"}
                required={"This is required"}
            />
            <Input 
                type="select"
                left={"Country"} 
                registerInput={"country"}
                options={countries.map(country => ({ value: country, label: country}))}
                placeholder={"Enter your country of origin"}
                required={"This is required"}
                onChange={(value) => handleChange('country', value)}
                error={errors.country}
            />
            <Input 
                type="text"
                left={"Phone Number"} 
                registerInput={"phoneNumber"}
                placeholder={"01XXXXXXXX"}
                required={"This is required"}
                onChange={(value) => handleChange('phoneNumber', value)}
                error={errors.phoneNumber}
            />
        </div>
    )
}

export default PersonalForm