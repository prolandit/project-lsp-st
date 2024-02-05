import { CiLock, CiMail } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import Button from '../Elements/Button';
import InputForm from '../Elements/InputForm';

const FormLogin = () => {
    return (
        <div className='flex flex-col gap-5 '>
            <InputForm
                type='email'
                name='email'
                placeholder='Masukkan Email Anda'
                text='Email'
                suffixIcon={<CiMail className='text-lg text-black ms-3' />}
            />
            <InputForm
                type='password'
                name='password'
                placeholder='Masukkan Password Anda'
                text='Password'
                suffixIcon={<CiLock className='text-lg text-black ms-3' />}
            />
            <Link
                to='#'
                className='items-end justify-end text-sm font-medium text-gray-500 text-end'
            >
                Forgot Password ?
            </Link>
            <Button
                className='mt-5'
                onClick={() => {}}
            >
                Masuk
            </Button>
        </div>
    );
};

export default FormLogin;
