import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '.';

export const useLoggedUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useAppSelector((state) => state.user.user);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate, dispatch]);

    return user;
};
