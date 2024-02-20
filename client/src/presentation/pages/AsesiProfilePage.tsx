/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Constants from '../../common/constants';
import { asesiProfileSchema } from '../../common/formSchemas';
import { AsesiProfileValues, UserType } from '../../common/types';
import { downloadFile, formattedDate } from '../../common/utils';
import UserRemoteDataSource from '../../data/datasources/UserRemoteDataSource';
import Alert from '../components/Elements/Alert';
import Button from '../components/Elements/Button';
import ComboBoxForm from '../components/Elements/ComboBoxForm';
import InputForm from '../components/Elements/InputForm';
import LoadingSpinner from '../components/Elements/LoadingSpinner';
import SignFileUploader from '../components/Elements/SignFileUpload';
import SignUploadModal from '../components/Elements/SignFileUpload/SignUploadModal';

type Props = {
    user?: UserType;
};

const AsesiProfilePage = ({ user }: Props) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSaveProfile = async (profile: AsesiProfileValues) => {
        setIsLoading(true);

        try {
            const token = localStorage.getItem('token') ?? '';

            await UserRemoteDataSource.changeProfile(token, profile);
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

    const {
        errors,
        touched,
        values,
        handleChange,
        handleSubmit,
        setFieldValue,
    } = useFormik({
        initialValues: {
            fullName: user?.fullName ?? '',
            ktpPassport: user?.ktpPassport ?? '',
            birthPlace: user?.birthPlace ?? '',
            birthDate: user?.birthDate ?? '',
            gender: user?.met ?? '',
            nationality: user?.nationality ?? '',
            address: user?.address ?? '',
            province: user?.province ?? '',
            city: user?.city ?? '',
            posCode: user?.posCode ?? '',
            telp: user?.telp ?? '',
            phone: user?.phone ?? '',
            email: user?.email ?? '',
            lastEducation: user?.lastEducation ?? '',
            signUpload: undefined,
            signExplanation: '',
            tuk: user?.tuk ?? '',
            institution: user?.institution ?? '',
            company: user?.company ?? '',
            fund: user?.fund ?? '',
            job: user?.job ?? '',
            position: user?.position ?? '',
            companyAddress: user?.companyAddress ?? '',
            telpCompany: user?.telpCompany ?? '',
            companyPosCode: user?.companyPosCode ?? '',
            fax: user?.fax ?? '',
            companyEmail: user?.companyEmail ?? '',
        },
        validationSchema: asesiProfileSchema,
        onSubmit: onSaveProfile,
    });

    const signUploadFile = useCallback(async () => {
        if (user?.signUpload) {
            const file = await downloadFile(user.signUpload);
            setFieldValue('signUpload', file);
        }
    }, [user?.signUpload, setFieldValue]);

    useEffect(() => {
        signUploadFile();
    }, [signUploadFile]);

    return (
        <>
            <form
                className='flex flex-col mt-10'
                encType='multipart/form-data'
                onSubmit={handleSubmit}
            >
                <div className='flex flex-col gap-4 mx-3 lg:flex-row lg:mx-8'>
                    <div className='w-full pt-4 bg-white rounded-md shadow-sm pb-7 drop-shadow-sm'>
                        <span className='p-4 lg:p-6'>Data Profile</span>
                        <hr className='my-4' />
                        <div className='flex flex-col px-4 lg:flex-row lg:px-6'>
                            <div className='flex flex-col w-full gap-5'>
                                <InputForm
                                    type='text'
                                    name='fullName'
                                    value={values.fullName}
                                    onChange={handleChange}
                                    text='Nama Lengkap'
                                    horizontally
                                    important
                                />
                                {errors.fullName && touched.fullName ? (
                                    <Alert
                                        message={errors.fullName}
                                        type='error'
                                    />
                                ) : null}
                                <InputForm
                                    type='string'
                                    name='ktpPassport'
                                    text='No KTP / PASPOR'
                                    maxLength={16}
                                    value={values.ktpPassport}
                                    onChange={handleChange}
                                    horizontally
                                    important
                                />
                                {errors.ktpPassport && touched.ktpPassport ? (
                                    <Alert
                                        message={errors.ktpPassport}
                                        type='error'
                                    />
                                ) : null}
                                <InputForm
                                    type='text'
                                    name='birthPlace'
                                    value={values.birthPlace}
                                    onChange={handleChange}
                                    text='Tempat Lahir'
                                    horizontally
                                    important
                                />
                                {errors.birthPlace && touched.birthPlace ? (
                                    <Alert
                                        message={errors.birthPlace}
                                        type='error'
                                    />
                                ) : null}
                                <InputForm
                                    type='date'
                                    name='birthDate'
                                    value={formattedDate(values.birthDate)}
                                    onChange={handleChange}
                                    text='Tanggal Lahir'
                                    horizontally
                                    important
                                />
                                {errors.birthDate && touched.birthDate ? (
                                    <Alert
                                        message={errors.birthDate}
                                        type='error'
                                    />
                                ) : null}
                                <ComboBoxForm
                                    name='gender'
                                    text='Jenis Kelamin'
                                    items={Constants.genderOptions}
                                    value={values.gender}
                                    placeholder='Pilih Jenis Kelamin'
                                    onChange={handleChange}
                                    horizontally
                                    important
                                />
                                {errors.gender && touched.gender ? (
                                    <Alert
                                        message={errors.gender}
                                        type='error'
                                    />
                                ) : null}
                                <ComboBoxForm
                                    name='nationality'
                                    text='Kebangsaan'
                                    value={values.nationality}
                                    items={Constants.nationalities}
                                    placeholder='Pilih Kebangsaan'
                                    onChange={handleChange}
                                    horizontally
                                    important
                                />
                                {errors.nationality && touched.nationality ? (
                                    <Alert
                                        message={errors.nationality}
                                        type='error'
                                    />
                                ) : null}
                                <InputForm
                                    type='text'
                                    name='address'
                                    value={values.address}
                                    onChange={handleChange}
                                    text='Alamat'
                                    horizontally
                                    important
                                />
                                {errors.address && touched.address ? (
                                    <Alert
                                        message={errors.address}
                                        type='error'
                                    />
                                ) : null}
                                <InputForm
                                    type='text'
                                    name='province'
                                    value={values.province}
                                    onChange={handleChange}
                                    text='Provinsi'
                                    horizontally
                                    important
                                />
                                {errors.province && touched.province ? (
                                    <Alert
                                        message={errors.province}
                                        type='error'
                                    />
                                ) : null}
                                <InputForm
                                    type='text'
                                    name='city'
                                    value={values.city}
                                    onChange={handleChange}
                                    text='Kota / Kabupaten'
                                    horizontally
                                    important
                                />
                                {errors.city && touched.city ? (
                                    <Alert
                                        message={errors.city}
                                        type='error'
                                    />
                                ) : null}
                                <InputForm
                                    type='number'
                                    name='posCode'
                                    value={values.posCode}
                                    onChange={handleChange}
                                    text='Kode Pos'
                                    horizontally
                                    important
                                />
                                {errors.posCode && touched.posCode ? (
                                    <Alert
                                        message={errors.posCode}
                                        type='error'
                                    />
                                ) : null}
                                <InputForm
                                    type='number'
                                    name='telp'
                                    value={values.telp}
                                    onChange={handleChange}
                                    text='No. Telp Rumah'
                                    horizontally
                                />
                                <InputForm
                                    type='number'
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                    text='HP'
                                    horizontally
                                    important
                                />
                                {errors.phone && touched.phone ? (
                                    <Alert
                                        message={errors.phone}
                                        type='error'
                                    />
                                ) : null}
                                <InputForm
                                    type='text'
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    text='Email'
                                    horizontally
                                    important
                                />
                                {errors.email && touched.email ? (
                                    <Alert
                                        message={errors.email}
                                        type='error'
                                    />
                                ) : null}
                                <ComboBoxForm
                                    name='lastEducation'
                                    text='Pendidikan Terakhir'
                                    value={values.lastEducation}
                                    items={Constants.educationOptions}
                                    placeholder='Pilih Pendidikan Terakhir'
                                    onChange={handleChange}
                                    horizontally
                                    important
                                />
                                {errors.lastEducation &&
                                touched.lastEducation ? (
                                    <Alert
                                        message={errors.lastEducation}
                                        type='error'
                                    />
                                ) : null}
                                <SignFileUploader
                                    name='signUpload'
                                    value={
                                        values.signUpload
                                            ? values.signUpload
                                            : values.signExplanation
                                    }
                                    onClick={() => setIsShowModal(true)}
                                    text='Upload Tanda Tangan'
                                    horizontally
                                    important
                                />
                                {errors.signUpload && touched.signUpload ? (
                                    <Alert
                                        message={errors.signUpload}
                                        type='error'
                                    />
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='w-full pt-4 bg-white rounded-md shadow-sm pb-7 drop-shadow-sm'>
                            <span className='p-4 lg:p-6'>
                                Data TUK (Tempat Uji Kompetensi)
                            </span>
                            <hr className='my-4' />
                            <div className='flex flex-col px-4 lg:flex-row lg:px-6 '>
                                <div className='flex flex-col w-full gap-5'>
                                    <ComboBoxForm
                                        name='tuk'
                                        text='TUK'
                                        value={values.tuk}
                                        items={Constants.listTuk}
                                        placeholder='Pilih TUK'
                                        onChange={handleChange}
                                        horizontally
                                        important
                                    />
                                    {errors.tuk && touched.tuk ? (
                                        <Alert
                                            message={errors.tuk}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <div className='w-full pt-4 mt-6 bg-white rounded-md shadow-sm pb-7 drop-shadow-sm'>
                            <span className='p-4 lg:p-6'>Data Kantor</span>
                            <hr className='my-4' />
                            <div className='flex flex-col px-4 lg:flex-row lg:px-6 '>
                                <div className='flex flex-col w-full gap-5'>
                                    <ComboBoxForm
                                        name='institution'
                                        text='Nama Lembaga/Badan'
                                        value={values.institution}
                                        items={Constants.institutions}
                                        placeholder='Pilih Lembaga'
                                        onChange={handleChange}
                                        horizontally
                                        important
                                    />
                                    {errors.institution &&
                                    touched.institution ? (
                                        <Alert
                                            message={errors.institution}
                                            type='error'
                                        />
                                    ) : null}
                                    <InputForm
                                        type='text'
                                        name='company'
                                        value={values.company}
                                        onChange={handleChange}
                                        text='Nama Perusahaan'
                                        horizontally
                                        important
                                    />
                                    {errors.company && touched.company ? (
                                        <Alert
                                            message={errors.company}
                                            type='error'
                                        />
                                    ) : null}
                                    <ComboBoxForm
                                        name='fund'
                                        text='Sumber Dana'
                                        value={values.fund}
                                        items={Constants.funds}
                                        placeholder='Pilih Sumber Dana'
                                        onChange={handleChange}
                                        horizontally
                                        important
                                    />
                                    {errors.fund && touched.fund ? (
                                        <Alert
                                            message={errors.fund}
                                            type='error'
                                        />
                                    ) : null}
                                    <ComboBoxForm
                                        name='job'
                                        text='Pekerjaan'
                                        value={values.job}
                                        items={Constants.jobs}
                                        placeholder='Pilih Pekerjaan'
                                        onChange={handleChange}
                                        horizontally
                                        important
                                    />
                                    {errors.job && touched.job ? (
                                        <Alert
                                            message={errors.job}
                                            type='error'
                                        />
                                    ) : null}
                                    <InputForm
                                        type='text'
                                        name='position'
                                        value={values.position}
                                        onChange={handleChange}
                                        text='Jabatan'
                                        horizontally
                                        important
                                    />
                                    {errors.position && touched.position ? (
                                        <Alert
                                            message={errors.position}
                                            type='error'
                                        />
                                    ) : null}
                                    <InputForm
                                        type='text'
                                        name='companyAddress'
                                        value={values.companyAddress}
                                        onChange={handleChange}
                                        text='Alamat Kantor'
                                        horizontally
                                        important
                                    />
                                    {errors.companyAddress &&
                                    touched.companyAddress ? (
                                        <Alert
                                            message={errors.companyAddress}
                                            type='error'
                                        />
                                    ) : null}
                                    <InputForm
                                        type='number'
                                        name='telpCompany'
                                        value={values.telpCompany}
                                        onChange={handleChange}
                                        text='No Telepon Kantor'
                                        horizontally
                                    />
                                    {errors.telpCompany &&
                                    touched.telpCompany ? (
                                        <Alert
                                            message={errors.telpCompany}
                                            type='error'
                                        />
                                    ) : null}
                                    <InputForm
                                        type='number'
                                        name='companyPosCode'
                                        value={values.companyPosCode}
                                        onChange={handleChange}
                                        text='Kode Pos'
                                        horizontally
                                    />
                                    {errors.companyPosCode &&
                                    touched.companyPosCode ? (
                                        <Alert
                                            message={errors.companyPosCode}
                                            type='error'
                                        />
                                    ) : null}
                                    <InputForm
                                        type='text'
                                        name='fax'
                                        value={values.fax}
                                        onChange={handleChange}
                                        text='Fax'
                                        horizontally
                                    />
                                    {errors.fax && touched.fax ? (
                                        <Alert
                                            message={errors.fax}
                                            type='error'
                                        />
                                    ) : null}
                                    <InputForm
                                        type='text'
                                        name='companyEmail'
                                        value={values.companyEmail}
                                        onChange={handleChange}
                                        text='Email'
                                        horizontally
                                    />
                                    {errors.companyEmail &&
                                    touched.companyEmail ? (
                                        <Alert
                                            message={errors.companyEmail}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='flex flex-col w-full mt-10 bg-white shadow-sm rounded-xs drop-shadow-sm'>
                    <Button
                        type='submit'
                        className='self-center lg:self-end w-9/12 lg:w-40 mx-6 lg:mx-10 my-6 h-[45px] bg-blue-500 hover:bg-blue-700'
                    >
                        Simpan
                    </Button>
                </footer>
                <SignUploadModal
                    show={isShowModal}
                    closeModal={() => setIsShowModal(false)}
                    onChange={(file, exp) => {
                        setFieldValue('signUpload', file);
                        setFieldValue('signExplanation', exp);
                    }}
                />
            </form>
            <LoadingSpinner show={isLoading} />
        </>
    );
};

export default AsesiProfilePage;
