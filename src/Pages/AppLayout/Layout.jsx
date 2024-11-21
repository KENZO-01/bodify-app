
import React from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    maxWidth: '100vw',
    [theme.breakpoints.up('lg')]: {
        paddingLeft: SIDE_NAV_WIDTH
    }
}));

const LayoutContainer = styled('div')({
    display: 'flex',
    // flex: '1 1 auto',
    flexDirection: 'column',
    width: '100vw'
});

const Layout = (props) => {
    const { children } = props;
    const pathname = useLocation();
    const [openNav, setOpenNav] = useState(false);
    const navigate = useNavigate()

    const handlePathnameChange = useCallback(() => {
        if (openNav) {
            setOpenNav(false);
        }
    }, [openNav]);

    useEffect(() => {
        handlePathnameChange();
    }, [pathname]);

    useEffect(() => {
        if (!Cookies.get('BodifyLoginStatus') || Cookies.get('BodifyLoginStatus') !== 'success') {
            navigate('/login');
        }
    }, [])

    return (
        <>
            <TopNav onNavOpen={() => setOpenNav(true)} />
            <SideNav
                onClose={() => setOpenNav(false)}
                open={openNav}
            />
            <LayoutRoot>
                <LayoutContainer>
                    {children}
                </LayoutContainer>
            </LayoutRoot>
        </>
    )
}

export default Layout