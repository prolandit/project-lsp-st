import { CiLock, CiMail } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import Button from '../Elements/Button';
import InputForm from '../Elements/InputForm';

const FormRegister = () => {
    return (
        <div className='flex flex-col gap-5 '>
            <InputForm
                type='email'
                name='email'
                placeholder='Masukkan Email Anda'
                text='Email'
                suffixIcon={<CiMail className='text-black ms-3' />}
            />
            <InputForm
                type='fullname'
                name='fullname'
                placeholder='Masukkan Nama Lengkap Anda'
                text='Nama Lengkap'
                suffixIcon={<IoPersonOutline className='text-black ms-3' />}
            />
            <InputForm
                type='password'
                name='password'
                placeholder='Masukkan Password Anda'
                text='Password'
                suffixIcon={<CiLock className='text-black ms-3' />}
            />
            <InputForm
                type='password_confirmation'
                name='password_confirmation'
                placeholder='Masukkan Konfirmasi Password'
                text='Password'
                suffixIcon={<CiLock className='text-black ms-3' />}
            />
            <Button
                className='mt-5'
                onClick={() => {}}
            >
                Daftar
            </Button>
        </div>
    );
};

export default FormRegister;
