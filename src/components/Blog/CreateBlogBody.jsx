import Badge from "../ui/Badge"
import FileInput from "../ui/FileInput"
import Input from "../ui/Input"
import SearchInput from "../ui/SearchInput"
import Select from "../ui/Select"
import Lucas from '../../assets/images/Lucas.jpg'


const CreateBlogBody = () => {
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex flex-row justify-between items-center bg-white border-solid border-2 px-8 py-2'>
                <Input left="Title" placeholder="Enter a Title" />
                <div className='flex flex-row items-center'>
                    <div className='mr-8'>
                        <img src="" alt="" />
                        <span className="text-2xl "><b>Sandakan, Sabah, Malaysia</b></span>
                    </div>
                    <SearchInput />
                </div>

            </div>



            <div className='flex flex-row border-solid border-2'>
                <div className='flex flex-col bg-white items-center px-8 py-4 border-solid border-r-2'>
                    <span className="text-lg mb-8">Add Pictures</span>
                    <FileInput />
                </div>
                <div className='flex flex-col w-full bg-white items-start px-8 py-4 border-solid border-r-2'>
                    <span className="text-lg mb-8">Upload Pictures</span>
                    <div className='flex flex-row items-center'>
                        <div className="avatar mr-4">
                            <div className="w-16 rounded">
                                <img src={Lucas} alt="" />
                            </div>
                        </div>

                        <span>Image.jpg</span>
                    </div>
                </div>
                <div className=" flex flex-col bg-white w-full">
                    <div className="flex flex-row px-8 py-4">
                        <Select />
                        <button className="btn ml-4 text-white bg-[#7091E6]">Add Category</button>
                    </div>
                    <div className="px-8 py-4">
                        <Badge category="Gold" />
                        <Badge category="Bitcoin" />
                        <Badge category="Cryptocurrency and AI" />
                        <Badge category="The Bullrun" />
                        <Badge category="Goddddddddddddfsfsefld" />
                    </div>
                </div>
            </div>



            <div className='flex flex-col bg-white justify-start border-solid border-2 h-full pt-4'>
                <div className='flex flex-row justify-between items-center px-8'>
                    <span className="text-xl">Description</span>
                    <button className="btn text-white bg-[#7091E6]">Publish</button>
                </div>
                <textarea name="" id="" className="textarea bg-[#E6E6E6] h-full mx-8 my-4" placeholder="Type a description"></textarea>
            </div>
        </div>
    )
}

export default CreateBlogBody
