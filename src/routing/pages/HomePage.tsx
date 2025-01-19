import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router"
import { useDogBreeds } from "../../features/dogs/hooks/useDogBreeds";

const HomePage = () => {
    const navigate = useNavigate();
    const { data } = useDogBreeds();

    return (
        <>
            <Typography variant="h1">Home</Typography>
            <Button onClick={() => navigate('/login')}>Login</Button>
        </>
    )
}

export default HomePage;