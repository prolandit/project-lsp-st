import classNames from 'classnames';

type Props = {
    onClick: () => void;
    className?: string;
    children: React.ReactNode;
};

const Button = ({ children, className, onClick }: Props) => {
    return (
        <button
            className={classNames(
                'bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
