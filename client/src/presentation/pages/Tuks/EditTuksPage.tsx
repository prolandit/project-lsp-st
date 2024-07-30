/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { tukEditSchema } from '../../../common/formSchemas';
import { TukValues } from '../../../common/types';
import Alert from '../../components/Elements/Alert';
import Button from '../../components/Elements/Button';
import Input from '../../components/Elements/Input';
import Label from '../../components/Elements/Input/Label';
import Textarea from '../../components/Elements/Textarea';
import TukRemoteDataSource from '../../../data/datasources/TukRemoteDataSource';
import LoadingSpinner from '../../components/Elements/LoadingSpinner';
import { toast } from 'react-toastify';

const EditTukPage = () => {
    const { id } = useParams();

    const [tukData, setTukData] = useState({
        nama_tuk: '',
        alamat: '',
        tipe_tuk: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getDatabyId();
    }, []);

    const getDatabyId = async () => {
        try {
            if (id) {
                const numericId = parseInt(id, 10);
                if (!isNaN(numericId)) {
                    const dataFromRemote = await TukRemoteDataSource.getTukDataById(numericId);
                    if (typeof dataFromRemote === 'object' && dataFromRemote !== null) {
                        setTukData(dataFromRemote);
                    } else {
                        console.error('Data format is incorrect');
                    }
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const onEdit = async (tuk: TukValues) => {
        setIsLoading(true);

        try {
            // const token = localStorage.getItem('token') ?? '';
            if (id) {
                const numericId = parseInt(id, 10);
                if (!isNaN(numericId)) {
                    await TukRemoteDataSource.updateTukData(numericId, tuk);
                }
            }

            toast.success('TUK berhasil diubah', {
                position: 'top-center',
                hideProgressBar: true,
            });
        } catch (error) {
            toast.error((error as Error).message, {
                position: 'top-center',
                hideProgressBar: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: {
            nama_tuk: tukData.nama_tuk,
            alamat: tukData.alamat,
            tipe_tuk: tukData.tipe_tuk,
        },
        validationSchema: tukEditSchema,
        onSubmit: onEdit,
        enableReinitialize: true,
    });

    const { errors, touched, values, handleChange, handleSubmit } = formik;

    return (
        <>
            <form
                className='flex flex-col my-10'
                encType='multipart/form-data'
                onSubmit={handleSubmit}
            >
                <div className='flex flex-col gap-4 mx-3 lg:flex-row lg:mx-8'>
                    <div className='w-full pt-4 bg-white rounded-md shadow-sm pb-7 drop-shadow-sm'>
                        <span className='px-4 py-6 text-base font-semibold text-blue-600 lg:px-6'>
                            Edit Tempat Uji Kompetensi (TUK)
                        </span>
                        <hr className='my-4' />
                        <div className='flex flex-col items-center gap-6 px-4 lg:gap-16 lg:px-6'>
                            <div className='flex flex-col w-full gap-6 lg:gap-4 lg:grid lg:grid-cols-4 lg:gap-y-8'>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='nama_tuk'
                                        className='w-36'
                                    >
                                        Nama TUK
                                    </Label>
                                    <Input
                                        type='text'
                                        name='nama_tuk'
                                        value={values.nama_tuk}
                                        onChange={handleChange}
                                    />
                                    {errors.nama_tuk && touched.nama_tuk ? (
                                        <Alert
                                            message={errors.nama_tuk}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='type'
                                        className='w-36'
                                    >
                                        Tipe TUK
                                    </Label>
                                    <Input
                                        type='text'
                                        name='tipe_tuk'
                                        value={values.tipe_tuk}
                                        onChange={handleChange}
                                    />
                                    {errors.tipe_tuk && touched.tipe_tuk ? (
                                        <Alert
                                            message={errors.tipe_tuk}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='alamat'
                                        className='w-36'
                                    >
                                        Alamat
                                    </Label>
                                    <Textarea
                                        name='alamat'
                                        value={values.alamat}
                                        onChange={handleChange}
                                    />
                                    {errors.alamat && touched.alamat ? (
                                        <Alert
                                            message={errors.alamat}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                            </div>
                            <Button
                                type='submit'
                                className='self-center w-9/12 lg:w-40 mx-6 lg:mx-10 h-[45px] bg-blue-500 hover:bg-blue-700'
                            >
                                Simpan
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
            <LoadingSpinner show={isLoading} />
        </>
    );
};

export default EditTukPage;
