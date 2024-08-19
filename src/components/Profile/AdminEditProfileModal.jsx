import { FormProvider, useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import staffStore from "../../stores/staffStore"
import Input from "../ui/Input"
import { useState, useEffect } from "react"
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import storage from '../../config/firebaseConfig'
import LoadingSpinner from "../ui/LoadingSpinner";

const EditProfileModal = () => {
    const profileForm = useForm();
    const username = staffStore((state) => state.username);
    const [imagePreview, setImagePreview] = useState(null);
    const getPublicProfile = staffStore((state) => state.getPublicProfile);
    const updateProfile = staffStore((state) => state.updateProfile);
    const getMyBlogs = staffStore((state) => state.getMyBlogs);
    const [isLoading, setIsLoading] = useState(true);
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name')
            .then(response => response.json())
            .then(data => {
                const countryNames = data.map(country => country.name.common).sort()
                setCountries(countryNames)
            })
            .catch(error => console.error('Error fetching countries:', error))
    }, [])

    useEffect(() => {
        const fetchProfileData = async () => {
            setIsLoading(true);
            try {
                const profileData = await getPublicProfile(username);
                const year = new Date(profileData.birthDate).getFullYear();
                const month = String(new Date(profileData.birthDate).getMonth() + 1).padStart(2, '0'); // Months are zero-based
                const day = String(new Date(profileData.birthDate).getDate()).padStart(2, '0');
                const birthDate = `${year}-${month}-${day}`;
                profileForm.reset({
                    birthDate: birthDate,
                    gender: profileData.gender,
                    email: profileData.email,
                    country: profileData.country,
                    phoneNumber: profileData.phoneNumber,
                    description: profileData.description
                });
                setImagePreview(profileData.profilePictureUrl);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
            setIsLoading(false);
        };

        fetchProfileData();
    }, [getPublicProfile, profileForm, username]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    const onSubmit = async (data) => {
        // Handle form submission
        try {
            // if(data.description == profileForm.watch("description")){
            //     data.description = profileForm.watch("description");
            // }
            if (data.profilePicture && data.profilePicture[0]) {
                const image = data.profilePicture[0];
                setImagePreview(URL.createObjectURL(image));
                const storageRef = ref(storage, `profilePictures/${username}/${new Date().toUTCString() + image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, image);
                uploadTask.on('state_changed', null, (error) => {
                    console.log(error);
                }, async () => {
                    try {
                        const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                        await updateProfile({
                            email: data.email,
                            birthDate: data.birthDate,
                            gender: data.gender,
                            country: data.country,
                            phoneNumber: data.phoneNumber,
                            profileDescription: data.description,
                            profilePictureUrl: imageUrl
                        });
                        await getMyBlogs(username);
                        await getPublicProfile(username);
                        document.getElementById('editProfile').close();
                    } catch (error) {
                        console.log(error);
                    }
                });

            } else {
                await updateProfile({
                    email: data.email,
                    birthDate: data.birthDate,
                    gender: data.gender,
                    country: data.country,
                    phoneNumber: data.phoneNumber,
                    profileDescription: data.description,
                    profilePictureUrl: imagePreview
                });
                await getMyBlogs(username);
                await getPublicProfile(username);
                document.getElementById('editProfile').close();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FormProvider {...profileForm}>
            <dialog id={`editProfile`} className="modal">
                <div className="modal-box absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form className='flex flex-col justify-center items-center gap-4' onSubmit={profileForm.handleSubmit(onSubmit)}>
                        <span className='text-2xl'>Edit Profile</span>

                        {/* Personal Information Section */}
                        <div className="w-full mb-6">
                            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                            <div className="space-y-4">
                                <div>
                                    <Input
                                        left={"Birth Date"}
                                        registerInput={"birthDate"}
                                        required={"This field is required"}
                                        type={"date"}
                                        inputValue={profileForm.watch("birthDate")}
                                    />
                                </div>
                                <div className='flex flex-row gap-8 justify-betw mt-2'>
                                    <span className='text-base mt-1'>Gender</span>
                                    <div className="flex flex-row gap-4">
                                        <label className="label cursor-pointer">
                                            <input type="radio" name="gender" className="radio checked:bg-blue-500" value="male"
                                                checked={profileForm.watch("gender") === "male"}
                                                {...profileForm.register("gender")}
                                            />
                                            <span className="label-text ml-2">Male</span>
                                        </label>
                                        <label className="label cursor-pointer">
                                            <input type="radio" name="gender" className="radio checked:bg-red-500" value="female"
                                                checked={profileForm.watch("gender") === "female"}
                                                {...profileForm.register("gender")}
                                            />
                                            <span className="label-text ml-2">Female</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information Section */}
                        <div className="w-full mb-6">
                            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <div>
                                    <Input
                                        left={"Email"}
                                        placeholder={"Enter Email"}
                                        registerInput={"email"}
                                        required={"This field is required"}
                                        type={"email"}
                                        inputValue={profileForm.watch("email")}
                                    />
                                </div>
                                <Input 
                                    type="select"
                                    left={"Country"} 
                                    registerInput={"country"}
                                    options={countries.map(country => ({ value: country, label: country}))}
                                    placeholder={"Enter your country of origin"}
                                    required={"This is required"}
                                    inputValue={profileForm.watch("country")}
                                />
                                <Input
                                    left={"Phone Number"}
                                    type={"text"}
                                    placeholder={"Enter Phone Number"}
                                    registerInput={"phoneNumber"}
                                    required={"This is required"}
                                    inputValue={profileForm.watch("phoneNumber")}
                                />
                            </div>
                        </div>

                        {/* Profile Picture Section */}
                        <div className="w-full mb-6">
                            <h3 className="text-lg font-semibold mb-4">Profile Picture</h3>
                            <div className="flex flex-col items-center">
                                <input
                                    type="file"
                                    accept="image/*"
                                    {...profileForm.register("profilePicture", {
                                        onChange: (e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onloadend = () => {
                                                    setImagePreview(reader.result);
                                                };
                                                reader.readAsDataURL(file);
                                            }
                                        }
                                    })}
                                    className="file-input file-input-bordered w-full mb-4"
                                />
                                {imagePreview && (
                                    <div className="w-32 h-32 overflow-hidden rounded-full">
                                        <img src={imagePreview} alt="Profile Preview" className="w-full h-full object-cover" />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="w-full mb-6">
                            <h3 className="text-lg font-semibold mb-4">Profile Description</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered h-24"
                                    placeholder={profileForm.watch("description")} //AAAAAAAAAAAAAAAAAAAAAAAAA
                                    {...profileForm.register("description", { required: "Description is required" })}
                                    value={profileForm.watch("description")}
                                ></textarea>
                                <ErrorMessage
                                    errors={profileForm.formState.errors}
                                    name="description"
                                    render={({ message }) => <p className="text-red-500 text-sm mt-1">{message}</p>}
                                />
                            </div>
                        </div>

                        <button type='submit' className='btn bg-[#7091E6] text-white w-full mt-8' onClick={() => profileForm.trigger()}>Submit</button>
                    </form>
                </div>
            </dialog>
        </FormProvider>
    )
}

export default EditProfileModal