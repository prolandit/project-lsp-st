import axios, { AxiosError } from 'axios';
import {
    AsesiProfileValues,
    ErrorResponse,
    UserType,
} from '../../common/types';

const UserRemoteDataSource = {
    changeProfile: async (token: string, payload: AsesiProfileValues) => {
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

export default UserRemoteDataSource;
