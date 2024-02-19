import axios, { AxiosError } from 'axios';
import { ErrorResponse, LoginType, UserType } from '../../common/types';

const AuthRemoteDataSource = {
    login: async (payload: LoginType): Promise<string> => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api-em/auth/login`;

        try {
            const response = await axios.post(endpoint, payload);
            return response.data.token;
        } catch (error) {
            const axiosError = error as AxiosError<ErrorResponse>;

            if (axiosError.response) {
                throw new Error(axiosError.response.data.message);
            } else {
                throw new Error('Network Error: Terjadi kesalahan pada server');
            }
        }
    },
    getLoggedUser: async (token: string): Promise<UserType> => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api-em/user/profile`;

        try {
            const response = await axios.get(endpoint, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
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
};

export default AuthRemoteDataSource;
