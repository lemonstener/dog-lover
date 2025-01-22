import { useFormContext } from "react-hook-form";
import { Filter } from "../enums/Filter"
import { Chip } from "@mui/material";
import { useSearchParams } from "react-router";
import { createParams } from "../utils/createParams";
import { AllFilters } from "../types/AllFilters";

interface FilterChipProps {
    label: string;
    type: Filter;
}

export const FilterChip = ({ label, type }: FilterChipProps) => {
    const { getValues, setValue } = useFormContext();
    const [, setSearchParams] = useSearchParams();

    const handleDelete = () => {
        if (type === Filter.Breed) {
            setValue('breeds', getValues('breeds').filter((b: string) => b !== label));
            return;
        }
        if (type === Filter.ZipCode) setValue('zipCodes', '');
        if (type === Filter.AgeMin) setValue('ageMin', '');
        if (type === Filter.AgeMax) setValue('ageMax', '');
        const newParams = createParams(getValues() as AllFilters);
        setSearchParams(newParams);
    }


    return <Chip label={label} onDelete={handleDelete} />
}