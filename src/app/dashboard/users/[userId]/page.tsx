"use server"

import { signOut } from '@/actions/sign-out';
import { FormUserLayout } from '@/components/layout/FormUserLayout/FormUserLayout';

interface UserParams{
  userId: string
}

interface IEditUser{
  params: UserParams
}

async function getUserRequest(params:string) {
  console.log(params)
  return {}
}

async function EditUser({params}: Readonly<IEditUser>){
  const user = await getUserRequest(params.userId);
  console.log(user);
  
  const handleSubmit = () => {}
  
  return (
    <FormUserLayout
      title='Editar usuário'
      buttonName='Atualizar'
      formAction={signOut}
    />
  );
}

export default EditUser