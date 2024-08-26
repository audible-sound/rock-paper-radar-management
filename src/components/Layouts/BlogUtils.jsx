import { useLocation } from "react-router-dom";
import { useState } from "react";

const BlogUtils = ({ onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');

    const handleFilter = () => {
        onFilter({
            searchTerm,
            sortBy
        })
    }

    const isProfile = useLocation().pathname.includes('profile');
    if(isProfile){
        return null;
    }
    
  return (
    <div className='flex flex-row bg-white border-solid border-2  border-t-0 p-4'>
            <div className="form-control">
                <input 
                type="text" 
                placeholder="Search Blog" 
                className="input input-bordered w-24 md:w-auto pl-12  mr-10 border-primary" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
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
            <div className="w-full max-w-xs float-right ml-auto"></div>
            <select 
                className="select select-primary w-full max-w-xs float-right ml-10"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="">Sort By</option>
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
            </select>
            <button className="btn btn-primary ml-5" onClick={handleFilter}>Filter</button>

        </div>

  )
}

export default BlogUtils