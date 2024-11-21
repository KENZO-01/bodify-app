import React ,{useState} from 'react';
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
import MoreVert from '@mui/icons-material/MoreVert';
import { stableSort, getComparator } from '../../Utils/helpers';

import { tableHeaders } from '../../Pages/Financials/config';
const EnhancedTableHead = ({ order, orderBy, onRequestSort }) => {
    const createSortHandler = (property) => {
      onRequestSort(property);
    };
  
    return (
      <TableHead sx={{ background: '#CFCFCF' }}>
        <TableRow>
          {tableHeaders.map((headCell) => (
            <TableCell
              key={headCell.id}
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
    orderBy: PropTypes.string,
    order: PropTypes.string,
    onRequestSort: PropTypes.func
  }
const BasicTable = (props) => {
    const { tableContent} = props;
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('exercise');

    const handleIconClick = () => {
        setArrowDirection((prevDirection) => (prevDirection === 'down' ? 'up' : 'down'));
    };
    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
      };
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650}} aria-label="simple table">
                <EnhancedTableHead
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
                            <TableCell
                                component="th"
                                scope="row"
                            >
                                {row.transaction_id}
                            </TableCell>
                            <TableCell>{row.transaction_date}</TableCell>
                            <TableCell>$ {row.amount}</TableCell>       
                            <TableCell>{<MoreVert/>}</TableCell>
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
                transaction_id: PropTypes.string.isRequired,
                transaction_date: PropTypes.string,
                amount: PropTypes.number,
            })
        ),
    }),
    tableHeaders: PropTypes.arrayOf(PropTypes.any),
    setDetailedView: PropTypes.func,
    selectableRows: PropTypes.bool,
    setSelectedRow: PropTypes.func,
};


