import axios, { AxiosError } from 'axios';
import {
    ChangePasswordValues,
    ErrorResponse,
    getUserALl,
    UserValues,
} from '../../common/types';

const UserRemoteDataSource = {
    getLoggedUser: async (token: string): Promise<string> => {
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

    createProfile: async (
        payload: UserValues
    ) => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api/v1/user`;

        const formData = new FormData();

        // Tambahkan file-file dan field lain ke FormData
        if (payload.foto) formData.append('foto', payload.foto);
        if (payload.tandaTangan) formData.append('tandaTangan', payload.tandaTangan);
        if (payload.tempatLahir) formData.append('tempatLahir', payload.tempatLahir);
        if (payload.tanggalLahir) formData.append('tanggalLahir', payload.tanggalLahir);
        if (payload.username) formData.append('username', payload.username);
        if (payload.email) formData.append('email', payload.email);
        if (payload.jenisKelamin) formData.append('jenisKelamin', payload.jenisKelamin);
        if (payload.namaLengkap) formData.append('namaLengkap', payload.namaLengkap);
        if (payload.agama) formData.append('agama', payload.agama);
        if (payload.nik) formData.append('nik', payload.nik);
        if (payload.noTelp) formData.append('noTelp', payload.noTelp);
        if (payload.alamat) formData.append('alamat', payload.alamat);

        try {
            await axios.post(endpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
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

    deleteUser: async (id: number) => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api/v1/user/${id}`;

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
    },

    getProfileById: async (id: number): Promise<string> => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api/v1/user/${id}`;

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

    changeProfile: async (
        id: number,
        payload: UserValues
    ): Promise<void> => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api/v1/user/${id}`;

        const formData = new FormData();

        // Tambahkan file-file dan field lain ke FormData
        if (payload.foto) formData.append('foto', payload.foto);
        if (payload.tandaTangan) formData.append('tandaTangan', payload.tandaTangan);
        if (payload.tempatLahir) formData.append('tempatLahir', payload.tempatLahir);
        if (payload.tanggalLahir) formData.append('tanggalLahir', payload.tanggalLahir);
        if (payload.username) formData.append('username', payload.username);
        if (payload.email) formData.append('email', payload.email);
        if (payload.jenisKelamin) formData.append('jenisKelamin', payload.jenisKelamin);
        if (payload.namaLengkap) formData.append('namaLengkap', payload.namaLengkap);
        if (payload.agama) formData.append('agama', payload.agama);
        if (payload.nik) formData.append('nik', payload.nik);
        if (payload.noTelp) formData.append('noTelp', payload.noTelp);
        if (payload.alamat) formData.append('alamat', payload.alamat);

        try {
            await axios.put(endpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
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


    // changeProfile: async (
    //     token: string,
    //     payload: AsesorProfileValues | AsesiProfileValues
    // ): Promise<void> => {
    //     const url = import.meta.env.VITE_API_URL;
    //     const endpoint = `${url}/api-em/user/update`;

    //     try {
    //         const formData = new FormData();
    //         Object.keys(payload).forEach((key) => {
    //             formData.append(key, payload[key]);
    //         });

    //         await axios.patch(endpoint, formData, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //     } catch (error) {
    //         const axiosError = error as AxiosError<ErrorResponse>;

    //         if (axiosError.response) {
    //             throw new Error(axiosError.response.data.message);
    //         } else {
    //             throw new Error('Network Error: Terjadi kesalahan pada server');
    //         }
    //     }
    // },
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

    getAllUserData: async (
        page: number,
        limit: number,
    ): Promise<getUserALl> => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api/v1/user?page=${page}&limit=${limit}`;

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
};

export default UserRemoteDataSource;
