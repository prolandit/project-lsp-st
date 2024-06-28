import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BerandaLayout from './presentation/components/Layouts/HomeLayout';
import MainLayout from './presentation/components/Layouts/MainLayout';
import ChangePasswordPage from './presentation/pages/Auth/ChangePasswordPage';
import LoginPage from './presentation/pages/Auth/LoginPage';
import RegisterPage from './presentation/pages/Auth/RegisterPage';
import NotFoundPage from './presentation/pages/NotFoundPage';
import ProfilePage from './presentation/pages/Profile/ProfilePage';
import CreateTukPage from './presentation/pages/Tuks/CreateTukPage';
import EditTukPage from './presentation/pages/Tuks/EditTuksPage';
import TuksPage from './presentation/pages/Tuks/TuksPage';
import CreateUserPage from './presentation/pages/Users/CreateUserPage';
import EditUserPage from './presentation/pages/Users/EditUserPage';
import UsersPage from './presentation/pages/Users/UsersPage';
import AsesorPage from './presentation/pages/Asesor/AsesorPage';
import CreateAsesorPage from './presentation/pages/Asesor/CreateAsesorPage';
import EditAsesorPage from './presentation/pages/Asesor/EditAsesorPage';

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
                        key='users'
                        path='/users'
                        element={<UsersPage />}
                    />
                    <Route
                        key='create-user'
                        path='/users/create'
                        element={<CreateUserPage />}
                    />
                    <Route
                        key='edit-user'
                        path='/users/edit/:id'
                        element={<EditUserPage />}
                    />
                    <Route
                        key='tuks'
                        path='/tuks'
                        element={<TuksPage />}
                    />
                    <Route
                        key='create-tuk'
                        path='/tuks/create'
                        element={<CreateTukPage />}
                    />
                    <Route
                        key='edit-tuk'
                        path='/tuks/edit/:id'
                        element={<EditTukPage />}
                    />
                    <Route
                        key='asesor'
                        path='/asesor'
                        element={<AsesorPage />}
                    />
                    <Route
                        key='asesor'
                        path='/asesor/create'
                        element={<CreateAsesorPage />}
                    />
                    <Route
                        key='asesor'
                        path='/asesor/edit/:id'
                        element={<EditAsesorPage />}
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
