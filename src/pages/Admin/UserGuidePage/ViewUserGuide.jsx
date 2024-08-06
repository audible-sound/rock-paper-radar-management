import React from "react";
import Header from "../../../components/ui/Header";
import UserLayout from "../../../components/Layouts/UserLayout";
import UserGuideList from "../../../components/UserGuide/UserGuideList";
import UserGuideExample from "../../../components/UserGuide/UserGuideExample";

function ViewUserGuide() {
  return (
    <UserLayout>
      <Header>
        <span className="text-2xl">
          <b>User Guide</b>
        </span>
      </Header>
      <div className="flex flex-row">
        <UserGuideList />
        <UserGuideExample />
      </div>
    </UserLayout>
  );
}

export default ViewUserGuide;
