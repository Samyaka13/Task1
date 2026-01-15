const TableHeader = ({ columns }) => {
  return (
    <thead className="bg-gray-50 border-b">
      <tr>
        {columns.map((col) => (
          <th
            key={col.key}
            className="px-4 py-3 text-left text-sm font-medium text-gray-600"
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
