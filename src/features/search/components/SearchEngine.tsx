import { Box } from "@mui/material";
import { BreedFilter } from "./BreedFilter";
import { useRecoilValue } from "recoil";
import { allFiltersAtom } from "../state/allFiltersAtom";
import { ZipCodeFilter } from "./ZipCodeFilter";
import { AgeMinFilter } from "./AgeMinFilter";
import { AgeMaxFilter } from "./AgeMaxFilter";
import { FilterChip } from "./FilterChip";
import { Filter } from "../enums/Filter";
import { SortButton } from "./SortButton";

export const SearchEngine = () => {
    const { breeds } = useRecoilValue(allFiltersAtom);

    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 1200, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', width: '100%', gap: 1, justifyContent: 'center', }}>
                    <BreedFilter />
                    <ZipCodeFilter />
                    <AgeMinFilter />
                    <AgeMaxFilter />
                    <SortButton />
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {breeds?.map((b) => (<FilterChip key={`b-${b}`} label={b} type={Filter.Breed} />))}
                </Box>
            </Box>
        </>
    )
}