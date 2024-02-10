'use client';

import { Copyright } from '@/components/molecules/Copyright/Copyright';
import {useHandleSignInRequest} from '@/hook/useHandleSignInRequest';
import {
  Container,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';


export const Login = () => {
  const {formAction} = useHandleSignInRequest();

  return (
    <Container
      component='main'
      maxWidth='xs'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      
        <Typography component='h1' variant='h4'>
          Entrar
        </Typography>
        <Box component='form' action={formAction} noValidate>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Senha'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Lembre-me'
          />
          <Button
            type='submit'
            fullWidth
            disableElevation
            variant='contained'
            sx={{mt: 3, mb: 2}}
          >
            Entrar
          </Button>
        </Box>
      <Copyright />
    </Container>
  );
};
