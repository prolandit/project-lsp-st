import classNames from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';
import { OptionType } from '../../../common/types';

type Props = {
    className?: string;
    name: string;
    placeholder?: string;
    value: string;
    items: OptionType[];
};

const ComboBox = ({ className, name, placeholder, value, items }: Props) => {
    return (
        <div
            className={classNames(
                'relative w-full rounded-md bg-gray-100',
                className
            )}
        >
            <select
                name={name}
                value={value === '' ? undefined : value}
                className='w-full px-4 py-3 text-sm font-medium text-black bg-gray-100 rounded-md outline-none appearance-none'
            >
                {placeholder && (
                    <option
                        selected
                        disabled
                    >
                        {placeholder}
                    </option>
                )}
                {items.map((item) => (
                    <option
                        key={item.key}
                        value={item.key}
                    >
                        {item.value}
                    </option>
                ))}
            </select>
            <IoIosArrowDown className='absolute right-0 -translate-y-1/2 top-1/2 me-4' />
        </div>
    );
};

export default ComboBox;
