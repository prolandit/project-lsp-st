import { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

interface Props
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        'prefix' | 'suffix'
    > {
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
}

const Input = ({ className, prefix, suffix, ...props }: Props) => {
    const [obscureText, setObscureText] = useState(true);
    const { type } = props;
    const isPassword = type === 'password';

    return (
        <div className='flex items-center justify-between w-full rounded-md'>
            <div className='relative w-full'>
                <div className='absolute -translate-y-1/2 top-1/2 ps-4'>
                    {prefix !== undefined ? prefix : <span></span>}
                </div>
                <input
                    {...props}
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
                        className
                    )}
                    type={obscureText ? type : 'text'}
                />
                <div className='absolute right-0 -translate-y-1/2 top-1/2 pe-4'>
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
