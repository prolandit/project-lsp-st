import { twMerge } from 'tailwind-merge';

type Props = {
    type?: 'error' | 'warning' | 'info' | 'success';
    className?: string;
    message: string;
};

const Alert = ({ type = 'info', className, message }: Props) => {
    const errorClassName = 'bg-red-100 border border-red-300';
    const warningClassName = 'bg-orange-100 border border-orange-300';
    const infoClassName = 'bg-gray-100 border border-gray-300';
    const successClassName = 'bg-green-100 border border-gray-300';

    const listClassName = {
        error: errorClassName,
        warning: warningClassName,
        info: infoClassName,
        success: successClassName,
    };

    const selectedClassName = listClassName[type];

    return (
        <span
            className={twMerge(
                `px-3 py-2 text-xs rounded-md ${selectedClassName}`,
                className
            )}
        >
            {message}
        </span>
    );
};

export default Alert;
