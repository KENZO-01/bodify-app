import React from 'react'
import BrandLogo from '../../../Assets/images/brand_logo.png'
import { Backdrop, Box, CircularProgress, Stack, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import FormButton from '../../Components/FormComponents/FormButton'
import { EmailValidationSchema } from '../../Utils/ValidationSchema'
import { useFormik } from 'formik'
// import { useRegisterMutation } from '../../Services/userApi'
// import { useDispatch } from 'react-redux';
// import { updateUserInfo } from '../../Store/userSlice'

const Signup = () => {

    // const [userRegister, { isError, isLoading }] = useRegisterMutation()
    // const dispatch = useDispatch()

    const navigate = useNavigate();
    const handleUserRegister = async () => {
        try {
            // const response = await userRegister(values)
            // console.log(response)
            // if (response.data.code === 201){
            //     dispatch(updateUserInfo({email: values.email}))
                navigate('/create-account');
            // }
        }
        catch (err) {
            console.log(err)
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: EmailValidationSchema,
        onSubmit: (values) => {
            handleUserRegister(values);
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
                    Create Account
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
                        sx={{ mb: 12 }}
                    />

                    <FormButton
                        title={'Create Account'}
                        isFormValid={formik.dirty && Object.keys(formik.errors).length === 0}
                    />

                    <Typography sx={{ color: '#484848' }}>
                        I have an account{' '}
                        <Link
                            to={'/login'}
                            style={{ color: '#000' }}
                        >
                            Log in
                        </Link>.
                    </Typography>
                </form>

            </Stack>



            {/* <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop> */}
        </Box>
    )
}

export default Signup