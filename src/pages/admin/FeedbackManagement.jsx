import AdminLayout from '../../components/layouts/AdminLayout';
import Header from '../../components/layouts/Header';
import FeedbackManagementBody from '../../components/ui/FeedbackManagementBody';
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