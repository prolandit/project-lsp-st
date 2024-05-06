/* eslint-disable @typescript-eslint/no-explicit-any */

import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    name: string;
    placeholder?: string;
    type?: string | undefined;
    accept?: string | undefined;
    value?: string | number | readonly string[] | undefined;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = ({
    className,
    name,
    placeholder,
    value,
    type,
    accept,
    onChange,
}: Props) => {
    const defaultClassName =
        'block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100';
    return (
        <input
            name={name}
            type={type === undefined ? 'file' : type}
            accept={accept === undefined ? undefined : accept}
            className={twMerge(defaultClassName, className)}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default FileInput;
