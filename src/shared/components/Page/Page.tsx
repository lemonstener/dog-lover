import { ReactNode } from "react"
import { NavBar } from "./NavBar";
import { Box } from "@mui/material";

export const Page = ({ title, children }: { title: string, children: ReactNode }) => {
    document.title = `Dog Lover - ${title}`;

    return (
        <Box sx={{ height: '100vh', width: { xs: 600, md: 900, lg: 1200 } }}>
            <NavBar />
            {children}
        </Box>
    )
}