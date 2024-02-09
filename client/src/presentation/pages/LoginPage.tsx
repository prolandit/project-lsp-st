import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoggedUser } from '../../common/types';
import FormLogin from '../components/Fragments/FormLogin';
import AuthLayout from '../components/Layouts/AuthLayout';

const LoginPage = () => {
    const navigate = useNavigate();

    const onLogin = (email: string, password: string) => {
        const user: LoggedUser = JSON.parse(localStorage.getItem('user') ?? '');

        if (user.email === email && user.password === password) {
            navigate('/profile');
        } else {
            toast.error('Email atau Password salah', {
                position: 'top-center',
                hideProgressBar: true,
            });
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
            <ToastContainer />
        </>
    );
};

export default LoginPage;
