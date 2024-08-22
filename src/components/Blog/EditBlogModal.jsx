import { FormProvider, useForm } from 'react-hook-form'
import { useState } from 'react';
import Input from '../ui/Input'
import staffStore from '../../stores/staffStore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import storage from '../../config/firebaseConfig'

const EditBlogModal = ({ id, blogTitle, blogContent, pictureUrl }) => {
    const [img, setImg] = useState(pictureUrl || null);
    const [imgName, setImgName] = useState("");
    const [imagePreview, setImagePreview] = useState(pictureUrl || null);

    const blogEditForm = useForm({
        defaultValues: {
            blogTitle: blogTitle || "",
            blogDescription: blogContent || "",
            postPic: []
        }
    });

    const updateBlog = staffStore((state) => state.updateBlog);
    const getBlogs = staffStore((state) => state.getMyBlogs);
    const username = staffStore((state) => state.username);

    const onSubmit = async (data) => {
        try {
            const updatedData = {
                blogTitle: data.blogTitle,
                blogContent: data.blogDescription,
                pictureUrl: pictureUrl // Use the existing pictureUrl by default
            };

            if (data.postPic && data.postPic.length > 0) {
                const image = data.postPic[0];
                const storageRef = ref(storage, `staffBlogs/${username}/${new Date().toUTCString() + imgName}`);
                const uploadTask = uploadBytesResumable(storageRef, image);
                
                await new Promise((resolve, reject) => {
                    uploadTask.on('state_changed', null, reject, async () => {
                        try {
                            const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                            updatedData.pictureUrl = imageUrl;
                            resolve();
                        } catch (error) {
                            reject(error);
                        }
                    });
                });
            }

            await updateBlog(id, updatedData);
            await getBlogs(username);
            document.getElementById(`editBlog${id}`).close();
        } catch (error) {
            console.error("Error updating blog:", error);
        }
    }

    const handleModalClose = () => {
        blogEditForm.reset();
        setImg(pictureUrl || null);
        setImgName("");
    };

    return (
        <FormProvider {...blogEditForm}>
            <dialog id={`editBlog${id}`} className="modal" onClose={handleModalClose}>
                <div className="modal-box w-11/12 max-w-6xl h-5/6 overflow-y-auto p-8 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">✕</button>
                    </form>
                    <form className='flex flex-col space-y-8' onSubmit={blogEditForm.handleSubmit(onSubmit)}>
                        <h3 className='text-3xl font-bold text-center mb-6'>Edit Blog</h3>

                        <div className='bg-gray-100 p-6 rounded-lg'>
                            <div className='flex justify-between items-center'>
                                <div className='w-1/2'>
                                    <Input
                                        type="text"
                                        left="Title"
                                        placeholder={blogTitle}
                                        registerInput="blogTitle"
                                        required="*required"
                                        inputValue={blogTitle}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='bg-gray-100 p-6 rounded-lg'>
                            <h4 className='text-xl font-semibold mb-4'>Picture</h4>
                            <div className='flex flex-col md:flex-row gap-12'>
                                <div className='w-full md:w-1/2 space-y-2'>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        {...blogEditForm.register("postPic", {
                                            onChange: (e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onloadend = () => {
                                                        setImagePreview(reader.result);
                                                        setImgName(file.name);
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }
                                        })}
                                        className="file-input file-input-bordered w-full"
                                    />
                                </div>
                                <div className='w-full md:w-1/2 space-y-2'>
                                    <div className='flex items-center space-x-4'>
                                        <div className="avatar">
                                            <div className="w-24 h-24 rounded">
                                                {imagePreview && <img src={imagePreview} alt="Uploaded preview" className="w-full h-full object-cover" />}
                                            </div>
                                        </div>
                                        <span className="text-sm">{imgName || "No image selected"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gray-100 p-6 rounded-lg'>
                            <h4 className='text-xl font-semibold mb-4'>Description</h4>
                            <textarea
                                {...blogEditForm.register("blogDescription")}
                                className='textarea textarea-bordered w-full h-40'
                                placeholder={blogContent}
                                defaultValue={blogContent}
                            />
                        </div>
                        <button type='submit' className='btn bg-[#7091E6] w-full mt-6 text-white' onClick={() => blogEditForm.handleSubmit(onSubmit)()}>Submit</button>
                    </form>
                </div>
            </dialog>
        </FormProvider>
    )

}

export default EditBlogModal