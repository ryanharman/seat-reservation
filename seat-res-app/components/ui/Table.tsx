import React from "react";
import { useTable } from "react-table";

interface ITableProps {
  columns: any; // TODO: Create column def type
  data: any;
  noDataText?: string;
  headerStyles?: string;
  rowStyles?: string;
}

// TODO: Figure out a solution for pagination
// https://react-table.tanstack.com/docs/api/usePagination

const Table = ({ columns, data, noDataText = "No data to display...", headerStyles, rowStyles }: ITableProps) => {
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } = tableInstance;

  return (
    <>
      <table {...getTableProps()} className="rounded w-full">
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th
                      {...column.getHeaderProps()}
                      className={`${headerStyles} border-b border-gray-300 p-4 text-base text-left`}
                    >
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()} className={`${rowStyles} p-4 text-base text-gray-600 text-left`}>
                          <div className="grid">
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </div>
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      {(data.length === 0 || !data) && <div className="p-4 text-sm text-gray-600">{noDataText}</div>}
    </>
  );
};

export default Table;
