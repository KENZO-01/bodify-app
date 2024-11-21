import { Checkbox, ListItemText, MenuItem, Select } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const MultiSelect = (props) => {

    const { selectedMuscleValues, handleMuscleChange, options} = props;
  return (
      <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedMuscleValues}
          onChange={handleMuscleChange}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          size='small'
          sx={{
              width: '100%',
              background: '#fff'
          }}
      >
          {options.map((option) => (
              <MenuItem key={option} value={option}>
                  <ListItemText primary={option} />
                  <Checkbox checked={selectedMuscleValues.indexOf(option) > -1} />
              </MenuItem>
          ))}
      </Select>
  )
}

export default MultiSelect

MultiSelect.propTypes = {
    selectedMuscleValues: PropTypes.arrayOf(PropTypes.string),
    handleMuscleChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}