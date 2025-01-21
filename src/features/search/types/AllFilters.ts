import { Sort } from "../enums/Sort";

export interface AllFilters {
    breeds: string[];
    zipCodes: string[];
    ageMin: string;
    ageMax: string;
    sort: Sort;
};