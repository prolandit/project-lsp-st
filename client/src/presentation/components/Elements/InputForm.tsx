import classNames from 'classnames';
import Input from './Input';
import Label from './Input/Label';

type Props = {
    className?: string;
    important?: boolean;
    prefix?: React.ReactNode;
    name: string;
    type: string;
    placeholder?: string;
    maxLength?: number;
    text: string;
    value?: string | number | readonly string[] | undefined;
    horizontally?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputForm = ({
    className,
    important,
    prefix,
    name,
    type,
    placeholder,
    text,
    value,
    onChange,
    maxLength,
    horizontally = false,
}: Props) => {
    const verticalClassName = 'flex flex-col gap-3';
    const horizontalClassName =
        'flex flex-col lg:flex-row lg:items-center gap-3';
    return (
        <div
            className={classNames(
                `${horizontally ? horizontalClassName : verticalClassName}`,
                className
            )}
        >
            <Label
                htmlFor={name}
                className={`${horizontally ? 'lg:w-60' : ''}`}
            >
                {important ? (
                    <span className='flex items-center gap-0.5'>
                        <span>{text}</span>
                        <span className='text-red-700'>{'*'}</span>
                    </span>
                ) : (
                    text
                )}
            </Label>
            <Input
                className={`${horizontally ? 'lg:w-full' : ''}`}
                prefix={prefix}
                value={value}
                onChange={onChange}
                maxLength={maxLength}
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputForm;
