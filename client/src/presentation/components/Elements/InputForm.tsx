import Input from './Input';
import Label from './Input/Label';

type Props = {
    prefix?: React.ReactNode;
    name: string;
    type: string;
    placeholder: string;
    text: string;
};

const InputForm = ({ prefix, name, type, placeholder, text }: Props) => {
    return (
        <div className='flex flex-col gap-3'>
            <Label htmlFor={name}>{text}</Label>
            <Input
                prefix={prefix}
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputForm;
