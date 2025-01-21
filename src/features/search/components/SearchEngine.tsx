import { Box, Card, CardContent } from "@mui/material";
import { BreedFilter } from "./BreedFilter";
import { ZipCodeFilter } from "./ZipCodeFilter";
import { AgeMinFilter } from "./AgeMinFilter";
import { AgeMaxFilter } from "./AgeMaxFilter";
import { FilterChip } from "./FilterChip";
import { Filter } from "../enums/Filter";
import { SortButton } from "./SortButton";
import { useFormContext } from "react-hook-form";
import { SizeButton } from "./SizeButton";

export const SearchEngine = () => {
    const { getValues } = useFormContext();
    const { breeds, zipCodes, ageMin, ageMax } = getValues();

    return (
        <Card sx={{ border: '.2px solid gray', mt: 0 }}>
            <CardContent sx={{ display: 'flex', width: '100%', maxWidth: 1200, flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100%', gap: 1, justifyContent: 'center', }}>
                    <BreedFilter />
                    <ZipCodeFilter />
                    <AgeMinFilter />
                    <AgeMaxFilter />
                    <SortButton variant={'outlined'} color={'secondary'} />
                    <SizeButton />
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', gap: 1, flexDirection: 'column' }}>
                    <Box display={'flex'} justifyContent={'space-between'} gap={1}>
                        <BreedFilter />
                        <SortButton color={'secondary'} variant={'contained'} sx={{ fontSize: '.7rem' }} />
                        <SizeButton color={'secondary'} variant={'contained'} sx={{ fontSize: '.7rem' }} />
                    </Box>
                    <Box display={'flex'} gap={1}>
                        <ZipCodeFilter />
                        <AgeMinFilter />
                        <AgeMaxFilter />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {breeds?.map((b: string) => (<FilterChip key={`b-${b}`} label={b} type={Filter.Breed} />))}
                    {zipCodes && <FilterChip label={zipCodes} type={Filter.ZipCode} />}
                    {ageMax && <FilterChip label={`Max ${ageMax} years old`} type={Filter.AgeMax} />}
                    {ageMin && <FilterChip label={`Min ${ageMin} years old`} type={Filter.AgeMin} />}
                </Box>
            </CardContent>
        </Card>
    )
}