import { CiLock, CiMail } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import Button from '../Elements/Button';
import InputForm from '../Elements/Input';

const FormRegister = () => {
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
                type='fullname'
                name='fullname'
                placeholder='Masukkan Nama Lengkap Anda'
                text='Nama Lengkap'
                suffixIcon={<IoPersonOutline className='ms-3 text-black' />}
            />
            <InputForm
                type='password'
                name='password'
                placeholder='Masukkan Password Anda'
                text='Password'
                suffixIcon={<CiLock className='ms-3 text-black' />}
            />
            <InputForm
                type='password_confirmation'
                name='password_confirmation'
                placeholder='Masukkan Konfirmasi Password'
                text='Password'
                suffixIcon={<CiLock className='ms-3 text-black' />}
            />
            <Button
                className='mt-5'
                onClick={() => {}}
            >
                Login
            </Button>
        </div>
    );
};

export default FormRegister;
