import { useState } from "react";
import Header from "../../../components/ui/Header";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import UserLayout from "../../../components/Layouts/UserLayout";
import UserGuide from "../../../components/UserGuide/UserGuide";
import UserGuideContent from "../../../components/UserGuide/UserGuideContent";
import PlusSign from "../../../assets/images/PlusSign.svg";
import { Link } from "react-router-dom";

const ViewUserGuide = ({ isUser }) => {
  const [selectedContent, setSelectedContent] = useState([]);

  const Layout = isUser ? UserLayout : AdminLayout;

  const handleDelete = (deletedId) => {
    setSelectedContent(prevContent => prevContent.filter(item => item.id !== deletedId));
  };

  return (
    <Layout>
      <Header>
        <div className="flex justify-between items-center">
          <span className="text-2xl">
            <b>User Guide</b>
          </span>
          {!isUser && (
            <Link
              to="/admin/user-guide-create"
              className="btn text-white bg-[#7091E6]"
            >
              <img
                src={PlusSign}
                className="w-6 h-6 inline-block mr-1 fill-white"
              />
              Add User Guide
            </Link>
          )}
        </div>
      </Header>
      <div className="flex flex-row bg-white h-screen">
        <UserGuide onSelect={setSelectedContent} />
        {console.log("Selected Content in ViewUserGuide:", selectedContent)}
        <UserGuideContent content={selectedContent || []} onDelete={handleDelete} />
      </div>
    </Layout>
  );
};

export default ViewUserGuide;