import React from "react";
import TravelCard from "./TravelCard";
import travelBg from "../../assets/images/travel-pic.png";

const TravelList = () => {
  const dummyData = [
    {
      id: 1,
      image: travelBg,
      title: "the walk of faith",
      location: "Sandakan, Malaysia",
      duration: "15 minutes",
      tags: ["Hood", "Nature", "Wildlife"],
    },
    {
      id: 2,
      image: travelBg,
      title: "the walk of faith",
      location: "Sandakan, Malaysia",
      duration: "15 minutes",
      tags: ["Hood", "Nature", "Wildlife"],
    },
    {
      id: 3,
      image: travelBg,
      title: "the walk of faith",
      location: "Sandakan, Malaysia",
      duration: "15 minutes",
      tags: ["Hood", "Nature", "Wildlife"],
    },
  ];

  return (
    <div className="grid-cols-1 bg-opacity-50 ">
      {dummyData.map(({ id, image, title, location, duration, tags }) => {
        return (
          <TravelCard
            key={id}
            image={image}
            title={title}
            location={location}
            duration={duration}
            tags={tags}
            hoverable
          />
        );
      })}
    </div>
  );
};

export default TravelList;
