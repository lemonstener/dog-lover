import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ProtectedRoutes } from './ProtectedRoutes';

export const AppRoutes = () => {
    const Login = lazy(() => import('../features/auth/pages/LoginPage'));

    const Home = lazy(() => import('./pages/HomePage'));
    const About = lazy(() => import('./pages/AboutPage'));

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/login" element={<Login />} />

                    <Route element={<ProtectedRoutes />}>
                        <Route path='/' element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}