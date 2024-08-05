import React from "react";
import Marker from "../../assets/images/Marker.svg";
import DotMenu from "../../assets/images/DotMenu.svg";
import Badge from "../ui/Badge.jsx";

const TravelCard = ({ image, title, location, duration, tags }) => {
  return (
    <div className="card card-side bg-base-100 shadow-sm border-2 w-11/12 h-2/6 m-4">
      <figure className="bg-cover w-1/3 h-auto">
        <img src={image} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="card-title">
              {title}
              <div className="font-normal text-base mt-2">
                <img src={Marker} alt="" className="w-8 h-8 float-left mb-1" />
                {location}
              </div>
            </h2>
          </div>
          <img src={DotMenu} alt="" className="m-1 w-8 h-8" />
        </div>

        <div className="leading-9">
          <b>Duration:</b> {duration}
        </div>

        <div className="card-actions justify-start ">
          <b>Tags:</b>
          <div>
            {tags.map((tag) => {
              return <Badge category={tag} key={tag} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
