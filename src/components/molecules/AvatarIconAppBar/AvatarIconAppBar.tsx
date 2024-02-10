import Avatar from '@mui/material/Avatar';
import {Tooltip, IconButton} from '@mui/material';

interface AvatarIconAppBar {
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
}

export const AvatarIconAppBar = ({handleOpenUserMenu}: AvatarIconAppBar) => {
  return (
    <Tooltip title='Open settings'>
      <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
        <Avatar alt='avatar' />
      </IconButton>
    </Tooltip>
  );
};
