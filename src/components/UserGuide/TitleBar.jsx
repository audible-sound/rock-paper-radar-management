import Badge from "../ui/Badge";
import Input from "../ui/Input";
import SearchInput from "../ui/SearchInput";
import Select from "../ui/Select";

const TitleBar = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row justify-between items-center bg-white border-solid border-2 px-8 py-2 ">
        <div className="w-1/3 px-2">
          <Input left="Title" placeholder="Enter a Title" />
        </div>

        <div className=" flex flex-col bg-white w-full">
          <div className="flex flex-row px-8 py-4 items-end">
            <Select />
            <button className="btn ml-4 text-white bg-[#7091E6]">
              Add Section
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white justify-start border-solid border-2 h-full pt-4">
        <div className="flex flex-row justify-between items-center px-8">
          <span className="text-xl">Description</span>
          <button className="btn text-white bg-[#7091E6]">Publish</button>
        </div>
        <textarea
          name=""
          id=""
          className="textarea bg-[#E6E6E6] h-full mx-8 my-4"
          placeholder="Type a description"
        ></textarea>
      </div>
    </div>
  );
};

export default TitleBar;
