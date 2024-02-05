type Props = {
    htmlFor: string;
    children: React.ReactNode;
};

const Label = ({ htmlFor, children }: Props) => {
    return (
        <label
            htmlFor={htmlFor}
            className='text-sm font-medium text-black'
        >
            {children}
        </label>
    );
};

export default Label;
