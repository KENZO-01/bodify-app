import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableHead, TableContainer, TableSortLabel, TableRow, Typography, styled } from '@mui/material';
import { traineeheadCells, traineerows } from './config';
import { stableSort, getComparator } from '../../Utils/helpers';
import AlertDialog from '../../Components/AlertDialog'
import Review from '../../Components/Review'
import { TranieeProfileData } from './config';
import demoImage from '../../../Assets/images/profile_pic.png';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StarIcon from '@mui/icons-material/Star';

const EditButton = styled(Button)(() => ({
  backgroundColor: '#5735DE',
  color: '#fff',
  borderRadius: '2px',
  '&:hover': {
    backgroundColor: '#5735DE',
  }
}))

const TraineeProfile = (props) => {
  const [isReview, setIsReview] = useState(false);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('program_name');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const { setIsDetailedExerciseViewOpen, setSelectedRow } = props;
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);


  const handleOk = () => {
    setIsDeleteDialogOpen(false);
    alert("Yet to be implemnted apis!");
  };

  return (
    <>
      {
          <Box
            sx={{
              width: '92%',
              margin: 'auto',
              mt: 4
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
              }}
            >
              <AlertDialog
                title={'Delete Exercise'}
                description={'Are you sure you want to delete this exercise?'}
                open={isDeleteDialogOpen}
                handleOk={handleOk}
                handleCancel={setIsDeleteDialogOpen}
              />
              <Review
                title={'Reviews'}
                description={'Are you sure you want to delete this exercise?'}
                open={isReview}
                handleOk={handleOk}
                handleCancel={setIsReview}
              />
              

            </Box>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'space-between'
                }}
              >

                <Typography variant='h5'>Trainee Profile</Typography>
                <Box>
                  <Button
                    variant='outlined'
                    color='error'
                    sx={{ mx: '1rem', borderRadius: '2px', width: '9vw' }}
                    onClick={() => setIsDeleteDialogOpen(true)}
                  >
                    Ban
                  </Button>
                  <EditButton
                    variant='contained'
                  >Delete Program</EditButton>
                </Box>
              </Box>
            </Box>


            <Paper elevation={0} sx={{ marginTop: '1rem', p: 1 }}>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                      <Grid item xs={2} sx={{ justifyContent: 'center', display: 'grid' }}>
                        <Box>
                          <img width="110vw" height="110vh"
                            src={demoImage}
                            loading="lazy"
                          />
                          <Typography>
                            <Box sx={{display: 'flex', color: '#409261', fontSize: '16px', justifyContent: 'center', p: '4px 18px', mt: '16px', backgroundColor: '#E9FFEF',width: '70px', borderRadius: '54px'}}><FiberManualRecordIcon sx={{fontSize: 'small',m:'4px', pr: '10px'}}></FiberManualRecordIcon>Active</Box></Typography>
                          <Typography variant='p' sx={{display: 'block', mt: '1rem'}}>32 Subscriptions</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={3}>
                        <Box sx={{ py: 1 }}>
                          <Typography sx={{ color: '#8E8E8E' }}>First NAme</Typography>
                          <Typography>{TranieeProfileData?.first_name}</Typography>
                        </Box>
                        <Box sx={{ py: 1 }}>
                          <Typography sx={{ color: '#8E8E8E' }}>Date of Birth</Typography>
                          <Typography>{TranieeProfileData?.date_of_birth}</Typography>
                        </Box>
                        <Box sx={{ py: 1 }}>
                          <Typography sx={{ color: '#8E8E8E' }}>Email address</Typography>
                          <Typography>{TranieeProfileData?.email_address}</Typography>
                        </Box>

                        <Typography variant='h6' sx={{ pt: 4 }}>Vitals</Typography>

                        <Box sx={{ py: 2 }}>
                          <Typography sx={{ color: '#8E8E8E' }}>BMI</Typography>
                          <Typography>{TranieeProfileData?.bmi}</Typography>
                        </Box>

                        <Box sx={{ py: 2 }}>
                          <Typography sx={{ color: '#8E8E8E' }}>Height</Typography>
                          <Typography>{TranieeProfileData?.height}</Typography>
                        </Box>

                      </Grid>
                      <Grid item xs={3}>
                        <Box sx={{ py: 1 }}>
                          <Typography sx={{ color: '#8E8E8E' }}>Last NAme</Typography>
                          <Typography>{TranieeProfileData?.last_name}</Typography>
                        </Box>
                        <Box sx={{ py: 1 }}>
                          <Typography sx={{ color: '#8E8E8E' }}>Registration Date</Typography>
                          <Typography>{TranieeProfileData?.registration_date}</Typography>
                        </Box>

                        <Box sx={{ py: 2 }}>
                          <Typography sx={{ color: '#8E8E8E', pt: '8rem' }}>Body Fat</Typography>
                          <Typography>{TranieeProfileData?.body_fat}</Typography>
                        </Box>

                        <Box sx={{ py: 2 }}>
                          <Typography sx={{ color: '#8E8E8E' }}>Weight</Typography>
                          <Typography>{TranieeProfileData?.weight}</Typography>
                        </Box>

                      </Grid>
                      <Grid item xs={4}>
                        <Box sx={{ py: 1 }}>
                          <Typography variant='h6' sx={{}}>Social Media</Typography>

                          <Typography sx={{ color: '#8E8E8E', pt: 2 }}>Instagram</Typography>
                          <Typography>{TranieeProfileData?.insta_account}</Typography>
                        </Box>

                        <Typography variant='h6' sx={{ py: 3 }}>Income</Typography>
                        <Grid container spacing={2}>
                          <Grid item xs={4}>
                            <Box sx={{ py: 0 }}>
                              <Typography sx={{ color: '#8E8E8E' }}>Total Earning</Typography>
                              <Typography>{TranieeProfileData?.total_earning}</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={4}>
                            <Box sx={{ py: 0 }}>
                              <Typography sx={{ color: '#8E8E8E' }}>This month</Typography>
                              <Typography>{TranieeProfileData?.this_month}</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={4}>
                            <Box sx={{ py: 0 }}>
                              <Typography sx={{ color: '#8E8E8E' }}>Previous month</Typography>
                              <Typography>{TranieeProfileData?.previous_month}</Typography>
                            </Box>
                          </Grid>
                        </Grid>

                        <Box sx={{ py: 4 }}>
                          <Typography variant='h6' >Rating Given</Typography>
                          <Grid container spacing={1} sx={{ pt: 1 }}>
                            <Grid item xs={1}>
                              <Typography>{TranieeProfileData?.rating}</Typography>
                            </Grid>
                            <Grid item xs={1}>
                              <Typography><StarIcon sx={{color: '#FFB02E', width:'26px', height: '24px'}}/></Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Button onClick={() => setIsReview(true)} style={{fontWeight: 500, fontSize: '12px', color: '#5735DE', padding:'0rem' }} >Check reviews</Button>
                            </Grid>
                          </Grid>
                        </Box>

                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
              </Box>
            </Paper>

            <TableContainer>
              <Table sx={{ minWidth: 750, mt: 4 }} aria-labelledby="tableTitle">
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>
                  {stableSort(traineerows, getComparator(order, orderBy)).map((row, index) => (
                    <TableRow
                      hover
                      key={row.program_name}
                      sx={{ cursor: 'pointer' }}
                      onClick={() => {
                        setIsDetailedExerciseViewOpen(true)
                        setSelectedRow(row.program_name)
                      }
                      }
                    >
                      <TableCell align="left" sx={{ display: 'flex' }}>
                        <img width="40vw" height="40vh"
                          src={demoImage}
                          loading="lazy"
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                          {row.program_name}
                        </Box>
                      </TableCell>
                      <TableCell component="th" id={index} scope="row" padding="none">
                        {row.date_of_publication}
                      </TableCell>
                      <TableCell>{row.level}</TableCell>
                      <TableCell>{row.length}</TableCell>
                      <TableCell>{row.price}</TableCell>
                      <TableCell>{row.number_of_subscribers}</TableCell>
                      <TableCell>{row.retention}</TableCell>
                      <TableCell>{row.status}</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>


          </Box>
      }
    </>
  )
}

export default TraineeProfile;

TraineeProfile.propTypes = {
  setIsDetailedExerciseViewOpen: PropTypes.func,
  setSelectedRow: PropTypes.func,
  selectedRow: PropTypes.string,
}

const EnhancedTableHead = ({ order, orderBy, onRequestSort }) => {
  const createSortHandler = (property) => {
    onRequestSort(property);
  };

  return (
    <TableHead sx={{ background: '#CFCFCF' }}>
      <TableRow>
        {traineeheadCells.map((headCell) => (
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