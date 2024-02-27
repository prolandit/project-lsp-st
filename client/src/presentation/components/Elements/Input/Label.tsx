import { twMerge } from 'tailwind-merge';

type Props = {
    className?: string;
    htmlFor: string;
    children: React.ReactNode;
};

const Label = ({ className, htmlFor, children }: Props) => {
    return (
        <label
            htmlFor={htmlFor}
            className={twMerge('text-sm font-medium text-black', className)}
        >
            {children}
        </label>
    );
};

export default Label;
