/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert } from 'antd';
import { FormikHelpers, useFormik } from 'formik';
import Constants from '../../common/constants';
import { asesiProfileSchema } from '../../common/formSchemas';
import { ProfileValues } from '../../common/types';
import Button from '../components/Elements/Button';
import ComboBoxForm from '../components/Elements/ComboBoxForm';
import FileInputForm from '../components/Elements/FileInputForm';
import InputForm from '../components/Elements/InputForm';

const AsesiProfilePage = () => {
    const onSaveProfile = (profile: ProfileValues) => {
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
            tuk: '',
            institution: '',
            company: '',
            fund: '',
            job: '',
            position: '',
            companyAddress: '',
            telpCompany: '',
            companyPosCode: '',
            fax: '',
            companyEmail: '',
        },
        validationSchema: asesiProfileSchema,
        onSubmit: (
            values: ProfileValues,
            { setSubmitting }: FormikHelpers<any>
        ) => {
            onSaveProfile(values);
            setSubmitting(false);
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
                    <div className='flex flex-col px-4 lg:flex-row lg:px-6 '>
                        <div className='flex flex-col w-full gap-5'>
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
                            <InputForm
                                type='text'
                                name='nationality'
                                value={values.nationality}
                                onChange={handleChange}
                                text='Kebangsaan'
                                horizontally
                            />
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
                            />
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
                            {errors.lastEducation && touched.lastEducation ? (
                                <Alert
                                    message={errors.lastEducation}
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
                                {errors.institution && touched.institution ? (
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
                                {errors.telpCompany && touched.telpCompany ? (
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
                                {errors.companyEmail && touched.companyEmail ? (
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
            <div className='flex flex-col w-full mt-10 bg-white shadow-sm rounded-xs drop-shadow-sm'>
                <Button
                    type='submit'
                    onClick={handleSubmit}
                    className='self-center lg:self-end w-9/12 lg:w-40 mx-6 lg:mx-10 my-6 h-[45px] bg-blue-500 hover:bg-blue-700'
                >
                    Simpan
                </Button>
            </div>
        </form>
    );
};

export default AsesiProfilePage;
