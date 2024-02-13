/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import Constants from '../../common/constants';
import { asesorProfileSchema } from '../../common/formSchemas';
import { AsesorProfileValues } from '../../common/types';
import Alert from '../components/Elements/Alert';
import Button from '../components/Elements/Button';
import ComboBoxForm from '../components/Elements/ComboBoxForm';
import FileInputForm from '../components/Elements/FileInputForm';
import InputForm from '../components/Elements/InputForm';

const AsesorProfilePage = () => {
    const onSaveProfile = (profile: AsesorProfileValues) => {
        console.log(profile);
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
            fullname: '',
            noKtpOrPassport: '',
            noMet: '',
            birthPlace: '',
            birthDate: '',
            gender: '',
            nationality: '',
            address: '',
            province: '',
            city: '',
            posCode: '',
            telp: '',
            phone: '',
            email: '',
            lastEducation: '',
            signUpload: undefined,
        },
        validationSchema: asesorProfileSchema,
        onSubmit: (values: AsesorProfileValues) => {
            onSaveProfile(values);
        },
    });

    return (
        <form
            className='flex flex-col mt-10'
            encType='multipart/form-data'
        >
            <div className='flex flex-col gap-4 mx-3 lg:flex-row lg:mx-8'>
                <div className='w-full pt-4 bg-white rounded-md shadow-sm pb-7 drop-shadow-sm'>
                    <span className='p-4 lg:p-6'>Data Profile</span>
                    <hr className='my-4' />
                    <div className='grid items-start gap-6 px-4 md:grid-cols-2 lg:px-6'>
                        <div className='grid gap-6'>
                            <InputForm
                                type='text'
                                name='fullname'
                                value={values.fullname}
                                onChange={handleChange}
                                text='Nama Lengkap'
                                horizontally
                                important
                            />
                            {errors.fullname && touched.fullname ? (
                                <Alert
                                    message={errors.fullname}
                                    type='error'
                                />
                            ) : null}
                            <InputForm
                                type='number'
                                name='noKtpOrPassport'
                                text='No KTP / PASPOR'
                                value={values.noKtpOrPassport}
                                onChange={handleChange}
                                horizontally
                                important
                            />
                            {errors.noKtpOrPassport &&
                            touched.noKtpOrPassport ? (
                                <Alert
                                    message={errors.noKtpOrPassport}
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
                                value={values.birthDate}
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
                                name='lastEducation'
                                text='Pendidikan Terakhir'
                                value={values.lastEducation}
                                items={Constants.educationOptions}
                                placeholder='Pilih Pendidikan Terakhir'
                                onChange={handleChange}
                                horizontally
                                important
                            />
                            {errors.lastEducation && touched.lastEducation ? (
                                <Alert
                                    message={errors.lastEducation}
                                    type='error'
                                />
                            ) : null}
                            <InputForm
                                type='text'
                                name='nationality'
                                value={values.nationality}
                                onChange={handleChange}
                                text='Kebangsaan'
                                horizontally
                            />
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
                            <FileInputForm
                                name='signUpload'
                                onChange={(e) => {
                                    handleChange(e);
                                    setFieldValue(
                                        'signUpload',
                                        e.currentTarget.files?.[0]
                                    );
                                }}
                                text='Upload Tanda Tangan'
                                horizontally
                                important
                            />
                            {errors.signUpload ? (
                                <Alert
                                    message={errors.signUpload}
                                    type='error'
                                />
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>

            <footer className='flex flex-col w-full mt-10 bg-white shadow-sm lg:absolute lg:bottom-0 rounded-xs drop-shadow-sm'>
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
            </footer>
        </form>
    );
};

export default AsesorProfilePage;
