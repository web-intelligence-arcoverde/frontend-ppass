import { Box, Typography, TextField, Button, Container } from '@mui/material'

interface IFormUserLayout{
  formAction: () => void;
  title:string;
  buttonName:string
}

export const FormUserLayout = ({formAction, title, buttonName}: IFormUserLayout) => {
  return (
    <Container>
      <Box component='form' action={formAction}>
        <Typography variant='h5'>{title}</Typography>
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
          fullWidth
          name='password'
          label='Senha'
          type='password'
          id='password'
          autoComplete='current-password'
        />
        <TextField
          margin='normal'
          fullWidth
          name='password'
          label='Repita sua senha'
          type='password'
          id='password'
          autoComplete='current-password'
        />

        <Button
          type='submit'
          fullWidth
          disableElevation
          variant='contained'
          sx={{mt: 3, mb: 2}}
        >
          {buttonName}
        </Button>
      </Box>
    </Container>
  );
};