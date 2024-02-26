import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginValues } from '../../common/types';
import AuthRemoteDataSource from '../../data/datasources/AuthRemoteDataSource';
import UserRemoteDataSource from '../../data/datasources/UserRemoteDataSource';
import LoadingSpinner from '../components/Elements/LoadingSpinner';
import FormLogin from '../components/Fragments/FormLogin';
import AuthLayout from '../components/Layouts/AuthLayout';
import { setUser } from '../redux/slices/userSlice';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const onLogin = async (payload: LoginValues) => {
        setIsLoading(true);

        try {
            const token = await AuthRemoteDataSource.login(payload);
            localStorage.setItem('token', token);

            const user = await UserRemoteDataSource.getLoggedUser(token);
            dispatch(setUser(user));

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
