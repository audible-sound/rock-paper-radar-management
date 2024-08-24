import { useState, useEffect } from 'react';
import Table from './Table';
import mainAxios from '../../api/mainAxios';
import Cookies from 'js-cookie';

const ReportManagementBody = () => {
    const [selectedOption, setSelectedOption] = useState('Feedback');
    const [reportData, setReportData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchReportData();
    }, [selectedOption]);

    const fetchReportData = async () => {
        setIsLoading(true);
        try {
            const endpoint = selectedOption === 'Feedback' ? '/feedback' : '/bugreport';
            const response = await mainAxios.get(endpoint, {
                headers: { Authorization: Cookies.get('token') }
            });
            setReportData(response.data.data);
        } catch (error) {
            console.error('Error fetching report data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const columns = [
        { key: 'id', label: 'ID', type: 'text' },
        { key: 'username', label: 'User', type: 'image', primaryField: 'username', secondaryField: 'userType' },
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'createdAt', label: 'Created At', type: 'date' },
        { key: 'status', label: 'Status', type: 'status' },
        { key: 'actions', label: 'Actions', type: 'link', baseUrl: `/admin/${selectedOption.toLowerCase()}`, text: 'View Details' }
    ];

    return (
        <div>
            <div className="join mb-4">
                <input
                    className="join-item btn"
                    type="radio"
                    name="options"
                    aria-label="Feedback"
                    checked={selectedOption === 'Feedback'}
                    onChange={() => handleOptionChange('Feedback')}
                />
                <input
                    className="join-item btn"
                    type="radio"
                    name="options"
                    aria-label="Bug Report"
                    checked={selectedOption === 'Bug Report'}
                    onChange={() => handleOptionChange('Bug Report')}
                />
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <Table
                    data={reportData}
                    columns={columns}
                    type={selectedOption}
                />
            )}
        </div>
    );
};

export default ReportManagementBody;