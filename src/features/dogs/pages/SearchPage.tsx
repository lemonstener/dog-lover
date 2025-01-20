import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useDogBreeds } from "../hooks/useDogBreeds";
import { Page } from "../../../shared/components/Page/Page";
import { useDogSearch } from "../hooks/useDogSearch";
import { usePostDogs } from "../hooks/usePostDogs";
import { DogCard } from "../components/DogCard";


const SearchPage = () => {
    const navigate = useNavigate();
    const { data } = useDogSearch();
    const { mutate, data: dogsResult } = usePostDogs();


    return (
        <Page title={'Search'}>
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