import { FormProvider, useForm } from 'react-hook-form'
import TopBar from './TopBar'
import MiddleBar from './MiddleBar'
import BottomBar from './BottomBar'

const CreatePostBody = () => {
    const writePostForm = useForm()

    return (
        <FormProvider {...writePostForm}>
            <form className='flex flex-col w-full h-full'>           
                <TopBar/>
                <MiddleBar/>
                <BottomBar/>
            </form>
        </FormProvider>
        
    )
}

export default CreatePostBody
