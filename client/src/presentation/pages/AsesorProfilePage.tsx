/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Constants from '../../common/constants';
import { asesorProfileSchema } from '../../common/formSchemas';
import { AsesorProfileValues, UserType } from '../../common/types';
import { downloadFile, formattedDate } from '../../common/utils';
import UserRemoteDataSource from '../../data/datasources/UserRemoteDataSource';
import Alert from '../components/Elements/Alert';
import Button from '../components/Elements/Button';
import ComboBoxForm from '../components/Elements/ComboBoxForm';
import InputForm from '../components/Elements/InputForm';
import LoadingSpinner from '../components/Elements/LoadingSpinner';
import SignFileUploader from '../components/Elements/SignFileUpload';
import SignUploadModal from '../components/Elements/SignFileUpload/SignUploadModal';

const AsesorProfilePage: React.FC<{ user: UserType | null }> = ({ user }) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSaveProfile = async (profile: AsesorProfileValues) => {
        setIsLoading(true);
        // console.log(profile)
        try {
            const token = localStorage.getItem('token') ?? '';

            await UserRemoteDataSource.changeProfile(token, profile);
            toast.success('Profile Asesor berhasil diubah', {
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
            noMet: user?.met ?? '',
            birthPlace: user?.birthPlace ?? '',
            birthDate: user?.birthDate ?? '',
            gender: user?.gender ?? '',
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
        },
        validationSchema: asesorProfileSchema,
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
            >
                <div className='flex flex-col gap-4 mx-3 mb-6 lg:flex-row lg:mx-8'>
                    <div className='w-full pt-4 bg-white rounded-md shadow-sm pb-7 drop-shadow-sm'>
                        <span className='p-4 lg:p-6'>Data Profile</span>
                        <hr className='my-4' />
                        <div className='grid items-start gap-6 px-4 md:grid-cols-2 lg:px-6'>
                            <div className='grid gap-6'>
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
                                    type='number'
                                    name='ktpPassport'
                                    text='No KTP / PASPOR'
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
                                    type='number'
                                    name='noMet'
                                    text='No MET'
                                    value={values.noMet}
                                    onChange={handleChange}
                                    horizontally
                                    important
                                />
                                {errors.noMet && touched.noMet ? (
                                    <Alert
                                        message={errors.noMet}
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
                                    value={values.gender}
                                    items={Constants.genderOptions}
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
                            </div>
                            <div className='grid gap-6'>
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
                        <div className='grid items-start gap-6 px-4 lg:px-6'>
                            <hr className='mt-4' />
                            <div className='grid gap-6 lg:justify-self-end'>
                                <Button
                                    type='submit'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleSubmit();
                                    }}
                                    className='self-center lg:self-end lg:w-40 h-[45px] bg-blue-500 hover:bg-blue-700'
                                >
                                    Simpan
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* masih bug terakhir didevice 1920x1080 masing ngambang gitu jadi pindahin aja */}

                {/* <footer className='flex flex-col w-full mt-10 bg-white shadow-sm lg:absolute lg:bottom-0 rounded-xs drop-shadow-sm'>
                    <Button
                        type='submit'
                        onClick={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                        className='self-center lg:self-end w-9/12 lg:w-40 mx-6 lg:mx-10 my-6 h-[45px] bg-blue-500 hover:bg-blue-700'
                    >
                        Simpan
                    </Button>
                </footer> */}

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

export default AsesorProfilePage;
