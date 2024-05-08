/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import { tukInputSchema } from '../../../common/formSchemas';
import { TukValues } from '../../../common/types';
import Alert from '../../components/Elements/Alert';
import Button from '../../components/Elements/Button';
import Input from '../../components/Elements/Input';
import Label from '../../components/Elements/Input/Label';
import Textarea from '../../components/Elements/Textarea';

const TambahTukPage = () => {
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

    const { errors, touched, values, handleChange, handleSubmit } = useFormik({
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
                        <div className='flex flex-col items-center gap-6 px-4 lg:gap-8 lg:px-6'>
                            <div className='flex flex-col w-full gap-6 lg:gap-4 lg:grid lg:grid-cols-4 lg:gap-y-8'>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='name'>Nama TUK</Label>
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
                                    <Label htmlFor='code'>Kode TUK</Label>
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
                                    <Label htmlFor='type'>Tipe TUK</Label>
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
                                    <Label htmlFor='validDate'>
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
                                    <Label htmlFor='areaAddress'>
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
                                    <Label htmlFor='address'>Alamat</Label>
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
            </form>
            {/* <LoadingSpinner show={isLoading} /> */}
        </>
    );
};

export default TambahTukPage;
