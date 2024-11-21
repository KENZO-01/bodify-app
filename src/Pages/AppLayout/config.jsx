// import {ReactComponent as AnalyticsIcon} from '../../../Assets/icons/bar_chart.svg'

import React from "react";
import { ListItemIcon } from "@mui/material";
import AnalyticsIcon from '../../../Assets/icons/bar_chart.svg';
import PaymentIcon from '../../../Assets/icons/attach_money.svg';
import TraineeIcon from '../../../Assets/icons/ion_body-sharp.svg';
import TrainerIcon from '../../../Assets/icons/Vector.svg';
import ProgramsIcon from '../../../Assets/icons/programs.svg';
import LibraryIcon from '../../../Assets/icons/folder_copy.svg';
import ListIcon from '../../../Assets/icons/ep_list.svg';

export const NavItems = [
    {
        title: 'Analytics',
        path: 'analytics',
        icon: (
            <ListItemIcon>
                <img src={AnalyticsIcon} height={'24px'} width={'24px'} alt="" />
            </ListItemIcon>
        ),
        children: [
            {
                title: 'Overview',
                path: 'overview'
            },
            {
                title: 'Revenue',
                path: 'revenue'
            },
            {
                title: 'Transactions',
                path: 'transactions'
            },
            {
                title: 'Subscribers',
                path: 'subscribers'
            },
            {
                title: 'Trainers',
                path: 'trainers'
            },
            {
                title: 'Programs',
                path: 'programs'
            },
        ],
    },
    {
        title: 'Payment Management',
        path: 'payment-management',
        icon: (
            <ListItemIcon>
                <img src={PaymentIcon} height={'24px'} width={'24px'} alt="" />
            </ListItemIcon>
        ),
    },
    {
        title: 'Trainer Management',
        path: 'trainer-management',
        icon: (
            <ListItemIcon>
                <img src={TrainerIcon} height={'24px'} width={'24px'} alt="" />
            </ListItemIcon>
        ),
    },
    {
        title: 'Trainee Management',
        path: 'trainee-management',
        icon: (
            <ListItemIcon>
                <img src={TraineeIcon} height={'24px'} width={'24px'} alt="" />
            </ListItemIcon>
        ),
    },
    {
        title: 'Program & Package Management',
        path: 'program-and-package-management',
        icon: (
            <ListItemIcon>
                <img src={ProgramsIcon} height={'24px'} width={'24px'} alt="" />
            </ListItemIcon>
        ),
    },
    {
        title: 'Bodify Exercise Library',
        path: 'exercise-library',
        icon: (
            <ListItemIcon>
                <img src={LibraryIcon} height={'24px'} width={'24px'} alt="" />
            </ListItemIcon>
        ),
    },
    {
        title: 'List Management',
        path: 'list-management',
        icon: (
            <ListItemIcon>
                <img src={ListIcon} height={'24px'} width={'24px'} alt="" />
            </ListItemIcon>
        ),
        children: [
            {
                title: 'Location',
                path: 'location'
            },
            {
                title: 'Workout Type',
                path: 'workout-type'
            },
        ],
    }
];
