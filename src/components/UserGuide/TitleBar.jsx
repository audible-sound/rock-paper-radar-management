import React from "react";
import PlusSign from "../../assets/images/PlusSign.svg";

const TitleBar = () => {
  return (
    <div className="w-screen h-[100px] border-slate-400 bg-white">
      <div className="w-[200px] flex flex-col ">
        <div className="font-light text-base m-2">Title</div>
        <input
          type="email"
          placeholder="Enter a Title"
          className="p-2 mx-2 w-full h-10 text-black bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
        />
      </div>

      <div className="flex-row-reverse">
        <button
          type="button"
          className="bg-[#7091E6] hover:opacity-80 p-2.5 pr-4 rounded-md text-white float-right"
        >
          <img
            src={PlusSign}
            className="w-6 h-6 float-left mt-1 mr-1 fill-white"
          />
          Add Section
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
