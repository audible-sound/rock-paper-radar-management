import { useState } from 'react';
import Input from '../ui/Input'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import mainAxios from '../../api/mainAxios';
import storage from '../../config/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import SignUpForm from './SignUpForm';
// import PersonalForm from './PersonalForm';
// import ProfileForm from './ProfileForm';

const [page, setPage] = useState(1);

const FormTitles = ["Sign Up", "Personal Information", "Profile"];

const PageDisplay = () => {
    if(page === 1){
        return <SignUpForm />
    }else if(page === 2){
        // return <PersonalForm />
    }else if(page === 3){
        // return <ProfileForm />
    }
}

const AddStaffModal = () => {
    const staffForm = useForm()
    const navigate = useNavigate();
    const onSubmit = async (formData) => {
        try{
            await mainAxios.post('admin/registerStaff', formData)
            // TODO display some sort of message saying account created successfully
            // TODO display any errors that are returned from the server as well
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <FormProvider {...staffForm}>
        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Add Staff</button>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <form method="dialog"> 
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <form className='flex flex-col justify-center items-center' {...staffForm} onSubmit={staffForm.handleSubmit(onSubmit)}>
                    <span className='text-2xl'>Add New Staff</span>
                    {/* TODO change below to date input */}
                    <Input 
                        left={"Birth Date"} 
                        registerInput={"birthDate"}
                        placeholder={"Enter your birth date"}
                        required={"This is required"}
                    />
                    {/* TODO change below to radio buttons */}
                    <Input 
                        left={"Gender"} 
                        registerInput={"gender"}
                        placeholder={"Enter your gender"}
                        required={"This is required"}
                    />
                    <Input 
                        left={"Country"} 
                        registerInput={"country"}
                        placeholder={"Enter your country"}
                        required={"This is required"}
                    />
                    <Input 
                        left={"Phone Number"} 
                        registerInput={"phoneNumber"}
                        placeholder={"Enter your phone number"}
                        required={"This is required"}
                    />
                    <Input 
                        left={"Profile Description"} 
                        registerInput={"profileDescription"}
                        placeholder={"Enter your profile description"}
                        required={"This is required"}
                    />
                    {/* TODO change below to file input */}
                    <Input 
                    left={"Profile Picture"} 
                    registerInput={"pictureUrl"}
                    placeholder={"Enter your profile picture url"}
                    required={"This is required"}
                    />
                    <button type='submit' className='btn w-full' onClick={() => staffForm.trigger()}>Submit</button>
                </form>
            </div>
        </dialog>
    </FormProvider>
    
  )
}

export default AddStaffModal
