import { Link } from 'react-router-dom';
import Lucas from '../../assets/images/Lucas.jpg';

const TableRow = ({ item, columns }) => {
  const renderCell = (column) => {
    switch (column.type) {
      case 'image':
        return (
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={item.profilePictureUrl || Lucas} alt="User Avatar" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item[column.primaryField]}</div>
              <div className="text-sm opacity-50">{item[column.secondaryField]}</div>
            </div>
          </div>
        );
      case 'date':
        return new Date(item[column.key]).toLocaleDateString();
      case 'status':
        return (
          <span className={`bg-${getStatusColor(item[column.key])} text-white px-2 py-1 rounded`}>
            {item[column.key]}
          </span>
        );
      case 'link':
        return (
          <Link to={`${column.baseUrl}/${item.id}`} className="btn btn-ghost btn-xs">
            {column.text}
          </Link>
        );
      default:
        return item[column.key];
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Unread': return 'red-500';
      case 'In Progress': return 'yellow-500';
      case 'Resolved': return 'green-500';
      default: return 'gray-500';
    }
  };

  return (
    <tr>
      {columns.map((column, index) => (
        <td key={index}>{renderCell(column)}</td>
      ))}
    </tr>
  );
};

export default TableRow;