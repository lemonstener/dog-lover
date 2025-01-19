import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useDogBreeds } from "../hooks/useDogBreeds";
import { Page } from "../../../shared/components/Page/Page";


const SearchPage = () => {
    const navigate = useNavigate();
    const { data } = useDogBreeds();

    return (
        <Page title={'Search'}>
            <Typography variant="h1">Home</Typography>
            <Button onClick={() => navigate('/login')}>Login</Button>
        </Page>
    )
}

export default SearchPage;