import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Dog } from "../../../API/responses/dogResponse";

export const DogCard = (props: Dog) => {
    const { id, img, name, zip_code, age, breed } = props;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={img}
                title={`Image of ${name}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    ${name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}