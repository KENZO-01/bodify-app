import React, { useState } from 'react';
import { Box, Button, Drawer, IconButton, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography, styled } from '@mui/material';
import { headCells, rows } from './config';
import PropTypes from 'prop-types';
import { stableSort, getComparator } from '../../Utils/helpers';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FilterDrawer from '../../Components/FilterDrawer';
import DetailedProgramPackageManagement from './DetailedProgramPackageManagement';


import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const FilterButton = styled(Button)(() => ({
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: '3rem',
  '&:hover': {
    backgroundColor: '#ffffff',
  }
}))

const SecondaryButton = styled(Button)(() => ({
  backgroundColor: '#5735DE',
  borderRadius: '3rem',
  '&:hover': {
      backgroundColor: '#6C4DE6',
  }
}))



const index = () => {

const [anchorEl, setAnchorEl] = useState(null);
const [selectedIndex, setSelectedIndex] = useState(null);

const handleMenuClick = (event, index) => {
  setAnchorEl(event.currentTarget);
  setSelectedIndex(index);
};

const handleMenuClose = () => {
  setAnchorEl(null);
  setSelectedIndex(null);
};

const handleMenuItemClick = (index, action) => {
  // Handle menu item click based on the action
  if (action === 'edit') {
    // Implement edit functionality
    console.log(`Edit clicked for row ${index}`);
  } else if (action === 'deactivate') {
    // Implement deactivate functionality
    console.log(`deactivate clicked for row ${index}`);
  } else if (action === 'delete') {
    // Implement delete functionality
    console.log(`Delete clicked for row ${index}`);
  }

  // Close the menu
  handleMenuClose();
};



  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('program_name');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const [rightOpen, setRightOpen] = useState(false);
  const toggleRightDrawer = () => {
    setRightOpen(!rightOpen);
  };

  const [isDetailedExerciseViewOpen, setIsDetailedExerciseViewOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleExportClick = () => {
    alert('Sorry but developers are working for backend functionality.')
}

  return (
    <>
      {
        isDetailedExerciseViewOpen ?

          <DetailedProgramPackageManagement
            setIsDetailedExerciseViewOpen={setIsDetailedExerciseViewOpen}
            setSelectedRow={setSelectedRow}
            selectedRow={selectedRow}
          />
          :

          <Box sx={{ width: '92%', margin: 'auto', mt: 4 }}>

            <Typography variant='h5'>Program&apos;s Management</Typography>

            <Paper elevation={0} sx={{ width: 'calc(max(30%, 260px))', border: '1px solid #CFCFCF', borderRadius: '24px', mt: 2 }}>
              <IconButton type="button" sx={{ p: '6px' }} aria-label="search">
                <SearchIcon />
              </IconButton>

              <InputBase
                sx={{ ml: 1, flex: 1, pt: '4px' }}
                placeholder="Search"
              />
            </Paper>

            <Box
              sx={{
                m: "24px 0px",
                display: 'flex',
                gap: '1rem',
                justifyContent: 'flex-end',
                flexWrap: 'wrap',
              }}
            >
              <FilterButton
                variant='contained'
                startIcon={<FilterAltOutlinedIcon />}
                onClick={toggleRightDrawer}
              >
                Filter
              </FilterButton>
              <SecondaryButton
                  variant='contained'
                  startIcon={<ArrowDownwardIcon />}
                  onClick={handleExportClick}
              >
                  Export
              </SecondaryButton>
            </Box>
            <Drawer
              anchor="right"
              open={rightOpen}
              onClose={() => setRightOpen(false)}
            >
              <FilterDrawer setRightOpen={setRightOpen} />
            </Drawer>
            <TableContainer>
              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy)).map((row, index) => (
                    <TableRow
                      hover
                      key={row.program_name}
                      sx={{ cursor: 'pointer'}}
                      onClick={() =>{
                        setIsDetailedExerciseViewOpen(true)
                        setSelectedRow(row.trainer)
                      }
                      }
                    >
                  <TableCell align="left">{row.program_name}</TableCell>
                  <TableCell component="th" id={index} scope="row" padding="none">
                    {row.trainer}
                  </TableCell>
                  <TableCell>{row.level}</TableCell>
                  <TableCell>{row.length}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.number_of_subscribers}</TableCell>
                  <TableCell>{row.retention}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                <IconButton
                  aria-label="more"
                  id={`menu-${index}`}
                  aria-controls={`menu-${index}`}
                  aria-haspopup="true"
                  onClick={(e) => handleMenuClick(e, index)}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id={`menu-${index}`}
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && selectedIndex === index}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => handleMenuItemClick(index, 'edit')}>Edit</MenuItem>
                  <MenuItem onClick={() => handleMenuItemClick(index, 'deactivate')}>Deactivate</MenuItem>
                  <MenuItem onClick={() => handleMenuItemClick(index, 'delete')}>Delete</MenuItem>
                  {/* Add more menu items as needed */}
                </Menu>
              </TableCell>

                </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Box >
      }
    </>
  );
}

export default index;

const EnhancedTableHead = ({ order, orderBy, onRequestSort }) => {
  const createSortHandler = (property) => {
    onRequestSort(property);
  };

  return (
    <TableHead sx={{ background: '#CFCFCF' }}>
      <TableRow>
        {headCells.map((headCell) => (
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
  orderBy: PropTypes.string,
  order: PropTypes.string,
  onRequestSort: PropTypes.func
}