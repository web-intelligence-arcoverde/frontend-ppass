'use client';

import * as React from 'react';
import { useNavigation } from '@/hook/useNavigation';
import UserTable from '@/components/molecules/UsersTable.tsx/UserTable';
import { deleteUserService } from '@/service/user/delete-user-service';
import { DialogDeleteUser } from '@/components/molecules/DialogDeleteUser/DialogDeleteUser';


export default function Users() {
  const {handleRouter} = useNavigation()
  const[visibleDialogDeleteUser, setVisibleDialogDeleteUser] = React.useState(false)
  
  const handleRouterToCreateUser = () => {
    handleRouter('/dashboard/users/create');
  }
  
  const handleRouterToEditUser = (userId:number) => {
    handleRouter(`/dashboard/users/${userId}`);
  };
  
  const handleClickOpen = () => {
    setVisibleDialogDeleteUser(true)
  }
  
   const handleClickClose = () => {
     setVisibleDialogDeleteUser(false);
   };
  
  
  const handleDeleteUser = async(userId: number) => {
    handleClickOpen()
    // await deleteUserService(userId)
  };
  
  return (
    <React.Suspense fallback={<>Loading</>}>
      <UserTable
        handleRouterToCreateUser={handleRouterToCreateUser}
        handleRouterToEditUser={handleRouterToEditUser}
        handleDeleteUser={handleDeleteUser}
      />
      <DialogDeleteUser
        open={visibleDialogDeleteUser}
        handleClickClose={handleClickClose}
      />
    </React.Suspense>
  );
}
