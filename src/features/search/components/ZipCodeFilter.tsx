import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

export const ZipCodeFilter = () => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={'zipCodes'}
            render={({ field: { onChange, name, value } }) => {
                return (
                    <PatternFormat
                        name={name}
                        value={value}
                        onChange={onChange}
                        label="Zip"
                        format={'#####'}
                        customInput={TextField} />
                )
            }} />
    )
}