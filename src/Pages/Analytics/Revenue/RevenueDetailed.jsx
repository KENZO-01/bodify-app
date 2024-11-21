import { Box, Button, Drawer, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { RevenueDetailedHeaders, RevenueDetailedContent } from './config';
import PropTypes from 'prop-types';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterDrawer from '../../../Components/FilterDrawer';
import FirstPageIcon from '@mui/icons-material/FirstPage';

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

const RevenueDetailed = (props) => {
    const { selectedRow, setDetailedView } = props;

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
                flexGrow: 1,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '3rem',
                }}
            >
                <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}
                >
                    <FirstPageIcon
                    sx={{cursor: 'pointer'}}
                        onClick={() => setDetailedView(false)}
                    />
                    <Typography variant='h4' sx={{ fontWeight: 700, color: '#2C2C2E' }}>Revenue - {selectedRow}</Typography>
                </Box>
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


            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ background: '#CFCFCF' }}>
                        <TableRow>
                            {
                                RevenueDetailedHeaders.map((value, index) => {
                                    return (
                                        <TableCell key={index}>{value}</TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ background: 'transparent' }}>
                        {RevenueDetailedContent.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.sno}</TableCell>
                                <TableCell>{row.user_id}</TableCell>
                                <TableCell>{row.product}</TableCell>
                                <TableCell>{row.trainer_name}</TableCell>
                                <TableCell>$ {row.total_revenue}</TableCell>
                                <TableCell>$ {row.bodify}</TableCell>
                                <TableCell>$ {row.trainer}</TableCell>
                                <TableCell>$ {row.app_store}</TableCell>
                                <TableCell>$ {row.payment_processor}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    )
}

export default RevenueDetailed;

RevenueDetailed.propTypes = {
    selectedRow: PropTypes.string,
    setDetailedView: PropTypes.func.isRequired,
}