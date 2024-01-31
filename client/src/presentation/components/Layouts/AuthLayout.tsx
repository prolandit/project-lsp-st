import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    subtitle: string;
    navigationTitle: string;
    children: React.ReactNode;
    navigateTo: string;
};

const AuthLayout = (props: Props): React.JSX.Element => {
    const { title, subtitle, navigationTitle, navigateTo, children } = props;

    return (
        <div className='flex justify-center min-h-screen items-center bg-gray-50'>
            <div className='w-full max-w-md bg-white p-10 rounded-md sm:shadow-2xl'>
                <div className='mb-10'>
                    <h1 className='text-3xl !text-left font-semibold mb-3'>
                        {title}
                    </h1>
                    <p className='text-xs'>{subtitle}</p>
                    <div className='flex flex-row gap-1 mt-1'>
                        <p className='text-xs'>Anda bisa </p>
                        <Link
                            to={navigateTo}
                            className='text-xs font-semibold text-blue-500 cursor-pointer'
                        >
                            {navigationTitle}
                        </Link>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
