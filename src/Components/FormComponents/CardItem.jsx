import { Box, Divider, Paper, Typography, styled } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    boxShadow: 'none',
    borderRadius: '8px',
    height: '140px',
}));

export const PrimaryItemCard = (props) => {
    const { title, value, date, isPayout, comparisonAnalytics } = props;
    return (
        <Item sx={{ background: '#5735DE', color: '#fff' }}>
            <Typography
                sx={{
                    fontWeight: 700
                }}
                variant='h6'
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    marginTop: '10px',
                    marginBottom: '6px'
                }}
                variant='h3'
            >
                {value}
            </Typography>
            <Divider sx={{ borderColor: '#878787' }} />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '0.5rem'
                }}
            >
                {
                    isPayout ?
                        <Typography
                            variant='subtitle1'
                        >
                            Next payout date :
                            <span style={{ fontWeight: 600, fontSize: '15px' }}> {date}</span>
                        </Typography>
                        :
                        <Typography
                            variant='subtitle1'
                            sx={{
                                fontWeight: 600,
                                fontSize: '15px'
                            }}
                        >
                            {date}
                        </Typography>
                }
                <Typography
                    variant='subtitle2'
                >
                    {comparisonAnalytics} from last month
                </Typography>
            </Box>
        </Item>
    )
}

export const SecondaryItemCard = (props) => {
    const { title, value, date } = props;
    return (
        <Item>
            <Typography
                sx={{
                    fontWeight: 700
                }}
                variant='h6'
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    marginTop: '10px',
                    marginBottom: '6px'
                }}
                variant='h3'
            >
                {value}
            </Typography>
            <Divider sx={{ borderColor: '#878787' }} />

            <Typography
                variant='subtitle1'
                sx={{
                    marginTop: '0.5rem'
                }}
            >
                Date :
                <span style={{ fontWeight: 600, fontSize: '15px', color: '#5735DE' }}> {date}</span>
            </Typography>
        </Item>
    )
}

export const TernaryCarditem = (props) => {
    const { title, value,date } = props;
    return (
        <Item>
            <Typography
                sx={{
                    fontWeight: 700
                }}
                variant='h6'
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    marginTop: '10px',
                    marginBottom: '6px'
                }}
                variant='h3'
            >
                {value}
            </Typography>
            <Divider sx={{ borderColor: '#878787' }} />
            <Typography
                variant='subtitle1'
                sx={{
                    marginTop: '0.5rem'
                }}
            >
                Date :
                <span style={{ fontWeight: 600, fontSize: '15px', color: '#5735DE' }}> {date}</span>
            </Typography>
        </Item>
    )
}

PrimaryItemCard.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    date: PropTypes.string,
    isPayout: PropTypes.bool,
    comparisonAnalytics: PropTypes.string,
}

SecondaryItemCard.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    date: PropTypes.string
}

TernaryCarditem.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    date: PropTypes.string
}