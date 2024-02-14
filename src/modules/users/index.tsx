'use client';

import * as React from 'react';
import { useNavigation } from '@/hook/useNavigation';
import UserTable from '@/components/molecules/UsersTable.tsx/UserTable';


export default function Users() {
  const {handleRouter} = useNavigation()
  
 
  
  const handleRouterToCreateUser = () => {
    handleRouter('/dashboard/users/create');
  }
  
  const handleRouterToEditUser = (userId:number) => {
    handleRouter(`/dashboard/users/${userId}`);
  };
  
  const handleDeleteUser = (userId: number) => {
    console.log('delete User', userId);
  };
  
  return (
    <React.Suspense fallback={<>Loading</>}>
      <UserTable
        handleRouterToCreateUser={handleRouterToCreateUser}
        handleRouterToEditUser={handleRouterToEditUser}
        handleDeleteUser={handleDeleteUser}
      />
    </React.Suspense>
  );
}
