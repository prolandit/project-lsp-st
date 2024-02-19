import axios from 'axios';
import { LoginType, UserType } from '../../common/types';

const AuthRemoteDataSource = {
    login: async (payload: LoginType): Promise<string> => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api-em/auth/login`;

        const response = await axios.post(endpoint, payload);

        if (response.status === 200) {
            const { token } = response.data;
            return token;
        } else {
            throw new Error(response.data.message);
        }
    },
    getLoggedUser: async (token: string): Promise<UserType> => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api-em/user/profile`;

        const response = await axios.get(endpoint, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            const user = response.data.data;
            return user;
        } else {
            throw new Error(response.data.message);
        }
    },
};

export default AuthRemoteDataSource;
