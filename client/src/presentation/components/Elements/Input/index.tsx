import classNames from 'classnames';
import { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

type Props = {
    className?: string;
    prefix?: React.ReactNode;
    type: string;
    name: string;
    placeholder?: string;
    value?: string | number | readonly string[] | undefined;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
    className,
    prefix,
    type,
    name,
    placeholder,
    value,
    onChange,
}: Props) => {
    const [obscureText, setObscureText] = useState(true);
    const isPassword = type === 'password';

    return (
        <div
            className={classNames(
                'flex items-center justify-between rounded-md',
                className
            )}
        >
            <div className='relative w-full'>
                <div className='absolute -translate-y-1/2 top-1/2 ms-4'>
                    {prefix !== undefined ? prefix : <span></span>}
                </div>
                <input
                    value={value}
                    name={name}
                    onChange={onChange}
                    type={obscureText ? type : 'text'}
                    className={`w-full ${
                        isPassword
                            ? 'px-12'
                            : prefix === undefined
                            ? 'ps-4 pe-4'
                            : 'ps-12 pe-4'
                    } py-3 text-sm font-medium text-black placeholder-gray-500 bg-gray-100 rounded-md outline-none focus:border-blue-500`}
                    placeholder={placeholder}
                />
                <div className='absolute right-0 -translate-y-1/2 top-1/2'>
                    {isPassword &&
                        (obscureText ? (
                            <IoEyeOffOutline
                                className='text-lg text-gray-500 me-4'
                                onClick={() => setObscureText(false)}
                            />
                        ) : (
                            <IoEyeOutline
                                className='text-lg text-gray-500 me-4'
                                onClick={() => setObscureText(true)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Input;
