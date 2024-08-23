import axios, { AxiosError } from 'axios';
import { ErrorResponse, loginPayload, LoginValues, RegisterValues } from '../../common/types';

const AuthRemoteDataSource = {
    register: async (payload: RegisterValues) => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api/v1/auth/register`;

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
    login: async (payload: LoginValues): Promise<loginPayload> => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api/v1/auth/login`;

        try {
            const response = await axios.post(endpoint, payload);
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
};

export default AuthRemoteDataSource;
