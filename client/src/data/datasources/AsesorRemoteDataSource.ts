import axios, { AxiosError } from 'axios';
import { AsesorValues, ErrorResponse } from '../../common/types';

const AsesorRemoteDataSource = {
    getAsesorData: async () => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api/v1/assesor/get_assesor`;

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

    createAsesorData: async (payload: AsesorValues) => {
        const url = import.meta.env.VITE_API_URL;
        const endpoint = `${url}/api/v1/assesor/create_assesor`;

        const formData = new FormData();

        if (payload.foto) formData.append('foto', payload.foto);
        if (payload.userId) formData.append('userId', payload.userId);
        if (payload.nama) formData.append('nama', payload.nama);
        if (payload.alamat) formData.append('alamat', payload.alamat);
        if (payload.nik) formData.append('nik', payload.nik);
        if (payload.tempatLahir) formData.append('tempatLahir', payload.tempatLahir);
        if (payload.tanggalLahir) formData.append('tanggalLahir', payload.tanggalLahir);
        if (payload.jenisKelamin) formData.append('jenisKelamin', payload.jenisKelamin);
        if (payload.agama) formData.append('agama', payload.agama);
        if (payload.phone) formData.append('phone', payload.phone);
        if (payload.tandaTangan) formData.append('tandaTangan', payload.tandaTangan);
        if (payload.no_registrasi) formData.append('no_registrasi', payload.no_registrasi);

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
}

export default AsesorRemoteDataSource