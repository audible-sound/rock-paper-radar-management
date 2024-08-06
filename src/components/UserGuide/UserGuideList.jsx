import React from "react";
import "./ArrowStyle.css";

const UserGuideCategory = () => {
  return (
    <div className="w-[270px] flex flex-col h-screen bg-white">
      {/* post management */}
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium active:font-bold text-balance pl-12">
          Post Management
        </div>

        <div className="collapse-content text-slate-500">
          <a href="http://"></a>
          <button
            type="button"
            className="pl-10 mb-2 focus:bg-[#7091E6] w-full text-left focus:text-slate-100 ease-in-out duration-200 rounded-md"
          >
            Create post
          </button>
          <button className="pl-10 mb-2 focus:bg-[#7091E6] w-full text-left focus:text-slate-100 ease-in-out duration-200 rounded-md">
            Edit post
          </button>
          <button className="pl-10 focus:bg-[#7091E6] w-full text-left focus:text-slate-100 ease-in-out duration-200 rounded-md">
            Delete post
          </button>
        </div>
      </div>

      {/* comment guideline */}
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium active:font-bold text-balance pl-12">
          Comment Guideline
        </div>

        <div className="collapse-content text-slate-500">
          <button className="pl-10 mb-2 focus:bg-[#7091E6] w-full text-left focus:text-slate-100 ease-in-out duration-200 rounded-md">
            Comment
          </button>
        </div>
      </div>

      {/* Likes */}
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium active:font-bold text-balance pl-12">
          Likes
        </div>

        <div className="collapse-content text-slate-500">
          <button className="pl-10 mb-2 focus:bg-[#7091E6] w-full text-left focus:text-slate-100 ease-in-out duration-200 rounded-md">
            Create post
          </button>
        </div>
      </div>

      {/* how to use map */}
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title capitalize text-xl font-medium active:font-bold text-balance pl-12">
          how to use map
        </div>

        <div className="collapse-content text-slate-500">
          <button className="pl-10 mb-2 focus:bg-[#7091E6] w-full text-left focus:text-slate-100 ease-in-out duration-200 rounded-md">
            Create post
          </button>
          <button className="pl-10 mb-2 focus:bg-[#7091E6] w-full text-left focus:text-slate-100 ease-in-out duration-200 rounded-md">
            Edit post
          </button>
          <button className="pl-10 focus:bg-[#7091E6] w-full text-left focus:text-slate-100 ease-in-out duration-200 rounded-md">
            Delete post
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserGuideCategory;
