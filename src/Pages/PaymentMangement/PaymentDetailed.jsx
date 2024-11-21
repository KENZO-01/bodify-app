import { Box, Button, Drawer, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { PaymentDetailedHeaders, RevenueDetailedContent } from './config';
import PropTypes from 'prop-types';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterDrawer from '../../Components/FilterDrawer';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import PaymentModal from '../../Components/PaymentModal'
import AlertDialog from '../../Components/AlertDialog';


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

const PayPalRequired = () => {
    return (
        <>
            <Box sx={{ fontSize: '10px', display: 'flex', padding: '5px 6px', justifyContent: 'center', alignItems: 'center', gap: '10px', color: '#fff', backgroundColor: '#0072C0', borderRadius: '90px', width: 'fit-content' }}>
                PayPal account is required
            </Box>
        </>
    )
}
const RevenueDetailed = (props) => {
    const { selectedRow, setDetailedView } = props;

    const [isReview, setIsReview] = useState(false);

    const buttonColor = "#5735DE"
    const buttonBGColor = "#fff"


    const [rightOpen, setRightOpen] = useState(false);
    const toggleRightDrawer = () => {
        setRightOpen(!rightOpen);
    };
    const handleExportClick = () => {
        alert('Sorry but developers are working for backend functionality.')
    }

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const handleOk = () => {
        setIsDeleteDialogOpen(false);
        alert("Yet to be implemnted apis!");
      };

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
                        sx={{ cursor: 'pointer' }}
                        onClick={() => setDetailedView(false)}
                    />
                    <Typography variant='h4' sx={{ fontWeight: 700, color: '#2C2C2E' }}>Payment&apos;s Management - {selectedRow}</Typography>
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
                    
                    <AlertDialog
              title={'Delete Exercise'}
              description={'Are you sure you want to delete this exercise?'}
              open={isDeleteDialogOpen}
              handleOk={handleOk}
              handleCancel={setIsDeleteDialogOpen}
            />

                    <PaymentModal
                        title={'Reviews'}
                        description={'Are you sure you want to delete this exercise?'}
                        open={isReview}
                        handleOk={handleOk}
                        handleCancel={setIsReview}
                    />

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
                                PaymentDetailedHeaders.map((value) => {
                                    return (
                                        <TableCell key={value.id}>{value.label}</TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ background: 'transparent' }}>
                        {RevenueDetailedContent.map((row) => (
                            <TableRow
                                key={row.transcation_id}
                                sx={{ cursor: 'pointer', '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => setIsReview(true)} 
                            >
                                <TableCell>{row.transcation_id}</TableCell>
                                <TableCell>{row.transcation_date}</TableCell>
                                <TableCell>$ {row.amount}</TableCell>
                                <TableCell>{row.trainer_name}</TableCell>
                                <TableCell>{row.paypal_account ? row.paypal_account : <PayPalRequired />}</TableCell>
                                <TableCell>{row.status}</TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex', padding: '5px 6px', justifyContent: 'center', alignItems: 'center', gap: '10px', color: row.status == "Paid" ? buttonColor : '#fff', backgroundColor: row.status == "Paid" ? buttonBGColor : '#5735DE', borderRadius: '90px', width: 'fit-content' }}>
                                        Payout Completed
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box >
    )
}

export default RevenueDetailed;

RevenueDetailed.propTypes = {
    selectedRow: PropTypes.string,
    setDetailedView: PropTypes.func.isRequired,
}