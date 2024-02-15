'use client'

import { TextInput } from '@/components/atoms/TextInput/TextInput';
import { Box, Typography, Button, Container } from '@mui/material'

interface IFormUserLayout {
  title: string;
  buttonName: string;
  errors: any;
  onSubmit:() => void;
  control: any;
  disabledButton?:boolean;
}

export const FormUserLayout = ({
  title = '',
  buttonName,
  disabledButton,
  errors,
  onSubmit,
  control,
}: IFormUserLayout) => {
  return (
    <Container>
      <Box component='form' onSubmit={onSubmit}>
        <Typography variant='h5'>{title}</Typography>
        <TextInput
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
        />
        <TextInput
          control={control}
          error={!!errors?.confirmPassword}
          name='confirmPassword'
          label='Senha'
          type='password'
          id='confirmPassword'
        />
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