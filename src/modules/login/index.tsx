'use client';

import { Copyright } from '@/components/molecules/Copyright/Copyright';

import {
  Container,
  Box,
  Typography,
  Button,
} from '@mui/material';

import { signIn } from './view';
import { TextInput } from '@/components/atoms/TextInput/TextInput';


export const Login = () => {
  const {onSubmit, control, errors} = signIn();
  
  
  

  return (
    <Container
      component='main'
      maxWidth='xs'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography component='h1' variant='h3'>
        Entrar
      </Typography>
      <Box component='form' onSubmit={onSubmit}>
        <TextInput
          control={control}
          margin='normal'
          id='email'
          label='Email'
          name='email'
          autoComplete='email'
          error={!!errors.email}
          type='email'
        />
        <TextInput
          control={control}
          name='password'
          label='Senha'
          type='password'
          id='password'
          autoComplete='current-password'
          error={!!errors.password}
        />
        <Button
          type='submit'
          fullWidth
          disableElevation
          variant='contained'
          size='large'
          sx={{mt: 3, mb: 2}}
        >
          Entrar
        </Button>
      </Box>
      <Copyright />
    </Container>
  );
};
