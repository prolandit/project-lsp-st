import FormRegister from '../components/Fragments/FormRegister';
import AuthLayout from '../components/Layouts/AuthLayout';

const RegisterPage = () => {
    return (
        <AuthLayout
            title='Daftar'
            subtitle='Jika anda telah memiliki akun'
            navigationTitle='Masuk disini ?'
            navigateTo='/login'
        >
            <FormRegister />
        </AuthLayout>
    );
};

export default RegisterPage;
