import { AxiosError } from 'axios';
import { ErrorResponse } from './types';

export const handleAxiosError = (error: unknown): void => {
    const axiosError = error as AxiosError<ErrorResponse>;

    if (axiosError.response) {
        if (axiosError.response.status === 400) {
            throw new Error(axiosError.response.data.message);
        } else {
            throw new Error(axiosError.response.data.message);
        }
    } else {
        throw new Error('Network Error: Terjadi kesalahan pada server');
    }
};
