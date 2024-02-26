import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexLayout from './presentation/components/Layouts/IndexLayout';
import MainLayout from './presentation/components/Layouts/MainLayout';
import ProfileLayout from './presentation/components/Layouts/ProfileLayout';
import ChangePasswordPage from './presentation/pages/ChangePasswordPage';
import LoginPage from './presentation/pages/LoginPage';
import NotFoundPage from './presentation/pages/NotFoundPage';
import RegisterPage from './presentation/pages/RegisterPage';
import LSPDataAsesi from './presentation/pages/admin_lsp/LSPDataAsesi';

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
                        path='profile'
                        element={<ProfileLayout />}
                    />
                    <Route
                        key='admin-lsp-asesi'
                        path='admin/lsp/asessions'
                        element={<LSPDataAsesi />}
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
                    key='change-password'
                    path='/change-password'
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
