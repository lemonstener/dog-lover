import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

export const AgeMinFilter = () => {
    const { control, setValue } = useFormContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue('from', '0');
        setValue('ageMin', e.target.value);
    }

    return (
        <Controller
            control={control}
            name={'ageMin'}
            render={({ field: { name, value } }) => {
                return (
                    <PatternFormat
                        style={{ maxWidth: 100 }}
                        label={'Min age'}
                        name={name}
                        value={value}
                        onChange={(e) => handleChange(e)}
                        format={'##'}
                        customInput={TextField} />
                )
            }} />
    )
}