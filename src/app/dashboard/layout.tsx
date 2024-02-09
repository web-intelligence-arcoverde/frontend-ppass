'use client';

import {DashboardLayoutComponent} from '@/components/layout/DashboardLayout/DashboardLayout';
import { IPropsChildren } from '@/types/props-children';

interface IDashboardLayout extends IPropsChildren {
}

const DashboardLayout = ({children}: IDashboardLayout) => {
  return <DashboardLayoutComponent>{children}</DashboardLayoutComponent>;
}

export default DashboardLayout;