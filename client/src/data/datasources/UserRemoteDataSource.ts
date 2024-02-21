import axios, { AxiosError } from 'axios';
import {
    AsesiProfileValues,
    ChangePasswordValues,
    ErrorResponse,
    UserType,
} from '../../common/types';

const UserRemoteDataSource = {
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
    changeProfile: async (
        token: string,
        payload: AsesiProfileValues
    ): Promise<void> => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api-em/user/update`;

        try {
            const formData = new FormData();
            Object.keys(payload).forEach((key) => {
                formData.append(key, payload[key]);
            });

            await axios.patch(endpoint, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            const axiosError = error as AxiosError<ErrorResponse>;

            if (axiosError.response) {
                throw new Error(axiosError.response.data.message);
            } else {
                throw new Error('Network Error: Terjadi kesalahan pada server');
            }
        }
    },
    changePassword: async (
        token: string,
        payload: ChangePasswordValues
    ): Promise<void> => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api-em/user/change-password`;

        try {
            await axios.patch(endpoint, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
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

export default UserRemoteDataSource;
