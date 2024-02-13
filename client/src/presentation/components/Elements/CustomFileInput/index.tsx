/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { IoMdCloudUpload } from 'react-icons/io';
import FileNameDisplayer from '../FilenameDisplayer';

type Props = {
    className?: string;
    name: string;
    placeholder?: string;
    type?: string | undefined;
    accept?: string | undefined;
    value?: File | null | undefined;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomFileInput = ({
    className,
    name,
    placeholder,
    type,
    value,
    accept,
    onChange,
}: Props) => {
    return (
        <div className='flex flex-col items-center justify-center w-full gap-4 lg:h-[520px] mx-4 lg:mx-0'>
            <div
                className='flex flex-col items-center justify-center w-full p-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer lg:w-3/4 lg:h-full'
                onClick={() => document.getElementById('fileUpload')?.click()}
            >
                <IoMdCloudUpload className='mb-4 text-5xl text-blue-500' />
                <span className='font-semibold'>Click to upload</span>
                <span className='text-sm'>max 5MB</span>
                <input
                    id='fileUpload'
                    name={name}
                    type={type === undefined ? 'file' : type}
                    accept={accept === undefined ? undefined : accept}
                    className={className}
                    onChange={onChange}
                    placeholder={placeholder}
                    hidden
                />
            </div>
            <FileNameDisplayer
                value={value}
                className='lg:w-3/4'
            />
        </div>
    );
};

export default CustomFileInput;
