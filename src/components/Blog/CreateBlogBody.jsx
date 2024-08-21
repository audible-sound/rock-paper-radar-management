import { FormProvider, useForm } from 'react-hook-form'
import TopBar from './TopBar'
import MiddleBar from './MiddleBar'
import BottomBar from './BottomBar'
import storage from '../../config/firebaseConfig'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import staffStore from '../../stores/staffStore'
import mainAxios from '../../api/mainAxios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const CreateBlogBody = () => {
    const navigate = useNavigate();
    const username = staffStore((state) => state.username);
    const writeBlogForm = useForm({
        defaultValues: {
            blogTitle: '',
            postPic: null,
            blogDescription: ''
        }
    });

    const onSubmit = async (data) => {
        const {
            postPic,
            blogTitle,
            blogDescription
        } = data;
        if(postPic){
            const image = postPic[0];
            const storageRef = ref(storage, `staffBlogs/${username}/${new Date().toUTCString() + image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, image);
            uploadTask.on('state_changed', null, (error) => {
                console.log(error);
            }, async () => {
                try {
                    const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                    await mainAxios.post('/blog', {
                        blogPicture: imageUrl,
                        blogTitle,
                        blogContent: blogDescription
                    }, {
                        headers: {
                            authorization: Cookies.get('token'),
                        }
                    });
                    navigate('/admin/blogs');
                } catch (error) {
                    console.log(error);
                }
            });
        } else {
            console.log("Please upload an image");
        }
    }

    return (
        <FormProvider {...writeBlogForm}>
            <form className='flex flex-col w-full h-full items-stretch flex-grow' onSubmit={writeBlogForm.handleSubmit(onSubmit)}>
                <TopBar />
                <MiddleBar />
                <BottomBar />
            </form>
        </FormProvider>
    )
}

export default CreateBlogBody