import React from 'react'
import DataTable from 'react-data-table-component';

const columns = [
    {
        name:'Sr.No.',
        selector:row=> row.srNo
    },
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

function Table({ heading }) {
    return (
        <DataTable
            pagination
            columns={columns} 
            data={data}
        />
    )
}

export default Table