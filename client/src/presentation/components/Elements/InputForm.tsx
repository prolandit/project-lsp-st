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

const InputForm = ({ suffixIcon, name, type, placeholder, text }: Props) => {
    return (
        <div className='flex flex-col gap-3'>
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
