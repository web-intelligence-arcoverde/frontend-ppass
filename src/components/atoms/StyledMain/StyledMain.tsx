'use client';

import { DASHBOARD_DRAWER_MENU_WIDTH } from '@/common/dashboard-drawer-menu-width';
import {styled} from '@mui/material/styles';



export const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open?: boolean;
}>(({theme, open}) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DASHBOARD_DRAWER_MENU_WIDTH}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));
