import { FormProvider, useForm } from 'react-hook-form'
import { useState } from 'react';
import Input from '../ui/Input'
import FileInput from '../ui/FileInput'
import SearchInput from '../ui/SearchInput'
import BadgeSelect from '../ui/BadgeSelect'
import userStore from '../../stores/userStore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import storage from '../../config/firebaseConfig'

const EditPostModal = ({ id, postTitle, postContent, tags, pictureUrl, location }) => {
    const tagValues = tags.map(tag => tag.name);
    const [badges, setBadges] = useState(tagValues || []);
    const [img, setImg] = useState(pictureUrl || null);
    const [imgName, setImgName] = useState("");
    const [currentLocation, setCurrentLocation] = useState(location || "");

    const postEditForm = useForm({
        defaultValues: {
            postTitle: postTitle || "",
            postDescription: postContent || "",
            postPic: []
        }
    });

    const updatePost = userStore((state) => state.updatePost);
    const getUserPosts = userStore((state) => state.getUserPosts);
    const username = userStore((state) => state.username);

    const onSubmit = async (data) => {
        try {
            const updatedData = {
                postTitle: data.postTitle,
                postContent: data.postDescription,
                postLocation: currentLocation,
                tags: badges,
                pictureUrl: pictureUrl
            };

            if (data.postPic && data.postPic.length > 0) {
                const image = data.postPic[0];
                const storageRef = ref(storage, `userPosts/${username}/${new Date().toUTCString() + imgName}`);
                const uploadTask = uploadBytesResumable(storageRef, image);
                
                uploadTask.on('state_changed', null, (error) => {
                    console.error("Error uploading image:", error);
                }, async () => {
                    const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                    updatedData.pictureUrl = imageUrl;
                    await updatePost(id, updatedData);
                    await getUserPosts(username);
                    document.getElementById(`editModal${id}`).close();
                });
            } else {
                await updatePost(id, updatedData);
                await getUserPosts(username);
                document.getElementById(`editModal${id}`).close();
            }
        } catch (error) {
            console.error("Error updating post:", error);
        }
    }

    const removeBadge = (badgeToRemove) => {
        setBadges(badges.filter(badge => badge !== badgeToRemove));
    };

    const resetBadges = () => {
        setBadges(tagValues || []);
    };

    const handleModalClose = () => {
        postEditForm.reset();
        setBadges(tagValues || []);
        setImg(pictureUrl || null);
        setImgName("");
        setCurrentLocation(location || "");
    };

    return (
        <FormProvider {...postEditForm}>
            <dialog id={`editModal${id}`} className="modal" onClose={handleModalClose}>
                <div className="modal-box w-11/12 max-w-6xl h-5/6 overflow-y-auto p-8 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">✕</button>
                    </form>
                    <form className='flex flex-col space-y-8' onSubmit={postEditForm.handleSubmit(onSubmit)}>
                        <h3 className='text-3xl font-bold text-center mb-6'>Edit Post</h3>

                        <div className='bg-gray-100 p-6 rounded-lg'>
                            <h4 className='text-xl font-semibold mb-4'>Basic Information</h4>
                            <div className='flex justify-between items-center'>
                                <div className='w-1/2'>
                                    <Input
                                        left="Title"
                                        placeholder="Enter Title"
                                        registerInput="postTitle"
                                        required="*required"
                                        inputValue={postTitle}
                                    />
                                </div>
                                <div className='w-1/2 flex items-center justify-end gap-10'>
                                    <span className="text-lg font-medium mr-4">{currentLocation}</span>
                                    <SearchInput setLocation={setCurrentLocation} />
                                </div>
                            </div>
                        </div>

                        <div className='bg-gray-100 p-6 rounded-lg'>
                            <h4 className='text-xl font-semibold mb-4'>Picture</h4>
                            <div className='flex gap-10'>
                                <div className='space-y-2'>
                                    <span className="text-lg font-medium">Add Picture</span>
                                    <FileInput
                                        onChange={(file) => {
                                            if (file) {
                                                setImg(URL.createObjectURL(file));
                                                setImgName(file.name);
                                            }
                                        }}
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <span className="text-lg font-medium">Uploaded Picture</span>
                                    <div className='flex items-center space-x-4'>
                                        <div className="avatar">
                                            <div className="w-24 rounded">
                                                {img && <img src={img} alt="Uploaded preview" />}
                                            </div>
                                        </div>
                                        <span>{imgName}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-gray-100 p-6 rounded-lg'>
                            <h4 className='text-xl font-semibold mb-4'>Tags</h4>
                            <BadgeSelect badges={badges} setBadges={setBadges} />
                            <div className="flex flex-wrap gap-2 mt-2">
                                {badges.map((badge, index) => (
                                    <div key={index} className="badge badge-outline bg-[#EDE8F5] text-[#7091E6] mr-4 mb-2">
                                        {badge}
                                        <button onClick={() => removeBadge(badge)} className="ml-2 text-xs font-bold">
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='bg-gray-100 p-6 rounded-lg'>
                            <h4 className='text-xl font-semibold mb-4'>Description</h4>
                            <textarea
                                {...postEditForm.register("postDescription")}
                                className='textarea textarea-bordered w-full h-40'
                                placeholder="Enter post description"
                                defaultValue={postContent}
                            />
                        </div>

                        <button type='submit' className='btn bg-[#7091E6] w-full mt-6 text-white'>Submit</button>
                    </form>
                </div>
            </dialog>
        </FormProvider>
    )
}

export default EditPostModal