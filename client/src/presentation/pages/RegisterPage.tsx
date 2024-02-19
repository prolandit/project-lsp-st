import { useNavigate } from 'react-router-dom';
import { Role } from '../../common/enum';
import { RegisterType } from '../../common/types';
import FormRegister from '../components/Fragments/FormRegister';
import AuthLayout from '../components/Layouts/AuthLayout';

const RegisterPage = () => {
    const navigate = useNavigate();

    const onRegister = (email: string, fullName: string, password: string) => {
        const user: RegisterType = {
            email,
            fullName,
            password,
            role: Role.ASESI,
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
