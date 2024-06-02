import { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

type Props = {
    className?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    type: string;
    name: string;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    value?: string | number | readonly string[] | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    checked?: boolean;
};

const Input = ({
    className,
    prefix,
    suffix,
    type,
    name,
    placeholder,
    value,
    defaultValue,
    onChange,
    minLength,
    maxLength,
    disabled,
    checked,
}: Props) => {
    const [obscureText, setObscureText] = useState(true);
    const isPassword = type === 'password';

    return (
        <div className='flex items-center justify-between w-full rounded-md'>
            <div className='relative w-full'>
                <div className='absolute -translate-y-1/2 top-1/2 ms-4'>
                    {prefix !== undefined ? prefix : <span></span>}
                </div>
                <input
                    value={value}
                    defaultValue={defaultValue}
                    name={name}
                    onChange={onChange}
                    type={obscureText ? type : 'text'}
                    minLength={minLength}
                    maxLength={maxLength}
                    className={twMerge(
                        `w-full py-3 text-sm font-medium text-black placeholder-gray-500 bg-gray-100 rounded-md outline-none focus:border-blue-500 ${
                            isPassword && prefix
                                ? 'px-12'
                                : isPassword || suffix
                                ? 'ps-4 pe-12'
                                : prefix === undefined
                                ? 'ps-4 pe-4'
                                : 'ps-12 pe-4'
                        }`,
                        disabled ? 'bg-gray-100 border-gray-500' : 'bg-white border border-gray-300',
                        className
                    )}
                    placeholder={placeholder}
                    disabled={disabled}
                    checked={checked}
                />
                <div className='absolute right-0 -translate-y-1/2 top-1/2 me-4'>
                    {suffix !== undefined ? suffix : <span></span>}
                </div>
                <div className='absolute right-0 -translate-y-1/2 top-1/2 me-4'>
                    {isPassword &&
                        (obscureText ? (
                            <IoEyeOffOutline
                                className='text-lg text-gray-500'
                                onClick={() => setObscureText(false)}
                            />
                        ) : (
                            <IoEyeOutline
                                className='text-lg text-gray-500'
                                onClick={() => setObscureText(true)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Input;
