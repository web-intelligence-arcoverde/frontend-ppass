'use client';

import { Box, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { StyledAppBar } from '@/components/atoms/StyledAppBar/StyledAppBar';
import { DashboardTypography } from '@/components/atoms/DashboardTypography/DashboardTypography';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
const settings = ['Account', 'Logout'];

interface ILayoutHeaderAppBar {
  handleDrawerOpen: () => void;
  open: boolean;
}

export const LayoutHeaderAppBar = ({
  handleDrawerOpen,
  open,
}: ILayoutHeaderAppBar) => {
  
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(
    null,
  );
  
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  return (
    <StyledAppBar position='fixed' open={open}>
      <Toolbar style={{justifyContent:"space-between"}}>
          <Box>
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
          <Box>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <Avatar alt='avatar' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{mt: '45px'}}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      </Toolbar>
    </StyledAppBar>
  );
};
