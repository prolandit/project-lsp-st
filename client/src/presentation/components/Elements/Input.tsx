import React, { useState } from 'react';
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
        <div className='flex flex-row items-center bg-gray-100 rounded-md'>
            {suffixIcon && suffixIcon}
            <input
                name={name}
                type={obscureText ? type : 'text'}
                className='w-full h-8 px-3 py-5 text-xs font-medium text-black placeholder-gray-500 bg-gray-100 rounded-md outline-none focus:border-blue-500'
                placeholder={placeholder}
            />
            {isPassword &&
                (obscureText ? (
                    <IoEyeOutline
                        className='text-gray-500 me-3'
                        onClick={() => setObscureText(false)}
                    />
                ) : (
                    <IoEyeOffOutline
                        className='text-gray-500 me-3'
                        onClick={() => setObscureText(true)}
                    />
                ))}
        </div>
    );
};

export default Input;
