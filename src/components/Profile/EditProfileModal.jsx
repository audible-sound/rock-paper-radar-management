import { FormProvider, useForm } from "react-hook-form"
import Input from "../ui/Input"

const EditProfileModal = () => {
  const profileForm = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <FormProvider {...profileForm}>
        <dialog id={`editProfile`}className="modal">
            <div className="modal-box">
                <form method="dialog"> 
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <form className='flex flex-col justify-center items-center gap-4' {...profileForm} onSubmit={profileForm.handleSubmit(onSubmit)}>
                    <span className='text-2xl'>Edit Profile</span>
                    <Input 
                        left={"Full Name"} 
                        placeholder={"Enter Full Name"}
                        registerInput={"fullName"}
                        required={"This is required"}
                        inputValue={""}
                    />
                    <Input 
                        left={"Description"} 
                        placeholder={"Enter Description"}
                        registerInput={"description"}
                        required={"This is required"}
                        inputValue={""}
                    />
                    <Input 
                        left={"Birth Date"} 
                        registerInput={"birthDate"}
                        required={"This is required"}
                        inputValue={""}
                        type={"date"}
                    />
                    <div className='flex flex-row gap-8 justify-center'>
                    <span className='text-base mt-1'>Gender</span>    
                    <div className="flex flex-row justify-start">
                    
                        <label className="label justify-start gap-4 cursor-pointer">
                            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked value="male"
                                {...profileForm.register("gender")}
                            />
                            <span className="label-text">Male</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label justify-start gap-4 cursor-pointer">
                            <input type="radio" name="radio-10" className="radio checked:bg-red-500" defaultChecked value="female"
                                {...profileForm.register("gender")}
                            />
                            <span className="label-text">Female</span>
                        </label>
                    </div>
                </div>
                    <button type='submit' className='btn w-full mt-8' onClick={() => profileForm.trigger()}>Submit</button>
                </form>
            </div>
        </dialog>
    </FormProvider>
  )
}

export default EditProfileModal

