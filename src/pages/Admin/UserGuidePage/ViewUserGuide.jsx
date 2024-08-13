import React, { useState } from "react";
import Header from "../../../components/ui/Header";
import UserLayout from "../../../components/Layouts/UserLayout";
import UserGuide from "../../../components/UserGuide/UserGuide";
import UserGuideContent from "../../../components/UserGuide/UserGuideContent";

const ViewUserGuide = () => {
  const [selectedContent, setSelectedContent] = useState([]);

  return (
    <UserLayout>
      <Header>
        <span className="text-2xl">
          <b>User Guide</b>
        </span>
      </Header>
      <div className="flex flex-row bg-white h-screen">
        <UserGuide onSelect={setSelectedContent} />
        {console.log("Selected Content in ViewUserGuide:", selectedContent)}
        <UserGuideContent content={selectedContent || []} />
      </div>
    </UserLayout>
  );
};

// function ViewUserGuide() {
//   return (
//     <UserLayout>
//       <Header>
//         <span className="text-2xl">
//           <b>User Guide</b>
//         </span>
//       </Header>
//       <div className="flex flex-row">
//         <div className="flex flex-col h-screen bg-white">
//           <UserGuide />
//         </div>
//         <UserGuideContent />
//       </div>
//     </UserLayout>
//   );
// }

export default ViewUserGuide;
