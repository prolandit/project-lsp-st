import { CiLock, CiMail } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import Button from '../Elements/Button';
import InputForm from '../Elements/Input';

const FormLogin = () => {
    return (
        <div className='flex flex-col gap-5 '>
            <InputForm
                type='email'
                name='email'
                placeholder='Masukkan Email Anda'
                text='Email'
                suffixIcon={<CiMail className='ms-3 text-black' />}
            />
            <InputForm
                type='password'
                name='password'
                placeholder='Masukkan Password Anda'
                text='Password'
                suffixIcon={<CiLock className='ms-3 text-black' />}
            />
            <Link
                to='#'
                className='text-xs text-gray-500 font-light justify-end items-end text-end'
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
