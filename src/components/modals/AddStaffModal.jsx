import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form'
import mainAxios from '../../api/mainAxios';
import storage from '../../config/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import SignUpForm from '../forms/AccountForm';
import PersonalForm from '../forms/PersonalForm';
import ProfileForm from '../forms/ProfileForm';
import Cookies from 'js-cookie';

//TODO - ADD FINAL PAGE TO MODAL - STAFF ADDED SUCCESSFULLY OR STG

const AddStaffModal = () => {
    const staffForm = useForm()
    const onSubmit = async (formData) => {
        try {
            const {
                username,
                fullName,
                password,
                confirmPassword,
                userType,
                email,
                birthDate,
                gender,
                country,
                phoneNumber,
                description,
                profilePicture
            } = formData;

            const image = profilePicture[0];
            const storageRef = ref(storage, `profilePictures/${new Date().toUTCString() + image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, image);
            uploadTask.on('state_changed', null, error => {
                console.log(error);
            }, async () => {
                try {
                    const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                    await mainAxios.post('admin/registerStaff', {
                        username,
                        fullName,
                        password,
                        confirmPassword,
                        userType,
                        email,
                        birthDate,
                        gender,
                        country,
                        phoneNumber,
                        profileDescription: description,
                        pictureUrl: imageUrl
                    }, {
                        headers: {
                            'Authorization': Cookies.get('token'),
                        }
                    });
                    document.getElementById('my_modal_1').close();
                    window.location.reload();
                } catch (error) {
                    console.log('Error posting data:', error);
                }
            })
        } catch (error) {
            console.error('Error in form submission:', error);
        }
    }
    const [page, setPage] = useState(1);
    const FormTitles = ["Register Staff", "Personal Information", "Profile"];
    const PageDisplay = () => {
        if (page === 1) {
            return <SignUpForm />
        } else if (page === 2) {
            return <PersonalForm />
        } else if (page === 3) {
            return <ProfileForm />
        }
    }

    return (
        <FormProvider {...staffForm}>
            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Staff</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form className='flex flex-col justify-center items-center' {...staffForm} onSubmit={staffForm.handleSubmit(onSubmit)}>
                        <div className="w-full flex flex-col justify-center items-center mb-2 pt-6">
                            <h3 className="text-center text-4xl font-bold mb-4">{FormTitles[page - 1]}</h3>
                            <p className="text-base font-light mt-1 mb-2">Step {page} of {FormTitles.length}</p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-full mb-8'>
                            {PageDisplay()}
                        </div>
                        <div className='w-full flex flex-row justify-center gap-20'>
                            <Link className='btn min-w-28' onClick={() => {
                                setPage((currPage) => currPage - 1)
                            }} disabled={page === 1}>
                                Previous
                            </Link>
                            {
                                page === FormTitles.length ?
                                    <input
                                        type='submit'
                                        className='btn max-w-28'
                                        value='Submit' /> :
                                    <a
                                        className='btn min-w-28'
                                        onClick={() => {
                                            if (page < 3) {
                                                staffForm.trigger().then((res) => res ? setPage((currPage) => currPage + 1) : setPage(page))
                                            }
                                        }}
                                    >Next</a>
                            }
                        </div>
                    </form>
                </div>
            </dialog>
        </FormProvider>

    )
}

export default AddStaffModal