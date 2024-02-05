import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    subtitle: string;
    navigationTitle: string;
    children: React.ReactNode;
    navigateTo: string;
};

const AuthLayout = ({
    title,
    subtitle,
    navigationTitle,
    navigateTo,
    children,
}: Props) => {
    return (
        <div className='flex items-center justify-center min-h-screen duration-300 sm:bg-gray-100'>
            <div className='w-full max-w-md p-10 bg-white rounded-md sm:shadow-lg'>
                <div className='mb-10'>
                    <h1 className='text-3xl !text-left font-semibold mb-3'>
                        {title}
                    </h1>
                    <p className='text-xs'>{subtitle}</p>
                    <div className='flex flex-row gap-1 mt-1'>
                        <p className='text-xs'>Anda bisa </p>
                        <Link
                            to={navigateTo}
                            className='text-xs font-semibold text-blue-500'
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
