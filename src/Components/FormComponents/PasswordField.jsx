import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PasswordField = (props) => {
    const {title, name, onChange, fieldValue, onBlur, fieldtouched, fieldError} = props;

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
      <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">{title ? title : 'Password'}</InputLabel>
          <OutlinedInput
              id={name}
              name={name}
              type={showPassword ? 'text' : 'password'}
              value={fieldValue}
              onChange={onChange}
              onBlur={onBlur}
              endAdornment={
                  <InputAdornment position="end">
                      <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                      >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                  </InputAdornment>
              }
              label={title ? title : 'Password'}
              error={fieldtouched && Boolean(fieldError)}
          />
          {fieldtouched && (
              <Typography variant="caption" color="error" sx={{textAlign:'start'}}>
                  {fieldError}
              </Typography>
          )}
      </FormControl>
  )
}

export default PasswordField

PasswordField.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    fieldValue: PropTypes.string,
    onBlur: PropTypes.func,
    fieldtouched: PropTypes.bool,
    fieldError: PropTypes.string,
};