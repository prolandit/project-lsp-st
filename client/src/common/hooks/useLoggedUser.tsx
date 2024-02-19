import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthRemoteDataSource from '../../data/datasources/AuthRemoteDataSource';
import { UserType } from '../types';

export const useLoggedUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserType | undefined>(undefined);

    useEffect(() => {
        const fetchLoggedUser = async () => {
            try {
                const token = localStorage.getItem('token') ?? '';
                const user = await AuthRemoteDataSource.getLoggedUser(token);
                setUser(user);
            } catch (error) {
                navigate('/login');
            }
        };

        if (!user) {
            fetchLoggedUser();
        }
    }, [user, navigate]);

    return user;
};
