import { Autocomplete, Box, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import BrandLogo from '../../../Assets/images/brand_logo.png'
import { useFormik } from 'formik';
import FormButton from '../../Components/FormComponents/FormButton'

import TiktokIcon from '../../../Assets/icons/tiktok_icon.svg?react';
import InstagramIcon from '../../../Assets/icons/ig_icon.svg?react';
import YoutubeIcon from '../../../Assets/icons/yt_icon.svg?react';
import { countries } from '../../Utils/countries';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TrainerAccountDetailsSchema } from '../../Utils/ValidationSchema';
import { useNavigate } from 'react-router-dom';

const TrainerAccountDetails = () => {
  const navigate = useNavigate()
  const handleTrainerDetailFormSubmit = (values) => {
    console.log(values)
    navigate('/')
  }
  const formik = useFormik({
    initialValues: {
      qualifications: '',
      experience: '',
      location: '',
      instagram: '',
      tiktok: '',
      youtube: '',
      about: '',
    },
    validationSchema: TrainerAccountDetailsSchema,
    onSubmit: (values) => {
      handleTrainerDetailFormSubmit(values);
    },
  });

  return (
    <Box>
      <Stack
        sx={{
          maxWidth: '900px',
          margin: 'auto',
          mt: '5rem',
          textAlign: 'center',
          p: 2
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
          Tell us More
        </Typography>


        <Typography sx={{ color: '#484848' }}>
          This will be part of your profile and will be presented to other people.
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

          <Grid container spacing={4}>
            <Grid item xs={6}>
              <TextField
                id="qualifications"
                name="qualifications"
                label="Education & Qualification"
                variant="outlined"
                placeholder="Enter education & qualification"
                value={formik.values.qualifications}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
                error={formik.touched.qualifications && Boolean(formik.errors.qualifications)}
                helperText={formik.touched.qualifications ? formik.errors.qualifications : ''}
              />
            </Grid>
            <Grid item xs={6}>
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  onChange={(date) => formik.setFieldValue('experience', date.format('YYYY-MM-DD'))}
                  label="Enter Experience"
                  sx={{ width: '100%' }}
                />
              </LocalizationProvider> */}
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                id="country-select-demo"
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                onChange={(event, selectedCountry) => formik.setFieldValue('location', selectedCountry.label)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a country"
                  />
                )}
              />
            </Grid>
          </Grid>
          <Box>
            <Typography variant='h6' sx={{ fontWeight: 600, textAlign: 'left', mb: 1 }}>Social</Typography>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  id="instagram"
                  name="instagram"
                  variant="outlined"
                  label={
                    <>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <InstagramIcon />
                        Instagram
                      </Box>
                    </>
                  }
                  placeholder="@ What is your Instagram Handle? (optional)"
                  value={formik.values.instagram}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  fullWidth
                  error={formik.touched.instagram && Boolean(formik.errors.instagram)}
                  helperText={formik.touched.instagram ? formik.errors.instagram : ''}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="tiktok"
                  name="tiktok"
                  label={
                    <>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TiktokIcon />
                        Tiktok
                      </Box>
                    </>
                  }
                  variant="outlined"
                  placeholder="@ What is your Tiktok Handle?"
                  value={formik.values.tiktok}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  fullWidth
                  error={formik.touched.tiktok && Boolean(formik.errors.tiktok)}
                  helperText={formik.touched.tiktok ? formik.errors.tiktok : ''}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="youtube"
                  name="youtube"
                  label={
                    <>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <YoutubeIcon />
                        Youtube
                      </Box>
                    </>
                  }
                  variant="outlined"
                  placeholder="@ What is your Youtube Handle?"
                  value={formik.values.youtube}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  fullWidth
                  error={formik.touched.youtube && Boolean(formik.errors.youtube)}
                  helperText={formik.touched.youtube ? formik.errors.youtube : ''}
                />
              </Grid>
            </Grid>
          </Box>

          <TextField
            id="about"
            name="about"
            label="About"
            variant="outlined"
            placeholder="Type here..."
            value={formik.values.about}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            multiline
            rows={4}
            error={formik.touched.about && Boolean(formik.errors.about)}
            helperText={formik.touched.about ? formik.errors.about : ''}
          />
          <Box sx={{
            width: '50%',
            margin: 'auto',
            '@media (max-width: 600px)': {
              width: '100%'
            },
            mb: 4
          }}>
            <FormButton
              title={'Create Account'}
              isFormValid={formik.dirty && Object.keys(formik.errors).length === 0}
            />
          </Box>
        </form>

      </Stack>
    </Box>
  )
}

export default TrainerAccountDetails