import { useEffect } from 'react';
import Table from '../ui/Table';

const FeedbackManagementBody = () => {

  useEffect(() => {
    // Fetch feedback data here
    // Update setFeedback and setTotalPages
  }, []);

  return (
    <div>
        <div className="join">
        <input className="join-item btn" type="radio" name="options" aria-label="Feedback" />
        <input className="join-item btn" type="radio" name="options" aria-label="Bug Report" />
      </div>
      <Table />
    </div>
  );
};

export default FeedbackManagementBody;
