import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography, Divider } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import demoImage from '../../Assets/images/profile_pic.png';
import StarIcon from '@mui/icons-material/Star';


const Review = (props) => {
    const { title, open, handleCancel } = props;
    return (
        <Dialog
            open={open}
            onClose={() => handleCancel(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ textAlign: 'center' }}
        >
            <DialogTitle id="alert-dialog-title" >
                {title}
            </DialogTitle>
            <DialogContent>
                <Box sx={{ pt: 2, alignItems:'center', display: 'inline' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>7 reviews * 219 Total rating 4.9</Typography>
                    <Typography sx={{ fontSize: '12px'}}>(The reviews and ratings are given only by paying subscribers)</Typography>
                </Box>
            </DialogContent>
            <DialogContent>
                <Box sx={{ py: 1 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={1}>

                            <img src={demoImage} alt="" width='50vw' />
                        </Grid>
                        <Grid item xs={9}>
                            <Box sx={{ px: 2 }}>
                                <Typography sx={{ fontSize: '12px', textAlign: 'left', color: '#8E8E8E' }}>Cross-fit 30 min body weight only full tone  * 3d ago</Typography>
                                <Typography sx={{ fontSize: '12px', textAlign: 'left' }}>This practice lesson consists of short paragraphs about interesting subjects work.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                        <Box sx={{display: 'flex', pr:'10px'}}>
                            <Typography>4.9</Typography>
                            <StarIcon sx={{ color: '#FFB02E', width: '26px', height: '24px' }}/>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" />
                </Box>

                <Box sx={{ py: 1 }}>
                    <Grid container spacing={1} sx={{ pt: 1, justifyContent: 'center' }}>
                        <Grid item xs={1}>

                            <img src={demoImage} alt="" width='50vw' />
                        </Grid>
                        <Grid item xs={9}>
                            <Box sx={{ px: 2 }}>
                                <Typography sx={{ fontSize: '12px', textAlign: 'left', color: '#8E8E8E' }}>Cross-fit 30 min body weight only full tone  * 3d ago</Typography>
                                <Typography sx={{ fontSize: '12px', textAlign: 'left' }}>This practice lesson consists of short paragraphs about interesting subjects work.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                        <Box sx={{display: 'flex', pr:'10px'}}>
                            <Typography>4.9</Typography>
                            <StarIcon sx={{ color: '#FFB02E', width: '26px', height: '24px' }}/>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" />
                </Box>

                <Box sx={{ py: 1 }}>
                    <Grid container spacing={1} sx={{ pt: 1, justifyContent: 'center' }}>
                        <Grid item xs={1}>

                            <img src={demoImage} alt="" width='50vw' />
                        </Grid>
                        <Grid item xs={9}>
                            <Box sx={{ px: 2 }}>
                                <Typography sx={{ fontSize: '12px', textAlign: 'left', color: '#8E8E8E' }}>Cross-fit 30 min body weight only full tone  * 3d ago</Typography>
                                <Typography sx={{ fontSize: '12px', textAlign: 'left' }}>This practice lesson consists of short paragraphs about interesting subjects work.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{display: 'flex', pr:'10px'}}>
                            <Typography>4.9</Typography>
                            <StarIcon sx={{ color: '#FFB02E', width: '26px', height: '24px' }}/>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" />
                </Box>
                <Box sx={{ py: 1 }}>
                    <Grid container spacing={1} sx={{ pt: 1, justifyContent: 'center' }}>
                        <Grid item xs={1}>

                            <img src={demoImage} alt="" width='50vw' />
                        </Grid>
                        <Grid item xs={9}>
                            <Box sx={{ px: 2 }}>
                                <Typography sx={{ fontSize: '12px', textAlign: 'left', color: '#8E8E8E' }}>Cross-fit 30 min body weight only full tone  * 3d ago</Typography>
                                <Typography sx={{ fontSize: '12px', textAlign: 'left' }}>This practice lesson consists of short paragraphs about interesting subjects work.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                        <Box sx={{display: 'flex', pr:'10px'}}>
                            <Typography>4.9</Typography>
                            <StarIcon sx={{ color: '#FFB02E', width: '26px', height: '24px' }}/>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" />
                </Box>
                <Box sx={{ py: 1 }}>
                    <Grid container spacing={1} sx={{ pt: 1, justifyContent: 'center' }}>
                        <Grid item xs={1}>

                            <img src={demoImage} alt="" width='50vw' />
                        </Grid>
                        <Grid item xs={9}>
                            <Box sx={{ px: 2 }}>
                                <Typography sx={{ fontSize: '12px', textAlign: 'left', color: '#8E8E8E' }}>Cross-fit 30 min body weight only full tone  * 3d ago</Typography>
                                <Typography sx={{ fontSize: '12px', textAlign: 'left' }}>This practice lesson consists of short paragraphs about interesting subjects work.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                        <Box sx={{display: 'flex', pr:'10px'}}>
                            <Typography>4.9</Typography>
                            <StarIcon sx={{ color: '#FFB02E', width: '26px', height: '24px' }}/>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" />
                </Box>
                <Box sx={{ py: 1 }}>
                    <Grid container spacing={1} sx={{ pt: 1, justifyContent: 'center' }}>
                        <Grid item xs={1}>

                            <img src={demoImage} alt="" width='50vw' />
                        </Grid>
                        <Grid item xs={9}>
                            <Box sx={{ px: 2 }}>
                                <Typography sx={{ fontSize: '12px', textAlign: 'left', color: '#8E8E8E' }}>Cross-fit 30 min body weight only full tone  * 3d ago</Typography>
                                <Typography sx={{ fontSize: '12px', textAlign: 'left' }}>This practice lesson consists of short paragraphs about interesting subjects work.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                        <Box sx={{display: 'flex', pr:'10px'}}>
                            <Typography>4.9</Typography>
                            <StarIcon sx={{ color: '#FFB02E', width: '26px', height: '24px' }}/>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" />
                </Box>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center', mb: 2 }}>

            </DialogActions>
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