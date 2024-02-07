import { Button, Flex } from 'antd';
import { CiLock, CiMail } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import InputForm from '../Elements/InputForm';

const FormRegister = () => {
    const navigate = useNavigate();

    return (
        <Flex
            gap={20}
            vertical
        >
            <InputForm
                type='email'
                name='email'
                placeholder='Masukkan Email Anda'
                text='Email'
                prefix={<CiMail className='text-lg text-black me-3' />}
            />
            <InputForm
                type='fullname'
                name='fullname'
                placeholder='Masukkan Nama Lengkap Anda'
                text='Nama Lengkap'
                prefix={<IoPersonOutline className='text-lg text-black me-3' />}
            />
            <InputForm
                type='password'
                name='password'
                placeholder='Masukkan Password'
                text='Password'
                prefix={<CiLock className='text-lg text-black me-3' />}
            />
            <InputForm
                type='password'
                name='password_confirmation'
                placeholder='Konfirmasi Password'
                text='Konfirmasi Password'
                prefix={<CiLock className='text-lg text-black me-3' />}
            />
            <Button
                type='primary'
                className='mt-5 h-[45px] bg-blue-500 hover:bg-blue-700'
                onClick={() => navigate('/profile')}
            >
                Daftar
            </Button>
        </Flex>
    );
};

export default FormRegister;
