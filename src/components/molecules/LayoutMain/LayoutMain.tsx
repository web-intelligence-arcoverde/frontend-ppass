'use client';

import {ReactNode} from 'react';

import {StyledDrawerHeader} from '@/components/atoms/StyledDrawerHeader/StyledDrawerHeader';
import {Main} from '@/components/atoms/StyledMain/StyledMain';
import { DASHBOARD_DRAWER_MENU_WIDTH } from '@/common/dashboard-drawer-menu-width';

interface ILayoutMain {
  open: boolean;
  children: ReactNode;
}

export const LayoutMain = ({open, children}: ILayoutMain) => {
  return (
    <Main open={open} drawerWidth={DASHBOARD_DRAWER_MENU_WIDTH}>
      <StyledDrawerHeader />
      {children}
    </Main>
  );
};
