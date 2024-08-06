import Input from '../ui/Input'
import { FormProvider, useForm } from 'react-hook-form'


const AddStaffModal = () => {
    const staffForm = useForm()

    const onSubmit = (data) => {
        console.log(data);
        //change post to add staff endpoint please tq
        // mainAxios.post('/auth/login', data)
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
                    <Input 
                        left={"Full Name"} 
                        registerinput={"fullName"}
                        required={"This is required"}
                    />
                    <Input 
                        left={"Email"} 
                        registerinput={"email"}
                        required={"This is required"}
                    />
                    <Input 
                        left={"Password"} 
                        registerinput={"password"}
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
