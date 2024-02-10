'use client';

import {ReactNode} from 'react';

import {StyledDrawerHeader} from '@/components/atoms/StyledDrawerHeader/StyledDrawerHeader';
import {Main} from '@/components/atoms/StyledMain/StyledMain';

interface ILayoutMain {
  open: boolean;
  children: ReactNode;
}

export const LayoutMain = ({open, children}: ILayoutMain) => {
  return (
    <Main open={open}>
      <StyledDrawerHeader />
      {children}
    </Main>
  );
};
