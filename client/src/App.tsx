import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BerandaLayout from './presentation/components/Layouts/HomeLayout';
import MainLayout from './presentation/components/Layouts/MainLayout';
import ChangePasswordPage from './presentation/pages/ChangePasswordPage';
import LoginPage from './presentation/pages/LoginPage';
import NotFoundPage from './presentation/pages/NotFoundPage';
import ProfilePage from './presentation/pages/ProfilePage';
import RegisterPage from './presentation/pages/RegisterPage';
import UsersPage from './presentation/pages/UsersPage';

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
                        element={<BerandaLayout />}
                    />
                    <Route
                        key='profile'
                        path='/profile'
                        element={<ProfilePage />}
                    />
                    <Route
                        key='pengguna'
                        path='/pengguna'
                        element={<UsersPage />}
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
                    key='ubah-password'
                    path='/ubah-password'
                    element={<ChangePasswordPage />}
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
