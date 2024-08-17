import Input from '../ui/Input'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import staffStore from '../../stores/staffStore';
import mainAxios from '../../api/mainAxios';

const AddStaffModal = () => {
    const staffForm = useForm()
    const navigate = useNavigate();
    const onSubmit = async (formData) => {
        try{
            const response = await mainAxios.post('admin/registerStaff', formData)
            const {data, accessToken} = response.data;
            Cookies.set('token', accessToken, { expires: 30, path: '/' });
            Cookies.set('username', data.username, { expires: 30, path: '/' });
            Cookies.set('profilePictureUrl', data.profilePictureUrl, { expires: 30, path: '/' });
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
                    {/* TODO figure out how to do multi page like user register */}
                    <Input 
                        left={"Username"} 
                        registerInput={"username"}
                        placeholder={"Enter your username"}
                        required={"This is required"}
                    />
                    <Input 
                        left={"Full Name"} 
                        registerInput={"fullName"}
                        placeholder={"Enter your full name"}
                        required={"This is required"}
                    />
                    <Input 
                        left={"Password"} 
                        registerInput={"password"}
                        placeholder={"Enter your password"}
                        required={"This is required"}
                    />
                    <Input 
                        left={"Re-type Password"} 
                        registerInput={"confirmPassword"}
                        placeholder={"Enter your password again"}
                        required={"This is required"}
                    />
                    {/* TODO change below to radio buttons */}
                    <Input 
                        left={"User Type"} 
                        registerInput={"userType"}
                        placeholder={"Either 'staff' or 'admin'"}
                        required={"This is required"}
                    />
                    <Input 
                        left={"Email"} 
                        registerInput={"email"}
                        placeholder={"Enter your email"}
                        required={"This is required"}
                    />
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
