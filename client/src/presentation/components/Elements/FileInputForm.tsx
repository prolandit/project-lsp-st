import classNames from 'classnames';
import FileInput from './FileInput';
import Label from './Input/Label';

type Props = {
    className?: string;
    important?: boolean;
    name: string;
    placeholder?: string;
    text: string;
    horizontally?: boolean;
    type?: string | undefined;
    accept?: string | undefined;
    value?: string | number | readonly string[] | undefined;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileInputForm = ({
    className,
    important,
    name,
    placeholder,
    onChange,
    text,
    value,
    type,
    accept,
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
            <FileInput
                className={`${horizontally ? 'lg:w-full' : ''}`}
                name={name}
                value={value}
                type={type}
                accept={accept}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default FileInputForm;
