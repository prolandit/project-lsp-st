import { Alert } from 'antd';
import { Form, Formik, FormikHelpers } from 'formik';
import { CiLock, CiMail } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { LoginValues } from '../../../common/types';
import Button from '../Elements/Button';
import InputForm from '../Elements/InputForm';

type Props = {
    onLogin: (email: string, password: string) => void;
};

const FormLogin = ({ onLogin }: Props) => {
    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email tidak valid')
            .required('Email tidak boleh kosong'),
        password: Yup.string().required('Password tidak boleh kosong'),
    });

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={(
                values: LoginValues,
                { setSubmitting }: FormikHelpers<LoginValues>
            ) => {
                onLogin(values.email, values.password);
                setSubmitting(false);
            }}
        >
            {({ errors, touched }) => (
                <Form className='flex flex-col gap-5'>
                    <InputForm
                        type='email'
                        name='email'
                        placeholder='Masukkan Email Anda'
                        text='Email'
                        prefix={<CiMail className='text-lg text-black me-3' />}
                    />
                    {errors.email && touched.email ? (
                        <Alert
                            message={errors.email}
                            type='error'
                        />
                    ) : null}
                    <InputForm
                        type='password'
                        name='password'
                        placeholder='Masukkan Password Anda'
                        text='Password'
                        prefix={<CiLock className='text-lg text-black me-3' />}
                    />
                    {errors.password && touched.password ? (
                        <Alert
                            message={errors.password}
                            type='error'
                        />
                    ) : null}
                    <Link
                        to='#'
                        className='items-end justify-end text-sm font-medium text-gray-500 text-end'
                    >
                        Lupa Password ?
                    </Link>
                    <Button
                        type='submit'
                        className='mt-5 h-[45px] bg-blue-500 hover:bg-blue-700'
                    >
                        Masuk
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default FormLogin;
