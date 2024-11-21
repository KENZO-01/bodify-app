import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography, InputBase, styled } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const OkButton = styled(Button)(() => ({
    backgroundColor: '#5735DE',
    minWidth: '100px',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#5735DE',
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


const Review = (props) => {
    const { open, handleCancel } = props;

    const [comment, setComment] = useState('');

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setComment(inputValue);
    };

    const characterLimit = 10000;

    return (
        <Dialog
            open={open}
            onClose={() => handleCancel(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ textAlign: 'left', pt: '5rem', width: '100%' }}
        >
            <Box sx={{ backgroundColor: '#F2F2F2' }}>

                <DialogTitle id="alert-dialog-title" >
                    <Typography variant='h6' sx={{ fontWeight: 900, pt: '2rem' }}>Payment Details</Typography>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ py: 1 }}>
                        <Grid container spacing={1} sx={{ pt: 1, justifyContent: 'center' }}>
                            <Grid item xs={6}>
                                <Box sx={{ px: 1 }}>
                                    <Typography sx={{ fontSize: '15px', fontWeight: 500, textAlign: 'left', py: '5px' }}>Transcation ID</Typography>
                                    <InputBase
                                        sx={{ borderRadius: '5px', border: '1px solid #A9A9A9', background: '#FFF', flex: 1, pl: '5px' }}
                                        placeholder="Add Transaction ID"
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ px: 2 }}>
                                    <Typography sx={{ fontSize: '15px', fontWeight: 500, textAlign: 'left', py: '5px' }}>Transcation Sum</Typography>
                                    <InputBase
                                        sx={{ borderRadius: '5px', border: '1px solid #A9A9A9', background: '#FFF', flex: 1, pl: '5px' }}
                                        placeholder="Add Transaction Sum"
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{ py: 1 }}>
                        <Grid container spacing={1} sx={{ pt: 1, justifyContent: 'center' }}>
                            <Grid item xs={6}>
                                <Box sx={{ px: 1 }}>
                                    <Typography sx={{ fontSize: '15px', fontWeight: 500, textAlign: 'left', py: '5px' }}>Transcation Date</Typography>
                                    <InputBase
                                        sx={{ borderRadius: '5px', border: '1px solid #A9A9A9', background: '#FFF', flex: 1, pl: '5px' }}
                                        placeholder="Add Transaction Date   "
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ px: 2 }}>
                                    <Typography sx={{ fontSize: '15px', fontWeight: 500, textAlign: 'left', py: '5px' }}>Transcation By</Typography>
                                    <InputBase
                                        sx={{ borderRadius: '5px', border: '1px solid #A9A9A9', background: '#FFF', flex: 1, pl: '5px' }}
                                        placeholder="Who Made the Transaction Order"
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ ml: 1, mt: 10, borderRadius: '5px', border: '1px solid #A9A9A9', backgroundColor: '#fff', height: 'fit-content' }}>
                        <Box sx={{ display: 'flex', p: 1, justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '15px', fontWeight: 600 }}>Comments</Typography>
                            <Typography sx={{ fontSize: '10px', color: '#8E8E8E' }}>
                                {comment.length}/{characterLimit}
                            </Typography>
                        </Box>
                        <InputBase
                            inputProps={{ maxLength: characterLimit }}
                            multiline
                            value={comment}
                            onChange={handleChange}
                            sx={{ ml: 1, pt: '4px', width: '95%', minHeight: '4rem' }}
                            placeholder="Add comments about the transaction"
                        />
                    </Box>
                    <DialogActions sx={{ justifyContent: 'center', my: 2 }}>
                        <CancelButton variant='contained' onClick={() => handleCancel(false)}>
                            Cancel
                        </CancelButton>
                        <OkButton variant='contained' >Save</OkButton>
                    </DialogActions>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', mb: 2 }}>

                </DialogActions>
            </Box>
        </Dialog>
    )
}

export default Review;

Review.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    open: PropTypes.bool,
    handleCancel: PropTypes.func,
    handleOk: PropTypes.func,
}