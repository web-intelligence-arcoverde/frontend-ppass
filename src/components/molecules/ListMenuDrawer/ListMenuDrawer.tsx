'use client';

import {DASHBOARD_DRAWER_MENU_LIST} from '@/common/dashboard-drawer-menu-list';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { useNavigation } from '@/hook/useNavigation';

export const ListMenuDrawer = () => {
  const {handleRouter} = useNavigation();
  return (
    <List>
      {DASHBOARD_DRAWER_MENU_LIST.map(({name,path,Icon}) => (
        <ListItem key={name} disablePadding>
          <ListItemButton onClick={() => handleRouter('/dashboard' + path)}>
            <ListItemIcon>
               <Icon />
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
