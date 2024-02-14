import { useHandleSignInRequest } from '@/hook/useHandleSignInRequest';
import { useNavigation } from '@/hook/useNavigation';
import { ISignIn } from '@/types/sign-in';
import { useForm } from 'react-hook-form';

import {z} from 'zod';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type User = z.infer<typeof signInSchema>;

export const signIn = () => {
  
   const {
     handleSubmit,
     control,
     formState: {errors},
   } = useForm<User>();
  
   const {signInRequest} = useHandleSignInRequest();
   const {handleRouter} = useNavigation();

   const handleFormSubmit = (data: ISignIn) => {
    signInRequest(data);
    handleRouter('/dashboard');
   };
   
   return {onSubmit: handleSubmit(handleFormSubmit), errors, control};
}