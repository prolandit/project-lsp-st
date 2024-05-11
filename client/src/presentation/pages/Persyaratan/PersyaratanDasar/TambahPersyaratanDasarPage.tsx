import { useFormik } from 'formik';
import { persyaratanDasarInputSchema } from '../../../../common/formSchemas';
import { BasicRequirementValues } from '../../../../common/types';
import Alert from '../../../components/Elements/Alert';
import Button from '../../../components/Elements/Button';
import ComboBox from '../../../components/Elements/ComboBox';
import Input from '../../../components/Elements/Input';
import Label from '../../../components/Elements/Input/Label';

const TambahPersyaratanDasarPage = () => {
    // const [isLoading, setIsLoading] = useState(false);

    const handleMandatoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue('mandatory', e.target.value === 'yes');
    };

    const onSave = async (payload: BasicRequirementValues) => {
        console.log(payload);
        // setIsLoading(true);

        // try {
        //     const token = localStorage.getItem('token') ?? '';

        //     await UserRemoteDataSource.changeProfile(token, payload);
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
            formType: '',
            mandatory: false,
            showOnAsesorAt: '',
            showOnAsesiAt: '',
        },
        validationSchema: persyaratanDasarInputSchema,
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
                            Tambah Persyaratan Dasar
                        </span>
                        <hr className='my-4' />
                        <div className='flex flex-col gap-6 px-4 lg:gap-8 lg:px-6'>
                            <div className='flex flex-col w-full gap-6 lg:flex-row'>
                                <div className='flex flex-col w-full gap-3'>
                                    <Label htmlFor='name'>Nama Form</Label>
                                    <Input
                                        type='text'
                                        name='name'
                                        value={values.name}
                                        onChange={handleChange}
                                        className='w-full'
                                    />
                                    {errors.name && touched.name ? (
                                        <Alert
                                            message={errors.name}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col w-full gap-3'>
                                    <Label htmlFor='formType'>Tipe Form</Label>
                                    <ComboBox
                                        name='formType'
                                        items={[]}
                                        value={''}
                                        placeholder='Pilih Form'
                                        onChange={handleChange}
                                        className='w-full'
                                    />
                                    {errors.formType && touched.formType ? (
                                        <Alert
                                            message={errors.formType}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                            </div>
                            <div className='flex flex-col justify-start gap-6'>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='mandatory'>Mandatory</Label>
                                    <div className='flex flex-row gap-4'>
                                        <div className='flex flex-row items-center gap-2'>
                                            <Input
                                                type='radio'
                                                name='mandatory'
                                                value='yes'
                                                checked={values.mandatory}
                                                onChange={handleMandatoryChange}
                                            />
                                            <Label
                                                htmlFor='mandatory'
                                                className='font-normal'
                                            >
                                                Ya
                                            </Label>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <Input
                                                type='radio'
                                                name='mandatory'
                                                value='no'
                                                checked={!values.mandatory}
                                                onChange={handleMandatoryChange}
                                            />
                                            <Label
                                                htmlFor='mandatory'
                                                className='font-normal'
                                            >
                                                Tidak
                                            </Label>
                                        </div>
                                    </div>
                                    {errors.mandatory && touched.mandatory ? (
                                        <Alert
                                            message={errors.mandatory}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='showOnAsesorAt'>
                                        Munculkan Dokumen Pada Asesor Saat
                                    </Label>
                                    <ComboBox
                                        name='showOnAsesorAt'
                                        items={[]}
                                        value={''}
                                        placeholder='Pilih State Asesmen'
                                        onChange={handleChange}
                                    />
                                    {errors.showOnAsesorAt &&
                                    touched.showOnAsesorAt ? (
                                        <Alert
                                            message={errors.showOnAsesorAt}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='showOnAsesiAt'>
                                        Munculkan Dokumen Pada Asesi Saat
                                    </Label>
                                    <ComboBox
                                        name='showOnAsesiAt'
                                        items={[]}
                                        value={''}
                                        placeholder='Pilih State Asesmen'
                                        onChange={handleChange}
                                    />
                                    {errors.showOnAsesiAt &&
                                    touched.showOnAsesiAt ? (
                                        <Alert
                                            message={errors.showOnAsesiAt}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                            </div>
                            <Button
                                type='submit'
                                className='self-end w-9/12 lg:w-40 mt-4 h-[45px] bg-blue-500 hover:bg-blue-700'
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

export default TambahPersyaratanDasarPage;
