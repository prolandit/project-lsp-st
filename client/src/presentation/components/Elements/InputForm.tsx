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
    text: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    horizontally?: boolean;
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
}: Props) => {
    return (
        <div className={classNames('flex flex-col gap-3', className)}>
            <Label htmlFor={name}>
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
                prefix={prefix}
                value={value}
                onChange={onChange}
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputForm;
