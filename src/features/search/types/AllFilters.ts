import { Sort } from "./Sort";

export interface AllFilters {
    breeds: string[];
    zipCodes: string[];
    ageMin: number;
    ageMax: number;
    sort: Sort;
    direction: string;
};