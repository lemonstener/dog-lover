import { Typography } from "@mui/material"
import { Page } from "../../../shared/components/Page/Page";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const HomePage = () => {
    const navigate = useNavigate();

    if (!localStorage.length) navigate('/login')

    useEffect(() => {
        if (!localStorage.length) navigate('/login')
    }, [navigate])

    return (
        <Page title={'Home'}>
            <Typography variant={'h1'}>Greetings</Typography>
            <Typography>
                Use the navigation bar to go to the "Search" page. Then, add some dogs to favorites. <br />
                Once you are satisfied with your selection, go to the "Favorites" page and click the "Find match" button to find your dream dog.
            </Typography>
        </Page>
    )
}

export default HomePage;