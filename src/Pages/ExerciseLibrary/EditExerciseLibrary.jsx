import React, { useState } from 'react';
// import AlertDialog from '../../Components/AlertDialog'
import { Box, Button, Grid, Input, MenuItem, Select, TextField, Typography, styled } from '@mui/material'
import FirstPageIcon from '@mui/icons-material/FirstPage';
import PropTypes from 'prop-types';
import LinkIcon from '@mui/icons-material/Link';
import DemoVideo from '../../../Assets/videos/gym-demo-video.mp4';
import { MuscleTypes } from './config'
import MultiSelect from '../../Components/MultiSelect';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditButton = styled(Button)(() => ({
    backgroundColor: '#5735DE',
    color: '#fff',
    borderRadius: '2px',
    '&:hover': {
        backgroundColor: '#5735DE',
    }
}))

const CancelButton = styled(Button)(() => ({
    borderColor: '#151515',
    color: '#151515',
    borderRadius: '2px',
    '&:hover': {
        borderColor: '#151515',
        backgroundColor: 'transparent',
    }
}))

const DeactivateButton = styled(Button)(() => ({
    backgroundColor: '#151515',
    color: '#fff',
    borderRadius: '2px',
    '&:hover': {
        backgroundColor: '#151515',
    }
}))

const LinkInput = styled(Input)(() => ({
    '&:before': {
        border: 'none'
    },
    '&:after': {
        border: 'none'
    },
    '&:hover': {
        border: 'none'
    },
    '&:focus': {
        border: 'none'
    }
}))


const validationSchema = Yup.object({
    title: Yup.string().required('Exercise name is required'),
    variations: Yup.string().required('variations are required'),
});

const EditExerciseLibrary = (props) => {
    const { setIsEditEnabled, data } = props;
    const [exerciseStatus, setExerciseStatus] = useState(data?.exercise_status)

    const handleExerciseActivationStatus = () => {
        const status = exerciseStatus === 'activated' ? 'deactivated' : 'activated'
        setExerciseStatus(status)
    }
    const handleCancelExerciseEdit = () => {
        setIsEditEnabled(false)
    }

    const [selectedMuscleValues, setSelectedMuscleValues] = useState(data.muscle);

    const handleMuscleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedMuscleValues(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const formik = useFormik({
        initialValues: {
            title: data.title || '',
            instructions: data.instructions || '',
            variations: data.variations || '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <Box
            sx={{
                width: '92%',
                margin: 'auto',
                marginTop: '2rem',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                }}
            >
                <FirstPageIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                        setIsEditEnabled(false)
                    }}
                />
                <Typography variant='h5'>Back to &ldquo;Exercise Name&rdquo;</Typography>

            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '1rem',
                }}
            >
                <CancelButton
                    variant='outlined'
                    sx={{ borderRadius: '2px' }}
                    onClick={() => handleCancelExerciseEdit()}
                >
                    Cancel
                </CancelButton>
                <DeactivateButton
                    variant='outlined'
                    sx={{ borderRadius: '2px' }}
                    onClick={() => handleExerciseActivationStatus()}
                >
                    {exerciseStatus === 'activated' ? 'Deactivate' : 'Activate'}
                </DeactivateButton>
                <EditButton
                    variant='contained'
                    // onClick={() => handleSaveExercise()}
                    type='submit'
                >Save Exercise</EditButton>
            </Box>

            <Typography variant='h4' sx={{ fontWeight: 600 }}>Edit Exercise</Typography>



            <Grid container spacing={2} sx={{ mt: '2rem' }}>
                <Grid item xs={7}>

                    <Box
                        sx={{
                            width: '90%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}
                    >
                        <Box>
                            <Typography variant='h6' sx={{ fontWeight: '500' }}>Exercise Name</Typography>
                            <TextField
                                id='title'
                                name='title'
                                sx={{ background: '#fff' }}
                                placeholder="Enter a Exercise name"
                                variant="outlined"
                                size='small'
                                fullWidth
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                error={formik.errors.title}
                                helperText={formik.errors.title}
                            />
                        </Box>
                        <Box>
                            <Typography variant='h6' sx={{ fontWeight: '500' }}>Level of Difficulty</Typography>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                placeholder='Enter Level of Difficulty'
                                size='small'
                                fullWidth
                                value={data.level}
                                sx={{ background: '#fff' }}
                            >
                                <MenuItem value={'Beginner'}>Beginner</MenuItem>
                                <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
                                <MenuItem value={'Expert'}>Expert</MenuItem>
                            </Select>
                        </Box>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant='h6' sx={{ fontWeight: '500' }}>Type</Typography>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        placeholder='Enter Level of Difficulty'
                                        size='small'
                                        fullWidth
                                        value={data.type}
                                        sx={{ background: '#fff' }}
                                    >
                                        <MenuItem value={'Cross-fit'}>Cross-fit</MenuItem>
                                        <MenuItem value={'Home'}>Home</MenuItem>
                                        <MenuItem value={'Gym'}>GYM</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='h6' sx={{ fontWeight: '500' }}>Equipment</Typography>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        placeholder='Enter Level of Difficulty'
                                        size='small'
                                        fullWidth
                                        value={data.equipment}
                                        sx={{ background: '#fff' }}
                                    >
                                        <MenuItem value={'Dumbbell'}>Dumbbell</MenuItem>
                                        <MenuItem value={'Bench'}>Bench</MenuItem>
                                        <MenuItem value={'Leg Press Machine'}>Leg Press Machine</MenuItem>
                                        <MenuItem value={'Treadmill'}>Treadmill</MenuItem>
                                        <MenuItem value={'Calf Machine'}>Calf Machine</MenuItem>
                                        <MenuItem value={'Barbell'}>Barbell</MenuItem>
                                        <MenuItem value={'Squat Rack'}>Squat Rack</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='h6' sx={{ fontWeight: '500' }}>Muscle</Typography>
                                    <MultiSelect
                                        selectedMuscleValues={selectedMuscleValues}
                                        handleMuscleChange={handleMuscleChange}
                                        options={MuscleTypes}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                        <Box>
                            <Typography variant='h6' sx={{ fontWeight: '500' }}>Instructions</Typography>
                            <TextField
                                placeholder='Enter Instructions'
                                id='instructions'
                                name='instructions'
                                multiline
                                rows={4}
                                sx={{ background: '#fff' }}
                                variant="outlined"
                                size='small'
                                fullWidth
                                value={formik.values.instructions}
                                onChange={formik.handleChange}
                                error={formik.errors.instructions}
                                helperText={formik.errors.instructions}
                            />
                        </Box>
                        <Box>
                            <Typography variant='h6' sx={{ fontWeight: '500' }}>Variations</Typography>
                            <TextField
                                id='variations'
                                name='variations'
                                multiline
                                rows={4}
                                placeholder='Enter Variations'
                                sx={{ background: '#fff' }}
                                variant="outlined"
                                size='small'
                                fullWidth
                                value={formik.values.variations}
                                onChange={formik.handleChange}
                                error={formik.errors.variations}
                                helperText={formik.errors.variations}
                            />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box
                        sx={{
                            border: '1px solid #A9A9A9',
                            borderRadius: '5px',
                        }}
                    >
                        <Box
                            sx={{ p: 2 }}
                        >
                            <Typography variant='h6'>Exercise Video</Typography>
                            <video width="100%" height="auto" controls>
                                <source src={DemoVideo} type="video/mp4" />
                            </video>
                        </Box>
                        <Box sx={{ borderTop: '1px solid #A9A9A9', display: 'flex', alignItems: 'center', p: '4px 16px', color: '#A9A9A9', gap: 1 }}>
                            <LinkIcon />
                            <LinkInput placeholder='place your video link here.' />
                        </Box>
                    </Box>
                </Grid>
            </Grid>




        </Box>
    )
}

export default EditExerciseLibrary

EditExerciseLibrary.propTypes = {
    setIsEditEnabled: PropTypes.func.isRequired,
    data: PropTypes.shape({
        title: PropTypes.string,
        muscle: PropTypes.arrayOf(PropTypes.string).isRequired,
        equipment: PropTypes.string,
        date_added: PropTypes.string,
        last_modified: PropTypes.string,
        status: PropTypes.oneOf('active', 'inactive'),
        level: PropTypes.string,
        type: PropTypes.string,
        video_link: PropTypes.string,
        instructions: PropTypes.array,
        exercise_status: PropTypes.oneOf('activated', 'deactivated'),
        variations: PropTypes.string
    })
}