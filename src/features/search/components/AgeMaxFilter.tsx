import { TextField, TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

export const AgeMaxFilter = (props: TextFieldProps) => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={'ageMax'}
            render={({ field: { onChange, name, value } }) => {
                return (
                    <PatternFormat
                        name={name}
                        value={value}
                        onChange={onChange}
                        format={'##'}
                        customInput={() => <TextField {...props} />} />
                )
            }} />
    )
}