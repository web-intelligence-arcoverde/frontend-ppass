import { Box } from '@mui/material';
import { useState } from 'react';
import { MenuListAppBar } from '../MenuListAppBar/MenuListAppBar';
import { AvatarIconAppBar } from '../AvatarIconAppBar/AvatarIconAppBar';

export const AvatarAppBar = () => {
   const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
     setAnchorElUser(event.currentTarget);
   };

   const handleCloseUserMenu = () => {
     setAnchorElUser(null);
   };
  
  return (
    <Box>
      <AvatarIconAppBar handleOpenUserMenu={handleOpenUserMenu} />
      <MenuListAppBar
        handleCloseUserMenu={handleCloseUserMenu}
        anchorElUser={anchorElUser}
      />
    </Box>
  );
}