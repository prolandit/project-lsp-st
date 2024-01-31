import React from 'react';

type Props = {
    onClick: () => void;
    className?: string;
    children: React.ReactNode;
};

const Button = (props: Props): React.JSX.Element => {
    const { children, className, onClick } = props;

    return (
        <button
            className={`bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
