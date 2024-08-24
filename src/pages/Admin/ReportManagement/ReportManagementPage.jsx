import AdminLayout from '../../../components/Layouts/AdminLayout';
import Header from '../../../components/ui/Header';
import ReportManagementBody from '../../../components/Report/ReportManagementBody';

const ReportManagementPage = () => {
  return (
    <AdminLayout>
      <Header>
        <span className="text-2xl"><b>Report Management</b></span>
      </Header>
      <div className="p-6">
      <ReportManagementBody />
      </div>
    </AdminLayout>
  );
};

export default ReportManagementPage;