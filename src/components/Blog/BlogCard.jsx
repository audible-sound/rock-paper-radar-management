import { Link } from "react-router-dom"
import ReadMore from "../ui/ReadMore"
import Dropdown from "../ui/Dropdown"
import DeleteBlogModal from "./DeleteBlogModal"
import EditBlogModal from "./EditBlogModal"
import Cookies from "js-cookie"

const BlogCard = ({blogId, image, title, description, username, isStaff = false}) => {
    const currentUser = Cookies.get("username");
    const items = [
        {
            label: "Edit Blog",
            action: () => document.getElementById(`editBlog${blogId}`).showModal(),
            modal: <EditBlogModal
                        id={blogId}
                        blogTitle={title}
                        blogContent={description}
                        pictureUrl={image}
                    />
        },
        {
            label: "Delete Blog",
            action: () => document.getElementById(`deleteBlog${blogId}`).showModal(),
            modal: <DeleteBlogModal
                        blogId={blogId}
                    />
        },
    ]

  return (
            <div className="card bg-base-100 mx-8 mt-4 shadow-xl max-h-[500px]">    
            <Link to={`/blog/blog-view/${blogId}`}>
                <figure>
                    <img
                        src={image}
                        alt="Blog Image" />
                </figure>
                </Link>
                <div className="card-body flex flex-col">
                    <div className="flex justify-between">
                       <h2 className="card-title">
                        {title}
                    </h2> {
                        isStaff && username === currentUser &&
                        <Dropdown
                            items={items}
                        />
                    }
                        
                    </div>
                    
                    <ReadMore>{description}</ReadMore>
                </div>
            </div>
        
  )
}

export default BlogCard
