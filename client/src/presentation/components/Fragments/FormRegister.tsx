import { useFormik } from 'formik';
import { CiLock, CiMail } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { registerSchema } from '../../../common/formSchemas';
import { RegisterValues } from '../../../common/types';
import Alert from '../Elements/Alert';
import Button from '../Elements/Button';
import InputForm from '../Elements/InputForm';

type Props = {
    onRegister: (payload: RegisterValues) => void;
};

const FormRegister = ({ onRegister }: Props) => {
    const { errors, touched, values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            fullName: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: registerSchema,
        onSubmit: onRegister,
    });

    return (
        <form
            className='flex flex-col gap-5'
            onSubmit={handleSubmit}
        >
            <InputForm
                type='email'
                name='email'
                value={values.email}
                onChange={handleChange}
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
                type='fullName'
                name='fullName'
                value={values.fullName}
                onChange={handleChange}
                placeholder='Masukkan Nama Lengkap Anda'
                text='Nama Lengkap'
                prefix={<IoPersonOutline className='text-lg text-black me-3' />}
            />
            {errors.fullName && touched.fullName ? (
                <Alert
                    message={errors.fullName}
                    type='error'
                />
            ) : null}
            <InputForm
                type='password'
                name='password'
                value={values.password}
                onChange={handleChange}
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
                value={values.passwordConfirmation}
                onChange={handleChange}
                placeholder='Konfirmasi Password'
                text='Konfirmasi Password'
                prefix={<CiLock className='text-lg text-black me-3' />}
            />
            {errors.passwordConfirmation && touched.passwordConfirmation ? (
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
        </form>
    );
};

export default FormRegister;
