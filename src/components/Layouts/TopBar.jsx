import Input from '../fields/Input'

const TopBar = () => {
  return (
    <div className='flex flex-row justify-between bg-white border-solid border-x-2 px-8 py-2'>
      <Input
        type={"text"}
        left={"Title"}
        placeholder={"Enter Title"}
        registerInput={"blogTitle"}
        required={"*required"}
        inputValue={""} />
    </div>
  )
}

export default TopBar