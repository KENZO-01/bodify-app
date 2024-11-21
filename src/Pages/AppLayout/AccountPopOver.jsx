import React from 'react';
import {MenuItem, MenuList, Popover} from '@mui/material';
import EditProfileIcon from '../../../Assets/icons/account_circle.svg'
import SettingsIcon from '../../../Assets/icons/settings.svg'
import SupportIcon from '../../../Assets/icons/support.svg'
import LogoutIcon from '../../../Assets/icons/logout.svg'
import NotificationIcon from '../../../Assets/icons/notifications.svg'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';


export const AccountPopover = (props) => {
    const { anchorEl, onClose, open } = props;
    const navigate = useNavigate()

    const handleLogoutClick = () => {
        Cookies.remove('BodifyLoginStatus');
        navigate('/login');
    };

    return (
        <Popover
            anchorEl={anchorEl}
            anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom'
            }}
            onClose={onClose}
            open={open}
            PaperProps={{ sx: { width: 200 } }}
        >
            <MenuList
                disablePadding
                dense
                sx={{
                    p: '8px',
                    '& > *': {
                        borderRadius: 1
                    }
                }}
            >
                <MenuItem>
                    <img src={EditProfileIcon} width={'25px'} height={'25px'} alt="" /> &nbsp; Edit Profile
                </MenuItem>
                <MenuItem>
                    <img src={NotificationIcon} width={'25px'} height={'25px'} alt="" /> &nbsp; Notification
                </MenuItem>
                <MenuItem>
                    <img src={SettingsIcon} width={'25px'} height={'25px'} alt="" /> &nbsp; Settings
                </MenuItem>
                <MenuItem>
                    <img src={SupportIcon} width={'25px'} height={'25px'} alt="" /> &nbsp; Help
                </MenuItem>
                <MenuItem onClick={handleLogoutClick}>
                    <img src={LogoutIcon} width={'25px'} height={'25px'} alt="" /> &nbsp; Logout
                </MenuItem>
            </MenuList>
        </Popover>
    );
};