import { Box, Typography } from "@mui/material";
import { Page } from "../../shared/components/Page/Page";
import { usePostDogs } from "../../features/dogs/hooks/usePostDogs";
import { useEffect } from "react";
import { getFavorites } from "../../shared/utils/getFavorites";
import { DogCard } from "../../features/dogs/components/DogCard";

const FavoritesPage = () => {
    const { mutate, data: dogsResult } = usePostDogs();
    const favorites = getFavorites();

    useEffect(() => {
        mutate(favorites);
        // No need to add favorites to deps array here
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mutate])

    return (
        <Page title="Favorites">
            <Typography variant="h1">{favorites.length ? 'Your favorites' : 'You don\'t have any favorites yet'}</Typography>
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

export default FavoritesPage;