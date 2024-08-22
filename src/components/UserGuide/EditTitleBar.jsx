import { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import PlusSign from "../../assets/images/PlusSign.svg";
import mainAxios from "../../api/mainAxios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const TitleBar = ({ id }) => {
  const [sections, setSections] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [guideData, setGuideData] = useState(null);
  const navigate = useNavigate();

  const userGuideForm = useForm({
    defaultValues: {
      title: "",
      userType: "",
      description: "",
      userGuideSection: ""
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sectionsResponse] = await Promise.all([
          mainAxios.get('userguide/sections')
        ]);
        const transformedSections = sectionsResponse.data.data.map(item => ({
          name: item.section})
        )
        const dataResponse = await mainAxios.get(`userguide/${id}`, {
          headers: {
            Authorization: Cookies.get('token')
          }
        });
        const responseData = dataResponse.data.data[0];
        setGuideData(responseData);
        
        userGuideForm.reset({
          title: responseData.title,
          userType: responseData.forUserType,
          description: responseData.content,
          userGuideSection: responseData.section
        });

        setSections(transformedSections);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id, userGuideForm]);

  const onSubmit = async (data) => {
    try{
      await mainAxios.put(`/userguide/${id}`, {
        title: data.title,
        forUserType: data.userType,
        content: data.description,
        section: data.userGuideSection
      }, {
        headers: {
          Authorization: Cookies.get('token')
        }
      });
    }catch(error){
      console.log(error);
    }finally{
      navigate(-1);
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
          placeholder={guideData?.title || "Enter a Title"}
          registerInput="title" 
          required="true"
          />
        </div>

        <div className="w-1/3 px-2">
          <Input 
          type="select" 
          left="For user type" 
          placeholder={guideData?.forUserType || "Select user type"}
          registerInput="userType" 
          required={true}
          options={['Normal User', 'Employee']}
          />
        </div>
        <div className="w-1/3 px-2">
        {!isAdding ? (
          <Input 
          type="select" 
          left="Choose Section" 
          placeholder={guideData?.section || "Select Section"}
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
          placeholder={guideData?.content || "Type a description"}
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