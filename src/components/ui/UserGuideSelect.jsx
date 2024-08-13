import React from "react";
import Select from "./Select";

const UserGuideSelect = ({ defaultChoice }) => {
  const options = [
    "Post Management",
    "Comment Guidelines",
    "Likes",
    "Map Guidance",
  ];

  return (
    <div>
      <label className="block text-sm font-normal text-gray-700 pb-2">
        Select a Section
      </label>
      <Select options={options} defaultChoice={defaultChoice || "Select Section"} />
    </div>
  );
};

export default UserGuideSelect;
