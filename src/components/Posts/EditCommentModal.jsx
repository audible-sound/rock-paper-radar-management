import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import LoadingSpinner from "../ui/LoadingSpinner";

const EditCommentModal = ({comment=""}) => {
    const postEditForm = useForm()
    const [isLoading, setIsLoading] = useState(true);
    // remove title and description props and fetch data directly with the postid directly
    //integration should be done here with useEffect to ensure maximum effectiveness
    
    useEffect(() => {
        const fetchCommentData = async () => {
            setIsLoading(true);
            //fetch with id
            setIsLoading(false);
        };

        fetchCommentData();
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    const onSubmit = (data) => {
        console.log(data);
        //change post to add staff endpoint please tq
        // mainAxios.post('/auth/login', data)
    }


  return ( 
    <dialog id={`editCommentModal`}className="modal">
        <div className="modal-box">
            <form method="dialog"> 
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <form className='flex flex-col justify-center items-center' {...postEditForm} onSubmit={postEditForm.handleSubmit(onSubmit)}>
                <span className='text-2xl'>Edit Form</span>
                <div className='flex flex-col w-full p-2 mb-8'>
                    <label htmlFor="description">Comment</label>
                    <textarea name="comment" id="" className='textarea bg-[#E6E6E6] w-full' defaultValue={comment}
                    {...postEditForm.register("comment")}
                    ></textarea>
                </div>
                
                <button type='submit' className='btn w-full' onClick={() => postEditForm.trigger()}>Submit</button>
            </form>
        </div>
    </dialog>
  )
}

export default EditCommentModal