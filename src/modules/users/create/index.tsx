import {Box, Button, Container, TextField, Typography} from '@mui/material';

export const CreateUser = () => {
  return (
    <Container style={{width:"100vw"}}>
      <Box component='form'>
        <Typography variant='h5'>Criar usuário</Typography>
        <TextField
          type='text'
          margin='normal'
          required
          fullWidth
          id='email'
          label='Nome'
          name='name'
          autoComplete='email'
          autoFocus
        />
        <TextField
          type='email'
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

        <Button
          type='submit'
          fullWidth
          disableElevation
          variant='contained'
          sx={{mt: 3, mb: 2}}
        >
          Criar
        </Button>
      </Box>
    </Container>
  );
};
