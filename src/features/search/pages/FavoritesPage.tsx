import { Box, Button, Typography } from "@mui/material";
import { Page } from "../../../shared/components/Page/Page";
import { usePostDogs } from "../../dogs/hooks/usePostDogs";
import { useEffect, useState } from "react";
import { getFavorites } from "../../../shared/utils/getFavorites";
import { DogCard } from "../../dogs/components/DogCard";
import { DogMatchDialog } from "../../dogs/components/DogMatchDialog";
import { DogCardSkeleton } from "../../dogs/components/DogCardSkeleton";

const FavoritesPage = () => {
    const { mutate: mutateDogsFetch, data: dogsResult, isLoading } = usePostDogs();
    const [open, setOpen] = useState(false);
    const favorites = getFavorites();

    useEffect(() => {
        if (favorites.length) mutateDogsFetch(favorites);
        // No need to add favorites to deps array here
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mutateDogsFetch])

    return (
        <Page title="Favorites">
            <Typography variant="h1">{favorites.length ? 'Your favorites' : 'You don\'t have any favorites yet'}</Typography>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                {isLoading && Array(favorites.length).fill('').map((_, i) => (
                    <DogCardSkeleton key={i} />
                ))}
                {dogsResult?.data?.map((d) => {
                    return (<DogCard key={d.id} {...d} />)
                })}
            </Box>
            {(!!favorites.length) && <Button sx={{ my: 2 }} variant={'contained'} onClick={() => setOpen(true)}>Find a match</Button>}
            <DogMatchDialog open={open} handleClose={() => setOpen(false)} />
        </Page>
    )
}

export default FavoritesPage;