import face from "../../assets/images/Lucas.jpg"
import DotMenu from "../../assets/images/DotMenu.svg"
import Badge from "./Badge";
import { Link } from "react-router-dom";

const AuthorCard = ({ image, title, description, username, date, tags }) => {
    return (
        <Link to="/post-view">
            <div className="card bg-base-100 mx-8 mt-4 shadow-xl h-fit">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p>{description}</p>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center">
                            <div className='avatar'>
                                <div className='ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2 mr-4 mt-4 mb-4'>
                                    <img src={face} alt="" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm ">{username}</span>
                                <span className="text-sm text-[#ABABAB]">{date}</span>
                            </div>
                        </div>

                        <img src={DotMenu} alt="" className="w-8" />
                    </div>
                    <div className="card-actions justify-start">
                        {tags.map((tag) => {
                            return <Badge category={tag} />
                        }
                        )}
                    </div>
                </div>
            </div>
        </Link>

    );
}

export default AuthorCard
