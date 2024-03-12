import axios, { AxiosError } from 'axios';
import { ErrorResponse } from './types';

export const formattedDate = (isoDate: string): string => {
    const date = new Date(isoDate);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const fDate = `${year}-${month}-${day}`;
    return fDate;
};

export const downloadFile = async (url: string): Promise<File | undefined> => {
    if (url.length) {
        const response = await axios.get(url, {
            responseType: 'arraybuffer',
        });

        const parsedUrl = new URL(url);
        const pathnameParts = parsedUrl.pathname.split('/');
        const filename = pathnameParts[pathnameParts.length - 1];

        const blob = new Blob([response.data], { type: 'image/png' });
        const file = new File([blob], filename, { type: 'image/png' });

        return file;
    }

    return undefined;
};

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
