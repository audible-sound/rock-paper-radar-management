import Posts from '../../../components/Posts/Posts'
import UserLayout from '../../../components/Layouts/UserLayout'
import Header from '../../../components/ui/Header'

const PostsPage = () => {
    return (
        <UserLayout>
            <Header>
                <span className='text-2xl'><b>Posts</b></span>
            </Header>
            <Posts />
        </UserLayout>
    )
}

export default PostsPage
