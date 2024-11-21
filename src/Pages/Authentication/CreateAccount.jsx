import React from 'react'
import BrandLogo from '../../../Assets/images/brand_logo.png'
import { Box, Button, Checkbox, Stack, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { useState } from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormButton from '../../Components/FormComponents/FormButton';
import { useFormik } from 'formik';
import { AccountCreationSchema } from '../../Utils/ValidationSchema';
import PasswordField from '../../Components/FormComponents/PasswordField';
import ExerciseImage from '../../../Assets/images/exercise-image.svg';
import TrainerImage from '../../../Assets/images/trainer-image.svg';
// import { useAccountVerifyMutation } from '../../Services/userApi';
// import { useSelector } from 'react-redux';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CreateAccount = () => {
    const [value, setValue] = useState('')
    const [isOtpVerified, setIsOtpVerified] = useState(false)
    const [isTermsChecked, setIsTermsChecked] = useState(false)
    const [isFormSubmit, setIsFormSubmit] = useState(false)
    const [selectedAccountType, setSelectedAccountType] = useState(null);

    const navigate = useNavigate()
    // const email = useSelector((state) => state?.user?.userInfo?.email)

    // const [verifyAccount] = useAccountVerifyMutation()

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    const handleOtpSubmit = async () => {
        if (value.length == 4) {

            // await verifyAccount({
            //     email: email,
            //     otp: value,
            // })
            setIsOtpVerified(true)
        }
    }

    const handleAccountCreation = (values) => {
        console.log(values)
        setIsFormSubmit(true)
    };

    const handleAccountTypeSelection = () => {
        if (selectedAccountType === 'trainer'){
            navigate('/trainer-details')
        }
        else{
            navigate('/trainee-guide')
        }
    };

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            password: '',
        },
        validationSchema: AccountCreationSchema,
        onSubmit: (values) => {
            handleAccountCreation(values);
        },
    });

    console.log(formik.dirty && Object.keys(formik.errors).length === 0)


    return (
        <Box>
            <Stack
                sx={{
                    maxWidth: '500px',
                    margin: 'auto',
                    mt: '5rem',
                    textAlign: 'center'
                }}
                gap={5}
            >
                <Box>
                    <img src={BrandLogo} alt="" />
                </Box>

                {
                    isOtpVerified ?
                        isFormSubmit ?
                            <>
                                <Typography
                                    variant='h4'
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#2F2F2F',
                                        mt: 4
                                    }}
                                >
                                    I want to
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Box
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => setSelectedAccountType('exercise')}
                                    >
                                        <img
                                            src={ExerciseImage}
                                            width={'100%%'}
                                            alt=""
                                            style={selectedAccountType === 'exercise' ? { border: '4px solid #5735DE', borderRadius: '8px' } : {}}
                                        />
                                        <Typography sx={{ color: '#484848', fontWeight: 600 }}>Exercise</Typography>
                                    </Box>
                                    <Box
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => setSelectedAccountType('trainer')}
                                    >
                                        <img
                                            src={TrainerImage}
                                            width={'100%'}
                                            alt=""
                                            style={selectedAccountType === 'trainer' ? { border: '4px solid #5735DE', borderRadius: '8px' } : {}}
                                        />
                                        <Typography sx={{ color: '#484848', fontWeight: 600 }}>Trainer</Typography>
                                    </Box>
                                </Box>

                                <Button
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    type="submit"
                                    sx={{
                                        height: '54px',
                                        mt: 8,
                                        backgroundColor: '#5735DE',
                                        '&:hover': {
                                            backgroundColor: '#6C4DE6'
                                        }
                                    }}
                                    disabled={selectedAccountType === null}
                                    onClick={handleAccountTypeSelection}
                                >
                                    Continue
                                </Button>
                            </>
                            :
                            <>
                                <Typography
                                    variant='h4'
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#2F2F2F',
                                    }}
                                >
                                    Create account
                                </Typography>

                                <form
                                    onSubmit={formik.handleSubmit}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '2rem',
                                        marginTop: '1rem'
                                    }}
                                >

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            gap: 1
                                        }}
                                    >
                                        <TextField
                                            id="first_name"
                                            name="first_name"
                                            label="First Name"
                                            variant="outlined"
                                            placeholder="Last Name"
                                            value={formik.values.first_name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            fullWidth
                                            error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                                            helperText={formik.touched.first_name ? formik.errors.first_name : ''}
                                        />
                                        <TextField
                                            id="last_name"
                                            name="last_name"
                                            label="Last Name"
                                            variant="outlined"
                                            placeholder="Last Name"
                                            value={formik.values.last_name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            fullWidth
                                            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                                            helperText={formik.touched.last_name ? formik.errors.last_name : ''}
                                        />
                                    </Box>

                                    <PasswordField
                                        name={'password'}
                                        onChange={formik.handleChange}
                                        fieldValue={formik.values.password}
                                        onBlur={formik.handleBlur}
                                        fieldtouched={formik.touched.password}
                                        fieldError={formik.errors.password}
                                    />
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Checkbox
                                            {...label}
                                            color="default"
                                            onChange={(e) => setIsTermsChecked(e.target.checked)}
                                        />
                                        <Typography
                                            sx={{ color: '#484848' }}
                                        >
                                            I agree to Bodify&apos;s{" "}
                                            <Link
                                                style={{ color: '#000' }}
                                            >
                                                Privacy Policy
                                            </Link>
                                            {" "}and{" "}
                                            <Link
                                                style={{ color: '#000' }}
                                            >
                                                Terms of Services
                                            </Link>
                                        </Typography>

                                    </Box>
                                    <FormButton
                                        title={'Create Account'}
                                        isFormValid={isTermsChecked}
                                    />
                                </form>
                                <Typography
                                    sx={{ color: '#484848' }}
                                >
                                    Remember password{" "}
                                    <Link
                                        to={'/login'}
                                        style={{ color: '#000' }}
                                    >
                                        Log in
                                    </Link>.
                                </Typography>
                            </>

                        :
                        <>

                            <Typography
                                variant='h4'
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#2F2F2F',
                                }}
                            >
                                Please Check Your Email
                            </Typography>
                            <Box
                                sx={{
                                    width: '70%',
                                    margin: 'auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '2rem',
                                }}
                            >
                                <MuiOtpInput
                                    error
                                    length={4}
                                    value={value}
                                    onChange={handleChange}
                                />

                                <Button
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    type="submit"
                                    sx={{
                                        height: '54px',
                                        mt: 8,
                                        backgroundColor: '#5735DE',
                                        '&:hover': {
                                            backgroundColor: '#6C4DE6'
                                        }
                                    }}
                                    disabled={value.length != 4}
                                    onClick={handleOtpSubmit}
                                >
                                    Continue
                                </Button>
                            </Box>
                            <Typography
                                sx={{ color: '#484848' }}
                            >
                                Remember password{" "}
                                <Link
                                    to={'/login'}
                                    style={{ color: '#000' }}
                                >
                                    Log in
                                </Link>.
                            </Typography>
                        </>
                }
            </Stack>
        </Box>
    )
}

export default CreateAccount
