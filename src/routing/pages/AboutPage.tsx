import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router"

const AboutPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Typography variant="h1">About</Typography>
            <Button onClick={() => navigate('/')}>Login</Button>
        </>
    )
}

export default AboutPage;