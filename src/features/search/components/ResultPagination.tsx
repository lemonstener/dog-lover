import { ChangeEvent } from 'react';
import { Box, Pagination, PaginationProps } from '@mui/material';
import { useFormContext } from 'react-hook-form';

export const ResultPagination = (props: PaginationProps) => {
    const { getValues, setValue } = useFormContext();

    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        console.log(event);
        const size = +getValues('size');
        setValue('from', ((size * value) - size).toString());
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination {...props} onChange={handleChange} />
        </Box>
    );
}