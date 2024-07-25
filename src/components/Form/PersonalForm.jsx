import React from 'react'

const PersonalForm = ({ formData, setFormData }) => {
    return (
        <div className="w-full flex flex-col max-w-[300px]">
            <div className="w-full flex flex-col">
                <p className="text-base mt-1">Birth Date</p>
                <input
                    type="date"
                    className="placeholder: pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
                    value={formData.birthDate}
                    onChange={(event) =>
                        setFormData({ ...formData, birthDate: event.target.value })
                    }
                />


                <p className="text-base mt-1">Gender</p>
                <div className='flex flex-row gap-8'>
                    <div className="flex flex-row">
                        <label className="label justify-start gap-4 cursor-pointer">
                            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked
                                value={"Male"}
                                onChange={(event) =>
                                    setFormData({ ...formData, gender: event.target.value })
                                }
                            />
                            <span className="label-text">Male</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label justify-start gap-4 cursor-pointer">
                            <input type="radio" name="radio-10" className="radio checked:bg-red-500" defaultChecked
                                value={"Female"}
                                onChange={(event) =>
                                    setFormData({ ...formData, gender: event.target.value })
                                }
                            />
                            <span className="label-text">Female</span>
                        </label>
                    </div>
                </div>


                <p className="text-base mt-1">Country</p>
                <input
                    type="text"
                    placeholder="Enter Country"
                    className="placeholder: pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
                    value={formData.country}
                    onChange={(event) =>
                        setFormData({ ...formData, country: event.target.value })
                    }
                />

                <p className="text-base mt-1">Phone number</p>
                <input
                    type="number"
                    placeholder="Enter Number"
                    className="placeholder: pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
                    value={formData.phoneNumber}
                    onChange={(event) =>
                        setFormData({ ...formData, phoneNumber: event.target.value })
                    }
                />

            </div>
        </div>
    )
}

export default PersonalForm
