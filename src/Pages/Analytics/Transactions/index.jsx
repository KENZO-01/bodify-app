import { Box, Button, Drawer, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { transactionHeaders, transactionContent } from './config'
import { formatDate } from '../../../Utils/helpers'
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
    useEffect(() => {
        document.title = 'Transactions | Bodify';
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
                flexGrow: 1,
                py: 4,
                width: '92%',
                margin: 'auto'
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
                <Typography variant='h4' sx={{ fontWeight: 700, color: '#2C2C2E' }}>Transactions</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1rem'
                    }}
                >
                    <PrimaryButton
                        id='filter-button'
                        variant='contained'
                        startIcon={<FilterAltIcon />}
                        onClick={toggleRightDrawer}
                    >
                        Filter
                    </PrimaryButton>
                    <SecondaryButton
                        id='export-button'
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
                                transactionHeaders.map((value, index) => {
                                    return (
                                        <TableCell key={index}>{value}</TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ background: 'transparent' }}>
                        {transactionContent.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.sno}</TableCell>
                                <TableCell>{row.user_id}</TableCell>
                                <TableCell>{row.product}</TableCell>
                                <TableCell>{row.trainer_name}</TableCell>
                                <TableCell>$ {row.Revenue}</TableCell>
                                <TableCell>{formatDate(row.purchase_date)}</TableCell>
                                <TableCell>{formatDate(row.expire)}</TableCell>
                                <TableCell>{formatDate(row.renew)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    )
}

export default index;