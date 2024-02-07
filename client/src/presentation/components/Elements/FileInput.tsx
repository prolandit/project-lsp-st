/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';

type Props = {
    className?: string;
    name: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileInput = ({ className, name, placeholder, onChange }: Props) => {
    const defaultClassName =
        'block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100';
    return (
        <input
            name={name}
            type='file'
            className={classNames(defaultClassName, className)}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default FileInput;
