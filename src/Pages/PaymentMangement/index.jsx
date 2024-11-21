import { Box, Button, Drawer, Grid, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import ChartContent from '../../Components/ChartContent';
import { response, tableHeaders, tableContent } from './config';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import BasicPaymentTable from '../../Components/BasicPaymentTable';
import PaymentDetailed from './PaymentDetailed';
import { PrimaryItemCard, SecondaryItemCard } from '../../Components/CardItem';
import { useEffect } from 'react';
import FilterDrawer from '../../Components/FilterDrawer';



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
                        <PaymentDetailed
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
                            <Typography variant='h4' sx={{ fontWeight: 700, color: '#2C2C2E' }}>Payment&apos;s Managements</Typography>
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
                                        title={'Next Payout'}
                                        value={`$120,000`}
                                        date={'12/02/23'}
                                        isPayout={true}
                                        comparisonAnalytics={'5%'}
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <SecondaryItemCard
                                        title={'Due from last month'}
                                        value={'$30,000'}
                                        date={'12/01/23'}
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                <SecondaryItemCard
                                        title={'Last Payout'}
                                        value={'$30,000'}
                                        date={'12/01/23'}
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        <ChartContent
                            data={response.data}
                            chartSize='small'
                            title={'Payouts'}
                            value={'$120,000'}
                        />

                        <Box
                            sx={{
                                marginTop: '2rem'
                            }}>
                            <BasicPaymentTable
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