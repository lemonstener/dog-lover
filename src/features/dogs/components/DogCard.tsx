import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
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

    const addToFavorites = () => {
        let newFavorites = getFavorites();
        if (newFavorites.includes(id)) {
            newFavorites = newFavorites.filter((d: string) => d !== id);
        } else {
            newFavorites = [...newFavorites, id];
        }
        toast.success(`${name} ${isFavorite ? 'removed from' : 'added to'} favorites`, { position: "top-right" })
        localStorage.setItem('userFavorites', JSON.stringify(newFavorites));
        setIsFavorite(!isFavorite);
    }

    return (
        <Box sx={{ width: { xs: '100%', sm: '33%', md: '25%' }, display: 'flex', justifyContent: 'center', mt: 1 }}>
            <Card sx={{ width: { xs: 260, sm: 170, md: 200, lg: 260 } }}>
                <CardMedia
                    sx={{ height: { xs: 180, sm: 180, md: 200, lg: 260 } }}
                    image={img}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {breed} <Pets sx={{ fontSize: 12 }} />
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {age} <CakeOutlined sx={{ fontSize: 12 }} />
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {zip_code}
                        <LocationOn sx={{ fontSize: 12 }} />
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={addToFavorites}
                        size="small"
                        color={isFavorite ? 'success' : 'info'}
                        variant='contained'
                        endIcon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}>
                        Favorite
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}