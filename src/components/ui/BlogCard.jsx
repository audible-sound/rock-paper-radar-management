import { Link } from "react-router-dom"
import ReadMore from "../ui/ReadMore"
import Dropdown from "../ui/Dropdown"
import DeleteBlogModal from "../modals/DeleteBlogModal"
import EditBlogModal from "../modals/EditBlogModal"
import Cookies from "js-cookie"

const BlogCard = ({ blogId, image, title, description, username }) => {
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
                <div className="flex justify-between items-center">
                    <h2 className="card-title">
                        {title}
                    </h2> {
                        username === currentUser &&
                        <Dropdown
                            items={items}
                        />
                    }

                </div>
                
                <Link to={`/public-profile/${username}`} className="flex items-center mt-2 mb-4">
                    <div className="avatar mr-2">
                        <div className="w-8 h-8 rounded-full">
                            <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${username}`} alt={username} />
                        </div>
                    </div>
                    <span className="text-sm text-gray-600">By {username}</span>
                </Link>

                <ReadMore>{description}</ReadMore>
            </div>
        </div>

    )
}

export default BlogCard