import UserLayout from '../../../components/Layouts/UserLayout'
import Header from '../../../components/ui/Header'
import CreatePostBody from '../../../components/Posts/CreatePostBody'
import BackButton from '../../../components/ui/BackButton'

const WritePostPage = () => {
    return (
        <UserLayout>
            <Header className="flex flex-row items-center gap-6">
                <BackButton to="/user/profile"/>
                <span className='text-2xl'><b>Write Posts</b></span>
            </Header>
            <CreatePostBody />
        </UserLayout>
    )
}

export default WritePostPage
