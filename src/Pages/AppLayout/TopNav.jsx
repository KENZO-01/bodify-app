
import React from 'react';
import {
  Avatar,
  Box,
  Stack,
  useMediaQuery,
  SvgIcon,
  IconButton
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ProfilePic from '../../../Assets/images/profile_pic.png'
import { AccountPopover } from './AccountPopOver';
import { usePopover } from '../../Hooks/use-popover';

const TOP_NAV_HEIGHT = 64;


const TopNav = (props) => {
  const { onNavOpen } = props;
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const accountPopover = usePopover();

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: '#000000',
          opacity: 0.8,
          position: 'sticky',
          // left: {
          //   lg: `${SIDE_NAV_WIDTH}px`
          // },
          top: 0,
          // width: {
          //   lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
          // },
          zIndex: theme.zIndex.appBar
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            {!lgUp && (
              <IconButton onClick={onNavOpen}>
                <SvgIcon fontSize="small" >
                  <MenuIcon sx={{ color: '#fff' }} />
                </SvgIcon>
              </IconButton>
            )}
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <Avatar
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              alt="Remy Sharp"
              src={ProfilePic}
              width="40px" height="40px"
              sx={{ cursor: 'pointer' }}
            />

          </Stack>
        </Stack>
      </Box>
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  )
}

export default TopNav;