import FormLogin from '../components/Fragments/FormLogin';
import AuthLayout from '../components/Layouts/AuthLayout';

const LoginPage = () => {
    return (
        <AuthLayout
            title='Masuk'
            subtitle='Jika anda belum memiliki akun'
            navigationTitle='Daftar disini ?'
            navigateTo='/register'
        >
            <FormLogin />
        </AuthLayout>
    );
};

export default LoginPage;
