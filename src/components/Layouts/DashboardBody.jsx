import { useState, useEffect } from 'react'
import BarChart from '../ui/BarChart'
import Cookies from 'js-cookie'
import mainAxios from '../../api/mainAxios'
import DetailedTableModal from '../ui/DetailedTableModal'

const DashboardBody = () => {
    const [totalUsers, setTotalUsers] = useState({ count: 0, users: [] })
    const [monthlyUsers, setMonthlyUsers] = useState([])
    const [yearlyUsers, setYearlyUsers] = useState([])
    const [monthlyActiveUsers, setMonthlyActiveUsers] = useState([])
    const [yearlyActiveUsers, setYearlyActiveUsers] = useState([])
    const [monthlyPosts, setMonthlyPosts] = useState([])
    const [yearlyPosts, setYearlyPosts] = useState([])
    const [monthlyCreatedAccounts, setMonthlyCreatedAccounts] = useState([])
    const [yearlyCreatedAccounts, setYearlyCreatedAccounts] = useState([])
    const [totalCreatedAccounts, setTotalCreatedAccounts] = useState(0)
    const [monthlyBannedUsers, setMonthlyBannedUsers] = useState([])
    const [yearlyBannedUsers, setYearlyBannedUsers] = useState([])
    const [selectedOption, setSelectedOption] = useState('monthly')
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState({ type: '', data: [] })
    const [activeUsers, setActiveUsers] = useState(0)
    const [bannedUsers, setBannedUsers] = useState([])

    useEffect(() => {
        fetchData()
    }, [selectedOption])

    const fetchData = async () => {
        try {
            const token = Cookies.get('token')
            const [totalResponse, monthlyUsersResponse, yearlyUsersResponse, activeDataResponse, createdAccountsResponse, postsResponse, bannedUsersResponse, monthlyActiveUsersResponse, yearlyActiveUsersResponse, createdUserAccountResponse] = await Promise.all([
                mainAxios.get('/dashboard/totalUsers', { headers: { authorization: token } }),
                mainAxios.get('/dashboard/monthlyUsers', { headers: { authorization: token } }),
                mainAxios.get('/dashboard/yearlyUsers', { headers: { authorization: token } }),
                mainAxios.get(`/dashboard/${selectedOption}ActiveUsers`, { headers: { authorization: token } }),
                mainAxios.get('/dashboard/totalCreatedUserAccount', { headers: { authorization: token } }),
                mainAxios.get(`/dashboard/${selectedOption}Posts`, { headers: { authorization: token } }),
                mainAxios.get(`/dashboard/${selectedOption}BannedUsers`, { headers: { authorization: token } }),
                mainAxios.get('/dashboard/monthlyActiveUsers', { headers: { authorization: token } }),
                mainAxios.get('/dashboard/yearlyActiveUsers', { headers: { authorization: token } }),
                mainAxios.get(`/dashboard/${selectedOption}CreatedUserAccount`, { headers: { authorization: token } })
            ])
            setTotalUsers(totalResponse.data.data)
            setMonthlyUsers(monthlyUsersResponse.data.data)
            setYearlyUsers(yearlyUsersResponse.data.data)
            setActiveUsers(activeDataResponse.data.data)
            setTotalCreatedAccounts(createdAccountsResponse.data.data.length)
            setMonthlyPosts(postsResponse.data.data)
            setYearlyPosts(postsResponse.data.data)
            setBannedUsers(bannedUsersResponse.data.data)
            setMonthlyActiveUsers(monthlyActiveUsersResponse.data.data)
            setYearlyActiveUsers(yearlyActiveUsersResponse.data.data)
            setMonthlyCreatedAccounts(createdUserAccountResponse.data.data.map(account => ({
                ...account,
                month: new Date(account.createdAt).toISOString(),
                count: 1
            })))
            setYearlyCreatedAccounts(createdUserAccountResponse.data.data.map(account => ({
                ...account,
                year: new Date(account.createdAt).getFullYear().toString(),
                count: 1
            })))
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    const openModal = async (dataType) => {
        let data;
        switch(dataType) {
            case 'total':
                try {
                    const token = Cookies.get('token');
                    const response = await mainAxios.get('/dashboard/totalUsersDetailed', { headers: { authorization: token } });
                    data = response.data.data;
                } catch (error) {
                    console.error('Error fetching detailed user data:', error);
                    data = [];
                }
                break;
            case 'active':
                data = selectedOption === 'monthly' ? monthlyActiveUsers : yearlyActiveUsers;
                break;
            case 'posts':
                data = selectedOption === 'monthly' ? monthlyPosts : yearlyPosts;
                break;
            case 'created':
                data = selectedOption === 'monthly' ? monthlyCreatedAccounts : yearlyCreatedAccounts;
                console.log(data, "PEPEPE");
                break;
            case 'banned':
                data = selectedOption === 'monthly' ? monthlyBannedUsers : yearlyBannedUsers;
                break;
            default:
                data = [];
        }
        setModalData({ type: dataType, data: data });
        setShowModal(true);
    }

    const getChartData = (dataType) => {
        let data;
        if (dataType === 'total') {
            data = selectedOption === 'monthly' ? monthlyUsers : yearlyUsers;
        } else if (dataType === 'active') {
            data = selectedOption === 'monthly' ? monthlyActiveUsers : yearlyActiveUsers;
        } else if (dataType === 'posts') {
            data = selectedOption === 'monthly' ? monthlyPosts : yearlyPosts;
        } else if (dataType === 'created') {
            const rawData = selectedOption === 'monthly' ? monthlyCreatedAccounts : yearlyCreatedAccounts;
            // Aggregate data for created accounts
            const aggregatedData = rawData.reduce((acc, item) => {
                const date = new Date(item.createdAt);
                const key = selectedOption === 'monthly' 
                    ? date.toLocaleString('default', { month: 'short' }) 
                    : date.getFullYear().toString();
                acc[key] = (acc[key] || 0) + 1;
                return acc;
            }, {});
            data = Object.entries(aggregatedData).map(([key, value]) => ({
                [selectedOption === 'monthly' ? 'month' : 'year']: key,
                count: value
            }));
        } else if (dataType === 'banned') {
            const rawData = selectedOption === 'monthly' ? monthlyBannedUsers : yearlyBannedUsers;
            data = rawData.map(item => ({
                [selectedOption === 'monthly' ? 'month' : 'year']: new Date(item.month || item.year).toLocaleString('default', { [selectedOption === 'monthly' ? 'month' : 'year']: 'numeric' }),
                count: item.count
            }));
        }

        const formatDate = (date) => {
            if (!date) return '';
            const dateObj = new Date(date);
            if (isNaN(dateObj.getTime())) return date; // Return the original value if it's not a valid date
            if (selectedOption === 'monthly') {
                return dateObj.toLocaleString('default', { month: 'short' });
            } else {
                return dateObj.getFullYear().toString();
            }
        };

        const chartData = Array.isArray(data) ? data : [data];

        return {
            labels: chartData.map(item => formatDate(item.month || item.year || item.createdAt)),
            datasets: [{
                label: dataType === 'total' ? 'Total Users' 
                    : dataType === 'active' ? 'Active Users' 
                    : dataType === 'posts' ? 'Total Posts' 
                    : dataType === 'created' ? 'Created Accounts'
                    : 'Banned Users',
                data: chartData.map(item => item.count),
                backgroundColor: dataType === 'total' ? '#020617' 
                    : dataType === 'active' ? '#4A5568' 
                    : dataType === 'posts' ? '#718096' 
                    : dataType === 'created' ? '#A0AEC0'
                    : '#E53E3E',
            }]
        }
    }

    const getPostsChartData = () => {
        const data = selectedOption === 'monthly' ? monthlyPosts : yearlyPosts;
        if (!data || data.length === 0) {
            return {
                labels: [],
                datasets: [{
                    label: 'Total Posts',
                    data: [],
                    backgroundColor: '#718096',
                }]
            };
        }

        
        const formatDate = (date) => {
            if (selectedOption === 'monthly') {
                return new Date(date).toLocaleString('default', { month: 'short' });
            } else {
                return new Date(date).getFullYear().toString();
            }
        };

        // Group posts by month or year
        const groupedData = data.reduce((acc, post) => {
            const key = formatDate(post.month);
            if (!acc[key]) {
                acc[key] = 0;
            }
            acc[key]++;
            return acc;
        }, {});

        const labels = Object.keys(groupedData);
        const counts = Object.values(groupedData);

        return {
            labels: labels,
            datasets: [{
                label: 'Total Posts',
                data: counts,
                backgroundColor: '#718096',
            }]
        };
    }

    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex flex-row items-center border bg-white px-5 py-2'>
                <div className='join'>
                    <div className="join">
                        <input 
                            className="join-item btn" 
                            type="radio" 
                            name="options" 
                            aria-label="Monthly" 
                            checked={selectedOption === 'monthly'}
                            onChange={() => setSelectedOption('monthly')}
                        />
                        <input 
                            className="join-item btn" 
                            type="radio" 
                            name="options" 
                            aria-label="Yearly" 
                            checked={selectedOption === 'yearly'}
                            onChange={() => setSelectedOption('yearly')}
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-center p-5 w-full'>
                <div className='grid grid-cols-2 mx-5 gap-16 w-full'>
                    <div className="card bg-base-100 shadow-xl">
                        <h2 className="text-2xl font-bold mt-5 text-center">Total Users</h2>
                        <BarChart data={getChartData('total')} />
                        <div className='flex flex-row justify-between px-10 mt-5'>
                            <div>Total Users</div>
                            <div>{totalUsers.count}</div>
                        </div>
                        <div className="flex justify-end p-4">
                            <span 
                                className="text-blue-500 underline cursor-pointer"
                                onClick={() => openModal('total')}
                            >
                                Show More
                            </span>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <h2 className="text-2xl font-bold mt-5 text-center">Total Active Users</h2>
                        <BarChart data={getChartData('active')} />
                        <div className='flex flex-row justify-between px-10'>
                            <div>Total Active Users</div>
                            <div>{totalUsers.count}</div>
                        </div>
                        <div className="flex justify-end p-4">
                            <span 
                                className="text-blue-500 underline cursor-pointer"
                                onClick={() => openModal('active')}
                            >
                                Show More
                            </span>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <h2 className="text-2xl font-bold mt-5 text-center">Total Posts</h2>
                        <BarChart data={getPostsChartData()} />
                        <div className="flex justify-end p-4">
                            <span 
                                className="text-blue-500 underline cursor-pointer"
                                onClick={() => openModal('posts')}
                            >
                                Show More
                            </span>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <h2 className="text-2xl font-bold mt-5 text-center">Total Created Accounts</h2>
                        <BarChart data={getChartData('created')} />
                        <div className='flex flex-row justify-between px-10'>
                            <div>Total Created Accounts</div>
                            <div>{totalCreatedAccounts}</div>
                        </div>
                        <div className="flex justify-end p-4">
                            <span 
                                className="text-blue-500 underline cursor-pointer"
                                onClick={() => openModal('created')}
                            >
                                Show More
                            </span>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <h2 className="text-2xl font-bold mt-5 text-center"> Total Banned Users</h2>
                        <BarChart data={getChartData('banned')} />
                        <div className="flex justify-end p-4">
                            <span 
                                className="text-blue-500 underline cursor-pointer"
                                onClick={() => openModal('banned')}
                            >
                                Show More
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <DetailedTableModal 
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                data={modalData.data}
                type={modalData.type}
            />
        </div>
    )
}

export default DashboardBody