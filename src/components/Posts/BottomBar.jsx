

const BottomBar = () => {
  return (
    <div className='flex flex-col bg-white justify-start border-solid border-2 h-full pt-4'>
    <div className='flex flex-row justify-between items-center px-8'>
        <span className="text-xl">Description</span>
        <button type='submit' className="btn text-white bg-[#7091E6]">Publish</button>
    </div>
    <textarea name="" id="" className="textarea bg-[#E6E6E6] h-full mx-8 my-4" placeholder="Type a description"></textarea>
</div>
  )
}

export default BottomBar
