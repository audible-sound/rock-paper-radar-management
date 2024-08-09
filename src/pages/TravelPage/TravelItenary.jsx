import Header from "../../components/ui/Header";
import UserLayout from "../../components/Layouts/UserLayout";
import TravelList from "../../components/Travel/TravelList";
import PlusSign from "../../assets/images/PlusSign.svg";
import { Link } from "react-router-dom";

function TravelItenary() {
  return (
    <UserLayout>
      <Header>
        <span className="text-2xl">
          <b>Posts</b>
        </span>

        <Link
          to="/user/map-view"
          className="bg-[#7091E6] hover:opacity-80 pt-1.5 pr-3 rounded-md text-white float-right"
        >
          <img src={PlusSign} className="w-6 h-6 float-left mt-1 mr-1 fill-white" />
          + Add Location
        </Link>
      </Header>
      <TravelList />
    </UserLayout>
  );
}

export default TravelItenary;
