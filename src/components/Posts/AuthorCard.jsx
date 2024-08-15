import Badge from "../ui/Badge";
import { Link } from "react-router-dom";
import ReadMore from "../ui/ReadMore";
import Dropdown from "../ui/Dropdown";
import EditPostModal from "./EditPostModal";
import DeletePostModal from "./DeletePostModal";
import userStore from "../../stores/userStore";

const AuthorCard = ({ postId, postTitle, pictureUrl, username, postContent, createdAt, profilePictureUrl, tags }) => {
    const actualUser = userStore((state) => state.username);
    const list = [
        {
            label: "Delete Post",
            action: () => document.getElementById(`deleteModal${postId}`).showModal(),
            modal: <DeletePostModal key={postId} id={postId} />
        },
        {
            label: "Edit Post",
            action: () => document.getElementById(`editModal${postId}`).showModal(),
            modal: <EditPostModal key={postId} id={postId} />
        }
    ]
    // Create report post modal
    if (actualUser !== username) {
        list.push({
            label: "Report User",
            action: () => document.getElementById(`editModal${postId}`).showModal(),
            modal: <DeletePostModal key={postId} id={postId} />
        })
    }

    return (
        <div className="card bg-base-100 shadow-xl w-80 m-4" key={postId}>
            <Link to={`/user/post-view?p=${postId}`}>
                <figure className="h-48 overflow-hidden">
                    <img
                        src={pictureUrl}
                        alt="Post Image"
                        className="w-full h-full object-cover"
                    />
                </figure>
            </Link>
            <div className="card-body p-6">
                <h2 className="card-title text-lg font-bold mb-2 line-clamp-2">
                    {postTitle}
                </h2>
                <div className="mb-4 h-10 overflow-y-auto">
                    <ReadMore>{postContent}</ReadMore>
                </div>
                <div className="flex flex-row justify-between items-center mb-4">
                    <div className="flex flex-row items-center">
                        <div className='avatar mr-3'>
                            <div className='ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2'>
                                <img src={profilePictureUrl} alt={username} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold">{username}</span>
                            <span className="text-xs text-gray-500">
                                {`${String(createdAt.getDate()).padStart(2, '0')}/${String(createdAt.getMonth() + 1).padStart(2, '0')}/${createdAt.getFullYear()}`}
                            </span>
                        </div>
                    </div>
                    <Dropdown items={list} />

                </div>
                <div className="card-actions justify-start">
                    {tags.slice(0, 3).map((tag, index) => (
                        <Badge category={tag.name} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AuthorCard