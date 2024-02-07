import { Alert } from 'antd';
import { Form, Formik, FormikHelpers } from 'formik';
import { CiLock, CiMail } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import * as Yup from 'yup';
import { RegisterValues } from '../../../common/types';
import Button from '../Elements/Button';
import InputForm from '../Elements/InputForm';

type Props = {
    onRegister: (email: string, fullname: string, password: string) => void;
};

const FormRegister = ({ onRegister }: Props) => {
    const registerSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email tidak valid')
            .required('Email tidak boleh kosong'),
        fullname: Yup.string().required('Nama Lengkap tidak boleh kosong'),
        password: Yup.string().required('Password tidak boleh kosong'),
        passwordConfirmation: Yup.string().required(
            'Konfirmasi Password tidak boleh kosong'
        ),
    });

    return (
        <Formik
            initialValues={{
                email: '',
                fullname: '',
                password: '',
                passwordConfirmation: '',
            }}
            validationSchema={registerSchema}
            onSubmit={(
                values: RegisterValues,
                { setSubmitting }: FormikHelpers<RegisterValues>
            ) => {
                onRegister(values.email, values.fullname, values.password);
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
                        type='fullname'
                        name='fullname'
                        placeholder='Masukkan Nama Lengkap Anda'
                        text='Nama Lengkap'
                        prefix={
                            <IoPersonOutline className='text-lg text-black me-3' />
                        }
                    />
                    {errors.fullname && touched.fullname ? (
                        <Alert
                            message={errors.fullname}
                            type='error'
                        />
                    ) : null}
                    <InputForm
                        type='password'
                        name='password'
                        placeholder='Masukkan Password'
                        text='Password'
                        prefix={<CiLock className='text-lg text-black me-3' />}
                    />
                    {errors.password && touched.password ? (
                        <Alert
                            message={errors.password}
                            type='error'
                        />
                    ) : null}
                    <InputForm
                        type='password'
                        name='passwordConfirmation'
                        placeholder='Konfirmasi Password'
                        text='Konfirmasi Password'
                        prefix={<CiLock className='text-lg text-black me-3' />}
                    />
                    {errors.passwordConfirmation &&
                    touched.passwordConfirmation ? (
                        <Alert
                            message={errors.passwordConfirmation}
                            type='error'
                        />
                    ) : null}
                    <Button
                        type='submit'
                        className='mt-5 h-[45px] bg-blue-500 hover:bg-blue-700'
                    >
                        Daftar
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default FormRegister;
