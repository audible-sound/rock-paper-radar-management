import Input from '../ui/Input'
import SearchInput from '../ui/SearchInput'

const TopBar = () => {
  return (
    <div className='flex flex-row justify-between items-center bg-white border-solid border-2 px-8 py-2'>
                <Input 
                    left="Title" 
                    placeholder="Enter a Title" 
                    registerinput='postTitle'
                    required={"This is required"}
                />
                <div className='flex flex-row items-center'>
                    <div className='mr-8'>
                        <img src="" alt="" />
                        <span className="text-2xl "><b>Sandakan, Sabah, Malaysia</b></span>
                    </div>
                    <SearchInput />
                </div>

    </div>
  )
}

export default TopBar
