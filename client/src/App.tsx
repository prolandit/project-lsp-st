import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BerandaLayout from './presentation/components/Layouts/HomeLayout';
import MainLayout from './presentation/components/Layouts/MainLayout';
import ProfileLayout from './presentation/components/Layouts/ProfileLayout';
import UsersPage from './presentation/pages/AccountsPage';
import ChangePasswordPage from './presentation/pages/ChangePasswordPage';
import CreateAccountPage from './presentation/pages/CreateAccountPage';
import LoginPage from './presentation/pages/LoginPage';
import LSPDataAsesiPage from './presentation/pages/LSPDataAsesiPage';
import NotFoundPage from './presentation/pages/NotFoundPage';
import RegisterPage from './presentation/pages/RegisterPage';
import VerifyAccountPage from './presentation/pages/VerifyAccountPage';

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
                        element={<ProfileLayout />}
                    />
                    <Route
                        key='verifikasi-akun'
                        path='/verifikasi-akun/:id'
                        element={<VerifyAccountPage />}
                    />
                    <Route
                        key='data-asesi'
                        path='/data-asesi'
                        element={<LSPDataAsesiPage />}
                    />
                    <Route
                        key='akun'
                        path='user/akun'
                        element={<UsersPage />}
                    />
                    <Route
                        key='buat-akun'
                        path='user/buat-akun'
                        element={<CreateAccountPage />}
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
