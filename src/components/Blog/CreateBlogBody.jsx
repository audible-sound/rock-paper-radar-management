import { FormProvider, useForm } from "react-hook-form"
import FileInput from "../ui/FileInput"
import Input from "../ui/Input"
import { useState } from "react"
import { ref, uploadBytesResumable } from "firebase/storage"
import storage from "../../config/firebaseConfig"
import staffStore from "../../stores/staffStore"
import { useNavigate } from "react-router-dom"

import Lucas from '../../assets/images/Lucas.jpg'

const CreateBlogBody = () => {
    const methods = useForm()

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => console.log(data))} className='flex flex-col w-full h-full'>
                <div className='flex flex-row justify-between items-center bg-white border-solid border-2 px-8 py-2'>
                    <Input 
                        type="text"
                        left="Title" 
                        placeholder="Enter a Title" 
                        registerInput="blogTitle"
                        required="Please enter a title"
                    />
                </div>



                <div className='flex flex-row border-solid border-2'>
                    <div className='flex flex-col bg-white items-center px-8 py-4 border-solid border-r-2'>
                        <span className="text-lg mb-8">Add Pictures</span>
                        <FileInput />
                    </div>
                    <div className='flex flex-col w-full bg-white items-start px-8 py-4 border-solid border-r-2'>
                        <span className="text-lg mb-8">Upload Pictures</span>
                        <div className='flex flex-row items-center'>
                            <div className="avatar mr-4">
                                <div className="w-16 rounded">
                                    <img src={Lucas} alt="" />
                                </div>
                            </div>

                            <span>Image.jpg</span>
                        </div>
                    </div>
                </div>



                <div className='flex flex-col bg-white justify-start border-solid border-2 h-full pt-4'>
                    <div className='flex flex-row justify-between items-center px-8'>
                        <span className="text-xl">Description</span>
                        <button className="btn text-white bg-[#7091E6]">Publish</button>
                    </div>
                    <textarea name="" id="" className="textarea bg-[#E6E6E6] h-full mx-8 my-4" placeholder="Type a description"></textarea>
                </div>
            </form>
        </FormProvider>
    )
}

export default CreateBlogBody