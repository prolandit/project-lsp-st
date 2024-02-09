import classNames from 'classnames';
import { OptionType } from '../../../common/types';
import ComboBox from './ComboBox';
import Label from './Input/Label';

type Props = {
    className?: string;
    important?: boolean;
    name: string;
    text: string;
    items: OptionType[];
    value?: string | number | readonly string[] | undefined;
    placeholder?: string;
    horizontally?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const ComboBoxForm = ({
    className,
    important,
    name,
    text,
    value,
    placeholder,
    items,
    onChange,
    horizontally = false,
}: Props) => {
    const verticalClassName = 'flex flex-col gap-3';
    const horizontalClassName =
        'flex flex-col lg:flex-row lg:items-center gap-3';
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
            <ComboBox
                className={`${horizontally ? 'lg:w-full' : ''}`}
                name={name}
                items={items}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default ComboBoxForm;
