import { useEffect } from 'react';
import Table from '../ui/Table';

const FeedbackManagementBody = () => {

  useEffect(() => {
    // Fetch feedback data here
    // Update setFeedback and setTotalPages
  }, []);

  return (
    <div>
      <Table />
    </div>
  );
};

export default FeedbackManagementBody;
