import classNames from 'classnames';
import { FaFileUpload } from 'react-icons/fa';

type Props = {
    value: File | null | undefined;
    className?: string;
};

const FileNameDisplayer = ({ value, className }: Props) => {
    return (
        <div
            className={classNames(
                `flex flex-row items-center justify-start w-full px-0.5 py-2 bg-blue-100 rounded-md gap-2`,
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
