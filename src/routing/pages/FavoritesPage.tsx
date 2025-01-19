import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router"
import { Page } from "../../shared/components/Page/Page";

const FavoritesPage = () => {
    const navigate = useNavigate();

    return (
        <Page title="Favorites">
            <Typography variant="h1">Favorites</Typography>
            <Button onClick={() => navigate('/favorites')}>Login</Button>
        </Page>
    )
}

export default FavoritesPage;