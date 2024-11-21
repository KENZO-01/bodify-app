import React, { useState } from 'react';
import { Box, Button, Drawer, IconButton, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography, styled } from '@mui/material';
import { headCells, rows } from './config';
import PropTypes from 'prop-types';
import { stableSort, getComparator } from '../../Utils/helpers';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FilterDrawer from '../../Components/FilterDrawer';
import TrainerProfile from './TrainerProfile';
import demoImage from '../../../Assets/images/profile_pic.png';




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

          <TrainerProfile
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
                      sx={{ cursor: 'pointer' }}
                      onClick={() => {
                        setIsDetailedExerciseViewOpen(true)
                        setSelectedRow(row.trainee_name)
                      }
                      }
                    >
                      <TableCell align="left" sx={{display: 'flex'}}>
                        <img width="40vw" height="40vh"
                          src={demoImage}
                          loading="lazy"
                        />
                        <Box sx={{display: 'flex', alignItems: 'center', p:1}}>
                        {row.trainer_name}
                        </Box>
                        </TableCell>
                        
                      <TableCell component="th" id={index} scope="row" padding="none">
                        {row.subscribers}
                      </TableCell>
                      <TableCell>{row.number_of_programs}</TableCell>
                      <TableCell>{row.location}</TableCell>
                      <TableCell>{row.email_address}</TableCell>
                      <TableCell>{row.registration_date}</TableCell>
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