import { Box, Button } from "@mui/material";
import { Page } from "../../../shared/components/Page/Page";
import { useDogSearch } from "../../dogs/hooks/useDogSearch";
import { usePostDogs } from "../../dogs/hooks/usePostDogs";
import { DogCard } from "../../dogs/components/DogCard";
import { SearchEngine } from "../components/SearchEngine";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Sort } from "../enums/Sort";
import { AllFilters } from "../types/AllFilters";
import { createParams } from "../utils/createParams";
import { ResultPagination } from "../components/ResultPagination";
import { calculateTotalPages } from "../utils/calculateTotalPages";
import { useSearchParams } from "react-router";
import { searchDefaultValues } from "../utils/searchDefaultValues";


const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // const [params, setParams] = useState<string>('');
    // const { data: dogSearchResult, isSuccess, refetch } = useDogSearch(params);
    // const { mutate, data: dogPostResult } = usePostDogs();

    const methods = useForm<AllFilters>({ values: searchDefaultValues(searchParams) });

    const { watch, getValues } = methods;

    const watchSort = watch('sort');
    const watchSize = watch('size');
    const watchFrom = watch('from');

    const triggerSearch = () => {
        console.log(getValues('ageMax'))
        const newParams = createParams(getValues())
        setSearchParams(newParams);
    }

    // useEffect(() => {
    //     refetch();
    // }, [params, refetch])

    // // We should refetch results when we update sort, size, or from

    // useEffect(() => {
    //     const newParams = createParams(getValues())
    //     setParams(newParams);
    // }, [getValues, watchSort, watchSize, watchFrom])

    // useEffect(() => {
    //     if (isSuccess) mutate(dogSearchResult.data.resultIds);
    // }, [dogSearchResult?.data.resultIds, isSuccess, mutate]);

    return (
        <Page title={'Search'}>
            <FormProvider {...methods}>
                <SearchEngine />
                <Button sx={{ mt: 1 }} variant="contained" onClick={triggerSearch}>Search</Button>
                {/* <ResultPagination count={calculateTotalPages(dogSearchResult?.data.total ?? 0, +watchSize)} /> */}
            </FormProvider>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                {/* {dogPostResult?.data?.map((d) => {
                        return (<DogCard key={d.id} {...d} />)
                    })} */}
            </Box>
        </Page>
    )
}

export default SearchPage;