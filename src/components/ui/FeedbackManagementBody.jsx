import { useEffect, useState, useCallback } from 'react';
import Table from '../ui/FeedbackTable';
import mainAxios from '../../api/mainAxios';
import Cookies from 'js-cookie';

const FeedbackManagementBody = () => {
  const [selectedOption, setSelectedOption] = useState('Feedback');
  const [feedbackData, setFeedbackData] = useState([]);
  const [bugData, setBugData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const [feedbackResponse, bugResponse] = await Promise.all([
        mainAxios.get('/feedback', {
          headers: { Authorization: Cookies.get('token') }
        }),
        mainAxios.get('/bugreport', {
          headers: { Authorization: Cookies.get('token') }
        })
      ]);
      setFeedbackData(feedbackResponse.data.data);
      setBugData(bugResponse.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="join">
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
          data={selectedOption === 'Feedback' ? feedbackData : bugData} 
          type={selectedOption}
        />
      )}
    </div>
  );
};

export default FeedbackManagementBody;