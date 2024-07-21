import Posts from '../../components/Posts/Posts'
import UserLayout from '../../components/Layouts/UserLayout'
import Header from '../../components/ui/Header'

const PostsPage = () => {
    return (
        <UserLayout>
            <Header title="Community" />
            <Posts />
        </UserLayout>
    )
}

export default PostsPage
