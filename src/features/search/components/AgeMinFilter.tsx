import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

export const AgeMinFilter = () => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={'ageMin'}
            render={({ field }) => {
                return (
                    <PatternFormat label="Min age" format={'##'} customInput={TextField} {...field} />
                )
            }} />
    )
}