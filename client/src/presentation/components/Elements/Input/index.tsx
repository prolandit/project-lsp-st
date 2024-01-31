import React from 'react';
import Input from './Input';
import Label from './Label';

type Props = {
    suffixIcon?: React.ReactNode;
    name: string;
    type: string;
    placeholder: string;
    text: string;
};

const InputForm = (props: Props): React.JSX.Element => {
    const { suffixIcon, name, type, placeholder, text } = props;
    return (
        <div className='flex flex-col gap-2'>
            <Label htmlFor={name}>{text}</Label>
            <Input
                suffixIcon={suffixIcon}
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputForm;
