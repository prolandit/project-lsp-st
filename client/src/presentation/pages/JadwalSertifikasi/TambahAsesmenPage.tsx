import { useFormik } from 'formik';
import { tukInputSchema } from '../../../common/formSchemas';
import { AssesmentValues } from '../../../common/types';
import Alert from '../../components/Elements/Alert';
import Button from '../../components/Elements/Button';
import ComboBox from '../../components/Elements/ComboBox';
import Input from '../../components/Elements/Input';
import Label from '../../components/Elements/Input/Label';
import Textarea from '../../components/Elements/Textarea';

const TambahAsesmentPage = () => {
    // const [isLoading, setIsLoading] = useState(false);

    const onSave = async (payload: AssesmentValues) => {
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

    const { errors, touched, values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            eventName: '',
            schemaName: '',
            scheduleCode: '',
            schemaLicense: '',
            method: '',
            tuk: '',
            verificator: '',
            isVerified: false,
            tukCoordinator: '',
            praAssesmentDate: '',
            startDate: '',
            endDate: '',
            praAssesmentMeetLink: '',
            assesmentMeetLink: '',
            plenoMeetLink: '',
            tukAddress: '',
            note: '',
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
                            Tambah Asesmen
                        </span>
                        <hr className='my-4' />
                        <div className='flex flex-col items-center gap-6 px-4 lg:gap-8 lg:px-6'>
                            <div className='flex flex-col w-full gap-6 lg:gap-4 lg:grid lg:grid-cols-4 lg:gap-y-8'>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='eventName'>
                                        Nama Kegiatan
                                    </Label>
                                    <Input
                                        type='text'
                                        name='eventName'
                                        value={values.eventName}
                                        onChange={handleChange}
                                    />
                                    {errors.eventName && touched.eventName ? (
                                        <Alert
                                            message={errors.eventName}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='schemaName'>
                                        Nama Skema
                                    </Label>
                                    <ComboBox
                                        name='schemaName'
                                        items={[]}
                                        value={''}
                                        placeholder='Pilih Skema'
                                        onChange={handleChange}
                                    />
                                    {errors.schemaName && touched.schemaName ? (
                                        <Alert
                                            message={errors.schemaName}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='scheduleCode'>
                                        Kode Jadwal
                                    </Label>
                                    <Input
                                        type='text'
                                        name='scheduleCode'
                                        value={values.scheduleCode}
                                        onChange={handleChange}
                                    />
                                    {errors.scheduleCode &&
                                    touched.scheduleCode ? (
                                        <Alert
                                            message={errors.scheduleCode}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='method'>
                                        Metode Pelaksanaan
                                    </Label>
                                    <ComboBox
                                        name='method'
                                        items={[]}
                                        value={''}
                                        placeholder='Pilih Metode Pelaksanaan'
                                        onChange={handleChange}
                                    />
                                    {errors.method && touched.method ? (
                                        <Alert
                                            message={errors.method}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='tuk'>TUK</Label>
                                    <ComboBox
                                        name='tuk'
                                        items={[]}
                                        value={''}
                                        placeholder='Pilih Metode Pelaksanaan'
                                        onChange={handleChange}
                                    />
                                    {errors.tuk && touched.tuk ? (
                                        <Alert
                                            message={errors.tuk}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='verificator'>
                                        Verifikator
                                    </Label>
                                    <ComboBox
                                        name='verificator'
                                        items={[]}
                                        value={''}
                                        placeholder='Pilih Verifikator'
                                        onChange={handleChange}
                                    />
                                    {errors.verificator &&
                                    touched.verificator ? (
                                        <Alert
                                            message={errors.verificator}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-row items-center '>
                                    <Label
                                        htmlFor='isVerified'
                                        className='w-36'
                                    >
                                        Verifikasi TUK
                                    </Label>
                                    <Input
                                        type='checkbox'
                                        name='isVerified'
                                        value={values.isVerified.toString()}
                                        onChange={handleChange}
                                        className='w-auto bg-red-500'
                                    />
                                    {errors.isVerified && touched.isVerified ? (
                                        <Alert
                                            message={errors.isVerified}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='tukCoordinator'>
                                        Koordinator TUK
                                    </Label>
                                    <ComboBox
                                        name='tukCoordinator'
                                        items={[]}
                                        value={''}
                                        placeholder='Pilih Koordinator TUK'
                                        onChange={handleChange}
                                    />
                                    {errors.tukCoordinator &&
                                    touched.tukCoordinator ? (
                                        <Alert
                                            message={errors.tukCoordinator}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='praAssesmentDate'>
                                        Tanggal Pra Asesmen
                                    </Label>
                                    <Input
                                        type='date'
                                        name='praAssesmentDate'
                                        value={values.praAssesmentDate}
                                        onChange={handleChange}
                                    />
                                    {errors.praAssesmentDate &&
                                    touched.praAssesmentDate ? (
                                        <Alert
                                            message={errors.praAssesmentDate}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='startDate'>
                                        Tanggal Mulai
                                    </Label>
                                    <Input
                                        type='date'
                                        name='startDate'
                                        value={values.startDate}
                                        onChange={handleChange}
                                    />
                                    {errors.startDate && touched.startDate ? (
                                        <Alert
                                            message={errors.startDate}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='endDate'>
                                        Tanggal Selesai
                                    </Label>
                                    <Input
                                        type='date'
                                        name='endDate'
                                        value={values.endDate}
                                        onChange={handleChange}
                                    />
                                    {errors.endDate && touched.endDate ? (
                                        <Alert
                                            message={errors.endDate}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='praAssesmentMeetLink'>
                                        Link Virtual Meet Pra Asesmen
                                    </Label>
                                    <Input
                                        type='text'
                                        name='praAssesmentMeetLink'
                                        value={values.praAssesmentMeetLink}
                                        onChange={handleChange}
                                    />
                                    {errors.praAssesmentMeetLink &&
                                    touched.praAssesmentMeetLink ? (
                                        <Alert
                                            message={
                                                errors.praAssesmentMeetLink
                                            }
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='assesmentMeetLink'>
                                        Link Virtual Meet Asesmen
                                    </Label>
                                    <Input
                                        type='text'
                                        name='assesmentMeetLink'
                                        value={values.assesmentMeetLink}
                                        onChange={handleChange}
                                    />
                                    {errors.assesmentMeetLink &&
                                    touched.assesmentMeetLink ? (
                                        <Alert
                                            message={errors.assesmentMeetLink}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='plenoMeetLink'>
                                        Link Virtual Meet Pleno
                                    </Label>
                                    <Input
                                        type='text'
                                        name='plenoMeetLink'
                                        value={values.plenoMeetLink}
                                        onChange={handleChange}
                                    />
                                    {errors.plenoMeetLink &&
                                    touched.plenoMeetLink ? (
                                        <Alert
                                            message={errors.plenoMeetLink}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='tukAddress'>
                                        Alamat TUK
                                    </Label>
                                    <Textarea
                                        name='tukAddress'
                                        value={values.tukAddress}
                                        onChange={handleChange}
                                    />
                                    {errors.tukAddress && touched.tukAddress ? (
                                        <Alert
                                            message={errors.tukAddress}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='note'>Catatan</Label>
                                    <Textarea
                                        name='note'
                                        value={values.note}
                                        onChange={handleChange}
                                    />
                                    {errors.note && touched.note ? (
                                        <Alert
                                            message={errors.note}
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

export default TambahAsesmentPage;
