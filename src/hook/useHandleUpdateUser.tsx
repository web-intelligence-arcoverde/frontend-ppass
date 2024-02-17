'use client';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';

import {isObjectEmpty} from '@/util/check-is-object-empty';
import { updateUserService } from '@/service/user/update-user-service';
import { useNavigation } from './useNavigation';

import { useToastfy } from './useToastfy';

const createUserSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    status: z.boolean(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords does not match',
  });

type User = z.infer<typeof createUserSchema>;

export const useHandleUpdateUser = (user: any) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<User>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      password: '',
      confirmPassword: '',
      status:user.status
    },
  });
  
  const {handleRouter} = useNavigation()
  const {successEmitterToast} = useToastfy()

  const handleUpdateUser = async(data: User) => {
    await updateUserService({...data,id:user.id})
    handleRouter('/dashboard/users')
    successEmitterToast('Usuário atualizado com sucesso')
  };

  const disabledButton = isObjectEmpty(errors);

  return {
    onSubmit: handleSubmit(handleUpdateUser),
    disabled: disabledButton,
    control,
    errors,
  };
};
