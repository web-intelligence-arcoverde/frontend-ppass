import { DASHBOARD_APP_BAR_AVATAR_MENU } from '@/common/dashboard-app-bar-avatar-menu';
import { Menu, MenuItem, Typography } from '@mui/material';

interface IMenuListAppBar {
  anchorElUser: null | HTMLElement;
  handleCloseUserMenu: () => void;
}

export const MenuListAppBar = ({
  anchorElUser,
  handleCloseUserMenu,
}: IMenuListAppBar) => {
  return (
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
      {DASHBOARD_APP_BAR_AVATAR_MENU.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography textAlign='center'>{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};