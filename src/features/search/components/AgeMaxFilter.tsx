import { TextField } from '@mui/material';
import { PatternFormat } from 'react-number-format';

export const AgeMaxFilter = () => {
    return <PatternFormat label="Max age" format={'##'} customInput={TextField} />
}