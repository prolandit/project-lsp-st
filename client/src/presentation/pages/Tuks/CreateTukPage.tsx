/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import { useState } from 'react';
import { tukInputSchema } from '../../../common/formSchemas';
import { TukValues } from '../../../common/types';
import Alert from '../../components/Elements/Alert';
import Button from '../../components/Elements/Button';
import Input from '../../components/Elements/Input';
import Label from '../../components/Elements/Input/Label';
import Textarea from '../../components/Elements/Textarea';
import UploadSignModal from '../../components/Fragments/SignUpload/UploadSignModal';

const CreateTukPage = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    const onSave = async (profile: TukValues) => {
        console.log(profile);
        // setIsLoading(true);

        // try {
        //     const token = localStorage.getItem('token') ?? '';

        //     await UserRemoteDataSource.changeProfile(token, profile);
        //     toast.success('Profile berhasil diubah', {
        //         position: 'top-center',
        //         hideProgressBar: true,
        //     });
        // } catch (error) {
        //     toast.error((error as Error).message, {
        //         position: 'top-center',
        //         hideProgressBar: true,
        //     });
        // } finally {
        //     setIsLoading(false);
        // }
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
            name: '',
            code: '',
            type: '',
            validDate: '',
            areaAddress: '',
            address: '',
        },
        validationSchema: tukInputSchema,
        onSubmit: onSave,
    });

    // const signUploadFile = useCallback(async () => {
    //     if (user?.signUpload) {
    //         const file = await downloadFile(user.signUpload);
    //         setFieldValue('signUpload', file);
    //     }
    // }, [user?.signUpload, setFieldValue]);

    // useEffect(() => {
    //     signUploadFile();
    // }, [signUploadFile]);

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
                            Tambah Tempat Uji Kompetensi (TUK)
                        </span>
                        <hr className='my-4' />
                        <div className='flex flex-col items-center gap-6 px-4 lg:gap-16 lg:px-6'>
                            <div className='flex flex-col w-full gap-6 lg:gap-4 lg:grid lg:grid-cols-4 lg:gap-y-8'>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='name'
                                        className='w-36'
                                    >
                                        Nama TUK
                                    </Label>
                                    <Input
                                        type='text'
                                        name='name'
                                        value={values.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && touched.name ? (
                                        <Alert
                                            message={errors.name}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='code'
                                        className='w-36'
                                    >
                                        Kode TUK
                                    </Label>
                                    <Input
                                        type='text'
                                        name='code'
                                        value={values.code}
                                        onChange={handleChange}
                                    />
                                    {errors.code && touched.code ? (
                                        <Alert
                                            message={errors.code}
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
                                        name='type'
                                        value={values.type}
                                        onChange={handleChange}
                                    />
                                    {errors.type && touched.type ? (
                                        <Alert
                                            message={errors.type}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='validDate'
                                        className='w-36'
                                    >
                                        Tanggal Berlaku
                                    </Label>
                                    <Input
                                        type='date'
                                        name='validDate'
                                        value={values.validDate}
                                        onChange={handleChange}
                                    />
                                    {errors.validDate && touched.validDate ? (
                                        <Alert
                                            message={errors.validDate}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='areaAddress'
                                        className='w-36'
                                    >
                                        Alamat Wilayah
                                    </Label>
                                    <Textarea
                                        name='areaAddress'
                                        value={values.areaAddress}
                                        onChange={handleChange}
                                    />
                                    {errors.areaAddress &&
                                    touched.areaAddress ? (
                                        <Alert
                                            message={errors.areaAddress}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='address'
                                        className='w-36'
                                    >
                                        Alamat
                                    </Label>
                                    <Textarea
                                        name='address'
                                        value={values.address}
                                        onChange={handleChange}
                                    />
                                    {errors.address && touched.address ? (
                                        <Alert
                                            message={errors.address}
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
                <UploadSignModal
                    show={isShowModal}
                    closeModal={() => setIsShowModal(false)}
                    onChange={(file, exp) => {
                        setFieldValue('signUpload', file);
                        setFieldValue('signExplanation', exp);
                    }}
                />
            </form>
            {/* <LoadingSpinner show={isLoading} /> */}
        </>
    );
};

export default CreateTukPage;
