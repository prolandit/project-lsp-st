import { useNavigate } from 'react-router-dom';
import FormRegister from '../components/Fragments/FormRegister';
import AuthLayout from '../components/Layouts/AuthLayout';

const RegisterPage = () => {
    const navigate = useNavigate();

    const onRegister = (email: string, fullname: string, password: string) => {
        const user = {
            email,
            fullname,
            password,
            role: 'Asesi',
        };
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/profile');
    };

    return (
        <AuthLayout
            title='Daftar'
            subtitle='Jika anda telah memiliki akun'
            navigationTitle='Masuk disini ?'
            navigateTo='/login'
        >
            <FormRegister onRegister={onRegister} />
        </AuthLayout>
    );
};

export default RegisterPage;
