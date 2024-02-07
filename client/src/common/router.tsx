import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../presentation/pages/LoginPage';
import NotFoundPage from '../presentation/pages/NotFoundPage';
import ProfilePage from '../presentation/pages/ProfilePage';
import RegisterPage from '../presentation/pages/RegisterPage';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFoundPage />,
        children: [
            {
                path: 'profile',
                element: <ProfilePage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
        ],
    },
]);

export default router;
