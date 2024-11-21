import React from 'react'
import BrandLogo from '../../../Assets/images/brand_logo.png'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { useState } from 'react';
import PasswordField from '../../Components/FormComponents/PasswordField';
import { useFormik } from 'formik';
import { ResetPasswordSchema } from '../../Utils/ValidationSchema';
import FormButton from '../../Components/FormComponents/FormButton';

const ResetPassword = () => {
  const [value, setValue] = useState('')
  const [isOtpVerified, setIsOtpVerified] = useState(false)

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  const handleOtpSubmit = () => {
    if (value.length == 4 && value === '1234') {
      setIsOtpVerified(true)
    }
  }

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      password1: '',
      password2: '',
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: (values) => {
      handlePasswordChange(values);
    },
  });

  const handlePasswordChange = (values) => {
    console.log(values)
    navigate('/login')
  }

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
            <>
              <Typography
                variant='h4'
                sx={{
                  fontWeight: 'bold',
                  color: '#2F2F2F',
                }}
              >
                Reset Password
              </Typography>

              <form
                onSubmit={formik.handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                }}
              >
                <PasswordField
                  name={'password1'}
                  onChange={formik.handleChange}
                  fieldValue={formik.values.password1}
                  onBlur={formik.handleBlur}
                  fieldtouched={formik.touched.password1}
                  fieldError={formik.errors.password1}
                />
                <PasswordField
                  title={"Confirm Password"}
                  name={'password2'}
                  onChange={formik.handleChange}
                  fieldValue={formik.values.password2}
                  onBlur={formik.handleBlur}
                  fieldtouched={formik.touched.password2}
                  fieldError={formik.errors.password2}
                />
                <br />
                <FormButton
                  title={'Log in'}
                  isFormValid={formik.dirty && Object.keys(formik.errors).length === 0}
                />
              </form>
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
            </>
        }


        <Typography
          sx={{ color: '#484848' }}
        >
          I have an account{" "}
          <Link
            to={'/login'}
            style={{ color: '#000' }}
          >
            Log in
          </Link>.
        </Typography>
      </Stack>
    </Box>
  )
}

export default ResetPassword
