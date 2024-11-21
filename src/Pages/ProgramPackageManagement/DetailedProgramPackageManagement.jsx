import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Box, Button, Grid, Paper, Typography, styled } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import DemoVideo from '../../../Assets/videos/gym-demo-video.mp4';
// import LinkIcon from '@mui/icons-material/Link';
import AlertDialog from '../../Components/AlertDialog'
import { ProgramManagementData } from './config';
import demoImage from '../../../Assets/images/thumbnail_image.png';

const EditButton = styled(Button)(() => ({
  backgroundColor: '#5735DE',
  color: '#fff',
  borderRadius: '2px',
  '&:hover': {
    backgroundColor: '#5735DE',
  }
}))

const DetailedProgramPackageManagement = (props) => {
  const { setIsDetailedExerciseViewOpen, setSelectedRow, selectedRow } = props;
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
              <FirstPageIcon
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  setIsDetailedExerciseViewOpen(false);
                  setSelectedRow(null);
                }}
              />
              <Typography variant='h5'>Back Program&apos;s</Typography>
            </Box>
            <Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }} variant='h5'>Yash create new Program</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '1rem',
                }}
              >

                <Button
                  variant='outlined'
                  color='error'
                  sx={{ borderRadius: '2px', width: '9vw' }}
                  onClick={() => setIsDeleteDialogOpen(true)}
                >
                  Ban
                </Button>
                <EditButton
                  variant='contained'
                >Delete Program</EditButton>
              </Box>
            </Box>


            <Paper elevation={0} sx={{ marginTop: '2rem', p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={7}>

                  <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={6}>
                      <Typography sx={{ color: '#8E8E8E' }}>Trainer Name</Typography>
                      <Typography>{selectedRow}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ color: '#8E8E8E' }}>Price</Typography>
                      <Typography>{ProgramManagementData?.price}</Typography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={11}>
                      <Typography sx={{ color: '#8E8E8E' }}>Program Description</Typography>
                      <Typography>{ProgramManagementData?.description}</Typography>
                    </Grid>

                    <Typography variant='h5' sx={{ position: 'relative', mt: 2, p: 2, fontWeight: 500, color: '#2C2C2E' }}>Revenues</Typography>

                    <Grid container spacing={2} sx={{ pl: 2 }}>
                      <Grid item xs={4}>
                        <Typography sx={{ color: '#8E8E8E' }}>Total Revenues</Typography>
                        <Typography>{ProgramManagementData?.total_revenues}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color: '#8E8E8E' }}>This month</Typography>
                        <Typography>{ProgramManagementData?.this_month}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color: '#8E8E8E' }}>previous month</Typography>
                        <Typography>{ProgramManagementData?.previous_month}</Typography>
                      </Grid>
                    </Grid>

                    <Typography variant='h5' sx={{ position: 'relative', mt: 4, pl: 2, fontWeight: 500, color: '#2C2C2E' }}>Rating</Typography>
                    <Grid container spacing={2} sx={{ p: 2 }}>
                      <Grid item xs={1}>
                        <Typography sx={{ color: '#8E8E8E' }}>{ProgramManagementData?.previous_month}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <span style={{ fontWeight: 600, fontSize: '15px', color: '#5735DE' }}>Check reviews</span>
                      </Grid>
                    </Grid>


                    <Typography variant='h5' sx={{ position: 'relative', mt: 2, pl: 2, fontWeight: 500, color: '#2C2C2E' }}>Workout plan</Typography>
                    <Grid container spacing={2} sx={{ p: 2 }}>
                      <Grid item xs={4}>
                        <span style={{ fontWeight: 600, fontSize: '15px', color: '#5735DE' }}>check workout plan</span>
                      </Grid>
                    </Grid>

                    <Typography variant='h5' sx={{ position: 'relative', mt: 2, pl: 2, fontWeight: 500, color: '#2C2C2E' }}>Included in these packages</Typography>
                    <Grid container spacing={2} sx={{ p: 2 }}>
                      <Grid item xs={4}>
                        <Box sx={{ width: "36vw", p:1, backgroundColor: '#DCDCDC', height: '300px', overflowY: 'auto' }}>
                          <Box sx={{ m: 2, p:1, backgroundColor: '#ffffff' }} >
                            <Grid container sx={{}}>
                              <Grid item xs={1.5}>
                                <img width="60vw" height="60vh"
                                  src={demoImage}
                                  loading="lazy"
                                />
                              </Grid>
                              <Grid item xs={10}>
                                <Grid>
                                  <Typography variant='h6' sx={{ float: 'left', width: '100%', fontSize: '18px', fontWeight: 600, color: '#2C2C2E' }}>Cross-fit 30 min body weight</Typography>
                                </Grid>
                                <Grid>
                                  <Typography variant='p' sx={{ float: 'left', width: '100%', fontSize: '14px', pt: 2, color: '#2C2C2E' }}>Level: Intermediate | Length: 2 weeks | Price: $10</Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Box>

                          <Box sx={{ m: 2, p:1, backgroundColor: '#ffffff' }} >
                            <Grid container sx={{}}>
                              <Grid item xs={1.5}>
                                <img width="60vw" height="60vh"
                                  src={demoImage}
                                  loading="lazy"
                                />
                              </Grid>
                              <Grid item xs={10}>
                                <Grid>
                                  <Typography variant='h6' sx={{ float: 'left', width: '100%', fontSize: '18px', fontWeight: 600, color: '#2C2C2E' }}>Cross-fit 30 min body weight</Typography>
                                </Grid>
                                <Grid>
                                  <Typography variant='p' sx={{ float: 'left', width: '100%', fontSize: '14px', pt: 2, color: '#2C2C2E' }}>Level: Intermediate | Length: 2 weeks | Price: $10</Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Box>

                          <Box sx={{m: 2, p:1, backgroundColor: '#ffffff' }} >
                            <Grid container sx={{}}>
                              <Grid item xs={1.5}>
                                <img width="60vw" height="60vh"
                                  src={demoImage}
                                  loading="lazy"
                                />
                              </Grid>
                              <Grid item xs={10}>
                                <Grid>
                                  <Typography variant='h6' sx={{ float: 'left', width: '100%', fontSize: '18px', fontWeight: 600, color: '#2C2C2E' }}>Cross-fit 30 min body weight</Typography>
                                </Grid>
                                <Grid>
                                  <Typography variant='p' sx={{ float: 'left', width: '100%', fontSize: '14px', pt: 2, color: '#2C2C2E' }}>Level: Intermediate | Length: 2 weeks | Price: $10</Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Box>


                        </Box>
                      </Grid>
                    </Grid>

                  </Grid>
                </Grid>

                <Grid item xs={5}>
                  <Box
                    sx={{
                      border: '1px solid #A9A9A9',
                      borderRadius: '5px',
                    }}
                  >
                    <Box
                      sx={{ p: 6 }}
                    >
                      <Typography variant='h6'>Thumbnail Images</Typography>

                      <Grid container spacing={2} sx={{}}>
                        <Grid item xs={4}>
                          <img width= '150px' height= '200px'
                            src={demoImage}
                            loading="lazy"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </Grid>
                        <Grid item xs={8}>
                          <img width= '300px' height= '200px'
                            src={demoImage}
                            loading="lazy"
                            style={{ objectFit: 'cover' }}
                          />
                        </Grid>
                      </Grid>
                      <Typography variant='h6'>Trailer Video</Typography>
                      <video width="100%" height="auto" controls>
                        <source src={DemoVideo} type="video/mp4" />
                      </video>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
              </Box>
            </Paper>


          </Box>
      }
    </>
  )
}

export default DetailedProgramPackageManagement;

DetailedProgramPackageManagement.propTypes = {
  setIsDetailedExerciseViewOpen: PropTypes.func,
  setSelectedRow: PropTypes.func,
  selectedRow: PropTypes.string,
}