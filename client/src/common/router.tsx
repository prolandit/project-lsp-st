import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../presentation/pages/HomePage';
import LoginPage from '../presentation/pages/LoginPage';
import NotFoundPage from '../presentation/pages/NotFoundPage';
import RegisterPage from '../presentation/pages/RegisterPage';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFoundPage />,
        children: [
            {
                path: '',
                element: <HomePage />,
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
