import axios, { AxiosError } from 'axios';
import { ErrorResponse, getTukALl, TukValues } from '../../common/types';

const TukRemoteDataSource = {
    getTukData: async (
        page: number,
        limit: number,
    ): Promise<getTukALl> => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api/v1/tuk/get_tuk?page=${page}&limit=${limit}`;

        try {
            const response = await axios.get(endpoint);
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError<ErrorResponse>;

            if (axiosError.response) {
                throw new Error(axiosError.response.data.message);
            } else {
                throw new Error('Network Error: Terjadi kesalahan pada server');
            }
        }
    },

    createTukData: async (payload: TukValues) => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api/v1/tuk/create_tuk`;

        try {
            await axios.post(endpoint, payload);
        } catch (error) {
            const axiosError = error as AxiosError<ErrorResponse>;

            if (axiosError.response) {
                throw new Error(axiosError.response.data.message);
            } else {
                throw new Error('Network Error: Terjadi kesalahan pada server');
            }
        }
    },

    getTukDataById: async (id: number): Promise<string> => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api/v1/tuk/get_tuk/${id}`;

        try {
            const response = await axios.get(endpoint);
            return response.data.data;
        } catch (error) {
            const axiosError = error as AxiosError<ErrorResponse>;

            if (axiosError.response) {
                throw new Error(axiosError.response.data.message);
            } else {
                throw new Error('Network Error: Terjadi kesalahan pada server');
            }
        }
    },

    updateTukData: async (id: number, payload: TukValues) => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api/v1/tuk/update_tuk/${id}`;

        try {
            await axios.patch(endpoint, payload);
        } catch (error) {
            const axiosError = error as AxiosError<ErrorResponse>;

            if (axiosError.response) {
                throw new Error(axiosError.response.data.message);
            } else {
                throw new Error('Network Error: Terjadi kesalahan pada server');
            }
        }
    },

    deleteTukData: async (id: number) => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api/v1/tuk/delete_tuk/${id}`;

        try {
            await axios.delete(endpoint);
        } catch (error) {
            const axiosError = error as AxiosError<ErrorResponse>;

            if (axiosError.response) {
                throw new Error(axiosError.response.data.message);
            } else {
                throw new Error('Network Error: Terjadi kesalahan pada server');
            }
        }
    }
}

export default TukRemoteDataSource