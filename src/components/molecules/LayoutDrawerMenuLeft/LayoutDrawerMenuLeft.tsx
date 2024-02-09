'use client';

import {StyledDrawerHeader} from '@/components/atoms/StyledDrawerHeader/StyledDrawerHeader';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import theme from '@/app/theme/theme';
import { DASHBOARD_DRAWER_MENU_WIDTH } from '@/common/dashboard-drawer-menu-width';

import { ListMenuDrawer } from '../ListMenuDrawer/ListMenuDrawer';
import { Drawer, IconButton, Divider } from '@mui/material';

interface ILayoutDrawerMenuLeft {  
  handleDrawerClose: () => void
  open: boolean
}

export const LayoutDrawerMenuLeft = ({
  handleDrawerClose,
  open,
}: ILayoutDrawerMenuLeft) => {
  return (
    <Drawer
      sx={{
        width: DASHBOARD_DRAWER_MENU_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DASHBOARD_DRAWER_MENU_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      variant='persistent'
      anchor='left'
      open={open}
    >
      <StyledDrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </StyledDrawerHeader>
      <Divider />
     <ListMenuDrawer />
    </Drawer>
  );
};
