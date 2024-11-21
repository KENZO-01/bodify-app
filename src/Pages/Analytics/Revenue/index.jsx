import { Box, Button, Drawer, Grid, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import ChartContent from '../../../Components/ChartContent';
import { response, tableHeaders, tableContent } from './config';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import BasicTable from '../../../Components/BasicTable';
import RevenueDetailed from './RevenueDetailed';
import { PrimaryItemCard, SecondaryItemCard, TernaryCarditem } from '../../../Components/CardItem';
import { useEffect } from 'react';
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
    const [detailedView, setDetailedView] = useState(false)
    const [selectedRow, setSelectedRow] = useState(null)

    useEffect(() => {
        document.title = 'Revenue | Bodify';
    }, []);

    const [rightOpen, setRightOpen] = useState(false);
    const toggleRightDrawer = () => {
        setRightOpen(!rightOpen);
    };
    const handleExportClick = () => {
        alert('Sorry but developers are working for backend functionality.')
    }

    return (

        <>
            {
                detailedView ?

                    <Box
                        component='main'
                        sx={{
                            width: '92%',
                            margin: 'auto',
                            flexGrow: 1,
                            py: 4,
                        }}
                    >
                        <RevenueDetailed
                            selectedRow={selectedRow}
                            setDetailedView={setDetailedView}
                        />
                    </Box>
                    :
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
                            <Typography variant='h4' sx={{ fontWeight: 700, color: '#2C2C2E' }}>Revenues</Typography>
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
                                        title={'Total Revenue'}
                                        value={`$120,000`}
                                        date={'12/02/23'}
                                        isPayout={true}
                                        comparisonAnalytics={'5%'}
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <SecondaryItemCard
                                        title={'Revenue, Net'}
                                        value={'$30,000'}
                                        date={'12/01/23'}
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <TernaryCarditem
                                        title={'Total Subscriptions'}
                                        value={'30,000'}
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        <ChartContent
                            data={response.data}
                            chartSize='small'
                            title={'Total Revenue'}
                            value={120000}
                        />

                        <Box
                            sx={{
                                marginTop: '2rem'
                            }}>
                            <BasicTable
                                tableHeaders={tableHeaders}
                                tableContent={tableContent}
                                selectableRows={true}
                                setDetailedView={setDetailedView}
                                setSelectedRow={setSelectedRow}
                            />
                        </Box>

                    </Box>
            }
        </>


    )
}

export default index