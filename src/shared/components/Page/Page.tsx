import { ReactNode } from "react"

interface PageProps {
    children: ReactNode;
}

export const Page = ({children} : PageProps) => {
    return {children}
}