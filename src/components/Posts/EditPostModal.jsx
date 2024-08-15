import { FormProvider, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react';
import Input from '../ui/Input'
import FileInput from '../ui/FileInput'
import SearchInput from '../ui/SearchInput'
import BadgeSelect from '../ui/BadgeSelect'
import Badge from '../ui/Badge'

const EditPostModal = ({ id, post }) => {
    const [badges, setBadges] = useState([]);
    const [location, setLocation] = useState('');
    const [img, setImg] = useState(null);
    const [imgName, setImgName] = useState("");

    const postEditForm = useForm({
        // defaultValues: {
        //     postTitle: post.postTitle,
        //     postLocation: post.postLocation,
        //     postPic: null,
        //     categories: post.PostTags.map(tag => tag.name),
        //     postDescription: post.postContent
        // }
    });

    useEffect(() => {
        // setBadges(post.PostTags.map(tag => tag.name));
        // setLocation(post.postLocation);
        // setImg(post.pictureUrl);
        // setImgName(post.pictureUrl.split('/').pop());
    }, [post]);

    const onSubmit = (data) => {
        console.log(data);
        // Implement your submit logic here
    }

    return (
        <FormProvider {...postEditForm}>
            <dialog id={`editModal${id}`} className="modal">
                <div className="modal-box w-11/12 max-w-6xl h-5/6 overflow-y-auto p-8 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">✕</button>
                    </form>
                    <form className='flex flex-col space-y-8' onSubmit={postEditForm.handleSubmit(onSubmit)}>
                        <h3 className='text-3xl font-bold text-center mb-6'>Edit Post</h3>

                        <div className='grid grid-cols-2 gap-8'>
                            <div className='space-y-6'>
                                <Input
                                    left="Title"
                                    placeholder="Enter Title"
                                    registerInput="postTitle"
                                    required="*required"
                                />

                                <div className='flex items-center'>
                                    <span className="text-lg">{location}</span>
                                    <SearchInput setLocation={setLocation} />
                                </div>
                            </div>

                            <div className='space-y-6 flex gap-10'>
                                <div className='space-y-2'>
                                    <span className="text-xl font-semibold">Add Picture</span>
                                    <FileInput />
                                </div>
                                <div className='space-y-2'>
                                    <span className="text-xl font-semibold">Uploaded Picture</span>
                                    <div className='flex items-center space-x-4'>
                                        <div className="avatar">
                                            <div className="w-24 rounded">
                                                <img src={img} alt="" />
                                            </div>
                                        </div>
                                        <span>{imgName}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-2 flex flex-col'>
                            <span className="text-xl font-semibold">Tags</span>
                            <BadgeSelect badges={badges} setBadges={setBadges} />
                            <div className="flex flex-wrap gap-2 mt-2">
                                {badges.map((badge, index) => (
                                    <Badge key={index} category={badge} />
                                ))}
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="postDescription" className="text-xl font-semibold">Description</label>
                            <textarea
                                {...postEditForm.register("postDescription")}
                                className='textarea textarea-bordered w-full h-40'
                                placeholder="Enter post description"
                            />
                        </div>

                        <button type='submit' className='btn btn-primary w-full mt-6'>Submit</button>
                    </form>
                </div>
            </dialog>
        </FormProvider>
    )
}

export default EditPostModal