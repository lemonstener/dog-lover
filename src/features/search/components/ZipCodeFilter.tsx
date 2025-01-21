import { TextField } from '@mui/material';
import { PatternFormat } from 'react-number-format';

export const ZipCodeFilter = () => {
    return (
        <PatternFormat label='Zip code' format="#####" customInput={TextField} />
    )
}