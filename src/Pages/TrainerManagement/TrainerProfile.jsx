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
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

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
                          <Box sx={{ display: 'flex', color: '#409261', fontSize: '16px', justifyContent: 'center', p: '4px 18px', mt: '16px', backgroundColor: '#E9FFEF', width: '70px', borderRadius: '54px' }}><FiberManualRecordIcon sx={{ fontSize: 'small', m: '4px', pr: '10px' }}></FiberManualRecordIcon>Active</Box></Typography>
                        <Typography variant='p' sx={{ display: 'block', mt: '1rem' }}>32 Subscriptions</Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={5}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Box sx={{ py: 0 }}>
                            <Typography sx={{ color: '#8E8E8E' }}>First NAme</Typography>
                            <Typography>{TranieeProfileData?.first_name}</Typography>
                          </Box>
                          <Box sx={{ py: 2 }}>
                            <Typography sx={{ color: '#8E8E8E' }}>Education & Qualification</Typography>
                            <Typography>{TranieeProfileData?.eductaion_Qualifiacation}</Typography>
                          </Box>

                          <Box sx={{ py: 2 }}>
                            <Typography sx={{ color: '#8E8E8E' }}>Year of expirence</Typography>
                            <Typography>{TranieeProfileData?.year_of_expirence}</Typography>
                          </Box>

                          <Box sx={{ py: 2 }}>
                            <Typography sx={{ color: '#8E8E8E' }}>Email address</Typography>
                            <Typography>{TranieeProfileData?.email_address}</Typography>
                          </Box>

                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ py: 0 }}>
                            <Typography sx={{ color: '#8E8E8E' }}>Last Name</Typography>
                            <Typography>{TranieeProfileData?.last_name}</Typography>
                          </Box>

                          <Box sx={{ py: 2 }}>
                            <Typography sx={{ color: '#8E8E8E' }}>Location</Typography>
                            <Typography>{TranieeProfileData?.location}</Typography>
                          </Box>

                          <Box sx={{ py: 2 }}>
                            <Typography sx={{ color: '#8E8E8E' }}>Date of Birth</Typography>
                            <Typography>{TranieeProfileData?.date_of_birth}</Typography>
                          </Box>

                          <Box sx={{ py: 2 }}>
                            <Typography sx={{ color: '#8E8E8E' }}>Registration Date</Typography>
                            <Typography>{TranieeProfileData?.registration_date}</Typography>
                          </Box>

                        </Grid>
                      </Grid>
                      <Box sx={{ pt: '1rem' }}>
                        <Typography sx={{ color: '#8E8E8E' }}>About</Typography>
                        <Typography sx={{ pr: "4rem" }}>{TranieeProfileData?.about}</Typography>
                      </Box>
                      <Box sx={{ py: '2rem' }}>
                        <Typography sx={{ color: '#8E8E8E' }}>Expertise</Typography>
                        <Typography sx={{ pr: "4rem", display: 'flex' }}>
                          {
                            TranieeProfileData?.expertises?.map((expertise, index) => {
                              return (
                                <Typography sx={{ pt: '1rem', pr: '5px' }} key={index}>
                                  <Box sx={{ display: 'inline-flex', width: 'fit-content', fontSize: '12px', padding: '5px 10px', justifContent: 'center', alignItems: 'center', gap: '10.536px', borderRadius: '26px', border: '1.054px solid #BEBEBE', background: '#F2F2F2' }}>{expertise}</Box>
                                </Typography>
                              )
                            })
                          }
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={4}>
                      <Box sx={{ py: 1 }}>
                        <Typography variant='h6' sx={{}}>Social Media</Typography>

                        <Typography sx={{ color: '#8E8E8E', pt: 2 }}>Instagram</Typography>
                        <Typography>{TranieeProfileData?.insta_account}</Typography>
                      </Box>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Typography variant='h6' sx={{ py: 3 }}>Payouts</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Box sx={{ display: 'inline-flex', pt: '2rem', alignItems: 'center', }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                              <path d="M6.77895 4.5049C6.88348 4.45513 6.99781 4.42933 7.11358 4.4294H11.9691C12.544 4.4294 13.0803 4.46682 13.5704 4.5457C13.7075 4.56756 13.844 4.59367 13.9795 4.62397C14.1716 4.66636 14.3614 4.71823 14.5484 4.7794C14.7893 4.85987 15.0136 4.95358 15.2199 5.06331C15.4629 3.51258 15.2182 2.45801 14.3797 1.50272C13.4564 0.450927 11.7888 0 9.65484 0H3.46093C3.02484 0 2.65385 0.317483 2.5855 0.747947L0.00669241 17.1028C-0.0445659 17.4258 0.205169 17.7175 0.531527 17.7175H4.35563L6.34789 5.08371C6.36748 4.95953 6.41694 4.84197 6.49203 4.74114C6.56712 4.64032 6.66558 4.55924 6.77895 4.5049Z" fill="#27346A" />
                              <path d="M15.1566 5.4257C14.3402 9.61908 11.5454 11.0695 7.97592 11.0695H6.15844C5.72241 11.0695 5.35413 11.387 5.28638 11.8176L4.09175 19.3907C4.04711 19.673 4.26539 19.9287 4.55095 19.9287H7.77413C7.95876 19.9287 8.13732 19.8628 8.27769 19.7428C8.41807 19.6229 8.51104 19.4568 8.53989 19.2744L8.57128 19.1102L9.17877 15.2601L9.21791 15.0474C9.24676 14.865 9.33972 14.6989 9.48008 14.579C9.62044 14.459 9.79898 14.3931 9.9836 14.3931H10.466C13.5883 14.3931 16.0331 13.1246 16.7476 9.45597C17.0458 7.92286 16.8915 6.64286 16.1026 5.74378C15.8633 5.47146 15.5662 5.24656 15.22 5.06299C15.2013 5.18153 15.181 5.30166 15.1566 5.4257Z" fill="#2790C3" />
                              <path d="M14.3678 4.72251C14.2405 4.68534 14.112 4.65243 13.9825 4.62384C13.8469 4.59403 13.7105 4.5681 13.5734 4.54609C13.0828 4.46668 12.5469 4.4292 11.9714 4.4292H7.11655C7.00068 4.42894 6.88627 4.45496 6.78191 4.50529C6.66842 4.55947 6.56985 4.64049 6.49472 4.74135C6.4196 4.8422 6.3702 4.95985 6.35078 5.0841L5.31886 11.627L5.28906 11.8177C5.35694 11.3872 5.72516 11.0697 6.16125 11.0697H7.97873C11.5481 11.0697 14.343 9.61986 15.1594 5.42589C15.1837 5.30185 15.2041 5.18165 15.2228 5.06318C15.0161 4.95404 14.7923 4.85973 14.5513 4.7798C14.4905 4.75964 14.4293 4.74054 14.3679 4.72251" fill="#1F264F" />
                            </svg>
                            <Typography variant='h6' sx={{ fontSize: '12px', pl: '5px' }}>JackWarren_947@mgail.com</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Box sx={{ py: 0 }}>
                            <Typography sx={{ color: '#8E8E8E' }}>Total Earning</Typography>
                            <Typography>{TranieeProfileData?.total_earning}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box sx={{ py: 0 }}>
                            <Typography sx={{ color: '#8E8E8E' }}>Next Payout</Typography>
                            <Typography>{TranieeProfileData?.this_month}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box sx={{ py: 0 }}>
                            <Typography sx={{ color: '#8E8E8E' }}>Previous Payout</Typography>
                            <Typography>{TranieeProfileData?.previous_month}</Typography>
                          </Box>
                        </Grid>
                      </Grid>

                      <Box sx={{ py: 2 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Typography variant='h6' >Exercise Library</Typography>
                            <Grid container spacing={1} sx={{ pt: 1 }}>
                              <Grid item xs={2}>
                                <FolderCopyIcon sx={{color: '#5735DE'}}/>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography sx={{ color: '#5735DE', }}>View Library</Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant='h6' >Rating</Typography>
                            <Grid container spacing={1} sx={{ pt: 1 }}>
                              <Grid item xs={2}>
                                <Typography>{TranieeProfileData?.rating}</Typography>
                              </Grid>
                              <Grid item xs={2}>
                                <Typography><StarIcon sx={{ color: '#FFB02E', width: '26px', height: '24px' }} /></Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Button onClick={() => setIsReview(true)} style={{ fontWeight: 500, fontSize: '12px', color: '#5735DE', padding: '0rem' }} >Check reviews</Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>

                      <Box sx={{ py: 2 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Typography variant='h6' >Background Image</Typography>
                            <Grid container spacing={1} sx={{ pt: 1 }}>
                              <Grid item xs={2}>
                                <InsertPhotoIcon sx={{color: '#5735DE'}} />
                              </Grid>
                              <Grid item xs={10}>
                                <Typography sx={{ color: '#5735DE', }}>check background image</Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant='h6' >Analytics</Typography>
                            <Grid container spacing={1} sx={{ pt: 1 }}>
                              <Grid item xs={2}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                                  <path d="M20.332 0.333374H1.66536C1.31174 0.333374 0.972604 0.47385 0.722555 0.723898C0.472507 0.973947 0.332031 1.31309 0.332031 1.66671V16.3334C0.332031 16.687 0.472507 17.0261 0.722555 17.2762C0.972604 17.5262 1.31174 17.6667 1.66536 17.6667H20.332C20.6857 17.6667 21.0248 17.5262 21.2748 17.2762C21.5249 17.0261 21.6654 16.687 21.6654 16.3334V1.66671C21.6654 1.31309 21.5249 0.973947 21.2748 0.723898C21.0248 0.47385 20.6857 0.333374 20.332 0.333374ZM14.0387 14.2934L9.30536 7.24004L5.0787 13.4267L2.0787 10.76L2.9987 9.70004L4.7987 11.2934L9.30536 4.70671L14.0987 11.8467L18.7654 5.66671L19.8987 6.52004L14.0387 14.2934Z" fill="#5735DE" />
                                </svg>
                              </Grid>
                              <Grid item xs={10}>
                                <Button onClick={() => setIsReview(true)} style={{ fontWeight: 500, fontSize: '12px', color: '#5735DE', padding: '0rem' }} >check analytics</Button>
                              </Grid>
                            </Grid>
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