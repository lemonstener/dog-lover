import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

export const ZipCodeFilter = () => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={'zipCode'}
            render={({ field }) => {
                return (
                    <PatternFormat label='Zip code' format="#####" customInput={TextField} {...field} />
                )
            }} />
    )
}