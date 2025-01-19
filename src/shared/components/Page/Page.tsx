import { AppBar } from "@mui/material";
import { ReactNode } from "react"
import { NavBar } from "./NavBar";

export const Page = ({ title, children }: { title: string, children: ReactNode }) => {
    document.title = `Dog Lover - ${title}`;

    return (
        <>
            <NavBar />
            {children}
        </>
    )
}