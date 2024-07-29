import { Link } from "react-router-dom"
import ReadMore from "../ui/ReadMore"

const BlogCard = ({image, title, description}) => {
  return (
    <Link to="/admin/blog-view">
            <div className="card bg-base-100 mx-8 mt-4 shadow-xl max-h-[500px]">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <ReadMore>{description}</ReadMore>
                </div>
            </div>
        </Link>
  )
}

export default BlogCard
