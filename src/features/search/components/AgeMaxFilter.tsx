import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

export const AgeMaxFilter = () => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={'ageMax'}
            render={({ field }) => {
                return (
                    <PatternFormat label="Max age" format={'##'} customInput={TextField} {...field} />
                )
            }} />
    )
}