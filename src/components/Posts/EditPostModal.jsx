import { FormProvider, useForm } from 'react-hook-form'
import Input from '../ui/Input'
import { useEffect } from 'react';

const EditPostModal = ({id, title, description}) => {
    const postEditForm = useForm()
    // remove title and description props and fetch data directly with the postid directly
    //integration should be done here with useEffect to ensure maximum effectiveness
    
    useEffect(() =>{
        //fetch with id
    }, [])

    const onSubmit = (data) => {
        console.log(data);
        //change post to add staff endpoint please tq
        // mainAxios.post('/auth/login', data)
    }

  return (
    <FormProvider {...postEditForm}>
        <dialog id="editPost" className="modal">
            <div className="modal-box">
                <form method="dialog"> 
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <form className='flex flex-col justify-center items-center' {...postEditForm} onSubmit={postEditForm.handleSubmit(onSubmit)}>
                    <span className='text-2xl'>Edit Form</span>
                    <Input 
                        left={"Full Name"} 
                        registerinput={"fullName"}
                        required={"This is required"}
                        inputValue={title}
                    />
                    <div className='flex flex-col w-full p-2 mb-8'>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="" className='textarea bg-[#E6E6E6] w-full' defaultValue={description}></textarea>
                    </div>
                    
                    <button type='submit' className='btn w-full' onClick={() => postEditForm.trigger()}>Submit</button>
                </form>
            </div>
        </dialog>
    </FormProvider>
  )
}

export default EditPostModal
