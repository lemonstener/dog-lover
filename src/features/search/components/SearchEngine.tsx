import { Box, Chip } from "@mui/material";
import { BreedFilter } from "./BreedFilter";
import { useRecoilValue } from "recoil";
import { allFiltersAtom } from "../state/allFiltersAtom";
import { ZipCodeFilter } from "./ZipCodeFilter";

export const SearchEngine = () => {
    const { breeds } = useRecoilValue(allFiltersAtom);

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex' }}>
                <BreedFilter />
                <ZipCodeFilter />
            </Box>
            <Box>
                {breeds?.map((b) => (<Chip key={`b-${b}`} label={b} />))}
            </Box>
        </Box>

    )
}