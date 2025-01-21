import { Box, Card, CardContent } from "@mui/material";
import { BreedFilter } from "./BreedFilter";
import { ZipCodeFilter } from "./ZipCodeFilter";
import { AgeMinFilter } from "./AgeMinFilter";
import { AgeMaxFilter } from "./AgeMaxFilter";
import { FilterChip } from "./FilterChip";
import { Filter } from "../enums/Filter";
import { SortButton } from "./SortButton";

export const SearchEngine = () => {

    return (
        <Card sx={{ border: '.2px solid gray', mt: 0 }}>
            <CardContent sx={{ display: 'flex', width: '100%', maxWidth: 1200, flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100%', gap: 1, justifyContent: 'center', }}>
                    <BreedFilter />
                    <ZipCodeFilter />
                    <AgeMinFilter />
                    <AgeMaxFilter />
                    <SortButton variant={'outlined'} color={'secondary'} />
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', gap: 1, flexDirection: 'column' }}>
                    <Box display={'flex'} justifyContent={'space-between'} gap={1}>
                        <BreedFilter />
                        <SortButton color={'secondary'} variant={'contained'} sx={{ fontSize: '.7rem' }} />
                    </Box>
                    <Box display={'flex'} gap={1}>
                        <ZipCodeFilter />
                        <AgeMinFilter />
                        <AgeMaxFilter />
                    </Box>
                </Box>
                {/* <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {breeds?.map((b) => (<FilterChip key={`b-${b}`} label={b} type={Filter.Breed} />))}
                </Box> */}
            </CardContent>
        </Card>
    )
}