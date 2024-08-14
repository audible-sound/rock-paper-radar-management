import Header from "../../../components/ui/Header";
import UserLayout from "../../../components/Layouts/UserLayout";
import TravelList from "../../../components/Travel/TravelList";
import { Link } from "react-router-dom";
import PlusSign from '../../../assets/images/PlusSign.svg'

function TravelItinerary() {
  return (
    <UserLayout>
      <Header>
        <span className="text-2xl">
          <b>Travel Itenary</b>
        </span>

        <Link
          to="/user/map-view"
          className="bg-[#7091E6] hover:opacity-80 py-1.5 px-3 rounded-md text-white float-right flex flex-row justify-center items-center"
        >
          <img
            src={PlusSign}
            className="w-6 h-6 float-left mt-1 mr-1 fill-white"
          />
          Add Location
        </Link>
      </Header>
      <TravelList />
    </UserLayout>
  );
}

export default TravelItinerary;
