import { twMerge } from 'tailwind-merge';
import { OptionType } from '../../../common/types';
import ComboBox from './ComboBox';
import Label from './Input/Label';

interface Props {
    className?: string;
    important?: boolean;
    name: string;
    text: string;
    items?: OptionType[];
    value?: string | number | readonly string[] | undefined;
    placeholder?: string;
    horizontally?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ComboBoxForm = ({
    className,
    important,
    name,
    text,
    value,
    placeholder,
    items,
    onChange,
    disabled,
    horizontally = false,
}: Props) => {
    const verticalClassName = 'flex flex-col gap-3';
    const horizontalClassName =
        'flex flex-col lg:flex-row lg:items-center gap-3';
    return (
        <div
            className={twMerge(
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
            <ComboBox
                className={`${horizontally ? 'lg:w-full' : ''}`}
                name={name}
                items={items}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};

export default ComboBoxForm;
