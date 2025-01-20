import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Dog } from "../../../API/responses/dogResponse";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CakeOutlined, LocationOn, Pets } from "@mui/icons-material";

export const DogCard = (props: Dog) => {
    const { id, img, name, zip_code, age, breed } = props;

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
                    <Button size="small" variant='contained' endIcon={<FavoriteBorderIcon />}>
                        Favorite
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}