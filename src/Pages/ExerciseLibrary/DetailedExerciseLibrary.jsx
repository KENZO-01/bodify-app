import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Box, Button, Grid, Paper, Typography, styled } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import DemoVideo from '../../../Assets/videos/gym-demo-video.mp4';
import LinkIcon from '@mui/icons-material/Link';
import AlertDialog from '../../Components/AlertDialog'
import EditExerciseLibrary from './EditExerciseLibrary';
import { ExerciseData } from './config';

const EditButton = styled(Button)(() => ({
  backgroundColor: '#5735DE',
  color: '#fff',
  borderRadius: '2px',
  '&:hover': {
    backgroundColor: '#5735DE',
  }
}))

const DetailedExerciseLibrary = (props) => {  
  const { setIsDetailedExerciseViewOpen, setSelectedRow, selectedRow } = props;
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const handleOk = () => {
    setIsDeleteDialogOpen(false);
    alert("Yet to be implemnted apis!");
  };
  
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  return (
    <>
      {
        isEditEnabled ?
          <EditExerciseLibrary setIsEditEnabled={setIsEditEnabled} data={ExerciseData} />
          :
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
              <Typography variant='h5'>Back to Bodify&apos;s Exercise Library</Typography>
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
                sx={{ borderRadius: '2px' }}
                onClick={() => setIsDeleteDialogOpen(true)}
              >
                Delete Exercise
              </Button>
              <EditButton
                variant='contained'
                onClick={() => {
                  setIsEditEnabled(true)
                }}
              >Edit Exercise</EditButton>
            </Box>

            <Paper elevation={0} sx={{ marginTop: '2rem', p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Typography sx={{ color: '#8E8E8E' }}>Title Name</Typography>
                  <Typography>{selectedRow}</Typography>

                  <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={6}>
                      <Typography sx={{ color: '#8E8E8E' }}>Muscles</Typography>
                      <Typography>{ExerciseData?.muscle}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ color: '#8E8E8E' }}>Equipment</Typography>
                      <Typography>{ExerciseData?.equipment}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ color: '#8E8E8E' }}>Date Added</Typography>
                      <Typography>{ExerciseData?.date_added}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ color: '#8E8E8E' }}>Last Modified</Typography>
                      <Typography>{ExerciseData?.last_modified}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ color: '#8E8E8E' }}>Status</Typography>
                      <Typography>{ExerciseData?.status}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ color: '#8E8E8E' }}>Level</Typography>
                      <Typography>{ExerciseData?.level}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ color: '#8E8E8E' }}>Type</Typography>
                      <Typography>{ExerciseData?.type}</Typography>
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
                      sx={{ p: 2 }}
                    >
                      <Typography variant='h6'>Exercise Video</Typography>
                      <video width="100%" height="auto" controls>
                        <source src={DemoVideo} type="video/mp4" />
                      </video>
                    </Box>
                    <Box sx={{ borderTop: '1px solid #A9A9A9', display: 'flex', alignItems: 'center', p: '4px 16px', color: '#A9A9A9', gap: 1 }}>
                      <LinkIcon /> <Typography>{ExerciseData?.video_link}</Typography>
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
                <Typography sx={{ color: '#8E8E8E' }}>Instructions</Typography>
                {
                  ExerciseData?.instructions?.map((instruction, index) => {
                    return (
                      <Typography key={index}>
                        {instruction}
                      </Typography>
                    )
                  })
                }
              </Box>
            </Paper>

            <Box
            sx={{
              color: '#fff',
                backgroundColor: '#5735DE',
                p: 3
            }}
            >
              <Typography variant='h6'>Variations</Typography>
              <Typography>This exercise can also be performed without a hyperextension bench, but in this case you will need a spotter. Also, a similar exercise to this one is the good morning and the stiff-legged deadlift.</Typography>
            </Box>
          </Box>
      }
    </>
  )
}

export default DetailedExerciseLibrary;

DetailedExerciseLibrary.propTypes = {
  setIsDetailedExerciseViewOpen: PropTypes.func,
  setSelectedRow: PropTypes.func,
  selectedRow: PropTypes.string,
}