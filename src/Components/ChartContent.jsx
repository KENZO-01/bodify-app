import { Box, MenuItem, Paper, Select, Typography, styled } from '@mui/material'
import React from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    boxShadow: 'none',
    borderRadius: '8px',
}));

const ChartSelection = styled(Select)(() => ({
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none !important',
    },
    fontSize: '14px',
}))

const ChartContent = (props) => {

    const [chartDuration, setChartDuration] = useState('last_year');

    const handleChange = (event) => {
        setChartDuration(event.target.value);
    };

  return (
      <Box sx={{ mt: 4 }}>
          <Item>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#5A5A5A" }}>{props.title}</Typography>
                  <ChartSelection
                      size='small'
                      value={chartDuration}
                      onChange={handleChange}
                  >
                      <MenuItem value={'last_week'}>last week</MenuItem>
                      <MenuItem value={'last_month'}>last month</MenuItem>
                      <MenuItem value={'last_year'}>last year</MenuItem>
                  </ChartSelection>
              </Box>

              <Box>
                  <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 3, color: '#5735DE' }}>{props.value}</Typography>
              </Box>

              <ResponsiveContainer width="100%" height={props.chartSize === 'large' ? 300 : 200}>
                  <AreaChart data={props.data} >
                      <defs>
                          <linearGradient id='areaFill' x1='0' y1='0' x2='0' y2='1'>
                              <stop offset='0%' stopColor='#5735DE' />
                              <stop offset='97.98%' stopColor='rgba(217, 217, 217, 0)' />
                          </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="programs" stroke="#8884d8" fillOpacity={1} fill="url(#areaFill)" />
                  </AreaChart>
              </ResponsiveContainer>

          </Item>
      </Box>
  )
}

export default ChartContent

ChartContent.propTypes = {
    data: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    chartSize: PropTypes.string.isRequired,
};