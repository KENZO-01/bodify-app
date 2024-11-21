import { Box, Button, Drawer, Grid, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { PrimaryItemCard, SecondaryItemCard, TernaryCarditem } from '../../../Components/CardItem';
import ChartContent from '../../../Components/ChartContent';
import { useEffect } from 'react';
import { response } from './config';
import TraineeLogo from '../../../../Assets/icons/ion_body-colored.svg';
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
        document.title = 'Programs | Bodify';
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
                <Typography variant='h4' sx={{ fontWeight: 700, color: '#2C2C2E' }}>Programs</Typography>
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
                            title={'Total Programs'}
                            value={`8,000`}
                            date={'12/02/23'}
                            isPayout={true}
                            comparisonAnalytics={'3%'}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <SecondaryItemCard
                            title={'Active programs'}
                            value={'5,000'}
                            date={'12/01/23'}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <TernaryCarditem
                            title={'New Programs'}
                            value={'5,000'}
                        />
                    </Grid>
                </Grid>
            </Box>

            <ChartContent
                data={response.data}
                chartSize='small'
                title={'Total Programs'}
                value={8000}
            />
            <BreakdownCard
                title={'Programs'}
                logo={TraineeLogo}
                text={'Programs Management'}
                link={'/program-and-package-management'}
            />

        </Box>
    )
}

export default index