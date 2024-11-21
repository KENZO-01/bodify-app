import { Avatar, Box, Chip, Typography, styled } from '@mui/material'
import React from 'react'
import trailerVideo from '../../../Assets/videos/trailer-video.mp4'
import AndroidIcon from '../../../Assets/icons/AndroidIcon.svg?react'
import AppleIcon from '../../../Assets/icons/AppleIcon.svg?react'
import Step1 from '../../../Assets/images/step1_image.png'
import Step2 from '../../../Assets/images/step2_image.png'
import Step3 from '../../../Assets/images/step3_image.png'

const Card = styled(Box)(() => ({
  borderRadius: '20px',
  background: '#F9F9F9',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem 2rem 0rem 2rem'
}))

const TraineeGuidePage = () => {
  return (
    <>
    <Box
      sx={{
        width: '80%',
        margin: 'auto'
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <video width="40%" height="auto" controls>
          <source src={trailerVideo} type="video/mp4" />
        </video>
        <Typography
          sx={{
            fontFamily: 'work-sans',
            color: '#2F2F2F',
            fontSize: '46px',
            fontWeight: 600,
            m: '1rem 0'
          }}
        >
          To get started follow these steps:
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '3rem',
          mb: 12
        }}
      >

        <Card>
          <Avatar sx={{ background: '#fff', color: '#000' }}>1</Avatar>
          <Typography variant='h5' sx={{ fontWeight: 600, color: '#2F2F2F' }}>Download the Bodify Mobile App</Typography>
          <Box sx={{display: 'flex', justifyContent: 'space-between', gap: '1rem'}}>
            <Chip icon={<AndroidIcon />} label="Android" sx={{ background: '#fff'}} variant="outlined" />
            <Chip icon={<AppleIcon />} label="Apple" sx={{ background: '#000', color: '#fff'}} variant="contained" />
          </Box>
          <img src={Step1} width={'auto'} height={'auto'} style={{marginTop: '1rem'}} alt="" />
        </Card>

        <Card>
          <Avatar sx={{ background: '#fff', color: '#000' }}>2</Avatar>
          <Typography variant='h5' sx={{ fontWeight: 600, color: '#2F2F2F' }}>Subscribe to Your Favorite Program</Typography>
          <img src={Step2} width={'auto'} height={'auto'} style={{ marginTop: '3rem' }} alt="" />
        </Card>

        <Card>
          <Avatar sx={{ background: '#fff', color: '#000' }}>3</Avatar>
          <Typography variant='h5' sx={{ fontWeight: 600, color: '#2F2F2F' }}>Workout and Bring the Best of Yourself!</Typography>
          <img src={Step3} width={'auto'} height={'auto'} style={{ marginTop: '3rem' }} alt="" />

        </Card>

      </Box>
    </Box>

      <footer style={{ height: '100px', background: '#5735DE'}}>

    </footer>
    </>
  )
}

export default TraineeGuidePage