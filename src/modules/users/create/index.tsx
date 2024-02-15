'use client';

import { FormUserLayout } from '@/components/layout/FormUserLayout/FormUserLayout';
import { useHandleCreateUser } from '@/hook/useHandleCreateUser';

export const CreateUser = () => {
  const { onSubmit , disabled, errors, control} = useHandleCreateUser()

  return (
    <FormUserLayout
      title={'Criar usuário'}
      buttonName={'Criar'}
      errors={errors}
      onSubmit={onSubmit}
      disabledButton={disabled}
      control={control}
    />
  );
};
