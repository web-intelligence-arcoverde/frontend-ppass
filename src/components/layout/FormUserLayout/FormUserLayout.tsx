'use client';

import { DEFAULT_STATUS_USER } from '@/common/default-status-user';
import {CustomSelect} from '@/components/atoms/Select/Select';
import {TextInput} from '@/components/atoms/TextInput/TextInput';
import {Box, Typography, Button, Container} from '@mui/material';
import {usePathname} from 'next/navigation';

interface IFormUserLayout {
  title: string;
  buttonName: string;
  errors: any;
  onSubmit: () => void;
  control: any;
  disabledButton?: boolean;
}

export const FormUserLayout = ({
  title = '',
  buttonName,
  disabledButton,
  errors,
  onSubmit,
  control,
}: IFormUserLayout) => {
  const pathname = usePathname().split('/');
  const lastPathname = pathname[pathname.length - 1];

  const isCreateUserPage = lastPathname === 'create';

  return (
    <Container>
      <Box component='form' onSubmit={onSubmit}>
        <Typography variant='h5'>{title}</Typography>
        <TextInput
          sx={{mt: 6}}
          control={control}
          type='text'
          id='name'
          label='Nome'
          name='name'
          required
          error={!!errors?.name}
        />
        <TextInput
          control={control}
          error={!!errors?.email}
          type='email'
          id='email'
          label='Email'
          name='email'
          required
        />
        <TextInput
          control={control}
          error={!!errors?.password}
          name='password'
          label='Senha'
          type='password'
          id='password'
          required={isCreateUserPage}
        />
        <TextInput
          control={control}
          error={!!errors?.confirmPassword}
          name='confirmPassword'
          label='Confirmação de senha'
          type='password'
          id='confirmPassword'
          required={isCreateUserPage}
        />
        {!isCreateUserPage ? (
          <CustomSelect
            control={control}
            name='status'
            label='Status'
            items={DEFAULT_STATUS_USER}
            error={!!errors?.status}
          />
        ) : null}
        <Button
          type='submit'
          fullWidth
          disableElevation
          variant='contained'
          sx={{mt: 3, mb: 2}}
          disabled={!disabledButton}
          size='large'
        >
          {buttonName}
        </Button>
      </Box>
    </Container>
  );
};
