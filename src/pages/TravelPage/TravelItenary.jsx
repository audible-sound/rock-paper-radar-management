import React from "react";
import AuthorCard from "../../components/ui/AuthorCard";
import Header from "../../components/ui/Header";
import UtilsBar from "../../components/ui/UtilsBar";

const TravelItenary = () => {
  return (
    <div>
      <UtilsBar />
      <Header />
      <div className="grid grid-cols-4 bg-opacity-50 ">
        <AuthorCard />
      </div>
    </div>
  );
};

export default TravelItenary;
