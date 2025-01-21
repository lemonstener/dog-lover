import { Autocomplete, Box, TextField } from "@mui/material"
import { useDogBreeds } from "../../dogs/hooks/useDogBreeds";
import { useRecoilState } from "recoil";
import { allFiltersAtom } from "../state/allFiltersAtom";

export const BreedFilter = () => {
    const { data: dogBreeds } = useDogBreeds();
    const [filters, setFilters] = useRecoilState(allFiltersAtom);


    return (
        <Box>
            <Autocomplete
                disablePortal
                disableClearable
                options={dogBreeds?.data ?? []}
                sx={{ width: 250 }}
                onChange={(e) => {
                    const breed = e.target.innerText;
                    if (filters.breeds?.includes(breed)) return;
                    setFilters({ ...filters, breeds: [...filters.breeds ?? [], breed] })
                }}
                renderInput={(params) => <TextField {...params} label="Breed" />
                }
            />
        </Box>
    )
}