import FeedbackRow from './FeedbackRow';

const FeedbackTable = ({ data, type }) => {
  const isBug = type === 'Bug Report';

  return (
    <div className="overflow-x-auto bg-white h-full w-full flex flex-col justify-start p-6 items-center">
      <table className="table w-full my-12 p-20 rounded-xl">
        <thead className="bg-blue-400">
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Title</th>
            <th>Created At</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <FeedbackRow key={item.id} item={item} type={type} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FeedbackTable;