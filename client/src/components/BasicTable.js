import React, {useMemo} from 'react'
import { useTable, useSortBy } from 'react-table';
import { COLUMNS } from './Columns';

function BasicTable(props) {

    //useMemo hook ensures the data is recreated on every render
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => props.filtered, [props.filtered]);

    // useTable({
    //     columns,
    //     data
    // });

    //built-in fxns and arrs from useTable hook
    const {
        getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
    } = useTable({
        columns,
        data
    }, useSortBy) 

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
                        rows.map(row => {
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
        </div>
        
    )
}

export default BasicTable;
