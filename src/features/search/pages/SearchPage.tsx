import { Box, Button } from "@mui/material";
import { Page } from "../../../shared/components/Page/Page";
import { useDogSearch } from "../../dogs/hooks/useDogSearch";
import { usePostDogs } from "../../dogs/hooks/usePostDogs";
import { DogCard } from "../../dogs/components/DogCard";
import { SearchEngine } from "../components/SearchEngine";
import { createSearchParams, URLSearchParamsInit } from "react-router";
import { useRecoilState } from "recoil";
import { allFiltersAtom } from "../state/allFiltersAtom";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";


const SearchPage = () => {
    const [params, setParams] = useState<string>('');
    const { data, isSuccess, refetch } = useDogSearch(params);
    const { mutate, data: dogsResult } = usePostDogs();
    const [filters, setFilters] = useRecoilState(allFiltersAtom);

    const methods = useForm({ defaultValues: filters });

    const triggerSearch = () => {
        setFilters({ ...filters, ageMax: methods.getValues('ageMax', 'ageMin', 'zipCode') });
    }

    useEffect(() => {
        const urlParams = createSearchParams(filters as unknown as URLSearchParamsInit);
        setParams(urlParams.toString())
    }, [filters])

    useEffect(() => {
        refetch();
    }, [params, refetch])

    useEffect(() => {
        if (isSuccess) mutate(data.data.resultIds);
    }, [data?.data.resultIds, isSuccess, mutate]);

    return (
        <Page title={'Search'}>
            <FormProvider {...methods}>
                <SearchEngine />
                <Button sx={{ mt: 1 }} variant="contained" onClick={triggerSearch}>Search</Button>
            </FormProvider>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                {dogsResult?.data?.map((d) => {
                    return (<DogCard key={d.id} {...d} />)
                })}
            </Box>
        </Page>
    )
}

export default SearchPage;