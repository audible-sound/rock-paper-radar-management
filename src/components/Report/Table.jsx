import TableRow from './TableRow';

const Table = ({ data, columns, type }) => {
  return (
    <div className="overflow-x-auto bg-white h-full w-full flex flex-col justify-start p-6 items-center">
      <table className="table w-full my-12 p-20 rounded-xl">
        <thead className="bg-blue-400">
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} item={item} columns={columns} type={type} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table