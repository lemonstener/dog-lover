import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

export const AgeMinFilter = () => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={'ageMin'}
            render={({ field: { onChange, name, value } }) => {
                return (
                    <PatternFormat
                        style={{ maxWidth: 100 }}
                        label={'Min age'}
                        name={name}
                        value={value}
                        onChange={onChange}
                        format={'##'}
                        customInput={TextField} />
                )
            }} />
    )
}