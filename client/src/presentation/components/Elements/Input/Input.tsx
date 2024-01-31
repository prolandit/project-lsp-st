import React, { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

type Props = {
    suffixIcon?: React.ReactNode;
    type: string;
    name: string;
    placeholder: string;
};

const Input = (props: Props): React.JSX.Element => {
    const { suffixIcon, type, name, placeholder } = props;

    const [obscureText, setObscureText] = useState(true);
    const isPassword = type === 'password';

    return (
        <div className='flex flex-row items-center bg-gray-100 rounded-md'>
            {suffixIcon && suffixIcon}
            <input
                name={name}
                type={obscureText ? type : 'text'}
                className='w-full bg-gray-100 px-3 py-5 rounded-md outline-none focus:border-blue-500 text-black text-xs font-medium placeholder-gray-500 h-8'
                placeholder={placeholder}
            />
            {isPassword &&
                (obscureText ? (
                    <IoEyeOutline
                        className='me-3 text-gray-500'
                        onClick={() => setObscureText(false)}
                    />
                ) : (
                    <IoEyeOffOutline
                        className='me-3 text-gray-500'
                        onClick={() => setObscureText(true)}
                    />
                ))}
        </div>
    );
};

export default Input;
