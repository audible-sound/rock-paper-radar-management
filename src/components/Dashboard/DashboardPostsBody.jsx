import BarChart from "./BarChart"

const DashboardPostsBody = () => {
    return (
        // the background's height stops growing so i just put this for now bg-[#7091E6] bg-opacity-100 
        <div className='w-full h-full'> 
        <div className='card  mx-8 my-10 flex flex-col bg-white'>
            <div>
            <h2 className="text-2xl font-bold mt-5 text-center">Total Number of Post</h2>
                <BarChart />
            </div>
        </div>
            <div className='card  mx-8 mt-4 mb-5 flex flex-col bg-white'>
                <div className='card  mx-8 pb-8 mt-4 flex flex-col bg-white'>
                <div className="overflow-x-auto rounded-lg">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr className='bg-primary'>
                            <th className='w-12 p-5 text-left text-base'>No</th>
                            <th className='w-48 p-5 text-left text-base'>Name</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr className='border-b border-gray-300'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                        </tr>
                        {/* row 2 */}
                        <tr className='border-b border-gray-300'>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                        </tr>
                        {/* row 3 */}
                        <tr className='border-b border-gray-300'>
                            <th>3</th>
                            <td>Brice Swyre</td>
                        </tr>
                        {/* haiya if i add more rows it will kena overflow */}
                        <tr className='border-b border-gray-300'>
                            <th>3</th>
                            <td>Brice Swyre</td>
                        </tr>
                        <tr className='border-b border-gray-300'>
                            <th>3</th>
                            <td>Brice Swyre</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
</div>

       
       
        
    )
}

export default DashboardPostsBody