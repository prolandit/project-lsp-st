import Label from '../../components/Elements/Input/Label';
import Input from '../../components/Elements/Input';
import Button from '../../components/Elements/Button';
import ImagePlaceholder from '../../components/Elements/ImagePlaceholder';
import Constants from '../../../common/constants';
import ComboBox from '../../components/Elements/ComboBox';
import UploadSignModal from '../../components/Fragments/SignUpload/UploadSignModal';
import { useState } from 'react';
import { useFormik } from 'formik';
import { AsesorInputSchema } from '../../../common/formSchemas';
import Alert from '../../components/Elements/Alert';
import { AsesorValues } from '../../../common/types';
import LoadingSpinner from '../../components/Elements/LoadingSpinner';
import AsesorRemoteDataSource from '../../../data/datasources/AsesorRemoteDataSource';
import { toast } from 'react-toastify';

const CreateAsesorPage = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSaveAsesor = async (asesor: AsesorValues) => {
        console.log(asesor);
        setIsLoading(true);

        try {
            // const token = localStorage.getItem('token') ?? '';
 
            await AsesorRemoteDataSource.createAsesorData(asesor);
            toast.success('Pengguna berhasil ditambahkan', {
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

    const {
        errors,
        touched,
        values,
        handleChange,
        handleSubmit,
        setFieldValue,
    } = useFormik({
        initialValues: {
            userId: "1",
            nama: '',
            nik: '',
            alamat: '',
            tempatLahir: '',
            tanggalLahir: '',
            jenisKelamin: '',
            agama: '',
            phone: '',
            foto: undefined,
            tandaTangan: undefined,
            no_registrasi: '',
        },
        validationSchema: AsesorInputSchema,
        onSubmit: onSaveAsesor,
    });

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
                            Tambah Asesor
                        </span>
                        <hr className='my-4' />
                        <div className='flex flex-col items-center gap-6 px-4 lg:gap-16 lg:px-16'>
                            <div className='flex flex-col items-center gap-4'>
                                {values.foto ? (
                                    <img
                                        src={URL.createObjectURL(values.foto)}
                                        className='object-cover rounded-md h-52 w-52'
                                    />
                                ) : (
                                    <>
                                        <ImagePlaceholder className='rounded-md h-52 w-52' />
                                        {errors.foto && touched.foto ? (
                                            <Alert
                                                message={errors.foto}
                                                type='error'
                                            />
                                        ) : null}
                                    </>
                                )}
                                <>
                                    <Label
                                        htmlFor='photo-upload'
                                        className='px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200'
                                    >
                                        Upload Foto
                                    </Label>
                                    <input
                                        id='photo-upload'
                                        type='file'
                                        accept='image/*'
                                        onChange={(e) => {
                                            const file =
                                                e.currentTarget.files?.[0];
                                            setFieldValue('foto', file);
                                        }}
                                        hidden
                                    />
                                </>
                            </div>
                            <div className='flex flex-col w-full gap-6 lg:gap-16 lg:grid lg:grid-cols-4 lg:gap-y-10'>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='nama'
                                        className='w-36'
                                    >
                                        Nama
                                    </Label>
                                    <Input
                                        type='text'
                                        name='nama'
                                        value={values.nama}
                                        onChange={handleChange}
                                    />
                                    {errors.nama && touched.nama ? (
                                        <Alert
                                            message={errors.nama}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='nik'
                                        className='w-36'
                                    >
                                        NIK
                                    </Label>
                                    <Input
                                        type='text'
                                        name='nik'
                                        value={values.nik}
                                        onChange={handleChange}
                                    />
                                    {errors.nik && touched.nik ? (
                                        <Alert
                                            message={errors.nik}
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
                                    <Input
                                        type='text'
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
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='tempatLahir'
                                        className='w-36'
                                    >
                                        Tempat Lahir
                                    </Label>
                                    <Input
                                        type='text'
                                        name='tempatLahir'
                                        value={values.tempatLahir}
                                        onChange={handleChange}
                                    />
                                    {errors.tempatLahir && touched.tempatLahir ? (
                                        <Alert
                                            message={errors.tempatLahir}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='tanggalLahir'
                                        className='w-36'
                                    >
                                        Tanggal Lahir
                                    </Label>
                                    <Input
                                        type='date'
                                        name='tanggalLahir'
                                        value={values.tanggalLahir}
                                        onChange={handleChange}
                                    />
                                    {errors.tanggalLahir && touched.tanggalLahir ? (
                                        <Alert
                                            message={errors.tanggalLahir}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='jenisKelamin'>
                                        Jenis Kelamin
                                    </Label>
                                    <ComboBox
                                        name='jenisKelamin'
                                        items={Constants.genderOptions}
                                        value={values.jenisKelamin}
                                        placeholder='Pilih Jenis Kelamin'
                                        onChange={handleChange}
                                    />
                                    {errors.jenisKelamin && touched.jenisKelamin ? (
                                        <Alert
                                            message={errors.jenisKelamin}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='agama'
                                        className='w-36'
                                    >
                                        Agama
                                    </Label>
                                    <ComboBox
                                        name='agama'
                                        items={Constants.religions}
                                        value={values.agama}
                                        placeholder='Pilih Agama'
                                        onChange={handleChange}
                                    />
                                    {errors.agama && touched.agama ? (
                                        <Alert
                                            message={errors.agama}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='phone'
                                        className='w-36'
                                    >
                                        No.Telepon
                                    </Label>
                                    <Input
                                        type='text'
                                        name='phone'
                                        value={values.phone}
                                        onChange={handleChange}
                                    />
                                    {errors.phone && touched.phone ? (
                                        <Alert
                                            message={errors.phone}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='no_registrasi'
                                        className='w-36'
                                    >
                                        Nomor Registerasi
                                    </Label>
                                    <Input
                                        type='text'
                                        name='no_registrasi'
                                        value={values.no_registrasi}
                                        onChange={handleChange}
                                    />
                                    {errors.no_registrasi && touched.no_registrasi ? (
                                        <Alert
                                            message={errors.no_registrasi}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='tandaTangan'>
                                        Tanda tangan
                                    </Label>
                                    {values.tandaTangan ? (
                                        <div className='flex flex-col'>
                                            <img
                                                src={URL.createObjectURL(
                                                    values.tandaTangan
                                                )}
                                                alt='Tanda Tangan'
                                                className='object-contain h-32 bg-gray-50 rounded-t-md'
                                            />
                                            <div className='flex flex-row gap-1 p-4 bg-white shadow rounded-b-md'>
                                                <span
                                                    className='text-sm text-blue-700 cursor-pointer'
                                                    onClick={() =>
                                                        setIsShowModal(true)
                                                    }
                                                >
                                                    Ganti?
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <Button
                                                type='button'
                                                className='px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md h-11 hover:bg-blue-200'
                                                onClick={() =>
                                                    setIsShowModal(true)
                                                }
                                            >
                                                Upload
                                            </Button>
                                            {errors.tandaTangan &&
                                                touched.tandaTangan ? (
                                                <Alert
                                                    message={errors.tandaTangan}
                                                    type='error'
                                                />
                                            ) : null}
                                        </>
                                    )}
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
                <UploadSignModal
                    show={isShowModal}
                    closeModal={() => setIsShowModal(false)}
                    onChange={(file) => {
                        setFieldValue('tandaTangan', file);
                    }}
                />
            </form>
            <LoadingSpinner show={isLoading} />
        </>
    );
}

export default CreateAsesorPage