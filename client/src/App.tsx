import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoggedUser } from './common/types';
import MainLayout from './presentation/components/Layouts/MainLayout';
import AsesiProfilePage from './presentation/pages/AsesiProfilePage';
import AsesorProfilePage from './presentation/pages/AsesorProfilePage';
import LoginPage from './presentation/pages/LoginPage';
import NotFoundPage from './presentation/pages/NotFoundPage';
import RegisterPage from './presentation/pages/RegisterPage';

const App = () => {
    const [user, setUser] = useState<LoggedUser | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [user]);

    const profileElement =
        user?.role.toLowerCase() === 'asesi' ? (
            <AsesorProfilePage />
            ) : (
            <AsesiProfilePage />
        );

    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route
                    path='/'
                    element={<MainLayout />}
                >
                    <Route
                        index
                        key='index'
                        element={<Navigate to='/profile' />}
                        errorElement={<NotFoundPage />}
                    />
                    <Route
                        key='profile'
                        path='profile'
                        element={profileElement}
                    />
                </Route>
                <Route
                    key='login'
                    path='/login'
                    element={<LoginPage />}
                />

                <Route
                    key='register'
                    path='/register'
                    element={<RegisterPage />}
                />
                <Route
                    key='error'
                    path='*'
                    element={<NotFoundPage />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
