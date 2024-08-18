import { Link } from "react-router-dom"
import Blogs from "../../../components/Blog/Blogs"
import AdminLayout from "../../../components/Layouts/AdminLayout"
import Header from "../../../components/ui/Header"

const BlogPage = () => {
    return (
    <AdminLayout>
        <Header className={"flex flex-row justify-between items-center"}>
            <span className='text-2xl'><b>Blog</b></span>
            <Link to="/admin/blog-create" className="btn btn-primary ml-5">Add Blog</Link>
        </Header>
        <Blogs />
    </AdminLayout>
  )
}

export default BlogPage

