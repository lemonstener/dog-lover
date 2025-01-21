import { createSearchParams, URLSearchParamsInit } from "react-router";
import { AllFilters } from "../types/AllFilters";

export const createParams = (values: AllFilters) => {
    for (const key in values) {
        if (!values[key as keyof AllFilters].length || values[key as keyof AllFilters] === '')
            delete values[key as keyof AllFilters]
    }
    return createSearchParams(values as unknown as URLSearchParamsInit);
}