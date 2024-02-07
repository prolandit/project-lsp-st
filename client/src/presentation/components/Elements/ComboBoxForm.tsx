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
    value: string;
    placeholder?: string;
    horizontally?: boolean;
};

const ComboBoxForm = ({
    className,
    important,
    name,
    text,
    value,
    placeholder,
    items,
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
            <ComboBox
                name={name}
                items={items}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
};

export default ComboBoxForm;
