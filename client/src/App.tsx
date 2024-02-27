import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexLayout from './presentation/components/Layouts/IndexLayout';
import MainLayout from './presentation/components/Layouts/MainLayout';
import ProfileLayout from './presentation/components/Layouts/ProfileLayout';
import ChangePasswordPage from './presentation/pages/ChangePasswordPage';
import LoginPage from './presentation/pages/LoginPage';
import NotFoundPage from './presentation/pages/NotFoundPage';
import RegisterPage from './presentation/pages/RegisterPage';
import LSPDataAsesiPage from './presentation/pages/admin_lsp/LSPDataAsesiPage';
import UsersPage from './presentation/pages/admin_lsp/AccountsPage';
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
                        element={<IndexLayout />}
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
                        key='admin-lsp-asesi'
                        path='/admin/lsp/data-asesi'
                        element={<LSPDataAsesiPage />}
                    />
                    <Route
                        key='admin-lsp-akun'
                        path='/admin/lsp/akun'
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
