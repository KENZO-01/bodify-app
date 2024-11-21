import React from 'react';
import { Box, Button, Drawer, Grid, Paper,  Typography, styled } from "@mui/material";
import dropdownItems from "../../StaticData/dropdownValues.json";
import SelectMenu from "../../Components/SelectMenu";
import FilterIcon from "../../../Assets/icons/filter_icon.svg";
import { useState } from "react";
import FilterDrawer from "../../Components/FilterDrawer";
import { useEffect } from 'react';
import ChartContent from '../../Components/ChartContent';
import {response} from './config';
import Cookies from 'js-cookie';



const Item = styled(Paper)(({ theme, selected }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  boxShadow: 'none',
  borderRadius: '8px',
  border: selected ? '2px solid #5735DE' : 'none',
  cursor: 'pointer',
}));


const index = () => {

  const [rightOpen, setRightOpen] = useState(false);

  const setCookie = () => {
    // Set cookie with expiration date 1 day from now
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);

    Cookies.set('yourCookieName', 'yourCookieValue', { expires: expirationDate });
  };

  useEffect(() => {
    setCookie();
  }, []);

  // needs to changed after api integration just for design purpose only
  const [selectedCardCriteria, setSelectedCardCriteria] = useState(1);
  const [selectedCardValues, setSelectedCardValues] = useState({
    title: 'Total Subscribers',
    value: 35000,
  })
  const [data, setData] = useState(response.data);

  const toggleRightDrawer = () => {
    setRightOpen(!rightOpen);
  };

  useEffect(() => {
    document.title = 'Overview | Bodify';
  }, []);

  const handleCardClick = (title, value, card) => {
    setSelectedCardCriteria(card);
    setSelectedCardValues({
      title: title,
      value: value
    })
    setData(response.data)
  }



  return (
    <Box
      component='main'
      sx={{
        width: '92%',
        margin: 'auto',
        flexGrow: 1,
        py: 4,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700, color: '#2C2C2E' }}>Overview</Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ flexGrow: 1, mt: 4 }}>
          <SelectMenu items={dropdownItems} />
        </Box>
        <Button onClick={toggleRightDrawer}>
          <img src={FilterIcon} alt="" width={'40px'} height={'40px'} />
        </Button>

        <Drawer
          anchor="right"
          open={rightOpen}
          onClose={() => setRightOpen(false)}
        >
          <FilterDrawer setRightOpen={setRightOpen} />
        </Drawer>
      </Box>

      <Box sx={{ flexGrow: 1, mt: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item
              onClick={()=> handleCardClick("Total Subscribers", 35000, 1)}
              selected={selectedCardCriteria === 1}
            >
              <Box>
                <Typography variant="heading1" sx={{ fontWeight: 600 }}>Total Subscribers</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>3.5k</Typography>
                <Typography variant="heading2">
                  <span style={{ color: '#5735DE' }}>5% </span>
                  increase of active users
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item
              onClick={() => handleCardClick("New Subscribers", 23, 2)}
              selected={selectedCardCriteria === 2}
            >
              <Box>
                <Typography variant="heading1" sx={{ fontWeight: 600 }}>New Subscribers</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>+23</Typography>
                <Typography variant="heading2">
                  <span style={{ color: '#5735DE' }}>5% </span>
                  from last month
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item
              onClick={() => handleCardClick("User Engagement", 50, 3)}
              selected={selectedCardCriteria === 3}
            >
              <Box>
                <Typography variant="heading1" sx={{ fontWeight: 600 }}>User Engagement</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>50%</Typography>
                <Typography variant="heading2">
                  <span style={{ color: '#5735DE' }}>5% </span>
                  from last month
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item
              onClick={() => handleCardClick("Total Earning", 14000, 4)}
              selected={selectedCardCriteria === 4}
            >
              <Box>
                <Typography variant="heading1" sx={{ fontWeight: 600 }}>Total Earning</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>$ 14,000</Typography>
                <Typography variant="heading2">
                  See analytics
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item
              onClick={() => handleCardClick("Total Programs", 20, 5)}
              selected={selectedCardCriteria === 5}
            >
              <Box>
                <Typography variant="heading1" sx={{ fontWeight: 600 }}>Total Programs</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>20</Typography>
                <Typography variant="heading2">
                  <span style={{ color: '#5735DE' }}>5% </span>
                  from last month
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item
              onClick={() => handleCardClick("Retention Rate", 15, 6)}
              selected={selectedCardCriteria === 6}
            >
              <Box>
                <Typography variant="heading1" sx={{ fontWeight: 600 }}>Retention Rate</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>15</Typography>
                <Typography variant="heading2">
                  <span style={{ color: '#5735DE' }}>5% </span>
                  from last month
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item
              onClick={() => handleCardClick("Refferals", 23, 7)}
              selected={selectedCardCriteria === 7}
            >
              <Box>
                <Typography variant="heading1" sx={{ fontWeight: 600 }}>Refferals</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>+23</Typography>
                <Typography variant="heading2">
                  <span style={{ color: '#5735DE' }}>5% </span>
                  from last month
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item
              onClick={() => handleCardClick("Conversion Rate", 40, 8)}
              selected={selectedCardCriteria === 8}
            >
              <Box>
                <Typography variant="heading1" sx={{ fontWeight: 600 }}>Conversion Rate</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>+40</Typography>
                <Typography variant="heading2">
                  <span style={{ color: '#5735DE' }}>5% </span>
                  from last month
                </Typography>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <ChartContent
        data={data}
        title={selectedCardValues.title}
        value={selectedCardValues.value}
        chartSize={'large'}
      />



    </Box>
  )
}

export default index
