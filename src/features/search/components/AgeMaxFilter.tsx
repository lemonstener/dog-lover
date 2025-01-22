import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

export const AgeMaxFilter = () => {
    const { control, setValue } = useFormContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue('from', '0');
        setValue('ageMax', e.target.value);
    }

    return (
        <Controller
            control={control}
            name={'ageMax'}
            render={({ field: { name, value } }) => {
                return (
                    <PatternFormat
                        label={'Max age'}
                        name={name}
                        value={value}
                        onChange={(e) => handleChange(e)}
                        format={'##'}
                        customInput={TextField} />
                )
            }} />
    )
}