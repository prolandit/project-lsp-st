import { useFormik } from 'formik';
import { CiLock, CiMail } from 'react-icons/ci';
import { LoginValues } from '../../../common/types';
import Button from '../Elements/Button';
import InputForm from '../Elements/InputForm';

interface Props {
    onLogin: (payload: LoginValues) => void;
}

const FormLogin = ({ onLogin }: Props) => {
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        // validationSchema: loginSchema,
        onSubmit: onLogin,
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
            {/* {errors.email && touched.email ? (
                <Alert
                    message={errors.email}
                    type='error'
                />
            ) : null} */}
            <InputForm
                type='password'
                name='password'
                value={values.password}
                onChange={handleChange}
                placeholder='Masukkan Password Anda'
                text='Password'
                prefix={<CiLock className='text-lg text-black me-3' />}
            />
            {/* {errors.password && touched.password ? (
                <Alert
                    message={errors.password}
                    type='error'
                />
            ) : null} */}
            <Button
                type='submit'
                className='mt-5 h-[45px] bg-blue-500 hover:bg-blue-700'
            >
                Masuk
            </Button>
        </form>
    );
};

export default FormLogin;
