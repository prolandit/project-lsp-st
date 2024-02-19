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

    const onLogin = async (email: string, password: string) => {
        setIsLoading(true);

        try {
            const token = await AuthRemoteDataSource.login({ email, password });
            localStorage.setItem('token', token);
            navigate('/profile');
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
            <ToastContainer />
        </>
    );
};

export default LoginPage;
