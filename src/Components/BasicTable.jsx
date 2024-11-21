import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import PropTypes from 'prop-types';

const BasicTable = (props) => {
    const { tableContent, tableHeaders, setDetailedView, selectableRows, setSelectedRow } = props;

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ background: '#CFCFCF' }}>
                    <TableRow>
                        {
                            tableHeaders.map((value, index) => {
                                return (
                                    <TableCell key={index}>{value}</TableCell>
                                )
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody sx={{ background: 'transparent' }}>
                    {tableContent.data.map((row, index) => (
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
                            <TableCell>$ {row.revenue}</TableCell>
                            <TableCell>$ {row.bodify}</TableCell>
                            <TableCell>$ {row.trainers}</TableCell>
                            <TableCell>$ {row.app_store}</TableCell>
                            <TableCell>$ {row.paypal}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BasicTable;

BasicTable.propTypes = {
    tableContent: PropTypes.shape({
        data: PropTypes.arrayOf(
            PropTypes.shape({
                month: PropTypes.string.isRequired,
                revenue: PropTypes.number,
                bodify: PropTypes.number,
                trainers: PropTypes.number,
                app_store: PropTypes.number,
                paypal: PropTypes.number
            })
        ),
    }),
    tableHeaders: PropTypes.arrayOf(PropTypes.string),
    setDetailedView: PropTypes.func,
    selectableRows: PropTypes.bool,
    setSelectedRow: PropTypes.func,
};