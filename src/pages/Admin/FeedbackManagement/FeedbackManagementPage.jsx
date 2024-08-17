import AdminLayout from '../../../components/Layouts/AdminLayout';
import Header from '../../../components/ui/Header';
import FeedbackManagementBody from '../../../components/Feedback/FeedbackManagementBody';
const FeedbackManagementPage = () => {
  return (
    <AdminLayout>
      <Header>
        <span className="text-2xl"><b>Feedback Management</b></span>
      </Header>
      <div className="p-6">
        <FeedbackManagementBody />
      </div>
    </AdminLayout>
  );
};

export default FeedbackManagementPage;
