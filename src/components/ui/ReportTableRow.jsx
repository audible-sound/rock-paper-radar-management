import { Link } from 'react-router-dom';
import FalseReportModal from '../modals/FalseReportModal';
import BanReportModal from '../modals/BanReportModal';
import Dropdown from './Dropdown';

const ReportTableRow = ({item, selectedOption}) => {
    let list = [
        {
            label: "False Report",
            action: () => {
                if (item.reportState === 'unverified') {
                    document.getElementById(`falseReportModal${item.id}`).showModal();
                } else {
                    alert('This report has already been reviewed.');
                }
            },
            modal: <FalseReportModal
                key={item.id}
                id={item.id}
                state={item.reportState}
                selectedOption={selectedOption}
            /> ,
        },
        {
            label: "Ban",
            action: () => document.getElementById(`banReportModal${item.id}`).showModal(),
            modal: <BanReportModal
                key={item.id}
                id={item.id}
                state={item.reportState}
                selectedOption={selectedOption}
            /> ,
        },
    ]

    const getRowClassName = (state) => {
        switch (state) {
            case 'Unreviewed':
                return '';
            case 'False report':
                return 'bg-green-100 rounded-md p-2';
            case 'Banned':
                return 'bg-red-100 rounded-md p-2';
            default:
                return '';
        }
    };

    return (
        <>
            <tr>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.reportContent}</td>
                <td>
                    {selectedOption === "Post" ? (
                        <Link to={`/staff/post-view?p=${item.postId}`}>View Post</Link>
                    ) : selectedOption === "Comment" ? (
                        <div className="border-2 border-gray-300 rounded p-2 bg-gray-50">
                            {item.Comment?.commentContent}
                        </div>
                    ) : null}
                </td>
                <td>{item.createdAt}</td>
                <td><span className={getRowClassName(item.reportState)}>{item.reportState}</span></td>
                <td>
                    <Dropdown
                        key={item.id}
                        items={list}
                    />
                </td>
            </tr>
        </> 
    );
};

export default ReportTableRow;