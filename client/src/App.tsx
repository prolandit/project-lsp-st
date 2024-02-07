import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoggedUser } from './common/types';
import MainLayout from './presentation/components/Layouts/MainLayout';
import AsesiProfilePage from './presentation/pages/AsesiProfilePage';
import AsesorProfilePage from './presentation/pages/AsesorProfilePage';
import LoginPage from './presentation/pages/LoginPage';
import RegisterPage from './presentation/pages/RegisterPage';

const App = () => {
    const [user, setUser] = useState<LoggedUser | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [user]);
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route
                    path='/'
                    element={<MainLayout />}
                    children={[
                        <Route
                            key='profile'
                            path='profile'
                            element={
                                user?.role.toLowerCase() === 'asesi' ? (
                                    <AsesiProfilePage />
                                ) : (
                                    <AsesorProfilePage />
                                )
                            }
                        />,
                    ]}
                />
                <Route
                    key='login'
                    path='/login'
                    element={<LoginPage />}
                />
                ,
                <Route
                    key='register'
                    path='/register'
                    element={<RegisterPage />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
