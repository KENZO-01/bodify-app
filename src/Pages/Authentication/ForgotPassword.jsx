import React from 'react'
import BrandLogo from '../../../Assets/images/brand_logo.png'
import { Box, Stack, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { EmailValidationSchema } from '../../Utils/ValidationSchema'
import FormButton from '../../Components/FormComponents/FormButton'

const ForgotPassword = () => {

    const navigate = useNavigate();

    const handleSetCookieClick = (values) => {
        console.log(values);
        navigate('/reset-password');
    }

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: EmailValidationSchema,
        onSubmit: (values) => {
            handleSetCookieClick(values);
        },
    });

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
                <Typography
                    variant='h4'
                    sx={{
                        fontWeight: 'bold',
                        color: '#2F2F2F',
                    }}
                >
                    Forgot Password?
                </Typography>

                <form
                    onSubmit={formik.handleSubmit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                    }}
                >
                    <Box sx={{ textAlign: 'start', mb: 8 }}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            variant="outlined"
                            placeholder="Your Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email ? formik.errors.email : ''}
                            sx={{ mb: 1 }}
                        />
                        <Typography sx={{ color: '#484848' }}>Please enter your email so we could send your password.</Typography>
                    </Box>

                    <FormButton
                        title={'Create Account'}
                        isFormValid={formik.dirty && Object.keys(formik.errors).length === 0}
                    />
                    <Typography sx={{ color: '#484848' }}>
                        Remember password{' '}
                        <Link
                            to={'/login'}
                            style={{ color: '#000' }}
                        >
                            Log in
                        </Link>.
                    </Typography>
                </form>
            </Stack>
        </Box>
    )
}

export default ForgotPassword