import face from "../../assets/images/Lucas.jpg"

const AuthorCard = () => {
    return (
        <div className="card bg-base-100 w-72 m-2 shadow-xl h-fit ">
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
                <div className="flex flex-row">
                    <div className='avatar'>
                        <div className='ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2 m-4'>
                            <img src={face} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span>Name</span>
                        <span>Date of post</span>
                    </div>
                    <img src="" alt="" />
                </div>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
}

export default AuthorCard
