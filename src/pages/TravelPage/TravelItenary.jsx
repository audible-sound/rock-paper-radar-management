import React from "react";
import Header from "../../components/ui/Header";
import UserLayout from "../../components/Layouts/UserLayout";
import TravelList from "../../components/Travel/TravelList";
import PlusSign from "../../assets/images/PlusSign.svg";

function TravelItenary() {
  return (
    <UserLayout>
      <Header>
        <span className="text-2xl">
          <b>Posts</b>
        </span>

        <button
          type="button"
          className="bg-[#7091E6] hover:opacity-80 p-2.5 pr-4 rounded-md text-white float-right"
        >
          <img src={PlusSign} className="w-6 h-6 float-left mt-1 mr-1 fill-white" /> Add Location
        </button>
      </Header>
      <TravelList />
    </UserLayout>
  );
}

export default TravelItenary;
