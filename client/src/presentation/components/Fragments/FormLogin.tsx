import { Button, Flex } from 'antd';
import { CiLock, CiMail } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import InputForm from '../Elements/InputForm';

const FormLogin = () => {
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
                type='primary'
                className='mt-5 h-[45px] bg-blue-500 hover:bg-blue-700'
                onClick={() => {}}
            >
                Masuk
            </Button>
        </Flex>
    );
};

export default FormLogin;
