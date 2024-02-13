import { FaFileUpload } from 'react-icons/fa';

type Props = {
    value: File | null | undefined;
};

const FileNameDisplayer = ({ value }: Props) => {
    return (
        <div className='flex flex-row items-center justify-between w-full px-4 py-2 bg-blue-100 rounded-md lg:w-3/4'>
            <FaFileUpload className='text-blue-700' />
            <div className='flex flex-row items-center gap-2'>
                <span className='overflow-hidden font-medium max-w-40 lg:max-w-96 text-ellipsis'>
                    {value ? value.name : 'No selected file'}
                </span>
                <span className='font-semibold'>-</span>
            </div>
        </div>
    );
};

export default FileNameDisplayer;
