import { atom } from "recoil";
import { AllFilters } from "../types/AllFilters";

export const allFiltersAtom = atom({
    key: 'allFilters',
    default: <AllFilters>{}
})