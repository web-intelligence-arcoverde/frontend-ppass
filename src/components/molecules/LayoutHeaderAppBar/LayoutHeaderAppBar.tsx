'use client';

import { Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { StyledAppBar } from '@/components/atoms/StyledAppBar/StyledAppBar';
import { DashboardTypography } from '@/components/atoms/DashboardTypography/DashboardTypography';
import { AvatarAppBar } from '../AvatarAppBar/AvatarAppBar';

interface ILayoutHeaderAppBar {
  handleDrawerOpen: () => void;
  open: boolean;
}

export const LayoutHeaderAppBar = ({
  handleDrawerOpen,
  open,
}: ILayoutHeaderAppBar) => {
  return (
    <StyledAppBar position='fixed' open={open}>
      <Toolbar style={{justifyContent:"space-between"}}>
          <Box style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{mr: 2, ...(open && {display: 'none'})}}
            >
              <MenuIcon />
            </IconButton>
            <DashboardTypography />
          </Box>
          <AvatarAppBar />
      </Toolbar>
    </StyledAppBar>
  );
};
