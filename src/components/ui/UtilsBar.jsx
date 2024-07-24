import React from 'react'

const UtilsBar = () => {
    return (
        <div className='flex flex-row bg-white border-solid border-2 p-4'>
            <div className="form-control">
                <input type="text" placeholder="Search Post" className="input input-bordered w-24 md:w-auto pl-12  mr-10 border-primary" />
                <div className="search-icon relative bottom-12">
                    <button className="btn btn-ghost btn-circle absolute">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox=" 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            <select className="select select-primary w-full max-w-xs float-right ml-auto ">
                <option disabled selected>Select Category</option>
                <option>Category1</option>
                <option>Category2</option>
                <option>Category3</option>
                <option>Category4</option>
            </select>

            <select className="select select-primary w-full max-w-xs float-right ml-10">
                <option disabled selected>Sort By</option>
                <option>Test1</option>
                <option>Test2</option>
                <option>Test3</option>
                <option>Test4</option>
            </select>
            <button className="btn btn-primary ml-5">Filter</button>

        </div>


    )
}

export default UtilsBar
