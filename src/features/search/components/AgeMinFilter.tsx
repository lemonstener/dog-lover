import { TextField } from '@mui/material';
import { PatternFormat } from 'react-number-format';

export const AgeMinFilter = () => {
    return <PatternFormat label="Min age" format={'##'} customInput={TextField} />
}