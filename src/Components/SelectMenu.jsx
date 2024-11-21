
import React from 'react';
import {Box} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function BasicSelect(props) {
    const {items} = props;
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box>
            <FormControl size="small"
            sx={{minWidth: 'calc(max(30%, 220px))'}}
            >
                <Select
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    defaultValue={items?.dropdownItems[0].value}
                    sx={{borderRadius: '0px'}}
                >
                    {
                     items?.dropdownItems?.map((item, index) => {
                            return (
                                <MenuItem key={index} value={item.value}>{item.title}</MenuItem>
                            );
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    );
}

BasicSelect.propTypes = {
    items: PropTypes.shape({
        dropdownItems: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.any.isRequired,
                title: PropTypes.string.isRequired,
            })
        ),
    }),
};