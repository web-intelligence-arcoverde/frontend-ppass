import { DASHBOARD_APP_BAR_NAME } from '@/common/dashboard-app-bar-name';
import { Typography } from '@mui/material';
import { usePathname } from 'next/navigation';

interface DashboardTypography {}

export const DashboardTypography = ({}: DashboardTypography) => {
  
  const pathname = usePathname().split('/');
  const lastPathname = pathname[pathname.length - 1];

  //@ts-ignore
  const pageTitle = DASHBOARD_APP_BAR_NAME[lastPathname];
  
  return (
    <Typography variant='h6' noWrap component='div'>
      {pageTitle}
    </Typography>
  );
};