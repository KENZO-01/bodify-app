import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { NavItems } from './config.jsx'

const SideNavItem = () => {
    const [openStates, setOpenStates] = useState(NavItems.map(() => false));
    const [selectedItem, setSelectedItem] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();
    const [pathName, setPathName] = useState(null);

    useEffect(() => {
        const newPath = location.pathname.split('/').slice(1)
        setPathName(newPath)
    }, [location])

    const handleClick = (index) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !newOpenStates[index];
        setOpenStates(newOpenStates);
    };

    const handleItemClick = (item, path, subpath) => {
        setSelectedItem(item);
        subpath ? navigate(`/${path}/${subpath}`) : navigate(`/${path}`)
    };

    return (
        <List
            sx={{ width: '100%', bgcolor: 'transparent' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {NavItems.map((links, index) => (
                <React.Fragment key={index}>
                    {links.children ? (
                        <>
                            <ListItemButton
                                onClick={() => handleClick(index)}
                                selected={selectedItem === links.title}
                                style={{
                                    background: pathName?.includes(links.path) ? 'rgba(87, 53, 222, 0.40)' : 'inherit',
                                }}
                            >
                                {links.icon}
                                <ListItemText primary={links.title} />
                                {openStates[index] ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={openStates[index]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {links.children.map((link, childIndex) => (
                                        <ListItemButton
                                            key={childIndex}
                                            style={{
                                                background: pathName?.includes(link.path) ? 'rgba(87, 53, 222, 0.20)' : 'inherit',
                                                paddingLeft: '36px',
                                            }}
                                            selected={selectedItem === link.title}
                                            onClick={() => handleItemClick(link.title, links.path, link.path)}
                                        >
                                            <ListItemText sx={{ paddingLeft: '8px' }} primary={link.title} />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Collapse>
                        </>
                    ) : (
                        <>
                            <ListItemButton
                                selected={selectedItem === links.title}
                                onClick={() => handleItemClick(links.title, links.path)}
                                style={{
                                    background: pathName?.includes(links.path) ? 'rgba(87, 53, 222, 0.40)' : 'inherit',
                                }}
                            >
                                {links.icon}
                                <ListItemText primary={links.title} />
                            </ListItemButton>
                        </>
                    )}
                </React.Fragment>
            ))}
        </List>
    );
};

export default SideNavItem;

