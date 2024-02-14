import { BaseTextFieldProps, TextField } from '@mui/material';
import {Controller} from 'react-hook-form';

interface ITextInput extends BaseTextFieldProps {
  error: boolean;
  control?: any;
  name:string
}

export const TextInput = ({name,
  placeholder,
  control,
  error,...props}: ITextInput) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}}) => (
        <TextField
          value={value}
          onChange={onChange}
          margin='normal'
          required
          fullWidth
          autoFocus
          InputLabelProps={{shrink: true}}
          error={error}
          {...props}
        />
      )}
    />
  );
};



 