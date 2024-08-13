import Lucas from '../../assets/images/Lucas.jpg'
import travel from '../../assets/images/travel-pic.png'
import DotMenu from "../../assets/images/DotMenu.svg"
import { Link } from "react-router-dom"


const ViewBlogBody = () => {
    return (
        <div className='flex flex-col w-full h-full bg-white'>
            <div className='flex flex-row items-center px-5 py-2'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <b className='text-lg'>Discover the Beauty of Paris Night City</b>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-black ml-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
                        <circle cx="12" cy="9" r="3" />
                    </svg>
                    <b>KL, Gombak, Paris</b>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full h-16 p-5">
                <div className="text-sky-500">
                    City/Night View/Olympics
                    </div>
                    <Link to="/admin/blog-create" className="btn btn-primary ml-5">Add Blog</Link>
            </div>
            <div className="flex flex-col w-full h-30 border-solid border-2">
                <img src={travel} alt="" className="object-cover h-64" />
            </div>

            <div className="flex flex-col w-full h-30">
                <div className="flex flex-col w-full p-5 text-gray-400">
                    Published On 24/12/2024
                </div>


                <div className="flex flex-col w-full h-30 p-5 text-2xl">
                    <p className="text-base"><b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ratione ipsam nesciunt amet obcaecati dolore nemo magnam odit alias aut. Totam qui nostrum ea magni laudantium, quod repudiandae ab iste sit ipsum officia vero autem maiores id est odit minus? Sit ea dolorum odio eum ab similique quos, adipisci ducimus nesciunt ipsa! Ullam magni laudantium impedit minus animi et, veritatis ab maxime nobis, iure qui rerum optio libero commodi ad quasi dicta facere sapiente sed saepe, suscipit ea. Reiciendis deserunt nobis recusandae. Nemo voluptate alias tempore incidunt. Ab, labore consectetur dolorum sit similique fugit repellat, deleniti, quae velit iste distinctio.</b>
                    </p>
                    <br />
                    <p className="text-base"><b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel voluptatibus fugiat excepturi alias et molestiae aperiam obcaecati. Non natus ipsum eaque repellendus excepturi vel voluptatum, est autem accusantium dolor dolores ullam id recusandae atque, minima necessitatibus quod blanditiis sunt ipsa iusto ratione nulla rem beatae. Sed dolor asperiores doloribus enim, delectus, sint obcaecati nostrum rem consequatur, similique magnam reiciendis ab? Explicabo dolorem, fugiat pariatur, fugit veritatis optio atque eaque laborum, vel eum obcaecati ipsum neque error? Ad unde nisi veritatis minus totam accusamus asperiores repellendus aspernatur tempora, ipsum praesentium maxime modi omnis nam quae commodi consequatur corrupti, odio reprehenderit dolor?</b>
                    </p>
                </div>
                <div className="flex flex-row items-center w-full h-30 p-5 border text-2xl">
                    <button className="btn w-14 h-14">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                    <div className="px-5 text-lg">
                        <b>100,000 Likes</b>
                    </div>
                    <button className="btn w-14 h-14">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 4h16c1.104 0 2 .896 2 2v12c0 1.104-.896 2-2 2H6l-4 4v-4H4c-1.104 0-2-.896-2-2V6c0-1.104.896-2 2-2z" />
                        </svg>
                    </button>
                    <div className="px-5 text-lg">
                        <b>4,000 Comments</b>
                    </div>
                    <img src={DotMenu} alt="" className="w-8 ml-auto" />
                </div>
                <div className="flex flex-row items-center w-full h-30 p-5 border text-2xl ">
                    <input
                        type="text"
                        placeholder="Type a comment"
                        className="input input-bordered bg-[#E6E6E6] w-full max-w-7xl" />
                    <button className="btn w-14 h-14 ml-auto bg-transparent border-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 9l18-6-7 18-3-9-8-3z" />
                        </svg>
                    </button>
                </div>


                <div className='flex flex-row items-center w-full px-8 py-2'>
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-14 h-14 rounded-full ring ring-offset-2">
                            <img src={Lucas} alt="" />
                        </div>
                    </div>
                    <div className="p-5 flex-1">
                        <div className="flex items-center">
                            <b className="text-lg ">Xiang Rong</b>
                            <p className="text-gray-400 ml-5">24/12/2024</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="">OMG SO COOL!!!</p>
                            <img src={DotMenu} alt="" className="w-8" />
                        </div>
                    </div>
                </div>

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
                            <img src={DotMenu} alt="" className="w-8" />
                        </div>
                    </div>
                </div>


            </div>
        </div>






    )
}

export default ViewBlogBody