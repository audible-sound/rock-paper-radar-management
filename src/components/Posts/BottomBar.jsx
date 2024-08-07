import { useFormContext } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'


const BottomBar = () => {
  const {register, formState:{errors}} = useFormContext()

  return (
    <div className='flex flex-col bg-white justify-start border-solid border-2 h-full pt-4'>
    <div className='flex flex-row justify-between items-center px-8'>
        <span className="text-xl">Description</span>
        <ErrorMessage errors={errors} name="birthDate" as="p" className="text-red-600" />
        <button type='submit' className="btn text-white bg-[#7091E6]">Publish</button>
    </div>
    <textarea 
      name="" 
      id="" 
      className="textarea bg-[#E6E6E6] h-full mx-8 my-4" 
      placeholder="Type a description"
      {...register("postDescription", { required: "*required" })}
      >

    </textarea>
</div>
  )
}

export default BottomBar
