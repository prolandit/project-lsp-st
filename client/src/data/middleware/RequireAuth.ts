import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface RequireAuthProps {
    children: ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
    const navigate = useNavigate();
    const isAuthenticated = Boolean(localStorage.getItem('token'));

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    return children;
};

export default RequireAuth;
