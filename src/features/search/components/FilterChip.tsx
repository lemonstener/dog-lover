import { useFormContext } from "react-hook-form";
import { Filter } from "../enums/Filter"
import { Chip } from "@mui/material";

interface FilterChipProps {
    label: string;
    type: Filter;
}

export const FilterChip = ({ label, type }: FilterChipProps) => {
    const { getValues, setValue } = useFormContext();

    const handleDelete = () => {
        if (type === Filter.Breed) setValue('breeds', getValues('breeds').filter((b: string) => b !== label))
    }


    return <Chip label={label} onDelete={handleDelete} />
}