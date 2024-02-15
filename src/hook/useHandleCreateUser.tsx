'use client';

import {useForm} from 'react-hook-form';

import {zodResolver} from '@hookform/resolvers/zod';

import {z} from 'zod';
import { isObjectEmpty } from '@/util/check-is-object-empty';
import { createUserRequest } from '@/service/user/create-user';
import { useNavigation } from './useNavigation';

const createUserSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords does not match',
  });

type User = z.infer<typeof createUserSchema>;

export const useHandleCreateUser = () => {
  
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<User>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {name: '', email: '', password: '', confirmPassword: ''},
  });
  
  const {handleRouter} = useNavigation()

  const handleCreateUser = async(data: User) => {
    await createUserRequest(data);
    handleRouter('/dashboard/users')
  };

  const disabledButton = isObjectEmpty(errors);

  return {
    onSubmit: handleSubmit(handleCreateUser),
    disabled: disabledButton,
    control,
    errors,
  };
};
