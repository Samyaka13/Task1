const TableRow = ({ row, columns }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      {columns.map((col) => (
        <td key={col.key} className="px-4 py-3 text-sm text-gray-700">
          {col.render ? col.render(row) : row[col.key] ?? "-"}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
