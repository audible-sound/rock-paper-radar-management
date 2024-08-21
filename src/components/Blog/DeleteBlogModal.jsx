import staffStore from "../../stores/staffStore";

const DeleteBlogModal = ({blogId}) => {

    const deleteBlog = staffStore((state) => state.deleteBlog);
    const getBlogs = staffStore((state) => state.getMyBlogs);
    const username = staffStore((state) => state.username);

    const deleteBlogHandler = async () => {
        try {
            await deleteBlog(blogId);
            await getBlogs(username);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <dialog id={`deleteBlog${blogId}`} className="modal modal-middle">
        <div className="modal-box flex flex-col items-center  absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="font-bold text-lg">Warning!!!</h3>
            <p className="py-4">This action is irreversible, are you sure you want to continue?</p>
            <div className="modal-action">
                <button className="btn bg-red-600 text-white" onClick={deleteBlogHandler}>Delete</button>
            <form method="dialog">
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
  )
}

export default DeleteBlogModal
