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


const SearchPage = () => {
    const [params, setParams] = useState<string>('');
    const { data, isSuccess, refetch } = useDogSearch(params);
    const { mutate, data: dogsResult } = usePostDogs();

    const methods = useForm({
        defaultValues: {
            breeds: [],
            zipCodes: '',
            ageMin: '',
            ageMax: '',
            sort: Object.keys(Sort)[0]
        } as AllFilters
    });

    const watchSort = methods.watch('sort');

    const triggerSearch = () => {
        const newParams = createParams(methods.getValues())
        setParams(newParams);
    }

    useEffect(() => {
        refetch();
    }, [params, refetch])

    // We should refetch results if we update the sort order

    useEffect(() => {
        const newParams = createParams(methods.getValues())
        setParams(newParams);
    }, [methods, watchSort])

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