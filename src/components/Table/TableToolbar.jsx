const TableToolbar = ({ search, onSearchChange }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b bg-white">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border rounded px-3 py-2 text-sm w-64"
      />
    </div>
  );
};

export default TableToolbar;
