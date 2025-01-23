import { Outlet, useNavigate } from "react-router"
import { service } from "../API/service";

export const ProtectedRoutes = () => {
    const navigate = useNavigate();

    // service.interceptors.response.use(
    //     response => response,
    //     error => {
    //         if (error.response.status === 401) navigate('/login')
    //         return Promise.reject(error);
    //     },
    // );

    return <Outlet />
}