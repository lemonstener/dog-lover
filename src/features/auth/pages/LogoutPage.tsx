import { useEffect } from "react";
import { useLogout } from "../hooks/useLogout"
import { Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { Page } from "../../../shared/components/Page/Page";
import toast from "react-hot-toast";

const LogoutPage = () => {
    const { mutate } = useLogout();
    const navigate = useNavigate();

    useEffect(() => mutate(undefined, {
        onSuccess: () => navigate('/login'),
        onError: () => {
            toast.error('Something went wrong');
            navigate('/login')
        }
    }), [mutate, navigate]);

    return (
        <Page title="Logout">
            <Typography variant="h1">Terminating session...</Typography>
        </Page>
    )
}

export default LogoutPage;