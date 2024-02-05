import { Flex, Input } from 'antd';
import Label from './Label';

type Props = {
    prefix?: React.ReactNode;
    name: string;
    type: string;
    placeholder: string;
    text: string;
};

const InputForm = ({ prefix, name, type, placeholder, text }: Props) => {
    return (
        <Flex
            gap={10}
            vertical
        >
            <Label htmlFor={name}>{text}</Label>
            {type === 'password' ? (
                <Input.Password
                    size='large'
                    placeholder={placeholder}
                    name={name}
                    prefix={prefix}
                />
            ) : (
                <Input
                    size='large'
                    placeholder={placeholder}
                    name={name}
                    prefix={prefix}
                />
            )}
        </Flex>
    );
};

export default InputForm;
