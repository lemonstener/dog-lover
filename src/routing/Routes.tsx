import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ProtectedRoutes } from './ProtectedRoutes';

export const AppRoutes = () => {
    const Login = lazy(() => import('../features/auth/pages/LoginPage'));

    const Search = lazy(() => import('../features/dogs/pages/SearchPage'));
    const Favorites = lazy(() => import('./pages/FavoritesPage'));

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/login" element={<Login />} />

                    <Route element={<ProtectedRoutes />}>
                        <Route path='/' element={<Search />} />
                        <Route path="/favorites" element={<Favorites />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}