import { Sort } from "../enums/Sort";


export const searchDefaultValues = (params: URLSearchParams) => {
    const searchParams = Object.fromEntries(new URLSearchParams(params));
    const breeds = params.getAll('breeds');

    return {
        breeds: breeds ?? [],
        zipCodes: searchParams.zipCodes ?? '',
        ageMin: searchParams.ageMin ?? '',
        ageMax: searchParams.ageMax ?? '',
        sort: searchParams.sort as Sort ?? Object.keys(Sort)[0],
        size: searchParams.size ?? '25',
        from: searchParams.from ?? '0'
    }
}