import React from "react";
import Marker from "../../assets/images/Marker.svg";
import DotMenu from "../../assets/images/DotMenu.svg";

const TravelCard = ({ image, title, location, duration, tags }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {title}</h2>
        <div className="">
          {location}
          <img src={Marker} alt="" className="w-5 h-5 float-left" />
        </div>

        <div>Duration: {duration}</div>

        <img src={DotMenu} alt="" className="w-8" />

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
