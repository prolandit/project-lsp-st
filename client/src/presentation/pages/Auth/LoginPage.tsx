import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { LoginValues } from '../../../common/types';
import FormLogin from '../../components/Fragments/FormLogin';
import AuthLayout from '../../components/Layouts/AuthLayout';
import LoadingSpinner from '../../components/Elements/LoadingSpinner';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setUser } from '../../redux/slices/userSlice';
import { toast } from 'react-toastify';
import AuthRemoteDataSource from '../../../data/datasources/AuthRemoteDataSource';
import UserRemoteDataSource from '../../../data/datasources/UserRemoteDataSource';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const isAuthenticated = Boolean(localStorage.getItem('token'));

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const onLogin = async (payload: LoginValues) => {
        setIsLoading(true);

        try {
            const data = await AuthRemoteDataSource.login(payload);
            localStorage.setItem('token', data.token);
            
            // const user = await UserRemoteDataSource.getLoggedUser(data.token);
            // dispatch(setUser(user));
            
            navigate('/');
        } catch (error) {
            toast.error((error as Error).message, {
                position: 'top-center',
                hideProgressBar: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <AuthLayout
                title='Masuk'
                subtitle='Jika anda belum memiliki akun'
                navigationTitle='Daftar disini ?'
                navigateTo='/register'
            >
                <FormLogin onLogin={onLogin} />
            </AuthLayout>
            <LoadingSpinner show={isLoading} />
        </>
    );
};

export default LoginPage;
