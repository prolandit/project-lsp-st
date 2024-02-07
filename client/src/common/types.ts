import { NotificationArgsProps } from 'antd';

export type NotificationPlacement = NotificationArgsProps['placement'];

export type LoginValues = {
    email: string;
    password: string;
};
export type RegisterValues = {
    fullname: string;
    email: string;
    password: string;
    passwordConfirmation: string;
};
