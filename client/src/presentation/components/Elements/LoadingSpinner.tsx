import { CgSpinnerTwo } from 'react-icons/cg';

interface Props {
    show: boolean;
}

const LoadingSpinner = ({ show }: Props) => {
    if (!show) return;
    return (
        <div className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-300 bg-opacity-50'>
            <CgSpinnerTwo className='text-5xl text-blue-500 animate-spin' />
        </div>
    );
};

export default LoadingSpinner;
