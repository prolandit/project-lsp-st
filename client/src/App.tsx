import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from './presentation/components/Layouts/DashboardLayout';
import MainLayout from './presentation/components/Layouts/MainLayout';
import ProfileLayout from './presentation/components/Layouts/ProfileLayout';
import ChangePasswordPage from './presentation/pages/ChangePasswordPage';
import LoginPage from './presentation/pages/LoginPage';
import NotFoundPage from './presentation/pages/NotFoundPage';
import RegisterPage from './presentation/pages/RegisterPage';
import UsersPage from './presentation/pages/admin_lsp/AccountsPage';
import CreateAccountPage from './presentation/pages/admin_lsp/CreateAccountPage';
import LSPDataAsesiPage from './presentation/pages/admin_lsp/LSPDataAsesiPage';
import VerifyAccountPage from './presentation/pages/admin_lsp/VerifyAccountPage';

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
                        element={<DashboardLayout />}
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
