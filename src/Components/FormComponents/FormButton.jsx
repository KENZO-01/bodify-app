import { Button } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion';

const FormButton = (props) => {
  const { title, isFormValid } = props;

  return (
    <motion.div
      whileHover={!isFormValid ? {} : { scale: 1.05 }}
      whileTap={!isFormValid ? {} : { scale: 1 }}
    >
      <Button
        variant="contained"
        size="large"
        fullWidth
        type="submit"
        sx={{
          height: '54px',
          backgroundColor: '#5735DE',
          '&:hover': {
            backgroundColor: '#6C4DE6'
          }
        }}
        disabled={!isFormValid}
      >
        {title}
      </Button>
    </motion.div>
  )
}

export default FormButton

FormButton.propTypes = {
  title: PropTypes.string,
  isFormValid: PropTypes.bool
}