import classNames from 'classnames';

type Props = {
    className?: string;
    htmlFor: string;
    children: React.ReactNode;
};

const Label = ({ className, htmlFor, children }: Props) => {
    return (
        <label
            htmlFor={htmlFor}
            className={classNames('text-sm font-medium text-black', className)}
        >
            {children}
        </label>
    );
};

export default Label;
