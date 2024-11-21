import React, { useState } from 'react';
import { Box, Button, Drawer, IconButton, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography, styled } from '@mui/material';
import { headCells, rows } from './config';
import PropTypes from 'prop-types';
import { stableSort, getComparator } from '../../Utils/helpers';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AlertDialog from '../../Components/AlertDialog';
import FilterDrawer from '../../Components/FilterDrawer';
import DetailedExerciseLibrary from './DetailedExerciseLibrary';

const AddButton = styled(Button)(() => ({
  backgroundColor: '#5735DE',
  color: '#D4D4D4',
  borderRadius: '3rem',
  '&:hover': {
    backgroundColor: '#5735DE',
  }
}))

const FilterButton = styled(Button)(() => ({
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: '3rem',
  '&:hover': {
    backgroundColor: '#ffffff',
  }
}))

const DeleteButton = styled(Button)(() => ({
  backgroundColor: '#FF6D6D',
  color: '#fff',
  borderRadius: '3rem',
  '&:hover': {
    backgroundColor: '#FF6D6D',
  }
}))


const index = () => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('exercise');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const toggleRightDrawer = () => {
    setRightOpen(!rightOpen);
  };

  const [isDetailedExerciseViewOpen, setIsDetailedExerciseViewOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <>
      {
        isDetailedExerciseViewOpen ?

          <DetailedExerciseLibrary
            setIsDetailedExerciseViewOpen={setIsDetailedExerciseViewOpen}
            setSelectedRow={setSelectedRow}
            selectedRow={selectedRow}
          />
          :

          <Box sx={{ width: '92%', margin: 'auto', mt: 4 }}>

            <AlertDialog
              open={isDialogOpen}
              handleCancel={setIsDialogOpen}
              title={'Delete All Exercises'}
              description={"Are you sure you want to delete all of your exercises? You will lose all of your data"}
            />

            <Typography variant='h5'>Bodify&apos;s Exercise Library</Typography>

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
              <AddButton
                variant='contained'
                startIcon={<AddIcon />}
              >
                Add
              </AddButton>
              <FilterButton
                variant='contained'
                startIcon={<FilterAltOutlinedIcon />}
                onClick={toggleRightDrawer}
              >
                Filter
              </FilterButton>
              <DeleteButton
                variant='contained'
                startIcon={<DeleteOutlineOutlinedIcon />}
                onClick={() => setIsDialogOpen(true)}
              >
                Delete All
              </DeleteButton>
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
                      key={row.sno}
                      sx={{ cursor: 'pointer' }}
                      onClick={() =>{
                        setIsDetailedExerciseViewOpen(true)
                        setSelectedRow(row.exercise)
                      }
                      }
                    >
                  <TableCell align="right">{row.sno}</TableCell>
                  <TableCell component="th" id={index} scope="row" padding="none">
                    {row.exercise}
                  </TableCell>
                  <TableCell>{row.muscle}</TableCell>
                  <TableCell>{row.equipments}</TableCell>
                  <TableCell>{row.date_added}</TableCell>
                  <TableCell>{row.status}</TableCell>
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
            align={headCell.numeric ? 'right' : 'left'}
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