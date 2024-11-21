import React from "react";
import { Avatar, Box, Divider, Drawer, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import DashboardLogo from '../../../Assets/icons/dashboard_icon_logo.svg'
import SideNavItem from "./SideNavItem";
import ProfilePic from '../../../Assets/images/profile_pic.png';
import PropTypes from 'prop-types';

const SideNav = (props) => {
  const { open, onClose } = props;
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        scrollbarColor: 'dark',
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#f1f1f1',
        },
      }}
    >
      <Box sx={{ p: 3, pb: 0 }}>
        <Box
          href="/"
          sx={{
            display: 'inline-flex',
            height: 32,
            width: 32,
          }}
        >
          <img src={DashboardLogo} width={'80px'} height={'auto'} alt="" />
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mt: 2,
            p: '12px',
            gap: '1rem',
          }}
        >

          <Avatar
            alt="Remy Sharp"
            src={ProfilePic}
            sx={{ width: 128, height: 128 }}
          />

          <Typography
            color="inherit"
            variant="subtitle1"
          >
            Admin
          </Typography>

        </Box>
      </Box>
      <Divider sx={{ borderColor: 'neutral.700' }} />
      <Box
        component="nav"
        sx={{
          flexGrow: 1,
          py: 3
        }}
      >
        <Stack
          component="ul"
          sx={{
            listStyle: 'none',
            p: 0,
            m: 0
          }}
        >
          <SideNavItem />
        </Stack>
      </Box>
      <Divider sx={{ borderColor: 'neutral.700' }} />
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: '#151515',
            color: 'common.white',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: '#151515',
          color: 'common.white',
          width: 280
        }
      }}
      sx={{ zIndex: 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
}

export default SideNav

SideNav.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
};