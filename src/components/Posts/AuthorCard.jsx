import face from "../../assets/images/Lucas.jpg"
import Badge from "../ui/Badge";
import { Link } from "react-router-dom";
import ReadMore from "../ui/ReadMore";
import Dropdown from "../ui/Dropdown";
import EditPostModal from "./EditPostModal";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

const AuthorCard = ({ id, image, title, description, username, date, tags }) => {
    const [currTitle, setCurrTitle] = useState(title)
    const [currDescription, setCurrDescription] = useState(description)

    console.log(id);
    
    const manageList = [
        {
            label: "Edit Post",
            action: () => {
                document.getElementById('editPost').showModal()
                console.log(title);
                
                setCurrTitle(title)  
                console.log(currTitle);
                
                setCurrDescription(description)             
            },
            modal: <EditPostModal
                key={id}
                id={id}
                title={currTitle}
                description={currDescription}
            /> ,
        },
        {
            label: "Delete Post",
            action: () => document.getElementById('deleteModal').showModal(),
            modal: <DeleteModal
                key={id}
            /> ,
        },
    ]

    return (
        
            <div className="card bg-base-100 mx-8 mt-4 shadow-xl max-h-[700px]">
                <Link to="/user/post-view"><figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                </Link>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <ReadMore>{description}</ReadMore>
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

                        <Dropdown
                            key={id}
                            items={manageList}
                        />
                    </div>
                    <div className="card-actions justify-start">
                        {tags.map((tag) => {
                            return <Badge category={tag} key={tag} />
                        }
                        )}
                    </div>
                </div>
            </div>
        

    );
}

export default AuthorCard
