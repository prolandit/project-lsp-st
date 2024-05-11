import { useFormik } from 'formik';
import { buktiAdministratifEditSchema } from '../../../../common/formSchemas';
import { AdministrativeEvidenceValues } from '../../../../common/types';
import Alert from '../../../components/Elements/Alert';
import Button from '../../../components/Elements/Button';
import ComboBox from '../../../components/Elements/ComboBox';
import Input from '../../../components/Elements/Input';
import Label from '../../../components/Elements/Input/Label';

const EditBuktiAdministratifPage = () => {
    // const [isLoading, setIsLoading] = useState(false);

    const onEdit = async (payload: AdministrativeEvidenceValues) => {
        console.log(payload);
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

    const { errors, touched, handleChange, handleSubmit, setFieldValue } =
        useFormik({
            initialValues: {
                schemaId: 0,
                proof: undefined,
            },
            validationSchema: buktiAdministratifEditSchema,
            onSubmit: onEdit,
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
                            Edit Bukti Administratif
                        </span>
                        <hr className='my-4' />
                        <div className='flex flex-col gap-6 px-4 lg:gap-8 lg:px-6'>
                            <div className='flex flex-col justify-start gap-6'>
                                <div className='flex flex-col w-full gap-3'>
                                    <Label htmlFor='schemaId'>Nama Skema</Label>
                                    <ComboBox
                                        name='schemaId'
                                        items={[]}
                                        value={''}
                                        placeholder='Pilih Skema'
                                        onChange={handleChange}
                                        className='w-full'
                                    />
                                    {errors.schemaId && touched.schemaId ? (
                                        <Alert
                                            message={errors.schemaId}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col w-full gap-3'>
                                    <Label htmlFor='proof'>
                                        Bukti Administratif
                                    </Label>
                                    <Input
                                        name='proof'
                                        type='file'
                                        onChange={(e) => {
                                            const file =
                                                e.currentTarget.files?.[0];
                                            setFieldValue('proof', file);
                                        }}
                                    />
                                    {errors.proof && touched.proof ? (
                                        <Alert
                                            message={errors.proof}
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

export default EditBuktiAdministratifPage;
