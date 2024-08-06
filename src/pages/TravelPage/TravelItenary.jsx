import Header from "../../components/ui/Header";
import UserLayout from "../../components/Layouts/UserLayout";
import TravelList from "../../components/Travel/TravelList";
import { Link } from "react-router-dom";

const TravelItenary = () => {
  return (
    <UserLayout>
      <Header>
        <span className="text-2xl">
          <b>Posts</b>
        </span>

        <Link
          to="/user/map-view"
          className="bg-[#7091E6] hover:opacity-80 p-2 rounded-md text-white float-right"
        >
          + Add Location
        </Link>
      </Header>
      <TravelList />
    </UserLayout>
  );
};

export default TravelItenary;
