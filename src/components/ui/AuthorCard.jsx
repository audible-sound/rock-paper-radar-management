import face from "../../assets/images/Lucas.jpg"
import DotMenu from "../../assets/images/DotMenu.svg"

const AuthorCard = () => {
    return (
        <div className="card bg-base-100 w-[22.7rem] m-2 shadow-xl h-fit ">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center">
                        <div className='avatar'>
                            <div className='ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2 mr-4 mt-4 mb-4'>
                                <img src={face} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm ">Name</span>
                            <span className="text-sm text-[#ABABAB]">Date of post</span>
                        </div>
                    </div>

                    <img src={DotMenu} alt="" className="w-8" />
                </div>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline bg-[#EDE8F5] text-[#7091E6]">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
}

export default AuthorCard
