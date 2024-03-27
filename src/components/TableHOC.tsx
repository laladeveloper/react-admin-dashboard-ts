import { GrAscend, GrDescend } from "react-icons/gr";
import {
  Column,
  TableOptions,
  useTable,
  useSortBy,
  usePagination,
} from "react-table";

function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showpagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 6,
      },
    };
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page,
      pageCount ,
      state:{ pageIndex}, 
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage
    } = useTable(options, useSortBy, usePagination);

    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading} </h2>
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {column.isSorted && (
                      <span>
                        {" "}
                        {column.isSortedDesc ? (
                          <GrDescend />
                        ) : (
                          <>
                            <GrAscend />
                          </>
                        )}{" "}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {showpagination && (
          <div className="tablePagination">
            <button disabled={!canPreviousPage}  onClick={previousPage}>Prev</button>
            <span>{`${pageIndex +1} of ${pageCount} `} </span>
            <button disabled={!canNextPage} onClick={nextPage}>Next</button>
          </div>
        )}
      </div>
    );
  };
}

export default TableHOC;
