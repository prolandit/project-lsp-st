import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './presentation/components/Layouts/MainLayout';
import ProfileLayout from './presentation/components/Layouts/ProfileLayout';
import LoginPage from './presentation/pages/LoginPage';
import NotFoundPage from './presentation/pages/NotFoundPage';
import RegisterPage from './presentation/pages/RegisterPage';

const App = () => {
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
                        element={<ProfileLayout />}
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
