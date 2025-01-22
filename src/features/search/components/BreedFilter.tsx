import { Autocomplete, Box, TextField } from "@mui/material"
import { useDogBreeds } from "../../dogs/hooks/useDogBreeds";
import { Controller, useFormContext } from "react-hook-form";

export const BreedFilter = () => {
    const { data: dogBreeds } = useDogBreeds();
    const { control, watch, setValue } = useFormContext();

    const watchBreeds = watch('breeds');

    const handleChange = (value: string) => {
        if (watchBreeds.includes(value)) return;
        setValue('breeds', [...watchBreeds, value]);
    }



    return (
        <Box>
            <Controller
                control={control}
                name={'breeds'}
                render={() => {
                    return (
                        <Autocomplete
                            disablePortal
                            disableClearable
                            options={dogBreeds?.data ?? []}
                            sx={{ width: 250 }}
                            onChange={(e) => handleChange(e.target.innerText)}
                            renderInput={(params) => <TextField {...params} label="Breed" />
                            }
                        />
                    )
                }} />

        </Box>
    )
}