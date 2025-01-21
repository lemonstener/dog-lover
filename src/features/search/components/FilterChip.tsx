import { useRecoilState } from "recoil";
import { Filter } from "../enums/Filter"
import { Chip } from "@mui/material";

interface FilterChipProps {
    label: string;
    type: Filter;
}

export const FilterChip = ({ label, type }: FilterChipProps) => {
    // const [filters, setFilters] = useRecoilState(allFiltersAtom);

    const handleDelete = () => {
        console.log('deleted')
        // if (type === Filter.Breed) setFilters({ ...filters, breeds: filters.breeds.filter((f) => f !== label) });
    }


    return <Chip label={label} onDelete={handleDelete} />
}