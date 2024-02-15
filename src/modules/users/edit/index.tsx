'use client';

import {FormUserLayout} from '@/components/layout/FormUserLayout/FormUserLayout';
import {useHandleUpdateUser} from '@/hook/useHandleUpdateUser';

export default function EditUser({user}:any) {
  const {onSubmit, disabled, errors, control} = useHandleUpdateUser(user);

  return (
    <FormUserLayout
      title={'Atualizar usuário'}
      buttonName={'Atualizar'}
      errors={errors}
      onSubmit={onSubmit}
      disabledButton={disabled}
      control={control}
    />
  );
}
