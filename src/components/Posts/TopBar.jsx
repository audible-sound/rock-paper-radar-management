import Input from '../ui/Input'
import SearchInput from '../ui/SearchInput'
import { useState } from 'react';

const TopBar = () => {
  const [location, setLocation] = useState('');
  return (
    <div className='flex flex-row justify-between bg-white border-solid border-x-2 px-8 py-2'>
      <Input 
        left={"Title"}
        placeholder={"Enter Title of Your Post"}
        registerInput={"postTitle"}
        required='*Required'
      />
      <div className='flex items-center'>
        <span className="text-xl mx-10"><b>{location}</b></span>
        <SearchInput setLocation={setLocation} />
      </div>
    </div>
  )
}

export default TopBar
