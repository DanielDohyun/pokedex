import React, {useMemo} from 'react'
import { useTable } from 'react-table';
import { COLUMNS } from './Columns';

function BasicTable(props) {

    //useMemo hook ensures the data is recreated on every render
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => props.pokemon, []);

    const tableInstance = useTable({
        columns,
        data
    });

    console.log(props.pokemon);

    //built-in fxns and arrs from useTable hook
    const {
        getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
    } = tableInstance 

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((header) => (
                        <tr {...header.getHeaderGroupProps()}>
                            {
                                header.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))
                            }
                        </tr>
                    ))
                }
                
            </thead>

            <tbody {...getTableBodyProps()}>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default BasicTable;
