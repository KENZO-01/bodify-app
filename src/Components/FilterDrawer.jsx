import React from 'react';
import { Box, Checkbox, Divider, Radio, Typography } from '@mui/material';
import CloseDrawerIcon from "../../Assets/icons/close_drawer.svg";
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const FlexContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

const musclesCheckbox = [
    {
        "title": 'Stretch',
        "value": 'stretch',
    },
    {
        "title": 'Forearms',
        "value": 'forearms',
    },
    {
        "title": 'Lats',
        "value": 'lats',
    },
    {
        "title": 'Middle Back',
        "value": 'middle_back',
    },
    {
        "title": 'Lower Back',
        "value": 'lower_back',
    },
    {
        "title": 'Neck',
        "value": 'neck',
    },
    {
        "title": 'Quadricepts',
        "value": 'quadricepts',
    },
    {
        "title": 'Hamstring',
        "value": 'hamstring',
    },
    {
        "title": 'Calves',
        "value": 'calves',
    }
]

const FilterDrawer = ({ setRightOpen }) => {

    const [selectedSortCriteria, setSelectedSortCriteria] = useState('a');

    const handleChange = (event) => {
        setSelectedSortCriteria(event.target.value);
    };

    const [selectedFilterOption, setSelectedFilterOption] = useState({
        stretch: false,
        exercise: false
    });

    const handleFilterChange = (value) => {
        setSelectedFilterOption(prevState => ({
            ...prevState,
            [value]: !prevState[value]
        }));
    }



    return (
        <Box
            sx={{
                overflowY: 'auto',
                scrollbarWidth: 'thin',
                scrollbarColor: 'dark',
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(87, 53, 222, 0.4)',
                },
            }}
        >
            <Box
                sx={{
                    width: 250,
                    m: 2,
                }}
                role="presentation"
            >
                <Box onClick={() => setRightOpen(false)}>
                    <img src={CloseDrawerIcon} height={'30px'} width={'30px'} alt="" />
                </Box>
                <Typography variant='h6'>Sort & Filter</Typography>

                <Typography variant='subtitle2' sx={{ fontWeight: '600', mt: 1 }}>Sort By</Typography>

                <Box>
                    <FlexContainer>
                        <Typography variant='subtitle2'>Name (A-Z)</Typography>
                        <Radio
                            checked={selectedSortCriteria === 'a'}
                            onChange={handleChange}
                            value="a"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                    </FlexContainer>
                    <FlexContainer>
                        <Typography variant='subtitle2'>Name (Z-A)</Typography>
                        <Radio
                            checked={selectedSortCriteria === 'b'}
                            onChange={handleChange}
                            value="b"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'B' }}
                        />
                    </FlexContainer>
                    <FlexContainer>
                        <Typography variant='subtitle2'>Date (Recent to Old)</Typography>
                        <Radio
                            checked={selectedSortCriteria === 'c'}
                            onChange={handleChange}
                            value="c"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'C' }}
                        />
                    </FlexContainer>
                    <FlexContainer>
                        <Typography variant='subtitle2'>Date (Old to Recent)</Typography>
                        <Radio
                            checked={selectedSortCriteria === 'd'}
                            onChange={handleChange}
                            value="d"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'D' }}
                        />
                    </FlexContainer>
                </Box>

                <Divider sx={{ mt: 1, mb: 2 }} />

                <FlexContainer>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            mt: 1
                        }}
                    >Filter</Typography>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            fontWeight: '600',
                            mt: 1,
                            color: '#5735DE',
                            cursor: 'pointer',

                        }}
                    >
                        Clear All
                    </Typography>
                </FlexContainer>

                <Typography
                    variant='subtitle2'
                    sx={{
                        fontWeight: '600',
                        mt: 1
                    }}
                >
                    Type
                </Typography>

                <Box>
                    <FlexContainer>
                        <Typography
                            variant='subtitle2'
                            sx={{
                                mt: 2
                            }}
                        >
                            Stretch
                        </Typography>
                        <Checkbox checked={selectedFilterOption['stretch']} onChange={() => handleFilterChange('stretch')} name="stretch" />
                    </FlexContainer>

                    <FlexContainer>
                        <Typography
                            variant='subtitle2'
                            sx={{
                                mt: 1
                            }}
                        >
                            Exercise
                        </Typography>
                        <Checkbox checked={selectedFilterOption['exercise']} onChange={() => handleFilterChange("exercise")} name="exercise" />
                    </FlexContainer>
                </Box>

                <Divider sx={{ mt: 1, mb: 2 }} />

                <Typography
                    variant='subtitle2'
                    sx={{
                        fontWeight: '600',
                        mt: 1
                    }}
                >
                    Main Muscles
                </Typography>

                <Box>
                    {
                        musclesCheckbox.map((checkboxItem, index) => {
                            return (
                                <FlexContainer key={index}>
                                    <Typography
                                        variant='subtitle2'
                                        sx={{
                                            mt: 2
                                        }}
                                    >
                                        {checkboxItem.title}
                                    </Typography>
                                    <Checkbox checked={selectedFilterOption[checkboxItem.value]} onChange={() => handleFilterChange(checkboxItem.value)} name={checkboxItem.value} />
                                </FlexContainer>
                            )
                        })
                    }
                </Box>

            </Box>
        </Box>
    )
}

export default FilterDrawer

FilterDrawer.propTypes = {
    setRightOpen: PropTypes.func.isRequired,
};
