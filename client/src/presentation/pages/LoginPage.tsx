import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthRemoteDataSource from '../../data/datasources/AuthRemoteDataSource';
import LoadingSpinner from '../components/Elements/LoadingSpinner';
import FormLogin from '../components/Fragments/FormLogin';
import AuthLayout from '../components/Layouts/AuthLayout';

const LoginPage = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const onLogin = (email: string, password: string) => {
        setIsLoading(true);

        AuthRemoteDataSource.login({ email, password })
            .then((token) => {
                setIsLoading(false);
                localStorage.setItem('token', token);
                navigate('/profile');
            })
            .catch((error: Error) => {
                setIsLoading(false);
                toast.error(error.message, {
                    position: 'top-center',
                    hideProgressBar: true,
                });
            });
    };

    return (
        <>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <AuthLayout
                        title='Masuk'
                        subtitle='Jika anda belum memiliki akun'
                        navigationTitle='Daftar disini ?'
                        navigateTo='/register'
                    >
                        <FormLogin onLogin={onLogin} />
                    </AuthLayout>
                    <ToastContainer />
                </>
            )}
        </>
    );
};

export default LoginPage;
