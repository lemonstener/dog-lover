import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

export const ZipCodeFilter = () => {
    const { control, setValue } = useFormContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue('from', '0');
        setValue('zipCodes', e.target.value);
    }

    return (
        <Controller
            control={control}
            name={'zipCodes'}
            render={({ field: { name, value } }) => {
                return (
                    <PatternFormat
                        name={name}
                        value={value}
                        onChange={(e) => handleChange(e)}
                        label="Zip"
                        format={'#####'}
                        customInput={TextField} />
                )
            }} />
    )
}