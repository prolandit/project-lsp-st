import { twMerge } from 'tailwind-merge';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, ...props }: Props) => {
    return (
        <button
            className={twMerge(
                'bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded',
                className
            )}
            {...props}
        />
    );
};

export default Button;
