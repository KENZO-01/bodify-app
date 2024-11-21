import React, { useEffect } from 'react'
import BrandLogo from '../../../Assets/images/brand_logo.png'
import { Box, Divider, Stack, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { LoginSchema } from '../../Utils/ValidationSchema'
import { useFormik } from 'formik';
import PasswordField from '../../Components/FormComponents/PasswordField'
import FormButton from '../../Components/FormComponents/FormButton'

const Login = () => {

    const navigate = useNavigate()
    useEffect(() => {
        if (Cookies.get('BodifyLoginStatus') === 'success') {
            navigate('/');
        }
    }, [])

    const handleSetCookieClick = (values) => {
        if (values.email === 'test@bodify.com' && values.password === 'test123') {
            Cookies.set('BodifyLoginStatus', 'success', { expires: 0.1 });
            navigate('/');
        }
        else {
            alert('invalid credentials')
        }
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
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
                    Log in
                </Typography>

                <form
                    onSubmit={formik.handleSubmit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                    }}
                >
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
                    />

                    <Box sx={{
                        textAlign: 'right',
                    }}
                    >
                        <PasswordField
                            name={'password'}
                            onChange={formik.handleChange}
                            fieldValue={formik.values.password}
                            onBlur={formik.handleBlur}
                            fieldtouched={formik.touched.password}
                            fieldError={formik.errors.password}
                        />
                        <Link
                            to="/forgot-password"
                            style={{
                                textDecoration: 'none',
                                color: '#000'
                            }}
                        >
                            Forget Password?
                        </Link>
                    </Box>

                    <FormButton
                        title={'Log in'}
                        isFormValid={formik.dirty && Object.keys(formik.errors).length === 0}
                    />
                </form>

                <Typography
                    sx={{ color: '#484848' }}
                >
                    if you don&apos;t have an account, please click here to{" "}
                    <Link
                        to={'/signup'}
                        style={{ color: '#000' }}
                    >
                        Sign up
                    </Link>.
                </Typography>
                <Divider />
                <Typography
                    sx={{ color: '#484848' }}
                >
                    By signing up, you agree to our{" "}
                    <Link
                        style={{ color: '#000' }}>
                        Terms of service
                    </Link>.
                    Learn how we process your data in our{" "}
                    <Link style={{ color: '#000' }}>
                        Privacy Policy
                    </Link>
                    {" "}and{" "}
                    <Link style={{ color: '#000' }}>
                        Cookies Policy
                    </Link>
                </Typography>
            </Stack>
        </Box>
    )
}

export default Login