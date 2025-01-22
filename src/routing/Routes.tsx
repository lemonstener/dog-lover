import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { ProtectedRoutes } from './ProtectedRoutes';

export const AppRoutes = () => {
    const Login = lazy(() => import('../features/auth/pages/LoginPage'));
    const Logout = lazy(() => import('../features/auth/pages/LogoutPage'));

    const Search = lazy(() => import('../features/search/pages/SearchPage'));
    const Favorites = lazy(() => import('../features/search/pages/FavoritesPage'));

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />

                    <Route element={<ProtectedRoutes />}>
                        <Route path='/search' element={<Search />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}