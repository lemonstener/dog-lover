import { Box, Button } from "@mui/material";
import { Page } from "../../../shared/components/Page/Page";
import { useDogSearch } from "../../dogs/hooks/useDogSearch";
import { usePostDogs } from "../../dogs/hooks/usePostDogs";
import { DogCard } from "../../dogs/components/DogCard";
import { SearchEngine } from "../components/SearchEngine";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AllFilters } from "../types/AllFilters";
import { createParams } from "../utils/createParams";
import { ResultPagination } from "../components/ResultPagination";
import { calculateTotalPages } from "../utils/calculateTotalPages";
import { useSearchParams } from "react-router";
import { searchDefaultValues } from "../utils/searchDefaultValues";


const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data: dogSearchResult, isSuccess, refetch } = useDogSearch(searchParams.toString());
    const { mutate, data: dogPostResult } = usePostDogs();

    const methods = useForm<AllFilters>({ values: searchDefaultValues(searchParams) });

    const { watch, getValues, setValue } = methods;

    const watchSort = watch('sort');
    const watchSize = watch('size');
    const watchFrom = watch('from');
    const watchBreeds = watch('breeds');

    const triggerSearch = () => {
        const newParams = createParams(getValues());
        setSearchParams(newParams);
    }

    useEffect(() => {
        const newParams = createParams(getValues());
        setSearchParams(newParams);
    }, [getValues, setSearchParams, watchSize, watchSort, watchBreeds, setValue]);

    useEffect(() => {
        const newParams = createParams(getValues());
        setSearchParams(newParams);
    }, [getValues, setSearchParams, watchFrom]);

    useEffect(() => {
        refetch();
    }, [searchParams, refetch]);

    useEffect(() => {
        if (isSuccess) mutate(dogSearchResult.data.resultIds);
    }, [dogSearchResult?.data.resultIds, isSuccess, mutate]);

    return (
        <Page title={'Search'}>
            <FormProvider {...methods}>
                <SearchEngine />
                <Button sx={{ mt: 1 }} variant="contained" onClick={triggerSearch}>Search</Button>
                <ResultPagination count={calculateTotalPages(dogSearchResult?.data.total ?? 0, +watchSize)} />
            </FormProvider>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'start' },
                    flexWrap: 'wrap'
                }}>
                {dogPostResult?.data?.map((d) => {
                    return (<DogCard key={d.id} {...d} />)
                })}
            </Box>
        </Page>
    )
}

export default SearchPage;