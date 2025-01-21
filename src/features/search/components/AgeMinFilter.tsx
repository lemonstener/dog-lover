import { TextField, TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

export const AgeMinFilter = (props: TextFieldProps) => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={'ageMin'}
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