/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import Constants from '../../../common/constants';
import { userEditSchema } from '../../../common/formSchemas';
import { UserValues } from '../../../common/types';
import Alert from '../../components/Elements/Alert';
import Button from '../../components/Elements/Button';
import ComboBox from '../../components/Elements/ComboBox';
import ImagePlaceholder from '../../components/Elements/ImagePlaceholder';
import Input from '../../components/Elements/Input';
import Label from '../../components/Elements/Input/Label';
import UploadSignModal from '../../components/Fragments/SignUpload/UploadSignModal';
import UserRemoteDataSource from '../../../data/datasources/UserRemoteDataSource';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../components/Elements/LoadingSpinner';
import { downloadFile } from '../../../common/utils';

const ProfilePage = () => {
    
    const [profileData, setProfileData] = useState({
        email: '',
        username: '',
        foto: undefined,
        tandaTangan: undefined,
        name: '',
        role: '',
        tempatLahir: '',
        tanggalLahir: '',
        agama: '',
        nik: '',
        noTelp: '',
        namaLengkap: '',
        jenisKelamin: '',
    });
    
    const [id, setId] = useState<number | null>(null); 
    const [isShowModal, setIsShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getUserByToken();
    }, []);

    const getUserByToken = async () => {
        try {
            const token = localStorage.getItem('token') ?? '';
            const data = await UserRemoteDataSource.getLoggedUser(token);
            if (typeof data === 'object' && data !== null) {
                setId(parseInt(data.id.toString(), 10));
                setProfileData(data);
            } else {
                console.error('Data format is incorrect');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const onSaveProfile = async (profile: UserValues) => {
        setIsLoading(true);

        try {
            // const token = localStorage.getItem('token') ?? '';
            if (id !== null) {
                const numericId = parseInt(id.toString(), 10);
                if (!isNaN(numericId)) {
                    await UserRemoteDataSource.changeProfile(numericId, profile);
                }
            }

            toast.success('Profile berhasil diubah', {
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

    console.log(profileData);
    

    var birtdate = profileData.tanggalLahir;

    // Format YYYY-MM-DD
    var date = new Date(birtdate);
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2); 
    var day = ('0' + date.getDate()).slice(-2);
    var tanggalLahir = `${year}-${month}-${day}`;

    const formik = useFormik({
        initialValues: {
            namaLengkap: profileData.namaLengkap,
            email: profileData.email,
            username: profileData.username,
            foto: profileData.foto,
            tandaTangan: profileData.tandaTangan,
            role: profileData.role,
            tempatLahir: profileData.tempatLahir,
            tanggalLahir: tanggalLahir,
            agama: profileData.agama,
            nik: profileData.nik,
            noTelp: profileData.noTelp,
            jenisKelamin: profileData.jenisKelamin,
        },
        validationSchema: userEditSchema,
        onSubmit: onSaveProfile,
        enableReinitialize: true,
    });

    const { errors, touched, values, handleChange, handleSubmit, setFieldValue } = formik;

    const fotoUploadFile = useCallback(async () => {
        if (profileData.foto) {
            const file = await downloadFile(profileData.foto);
            setFieldValue('foto', file);
        }
    }, [profileData.foto, setFieldValue]);

    const tandaTanganUploadFile = useCallback(async () => {
        if (profileData.tandaTangan) {
            const file = await downloadFile(profileData.tandaTangan); // Mengunduh file
            setFieldValue('tandaTangan', file); // Mengatur nilai formik dengan file yang diunduh
        }
    }, [profileData.tandaTangan, setFieldValue]);

    useEffect(() => {
        fotoUploadFile();
    }, [fotoUploadFile]);

    useEffect(() => {
        tandaTanganUploadFile();
    }, [tandaTanganUploadFile]);

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
                            Profile
                        </span>
                        <hr className='my-4' />
                        <div className='flex flex-col items-center gap-6 px-4 lg:gap-16 lg:px-16'>
                            <div className='flex flex-col items-center gap-4'>
                                {values.foto ? (
                                    typeof values.foto === 'string' ? (
                                        <img
                                            src={values.foto}
                                            className='object-cover rounded-md h-52 w-52'
                                            alt='Uploaded Preview'
                                        />
                                    ) : (
                                        <img
                                            src={URL.createObjectURL(values.foto)}
                                            className='object-cover rounded-md h-52 w-52'
                                            alt='Uploaded Preview'
                                        />
                                    )
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
                                        htmlFor='role'
                                        className='w-36'
                                    >
                                        Peran
                                    </Label>
                                    <ComboBox
                                        name='role'
                                        items={Constants.dummyRoles}
                                        value={values.role}
                                        placeholder='Pilih Peran'
                                        onChange={handleChange}
                                    />
                                    {errors.role && touched.role ? (
                                        <Alert
                                            message={errors.role}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='email'
                                        className='w-36'
                                    >
                                        Email
                                    </Label>
                                    <Input
                                        type='text'
                                        name='email'
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && touched.email ? (
                                        <Alert
                                            message={errors.email}
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
                                    <Label
                                        htmlFor='username'
                                        className='w-36'
                                    >
                                        Username
                                    </Label>
                                    <Input
                                        type='text'
                                        name='username'
                                        value={values.username}
                                        onChange={handleChange}
                                    />
                                    {errors.username && touched.username ? (
                                        <Alert
                                            message={errors.username}
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
                                        htmlFor='namaLengkap'
                                        className='w-36'
                                    >
                                        Nama Lengkap
                                    </Label>
                                    <Input
                                        type='text'
                                        name='namaLengkap'
                                        value={values.namaLengkap}
                                        onChange={handleChange}
                                    />
                                    {errors.namaLengkap && touched.namaLengkap ? (
                                        <Alert
                                            message={errors.namaLengkap}
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
                                        htmlFor='noTelp'
                                        className='w-36'
                                    >
                                        No.Telepon
                                    </Label>
                                    <Input
                                        type='text'
                                        name='noTelp'
                                        value={values.noTelp}
                                        onChange={handleChange}
                                    />
                                    {errors.noTelp && touched.noTelp ? (
                                        <Alert
                                            message={errors.noTelp}
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
                                            {typeof values.tandaTangan === 'string' ? (
                                                <img
                                                    src={values.tandaTangan}
                                                    alt='Tanda Tangan'
                                                    className='object-contain h-32 bg-gray-50 rounded-t-md'
                                                />
                                            ) : (
                                                <img
                                                    src={URL.createObjectURL(values.tandaTangan)}
                                                    alt='Tanda Tangan'
                                                    className='object-contain h-32 bg-gray-50 rounded-t-md'
                                                />
                                            )}
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
                    // onChange={(file, exp) => {
                    onChange={(file) => {
                        setFieldValue('tandaTangan', file);
                        // setFieldValue('signExplanation', exp);
                    }}
                />
            </form>
            <LoadingSpinner show={isLoading} />
        </>
    );
};

export default ProfilePage;
