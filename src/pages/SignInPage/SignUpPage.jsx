import React from "react";
import { Link } from 'react-router-dom'
import MultiForm from "../../components/Form/MultiForm";

const colors = {
  primary: "#060606",
  background: "#f5f5f5",
  disbaled: "#D9D9D9",
};

const SignUpPage = () => {
  return (
    //picture
    <div className="w-screen h-screen flex items-start">

      <div className="w-screen h-screen">
        {/* side pic */}
        <div className="bg-sign-in-bg w-full h-full bg-cover bg-no-repeat brightness-50">

        </div>
      </div>
      <div className="absolute top-[10%] left-[10%] flex flex-col max-w-[30%] text-pretty">
        <h1 className="text-4xl text-white font-bold my-4 capitalize">Plan your next adventure with us</h1>
        <p className="text-xl text-white font-light capitalize">discover local hidden gems</p>
      </div>



      {/* login form */}
      <MultiForm />
    </div>
  );
};

export default SignUpPage;
