import {
  SelectProps,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import {Controller} from 'react-hook-form';

interface ISelectItem {
  name: string;
  value: any;
}

interface ITextInput extends SelectProps {
  error: boolean;
  control?: any;
  name: string;
  items: ISelectItem[];
  label: string;
}

export const CustomSelect = ({
  name,
  placeholder,
  control,
  error,
  items = [],
  label,
  ...props
}: ITextInput) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}}) => (
        <FormControl fullWidth margin='normal'>
          <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={value}
            label={name}
            onChange={onChange}
            {...props}
          >
            {items.map((item: ISelectItem) => {
              return (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
    />
  );
};
