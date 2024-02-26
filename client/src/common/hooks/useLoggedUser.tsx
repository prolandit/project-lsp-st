import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '.';
import UserRemoteDataSource from '../../data/datasources/UserRemoteDataSource';
import { setUser } from '../../presentation/redux/slices/userSlice';

export const useLoggedUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useAppSelector((state) => state.user.user);

    useEffect(() => {
        const fetchLoggedUser = async () => {
            try {
                const token = localStorage.getItem('token') ?? '';
                const user = await UserRemoteDataSource.getLoggedUser(token);
                dispatch(setUser(user));
            } catch (error) {
                navigate('/login');
            }
        };

        if (!user) {
            fetchLoggedUser();
        }
    }, [user, navigate, dispatch]);

    return user;
};
