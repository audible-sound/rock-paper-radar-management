import StaffLayout from '../../components/layouts/StaffLayout';
import Header from '../../components/layouts/Header';
import ReportManagementBody from '../../components/ui/ReportManagementBody';

const ReportManagementPage = () => {
  return (
    <StaffLayout>
      <Header>
        <span className="text-2xl"><b>Report Management</b></span>
      </Header>
      <div className="p-6">
      <ReportManagementBody />
      </div>
    </StaffLayout>
  );
};

export default ReportManagementPage;