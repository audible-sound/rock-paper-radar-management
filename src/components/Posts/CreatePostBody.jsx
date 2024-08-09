import { FormProvider, useForm } from 'react-hook-form'
import TopBar from './TopBar'
import MiddleBar from './MiddleBar'
import BottomBar from './BottomBar'

const CreatePostBody = () => {
    const writePostForm = useForm({
        defaultValues:{
            postTitle:"",
            location:"",
            postPic:"",
            categories:[],
            description:""
        }
    })

    const onSubmit = (data)=>{
        console.log(data);
        
    }

    return (
        <FormProvider {...writePostForm}  >
            <form className='flex flex-col w-full h-full' onSubmit={writePostForm.handleSubmit(onSubmit)}>           
                <TopBar/>
                <MiddleBar/>
                <BottomBar/>
            </form>
        </FormProvider>
        
    )
}

export default CreatePostBody
