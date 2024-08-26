import { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../fields/Input";
import PlusSign from "../../assets/icons/plusSign.svg";
import mainAxios from "../../api/mainAxios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const TitleBar = () => {
  const [sections, setSections] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const navigate = useNavigate();

  const userGuideForm = useForm({
    defaultValues: {
      title: "",
      userType: "",
      description: "",
      userGuideSection: ""
    }
  });

  const onSubmit = async (data) => {
    const {
      title, 
      userType, 
      description, 
      userGuideSection
    } = data;
    try{
      await mainAxios.post('/userguide', {
        title,
        forUserType: userType,
        content: description,
        section: userGuideSection
      }, {
        headers: {
          Authorization: Cookies.get('token')
        }
      });
    }catch(error){
      console.log(error);
    }finally{
      navigate('/admin/user-guide');
    }
  }

  return (
    <FormProvider {...userGuideForm}>
    <form onSubmit={userGuideForm.handleSubmit(onSubmit)} className="flex flex-col w-full h-full">
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row justify-between items-center bg-white border-solid border-2 px-6 py-4">
        <div className="w-1/3 px-2">
          <Input 
          type="text" 
          left="Title" 
          placeholder="Enter a Title" 
          registerInput="title" 
          required="true"
          />
        </div>

        <div className="w-1/3 px-2">
          <Input 
          type="select" 
          left="For user type" 
          placeholder="Select user type" 
          registerInput="userType" 
          required={true}
          options={['user', 'staff']}
          />
        </div>
        <div className="w-1/3 px-2">
        {!isAdding ? (
          <Input 
          type="select" 
          left="Choose Section" 
          placeholder="Select Section" 
          registerInput="userGuideSection" 
          required={true}
          options={sections.map(section => section.name)}
          />) : (
            <Input 
            type="text" 
            left="New Section Name" 
            placeholder="Enter a Section Name" 
            registerInput="userGuideSection" 
            required={true}
            />
          )}

        </div>
        <div className="flex flex-row pl-7 pr-2 place-content-end pb-2">
          {!isAdding ? (
          <button className="btn ml-4 mt-3 text-white bg-[#7091E6]" onClick={() => setIsAdding(true)} >
            <img
              src={PlusSign}
              className="w-6 h-10 float-left mt-1 fill-white"
            />
            Add Section
          </button>) : (
            <button className="btn ml-4 mt-3 text-white bg-[#7091E6]" onClick={() => setIsAdding(false)} >
              Cancel
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col bg-white justify-start border-solid border-2 h-full pt-4">
        <div className="flex flex-row justify-between items-center px-8">
          <span className="text-xl">Description</span>
          <button className="btn text-white bg-[#7091E6]">Publish</button>
        </div>
        <textarea
          name="description"
          className="textarea bg-[#E6E6E6] h-full mx-8 my-4"
          placeholder="Type a description"
          {...userGuideForm.register("description", { required: "*required" })}
        >
        </textarea>
      </div>
    </div>
    </form>
    </FormProvider>
  );
};

export default TitleBar;