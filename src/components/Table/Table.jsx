import { useMemo, useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Pagination from "./Pagination";
import TableToolbar from "./TableToolbar";

const PAGE_SIZE = 5;

const Table = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    if (!search) return data;

    return data.filter((row) =>
      Object.values(row).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const paginatedData = filteredData.slice(start, start + PAGE_SIZE);

  return (
    <div className="bg-white border rounded-md overflow-hidden">
      <TableToolbar search={search} onSearchChange={setSearch} />

      {filteredData.length === 0 ? (
        <div className="p-10 text-center text-gray-500">
          No data found
        </div>
      ) : (
        <>
          <table className="w-full">
            <TableHeader columns={columns} />
            <tbody>
              {paginatedData.map((row, idx) => (
                <TableRow key={idx} row={row} columns={columns} />
              ))}
            </tbody>
          </table>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Table;
