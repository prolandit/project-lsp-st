import { FaFileUpload } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

type Props = {
    value: File | null | undefined;
    className?: string;
};

const FileNameDisplayer = ({ value, className }: Props) => {
    return (
        <div
            className={twMerge(
                `flex flex-row items-center justify-start w-full px-2 py-2 bg-blue-100 rounded-md gap-3`,
                className
            )}
        >
            <FaFileUpload className='text-blue-700' />
            <span className='overflow-hidden font-medium max-w-40 lg:max-w-96 text-ellipsis'>
                {value ? value.name : 'No selected file'}
            </span>
        </div>
    );
};

export default FileNameDisplayer;
