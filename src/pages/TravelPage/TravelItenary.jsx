import React from "react";
import Header from "../../components/ui/Header";
import UserLayout from "../../components/Layouts/UserLayout";
import TravelList from "../../components/Travel/TravelList";

const TravelItenary = () => {
  return (
    <UserLayout>
            <Header>
                <span className='text-2xl'><b>Posts</b></span>
            </Header>
            <TravelList />
        </UserLayout>
  );
};

export default TravelItenary;
