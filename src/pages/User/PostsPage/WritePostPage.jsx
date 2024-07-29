import UserLayout from '../../../components/Layouts/UserLayout'
import Header from '../../../components/ui/Header'
import CreatePostBody from '../../../components/Posts/CreatePostBody'

const WritePostPage = () => {
    return (
        <UserLayout>
            <Header>
                <span className='text-2xl'><b>Write Posts</b></span>
            </Header>
            <CreatePostBody />
        </UserLayout>
    )
}

export default WritePostPage
