import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styled } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import AlertIcon from '../../Assets/icons/red-alert-icon.svg'

const OkButton = styled(Button)(() => ({
    backgroundColor: '#F14545',
    minWidth: '100px',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#F14545',
    }
}))

const CancelButton = styled(Button)(() => ({
    backgroundColor: '#D7D7D7',
    minWidth: '100px',
    color: '#000',
    '&:hover': {
        backgroundColor: '#D7D7D7',
}
}))

const AlertDialog = (props) => {
    const { title, description, open, handleOk, handleCancel } = props;
    return (
        <Dialog
            open={open}
            onClose={() => handleCancel(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ textAlign: 'center' }}
        >
            <Box sx={{mt: 2}}>
                <img src={AlertIcon} height={'80px'} width={'80px'} alt="" />
            </Box>
            <DialogTitle id="alert-dialog-title" >
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{justifyContent: 'center', mb: 2}}>
                <OkButton variant='contained' onClick={handleOk}>Yes</OkButton>
                <CancelButton variant='contained' onClick={() => handleCancel(false)} autoFocus>
                    Cancel
                </CancelButton>
            </DialogActions>
        </Dialog>
    )
}

export default AlertDialog;

AlertDialog.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    open: PropTypes.bool,
    handleCancel: PropTypes.func,
    handleOk: PropTypes.func,
}