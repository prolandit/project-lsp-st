import Input from './Input';
import Label from './Input/Label';

interface Props {
    name: string;
    text: string;
    value?: string | number | readonly string[] | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxForm = ({
    name,
    text,
    value,
    defaultValue,
    onChange,
    disabled,
}: Props) => {
    return (
        <div className='flex flex-col gap-3 lg:flex-row lg:items-center'>
            <Label
                htmlFor={name}
                className='lg:w-60'
            >
                {text}
            </Label>
            <Input
                type='checkbox'
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                name={name}
                disabled={disabled}
            />
        </div>
    );
};

export default CheckboxForm;
