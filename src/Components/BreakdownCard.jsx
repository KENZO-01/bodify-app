import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const BreakdownCard = (props) => {
    const {title, logo, text, link} = props;
  return (
      <Box
          sx={{
              borderRadius: '12px',
              backgroundColor: '#fff',
              marginTop: '2rem',
              minHeight: '10rem',
              padding: '1rem'
          }}
      >
          <Typography variant='h5' sx={{ marginBottom: '0.5rem' }}>Click here to see a breakdown of the {title}</Typography>
          <Link
              to={link}
              style={{
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  color: '#5735DE'
              }}
          >
              <img src={logo} width={'15px'} height={'15px'} alt="trainee" />
              &nbsp; {text}
          </Link>
      </Box>
  )
}

export default BreakdownCard

BreakdownCard.propTypes = {
    title: PropTypes.string,
    logo: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
};