import { Box, Button, Typography } from "@mui/material";
import { Page } from "../../../shared/components/Page/Page";
import { useDogSearch } from "../../dogs/hooks/useDogSearch";
import { usePostDogs } from "../../dogs/hooks/usePostDogs";
import { DogCard } from "../../dogs/components/DogCard";
import { SearchEngine } from "../components/SearchEngine";


const SearchPage = () => {
    const { data } = useDogSearch();
    const { mutate, data: dogsResult } = usePostDogs();

    return (
        <Page title={'Search'}>
            <SearchEngine />
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

            <Typography variant="h1">Home</Typography>
            <Button onClick={() => mutate(data?.data?.resultIds ?? [])}>Search</Button>
        </Page>
    )
}

export default SearchPage;