import React, {useMemo} from 'react'
import { useTable, useSortBy, usePagination } from 'react-table';
import { COLUMNS } from './Columns';

function BasicTable(props) {

    //useMemo hook ensures the data is recreated on every render
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => props.filtered, [props.filtered]);

    //built-in fxns from the useTable instances
    const {
        getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, page, nextPage, previousPage
    } = useTable({
        columns,
        data
    }, useSortBy, usePagination) 

    return (
        <div className='table'>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((header) => (
                            <tr {...header.getHeaderGroupProps()}>
                                {
                                    header.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? '▾' : '▴') : ''}
                                            </span>
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                    
                </thead>

                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell =>
                                        {
                                            if (cell.column.Header === 'Name') {
                                                return  (
                                                    <td {...cell.getCellProps()}><a style={{textDecoration: 'none'}} className='table__link' href={`http://localhost:3000/${cell.value.toString().toLowerCase()}`}>{cell.render('Cell')}</a></td>
                                                )
                                            } else return (
                                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            )
                                        }
                                    )
                                    }
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>

            <div style={{textAlign: 'center', marginTop: '10px'}}>
                <button onClick={() => previousPage()}>Previous</button>
                <button onClick={() => nextPage()}>Next</button>
            </div>
        </div>
    )
}

export default BasicTable;
