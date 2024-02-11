'use client';

import * as React from 'react';
import { MaterialTable } from '@/components/molecules/MaterialTableDynamic/MaterialTableDynamic';
import { useNavigation } from '@/hook/useNavigation';


export default function Users() {
  const {handleRouter} = useNavigation()
  
  const handleRouterToCreateUser = () => {
    handleRouter('/dashboard/users/create');
  }
  
  const handleRouterToEditUser = (userId:string) => {
    handleRouter(`/dashboard/users/${userId}`);
  };
  
  const handleDeleteUser = (userId: string) => {
    console.log('delete User', userId);
  };
  
  return (
    <MaterialTable
      title='Usuários'
      columns={[
        {title: 'Nome', field: 'name'},
        {title: 'Email', field: 'email'},
        {title: 'Status', field: 'status'},
      ]}
      data={[
        {id: 1, name: 'Lucas', email: 'lucas1@gmail.com', status: 'Ativo'},
        {id: 6, name: 'Paes', email: 'lucas2@gmail.com', status: 'Ativo'},
        {id: 5, name: 'Hele', email: 'lucas3@gmail.com', status: 'Ativo'},
        {id: 4, name: 'Mono', email: 'lucas4@gmail.com', status: 'Ativo'},
        {id: 2, name: 'Teemo', email: 'lucas5@gmail.com', status: 'Ativo'},
      ]}
      actions={[
        {
          icon: 'add',
          tooltip: 'Add User',
          isFreeAction: true,
          onClick: () => handleRouterToCreateUser(),
        },
        {
          icon: 'edit',
          tooltip: 'Editar',
          //@ts-ignore
          onClick: (_, rowData: any) => handleRouterToEditUser(rowData.id),
        },
        {
          icon: 'delete',
          tooltip: 'Deletar',
          //@ts-ignore
          onClick: (_, rowData: any) => handleDeleteUser(rowData.id),
        },
      ]}
      options={{
        actionsColumnIndex: -1,
      }}
    />
  );
}
