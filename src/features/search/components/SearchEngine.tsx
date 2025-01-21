import { Box, Chip } from "@mui/material"
import { useParams } from "react-router"
import { BreedFilter } from "./BreedFilter";
import { useRecoilValue } from "recoil";
import { allFiltersAtom } from "../state/allFiltersAtom";

export const SearchEngine = () => {
    const params = useParams();
    const { breeds } = useRecoilValue(allFiltersAtom);

    return (
        <>
            <Box>
                <BreedFilter />
            </Box>
            <Box>
                {breeds?.map((b) => (<Chip label={b} />))}
            </Box>
        </>

    )
}