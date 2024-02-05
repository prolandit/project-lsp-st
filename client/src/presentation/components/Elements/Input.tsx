import { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

type Props = {
    suffixIcon?: React.ReactNode;
    type: string;
    name: string;
    placeholder: string;
};

const Input = ({ suffixIcon, type, name, placeholder }: Props) => {
    const [obscureText, setObscureText] = useState(true);
    const isPassword = type === 'password';

    return (
        <div className='flex items-center justify-between rounded-md'>
            <div className='relative w-full'>
                <div className='absolute -translate-y-1/2 top-1/2'>
                    {suffixIcon && suffixIcon}
                </div>
                <input
                    name={name}
                    type={obscureText ? type : 'text'}
                    className={`w-full ${
                        isPassword ? 'px-12' : 'ps-12 pe-3'
                    } py-3 text-sm font-medium text-black placeholder-gray-500 bg-gray-100 rounded-md outline-none focus:border-blue-500`}
                    placeholder={placeholder}
                />
                <div className='absolute right-0 -translate-y-1/2 top-1/2'>
                    {isPassword &&
                        (obscureText ? (
                            <IoEyeOutline
                                className='text-lg text-gray-500 me-3'
                                onClick={() => setObscureText(false)}
                            />
                        ) : (
                            <IoEyeOffOutline
                                className='text-lg text-gray-500 me-3'
                                onClick={() => setObscureText(true)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Input;
