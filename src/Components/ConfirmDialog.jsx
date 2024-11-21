import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styled } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import WarningIcon from '../../Assets/icons/blue-alert-icon.svg'

const CancelButton = styled(Button)(() => ({
    backgroundColor: '#5735DE',
    minWidth: '100px',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#5735DE',
    }
}))

const OkButton = styled(Button)(() => ({
    backgroundColor: '#D7D7D7',
    minWidth: '100px',
    color: '#000',
    '&:hover': {
        backgroundColor: '#D7D7D7',
    }
}))

const ConfirmDialog = (props) => {
    const { title, description, open, handleOk, handleCancel } = props;
    return (
        <Dialog
            open={open}
            onClose={() => handleCancel(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ textAlign: 'center' }}
        >
            <Box sx={{ mt: 2 }}>
                <img src={WarningIcon} height={'80px'} width={'80px'} alt="" />
            </Box>
            <DialogTitle id="alert-dialog-title" >
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center', mb: 2 }}>
                <OkButton variant='contained' onClick={handleOk}>Yes</OkButton>
                <CancelButton variant='contained' onClick={() => handleCancel(false)} autoFocus>
                    Cancel
                </CancelButton>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog

ConfirmDialog.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    open: PropTypes.bool,
    handleCancel: PropTypes.func,
    handleOk: PropTypes.func,
}