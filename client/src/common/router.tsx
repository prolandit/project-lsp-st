import { createBrowserRouter } from 'react-router-dom';
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
                element: <h1>Home</h1>,
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
