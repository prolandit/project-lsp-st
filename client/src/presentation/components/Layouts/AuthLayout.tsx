import { Link } from 'react-router-dom';
import AnimationContainer from '../Fragments/AnimationContainer';

interface Props {
    title: string;
    subtitle: string;
    navigationTitle: string;
    children: React.ReactNode;
    navigateTo: string;
}

const AuthLayout = ({
    title,
    subtitle,
    navigationTitle,
    navigateTo,
    children,
}: Props) => {
    return (
        <AnimationContainer className='flex items-center justify-center min-h-screen duration-300 sm:bg-gray-100'>
            <div className='w-full max-w-md px-5 py-10 bg-white rounded-md md:px-10 sm:shadow-lg'>
                <div className='mb-10'>
                    <h1 className='mb-3 text-3xl font-semibold'>{title}</h1>
                    <p className='text-sm'>{subtitle}</p>
                    <div className='flex flex-row gap-1 mt-1'>
                        <p className='text-sm'>Anda bisa </p>
                        <Link
                            to={navigateTo}
                            className='text-sm font-semibold text-blue-500'
                        >
                            {navigationTitle}
                        </Link>
                    </div>
                </div>
                {children}
            </div>
        </AnimationContainer>
    );
};

export default AuthLayout;
