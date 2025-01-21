import { Box, Button } from "@mui/material";
import { Page } from "../../../shared/components/Page/Page";
import { useDogSearch } from "../../dogs/hooks/useDogSearch";
import { usePostDogs } from "../../dogs/hooks/usePostDogs";
import { DogCard } from "../../dogs/components/DogCard";
import { SearchEngine } from "../components/SearchEngine";
import { createSearchParams, URLSearchParamsInit } from "react-router";
import { useRecoilValue } from "recoil";
import { allFiltersAtom } from "../state/allFiltersAtom";
import { useEffect, useState } from "react";


const SearchPage = () => {
    const [params, setParams] = useState<string>('');
    const { data, isSuccess } = useDogSearch(params);
    const { mutate, data: dogsResult } = usePostDogs();
    const filters = useRecoilValue(allFiltersAtom);

    const triggerSearch = () => {
        const urlParams = createSearchParams(filters as unknown as URLSearchParamsInit);
        console.log(params.toString())
        setParams(urlParams.toString())
    }

    useEffect(() => {
        if (isSuccess) mutate(data.data.resultIds);
    }, [data?.data.resultIds, isSuccess, mutate]);

    return (
        <Page title={'Search'}>
            <SearchEngine />
            {/* <Button sx={{ mt: 1 }} variant="contained" onClick={() => mutate(data?.data?.resultIds ?? [])}>Search</Button> */}
            <Button sx={{ mt: 1 }} variant="contained" onClick={triggerSearch}>Search</Button>
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