import { MenuItem, Select } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

const SelectMenu = ({ name, value, onChange, errors, options, handleBlur }) => {
    return (
        <Select
            name={name}
            value={value}
            onChange={(e) => onChange(e)}
            displayEmpty
            size="small"
            fullWidth
            error={errors}
            onBlur={handleBlur}
        >
            {
                options.map((option, index) => {
                    return (
                        <MenuItem value={option.value} key={index}>
                            {option.label}
                        </MenuItem>
                    )
                })
            }
        </Select>
    )
}

export default SelectMenu

SelectMenu.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    errors: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    handleBlur: PropTypes.func,
}