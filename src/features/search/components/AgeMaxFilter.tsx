import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

export const AgeMaxFilter = () => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={'ageMax'}
            render={({ field: { onChange, name, value } }) => {
                return (
                    <PatternFormat
                        label={'Max age'}
                        name={name}
                        value={value}
                        onChange={onChange}
                        format={'##'}
                        customInput={TextField} />
                )
            }} />
    )
}