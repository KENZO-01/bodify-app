import React, { useState } from 'react'
import { useEffect } from 'react';
import { Box, Button, Drawer, Grid, Typography, styled } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { PrimaryItemCard, SecondaryItemCard, TernaryCarditem } from '../../../Components/CardItem';
import ChartContent from '../../../Components/ChartContent';
import { response } from './config';
import TrainerLogo from '../../../../Assets/icons/Vector-colored.svg';
import BreakdownCard from '../../../Components/BreakdownCard';
import FilterDrawer from '../../../Components/FilterDrawer';

const PrimaryButton = styled(Button)(() => ({
  backgroundColor: '#ffffff',
  color: '#000000',
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

  useEffect(() => {
    document.title = 'Trainers | Bodify';
  }, []);

  const [rightOpen, setRightOpen] = useState(false);
  const toggleRightDrawer = () => {
    setRightOpen(!rightOpen);
  };
  const handleExportClick = () => {
    alert('Sorry but developers are working for backend functionality.')
  }

  return (
    <Box
      component='main'
      sx={{
        width: '92%',
        margin: 'auto',
        flexGrow: 1,
        py: 4,
      }}
    >

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant='h4' sx={{ fontWeight: 700, color: '#2C2C2E' }}>trainers</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <PrimaryButton
            variant='contained'
            startIcon={<FilterAltIcon />}
            onClick={toggleRightDrawer}
          >
            Filter
          </PrimaryButton>
          <SecondaryButton
            variant='contained'
            startIcon={<ArrowDownwardIcon />}
            onClick={handleExportClick}
          >
            Export
          </SecondaryButton>

          <Drawer
            anchor="right"
            open={rightOpen}
            onClose={() => setRightOpen(false)}
          >
            <FilterDrawer setRightOpen={setRightOpen} />
          </Drawer>
        </Box>
      </Box>

      <Box>
        <Grid
          container
          spacing={2}
          sx={{ marginTop: 2 }}
        >
          <Grid item xs={4}>
            <PrimaryItemCard
              title={'Total Trainers'}
              value={`100,000`}
              date={'12/02/23'}
              isPayout={true}
              comparisonAnalytics={'5%'}
            />
          </Grid>

          <Grid item xs={4}>
            <SecondaryItemCard
              title={'Active Trainers'}
              value={'80,000'}
              date={'12/01/23'}
            />
          </Grid>

          <Grid item xs={4}>
            <TernaryCarditem
              title={'New Trainers'}
              value={'15,000'}
            />
          </Grid>
        </Grid>
      </Box>

      <ChartContent
        data={response.data}
        chartSize='small'
        title={'Total trainers'}
        value={150000}
      />
      <BreakdownCard
        title={'Trainers'}
        logo={TrainerLogo}
        text={'Trainers Management'}
        link={'/trainer-management'}
      />

    </Box>
  )
}

export default index