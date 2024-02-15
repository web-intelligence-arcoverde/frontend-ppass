
import EditUserComponent from "@/modules/users/edit/index"
import { getUserByIdRequest } from '@/service/user/get-user-by-id';
import { Suspense } from 'react';

interface UserParams {
  userId: string;
}

interface IEditUser {
  params: UserParams;
}


export default async function EditUser({params}: Readonly<IEditUser>) {
  
  const { userId } = params
  
  const data = await getUserByIdRequest(userId);
  
  console.log(data);
  
  return (
    <Suspense fallback={<>Loading...</>}>
      <EditUserComponent user={data} />
    </Suspense>
  );
}
