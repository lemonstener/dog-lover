import { atom } from "recoil";
import { AllFilters } from "../types/AllFilters";
import { Sort } from "../enums/Sort";

export const allFiltersAtom = atom({
    key: 'allFilters',
    default: { sort: Object.keys(Sort)[0] } as AllFilters
});