import { Autocomplete, Box, TextField } from "@mui/material"
import { useDogBreeds } from "../../dogs/hooks/useDogBreeds";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { allFiltersAtom } from "../state/allFiltersAtom";

export const BreedFilter = () => {
    const { data: dogBreeds } = useDogBreeds();
    const [options, setOptions] = useState<string[]>([]);
    const [filters, setFilters] = useRecoilState(allFiltersAtom);

    useEffect(() => {
        if (dogBreeds?.data) setOptions(dogBreeds.data)
    }, [dogBreeds])

    return (
        <Box>
            <Autocomplete
                disablePortal
                disableClearable
                options={options}
                sx={{ width: 300 }}
                onChange={(e) => {
                    setFilters({ ...filters, breeds: [...filters.breeds ?? [], e.target.innerText] })
                    setOptions(options.filter((o) => o !== e.target.innerText));
                }}
                renderInput={(params) => <TextField {...params} label="Breed" />
                }
            />
        </Box>
    )
}