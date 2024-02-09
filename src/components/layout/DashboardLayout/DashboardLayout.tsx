import { LayoutDrawerMenuLeft } from '@/components/molecules/LayoutDrawerMenuLeft/LayoutDrawerMenuLeft';
import { LayoutHeaderAppBar } from '@/components/molecules/LayoutHeaderAppBar/LayoutHeaderAppBar';
import { LayoutMain } from '@/components/molecules/LayoutMain/LayoutMain';
import { IPropsChildren } from '@/types/props-children';
import { Box, CssBaseline } from '@mui/material';
import { useState } from 'react';


interface ILayoutPage extends IPropsChildren {
}

export const DashboardLayoutComponent = ({children}: ILayoutPage) => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <LayoutHeaderAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <LayoutDrawerMenuLeft open={open} handleDrawerClose={handleDrawerClose} />
      <LayoutMain open={open}>{children}</LayoutMain>
    </Box>
  );
};