import classNames from 'classnames';
import FileNameDisplayer from '../FilenameDisplayer';
import Label from '../Input/Label';

type Props = {
    className?: string;
    important?: boolean;
    name: string;
    text: string;
    value: File | string | undefined;
    horizontally?: boolean;
    onClick?: () => void;
};

const SignFileUploader = ({
    className,
    important,
    name,
    onClick,
    value,
    text,
    horizontally = false,
}: Props) => {
    const verticalClassName = 'flex flex-col gap-3';
    const horizontalClassName = `flex flex-col lg:flex-row lg:items-center gap-3`;
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

            <div className='flex flex-row items-center w-full gap-2'>
                <button
                    type='button'
                    className='px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200'
                    onClick={onClick}
                >
                    Upload
                </button>
                {value &&
                    (value instanceof File ? (
                        <FileNameDisplayer
                            value={value}
                            className='w-auto'
                        />
                    ) : (
                        <div className='flex flex-row gap-1'>
                            <span className='text-sm font-semibold'>
                                Keterangan:
                            </span>
                            <span className='text-sm'>{value}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SignFileUploader;
