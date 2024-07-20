import Posts from '../../components/Posts/Posts'
import UserLayout from '../../components/Layouts/UserLayout'
import UtilsBar from "../../components/ui/UtilsBar"

const PostsPage = () => {
    return (
        <div className='flex flex-row w-screen h-screen'>
            <UserLayout title="Community">
                <UtilsBar />
                <Posts />
            </UserLayout>
        </div>
    )
}

export default PostsPage
