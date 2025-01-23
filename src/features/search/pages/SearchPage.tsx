import { Box, Typography } from "@mui/material";
import { Page } from "../../../shared/components/Page/Page";
import { useDogSearch } from "../../dogs/hooks/useDogSearch";
import { usePostDogs } from "../../dogs/hooks/usePostDogs";
import { DogCard } from "../../dogs/components/DogCard";
import { SearchEngine } from "../components/SearchEngine";
import { useEffect, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AllFilters } from "../types/AllFilters";
import { createParams } from "../utils/createParams";
import { ResultPagination } from "../components/ResultPagination";
import { calculateTotalPages } from "../utils/calculateTotalPages";
import { useSearchParams } from "react-router";
import { searchDefaultValues } from "../utils/searchDefaultValues";
import { DogCardSkeleton } from "../../dogs/components/DogCardSkeleton";


const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data: dogSearchResult, isSuccess, isLoading: isLoadingSearchDogs, refetch } = useDogSearch(searchParams.toString());
    const { mutate, data: dogPostResult, isLoading: isLoadingPostDogs } = usePostDogs();
    const isLoading = isLoadingPostDogs || isLoadingSearchDogs;
    const scrollableBoxRef = useRef<HTMLElement | null>(null);

    const methods = useForm<AllFilters>({ values: searchDefaultValues(searchParams) });

    const { watch, getValues, setValue } = methods;

    const watchSort = watch('sort');
    const watchSize = watch('size');
    const watchFrom = watch('from');
    const watchBreeds = watch('breeds');
    const watchAgeMin = watch('ageMin');
    const watchAgeMax = watch('ageMax');
    const watchZipCodes = watch('zipCodes');

    useEffect(() => {
        const newParams = createParams(getValues());
        setSearchParams(newParams);
    }, [getValues, setSearchParams, watchSize, watchSort, watchBreeds, watchFrom, setValue]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            const newParams = createParams({ ...getValues(), from: '0' });
            setSearchParams(newParams);
        }, 500)
        return () => clearTimeout(delayDebounceFn)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watchAgeMin, watchAgeMax, watchZipCodes])

    useEffect(() => {
        refetch();
        if (scrollableBoxRef.current) scrollableBoxRef.current.scrollTop = 0;
    }, [searchParams, refetch]);

    useEffect(() => {
        if (isSuccess) mutate(dogSearchResult.data.resultIds);
    }, [dogSearchResult?.data.resultIds, isSuccess, mutate]);

    return (
        <Page title={'Search'}>
            <FormProvider {...methods}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    mb: 1
                }}
                >
                    <SearchEngine />
                    <Typography>{dogSearchResult?.data.total ? `${dogSearchResult?.data.total} matches` : 'Fetching dogs...'}</Typography>
                    <ResultPagination
                        page={Math.ceil((+watchFrom + +watchSize) / +watchSize)}
                        count={calculateTotalPages(dogSearchResult?.data.total ?? 0, +watchSize)}
                    />
                </Box>
            </FormProvider>
            <Box
                ref={scrollableBoxRef}
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    height: '100%',
                    overflow: 'scroll'
                }}>
                {isLoading && Array(+watchSize).fill('').map((_, i) => (
                    <DogCardSkeleton key={i} />
                ))}
                {dogPostResult?.data?.map((d) => {
                    return (<DogCard key={d.id} {...d} />)
                })}
            </Box>
        </Page>
    )
}

export default SearchPage;