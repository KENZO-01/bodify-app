import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel
} from '@mui/material';
import PropTypes from 'prop-types';
import { stableSort, getComparator } from '../Utils/helpers';

const BasicPaymentTable = (props) => {
    const { tableContent, tableHeaders, setDetailedView, selectableRows, setSelectedRow } = props;

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('month');

    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <EnhancedTableHead
                    tableHeaders={tableHeaders}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                />
                <TableBody sx={{ background: 'transparent' }}>

                    {stableSort(tableContent.data, getComparator(order, orderBy)).map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {
                                selectableRows ?

                                    <TableCell
                                        component="th"
                                        scope="row"
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            setSelectedRow(row.month)
                                            setDetailedView(true)
                                        }}
                                    >
                                        {row.month}
                                    </TableCell>

                                    :

                                    <TableCell
                                        component="th"
                                        scope="row"
                                    >
                                        {row.month}
                                    </TableCell>
                            }
                            <TableCell>$ {row.amount}</TableCell>
                            <TableCell>$ {row.amount_due}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BasicPaymentTable;

BasicPaymentTable.propTypes = {
    tableContent: PropTypes.shape({
        data: PropTypes.arrayOf(
            PropTypes.shape({
                month: PropTypes.string.isRequired,
                amount: PropTypes.number,
                amount_due: PropTypes.number
            })
        ),
    }),
    tableHeaders: PropTypes.arrayOf(PropTypes.string),
    setDetailedView: PropTypes.func,
    selectableRows: PropTypes.bool,
    setSelectedRow: PropTypes.func,
};


const EnhancedTableHead = ({ order, orderBy, onRequestSort, tableHeaders }) => {
    const createSortHandler = (property) => {
        onRequestSort(property);
    };

    return (
        <TableHead sx={{ background: '#CFCFCF' }}>
            <TableRow>
                {tableHeaders.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left '}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={() => createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    tableHeaders: PropTypes.array,
    orderBy: PropTypes.string,
    order: PropTypes.string,
    onRequestSort: PropTypes.func
}