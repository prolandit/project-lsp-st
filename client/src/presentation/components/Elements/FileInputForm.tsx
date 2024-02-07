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
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileInputForm = ({
    className,
    important,
    name,
    placeholder,
    onChange,
    text,
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
            <FileInput
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default FileInputForm;
