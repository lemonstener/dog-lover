import { useFormContext } from "react-hook-form";
import { createParams } from "../utils/createParams";
import { AllFilters } from "../types/AllFilters";
import { useSearchParams } from "react-router";

export const useDebouncedSearch = () => {
    const { setValue, getValues } = useFormContext();
    const [, setSearchParams] = useSearchParams();

    const debouncedSearch = () => {
        const timeout = setTimeout(() => {
            setValue('from', '0')
            const newParams = createParams(getValues() as AllFilters);
            setSearchParams(newParams);
        }, 500)
        return () => clearTimeout(timeout)
    }

    return { debouncedSearch }
}