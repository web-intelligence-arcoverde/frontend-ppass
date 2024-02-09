import dynamic from 'next/dynamic';

const MaterialTableDynamic = dynamic(() => import('material-table'), {
  ssr: false,
});

export const MaterialTable = (props: any) => {
  return <MaterialTableDynamic {...props} />;
};