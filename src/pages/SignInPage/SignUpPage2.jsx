import React from "react";
import { Radio } from "@material-tailwind/react";

const colors = {
  primary: "#060606",
  background: "#f5f5f5",
  disbaled: "#D9D9D9",
};

const Login = () => {
  return (
    //picture
    <div className="w-screen h-screen flex items-start">
      
      <div className="w-screen h-screen">
        {/* side pic */}
        <div className="login-bg w-full h-full bg-cover bg-no-repeat brightness-50">
          
        </div>
      </div>
        <div className="absolute top-[10%] left-[10%] flex flex-col max-w-[30%] text-pretty">
          <h1 className="text-4xl text-white font-bold my-4 capitalize">Plan your next adventure with us</h1>
          <p className="text-xl text-white font-light capitalize">discover local hidden gems</p>
        </div>

      

      {/* login form */}
      <div className="w-2/3 h-full bg-[#f5f5f5] flex flex-col p-20 justify-center items-center">
        <div className="w-full flex flex-col max-w-[300px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-5xl font-bold mb-4">Sign Up</h3>
            <p className="text-base font-light mt-1 mb-2">Step 2 of 2</p>
          </div>

          <div className="w-full flex flex-col">
            <p className="text-base mt-1">Birth Date</p>
            <input
              type="date"
              className="placeholder: pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
            />

            
            <p className="text-base mt-1">Gender</p>
            <div className="flex gap-10">
              <Radio name="type" color="blue" label="Male" defaultChecked />
              <Radio name="type" color="blue" label="Female" />

            </div>

            <p className="text-base mt-1">Country</p>
            <input
              type="text"
              placeholder="Enter Country"
              className="placeholder: pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
            />

            <p className="text-base mt-1">Phone number</p>
            <input
              type="number"
              placeholder="Enter Number"
              className="placeholder: pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
            />

          </div>

          <div className="w-full flex flex-col my-6">
            <button className="w-full text-white my-2 bg-[#7091E6] font-semibold rounded-md p-2 text-center fle x items-center justify-center cursor-pointer hover:bg-[#7091E6] active:bg-violet-700 focus:outline-none">
              Submit
            </button>

  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
