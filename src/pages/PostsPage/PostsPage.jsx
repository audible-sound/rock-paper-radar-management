import Posts from '../../components/Posts/Posts'
import UserLayout from '../../components/Layouts/UserLayout'
import UtilsBar from "../../components/ui/UtilsBar"
import Header from '../../components/ui/Header'

const PostsPage = () => {
    return (
        <UserLayout>
            <Header title="Community" />
            <UtilsBar />
            <Posts />
        </UserLayout>
    )
}

export default PostsPage
