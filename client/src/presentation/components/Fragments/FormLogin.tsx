import { CiLock, CiMail } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Elements/Button';
import InputForm from '../Elements/InputForm';

const FormLogin = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-5'>
            <InputForm
                type='email'
                name='email'
                placeholder='Masukkan Email Anda'
                text='Email'
                prefix={<CiMail className='text-lg text-black me-3' />}
            />
            <InputForm
                type='password'
                name='password'
                placeholder='Masukkan Password Anda'
                text='Password'
                prefix={<CiLock className='text-lg text-black me-3' />}
            />
            <Link
                to='#'
                className='items-end justify-end text-sm font-medium text-gray-500 text-end'
            >
                Lupa Password ?
            </Link>
            <Button
                className='mt-5 h-[45px] bg-blue-500 hover:bg-blue-700'
                onClick={() => navigate('/profile')}
            >
                Masuk
            </Button>
        </div>
    );
};

export default FormLogin;
