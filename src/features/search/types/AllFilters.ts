import { Sort } from "../enums/Sort";

export interface AllFilters {
    breeds: string[];
    zipCodes: string[];
    ageMin: number;
    ageMax: number;
    sort: Sort;
};