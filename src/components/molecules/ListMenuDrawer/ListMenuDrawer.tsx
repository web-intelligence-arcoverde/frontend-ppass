'use client';

import {DASHBOARD_DRAWER_MENU_LIST} from '@/common/dashboard-drawer-menu-list';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import { useNavigation } from '@/hook/useNavigation';

export const ListMenuDrawer = () => {
  const {handleRouter} = useNavigation();
  return (
    <List>
      {DASHBOARD_DRAWER_MENU_LIST.map((menuItem) => (
        <ListItem key={menuItem.name} disablePadding>
          <ListItemButton onClick={() => handleRouter('/dashboard' + menuItem.path)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={menuItem.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
