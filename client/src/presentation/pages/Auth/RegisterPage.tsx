import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Constants from '../../../common/constants';
import { RegisterValues } from '../../../common/types';
import AuthRemoteDataSource from '../../../data/datasources/AuthRemoteDataSource';
import LoadingSpinner from '../../components/Elements/LoadingSpinner';
import FormRegister from '../../components/Fragments/FormRegister';
import AuthLayout from '../../components/Layouts/AuthLayout';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const onRegister = async (payload: RegisterValues) => {
        setIsLoading(true);

        try {
            await AuthRemoteDataSource.register(payload);
            navigate('/login');
            toast.success(Constants.registerSuccessMessage, {
                position: 'top-center',
                hideProgressBar: true,
            });
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
                title='Daftar'
                subtitle='Jika anda telah memiliki akun'
                navigationTitle='Masuk disini ?'
                navigateTo='/login'
            >
                <FormRegister onRegister={onRegister} />
            </AuthLayout>
            <LoadingSpinner show={isLoading} />
        </>
    );
};

export default RegisterPage;
