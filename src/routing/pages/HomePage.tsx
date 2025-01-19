import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useDogBreeds } from "../../features/dogs/hooks/useDogBreeds";
import { Page } from "../../shared/components/Page/Page";


const HomePage = () => {
    const navigate = useNavigate();
    const { data } = useDogBreeds();

    return (
        <Page title={'Home'}>
            <Typography variant="h1">Home</Typography>
            <Button onClick={() => navigate('/login')}>Login</Button>
        </Page>
    )
}

export default HomePage;