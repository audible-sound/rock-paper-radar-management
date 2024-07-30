import React from "react";
import TravelCard from "./TravelCard";

const TravelList = () => {
  const dummyData = [1, 2, 3, 4, 5];
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-opacity-50 ">
      {dummyData.map(() => {
        return <TravelCard />;
      })}
    </div>
  );
};

export default TravelList;
