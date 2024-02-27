import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageRoutes } from './common/enum';
import IndexLayout from './presentation/components/Layouts/IndexLayout';
import MainLayout from './presentation/components/Layouts/MainLayout';
import ProfileLayout from './presentation/components/Layouts/ProfileLayout';
import ChangePasswordPage from './presentation/pages/ChangePasswordPage';
import LoginPage from './presentation/pages/LoginPage';
import NotFoundPage from './presentation/pages/NotFoundPage';
import RegisterPage from './presentation/pages/RegisterPage';
import CreateAccountPage from './presentation/pages/admin_lsp/CreateAccountPage';
import LSPDataAsesiPage from './presentation/pages/admin_lsp/LSPDataAsesiPage';

const App = () => {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route
                    path={PageRoutes.INDEX}
                    element={<MainLayout />}
                >
                    <Route
                        index
                        key='index'
                        element={<IndexLayout />}
                    />
                    <Route
                        key='profile'
                        path={PageRoutes.PROFILE}
                        element={<ProfileLayout />}
                    />
                    <Route
                        key='admin-lsp-asesi'
                        path={PageRoutes.ADMIN_LSP_ASESI}
                        element={<LSPDataAsesiPage />}
                    />
                    <Route
                        key='admin-create-account'
                        path={PageRoutes.ADMIN_LSP_CREATE_ACCCOUNT}
                        element={<CreateAccountPage />}
                    />
                </Route>
                <Route
                    key='login'
                    path={PageRoutes.LOGIN}
                    element={<LoginPage />}
                />
                <Route
                    key='register'
                    path={PageRoutes.REGISTER}
                    element={<RegisterPage />}
                />
                <Route
                    key='change-password'
                    path={PageRoutes.CHANGE_PASSWORD}
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
