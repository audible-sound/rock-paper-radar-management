import Lucas from '../../assets/images/Lucas.jpg'
import Dropdown from '../ui/Dropdown'

const PersonalComments = () => {
    const manageComments = [
        {
            label: "Edit Comments"
        },
        {
            label: "Delete Comments"
        },
    ]

  return (
    <div className='flex flex-row items-center w-full px-8 py-2'>
    <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-14 h-14 rounded-full ring ring-offset-2">
            <img src={Lucas} alt="" />
        </div>
    </div>
    <div className="p-5 flex-1">
        <div className="flex items-center">
            <b className="text-lg ">Real Xiang Rong</b>
            <p className="text-gray-400 ml-5">24/12/2024</p>
        </div>
        <div className="flex items-center justify-between">
            <p className="">OMG I AGREE OMG OMG OMG</p>
            <Dropdown
                items={manageComments}
            />
        </div>
    </div>
</div>
  )
}

export default PersonalComments
