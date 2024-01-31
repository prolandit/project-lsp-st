import React from 'react';
import FormLogin from '../components/Fragments/FormLogin';
import AuthLayout from '../components/Layouts/AuthLayout';

const LoginPage = (): React.JSX.Element => {
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
