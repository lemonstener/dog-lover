import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Dog } from "../../../API/responses/dog";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CakeOutlined, LocationOn, Pets } from "@mui/icons-material";
import { useState } from "react";
import toast from "react-hot-toast";
import { getFavorites } from "../../../shared/utils/getFavorites";

export const DogCard = (props: Dog) => {
    const { id, img, name, zip_code, age, breed } = props;
    const favorites = getFavorites();
    const [isFavorite, setIsFavorite] = useState(favorites.includes(id));
    const { breakpoints } = useTheme();
    const isLargeScreen = useMediaQuery(breakpoints.up('lg'))

    const addToFavorites = () => {
        let newFavorites = getFavorites();
        if (newFavorites.includes(id)) {
            newFavorites = newFavorites.filter((d: string) => d !== id);
        } else {
            newFavorites = [...newFavorites, id];
        }
        toast.success(`${name} ${isFavorite ? 'removed from' : 'added to'} favorites`, { position: 'top-center' })
        localStorage.setItem('userFavorites', JSON.stringify(newFavorites));
        setIsFavorite(!isFavorite);
    }

    return (
        <Box
            sx={{
                width: { sm: '50%', md: '33.3%', lg: '25%' },
                my: 1,
            }}>
            <Box sx={{
                p: 2,
                background: isFavorite ? '#f5f5f5' : 'none',
                width: '99%',
                ":hover": {
                    background: isLargeScreen ? '#f5f5f5' : 'none',
                },
                transition: '.1s',
                borderRadius: 2
            }}>
                <Box
                    component={'img'}
                    src={img}
                    alt={`Image of ${name}`}
                    sx={{
                        height: 180,
                        width: 250
                    }}
                />
                <Box py={1}>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ xs: '1.3rem', lg: '1rem' }} >
                        {breed} <Pets sx={{ fontSize: 12 }} />
                    </Typography>
                    <Typography sx={{ xs: '1.3rem', lg: '1rem' }} >
                        {age} <CakeOutlined sx={{ fontSize: 12 }} />
                    </Typography>
                    <Typography sx={{ xs: '1.3rem', lg: '1rem' }} >
                        {zip_code}
                        <LocationOn sx={{ fontSize: 12 }} />
                    </Typography>
                </Box>
                <Button onClick={addToFavorites}
                    size="small"
                    color={isFavorite ? 'success' : 'info'}
                    variant='contained'
                    endIcon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}>
                    Favorite
                </Button>
            </Box>
        </Box>
    )
}