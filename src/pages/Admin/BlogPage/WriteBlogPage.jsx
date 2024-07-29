import CreateBlogBody from "../../../components/Blog/CreateBlogBody"
import AdminLayout from "../../../components/Layouts/AdminLayout"
import Header from "../../../components/ui/Header"

const WriteBlogPage = () => {
    return (
        <AdminLayout>
            <Header>
                <span className='text-2xl'><b>Write Posts</b></span>
            </Header>
            <CreateBlogBody />
        </AdminLayout>
    )
}

export default WriteBlogPage
