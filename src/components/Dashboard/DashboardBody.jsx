
import BarChart from './BarChart'

const DashboardBody = () => {
    return (
        <div className='flex flex-col w-full h-full'>
        <div className='flex flex-row items-center border bg-white px-5 py-2'>
            <div className='join'>
                <div className="join">
                    <input className="join-item btn" type="radio" name="options" aria-label="Monthly" />
                    <input className="join-item btn" type="radio" name="options" aria-label="Yearly" />
                    <input className="join-item btn" type="radio" name="options" aria-label="All Time" />
                </div>
            </div>
            </div>
            <div className='flex justify-center p-5 w-full'>
            <div className='grid grid-cols-2 mx-5 gap-16 w-full'>
            <div className="card bg-base-100 shadow-xl">
            <h2 className="text-2xl font-bold mt-5 text-center">Total User</h2>
                <BarChart />
            </div>
            <div className="card bg-base-100 shadow-xl">
            <h2 className="text-2xl font-bold mt-5 text-center">Total Ban User</h2>
                <BarChart />
            </div>
            <div className="card bg-base-100 shadow-xl">
            <h2 className="text-2xl font-bold mt-5 text-center">Total Account Created</h2>
                <BarChart />
            </div>
            <div className="card bg-base-100 shadow-xl">
            <h2 className="text-2xl font-bold mt-5 text-center">Total Number of Post</h2>
                <BarChart />
            </div>
        
        </div>
        </div>

        </div>
        
    )
}

export default DashboardBody