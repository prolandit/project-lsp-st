import { FormikHelpers, useFormik } from 'formik';
import Constants from '../../common/constants';
import { ProfileValues } from '../../common/types';
import ComboBoxForm from '../components/Elements/ComboBoxForm';
import FileInputForm from '../components/Elements/FileInputForm';
import InputForm from '../components/Elements/InputForm';

const AsesiProfilePage = () => {
    const onSaveProfile = (profile: ProfileValues) => {
        console.log(profile);
    };

    const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues: {
            fullname: '',
            noKtpOrPassport: '',
            birthPlace: '',
            birthDate: '',
            genre: '',
            nationality: '',
            address: '',
            province: '',
            city: '',
            posCode: '',
            telp: '',
            phone: '',
            email: '',
            lastEducation: '',
            signUpload: '',
        },
        onSubmit: (
            values: ProfileValues,
            { setSubmitting }: FormikHelpers<ProfileValues>
        ) => {
            onSaveProfile(values);
            setSubmitting(false);
        },
    });

    return (
        <div className='flex flex-col gap-4 mx-3 lg:flex-row lg:mx-8'>
            <div className='w-full py-4 bg-white shadow-sm rounded-xs drop-shadow-sm'>
                <span className='p-4 lg:p-6'>Data Profile</span>
                <hr className='my-4' />
                <div className='flex flex-col px-4 lg:flex-row lg:px-6 lg:py-4'>
                    <form
                        className='flex flex-col w-full gap-5'
                        onSubmit={handleSubmit}
                    >
                        <InputForm
                            type='text'
                            name='fullname'
                            value={values.fullname}
                            onChange={handleChange}
                            text='Nama Lengkap'
                            horizontally
                            important
                        />
                        <InputForm
                            type='text'
                            name='noKtpOrPassport'
                            text='No KTP / PASPOR'
                            value={values.noKtpOrPassport}
                            onChange={handleChange}
                            horizontally
                            important
                        />
                        <InputForm
                            type='text'
                            name='birthPlace'
                            value={values.birthPlace}
                            onChange={handleChange}
                            text='Tempat Lahir'
                            horizontally
                            important
                        />
                        <InputForm
                            type='date'
                            name='birthDate'
                            value={values.birthDate}
                            onChange={handleChange}
                            text='Tanggal Lahir'
                            horizontally
                            important
                        />
                        <ComboBoxForm
                            name='genre'
                            text='Jenis Kelamin'
                            items={Constants.genreOptions}
                            value={values.genre}
                            placeholder='Pilih Jenis Kelamin'
                            horizontally
                            important
                        />
                        <InputForm
                            type='text'
                            name='nationality'
                            value={values.nationality}
                            onChange={handleChange}
                            text='Kebangsaan'
                            horizontally
                            important
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
                        <InputForm
                            type='text'
                            name='province'
                            value={values.province}
                            onChange={handleChange}
                            text='Provinsi'
                            horizontally
                            important
                        />
                        <InputForm
                            type='text'
                            name='city'
                            value={values.city}
                            onChange={handleChange}
                            text='Kota / Kabupaten'
                            horizontally
                            important
                        />
                        <InputForm
                            type='number'
                            name='posCode'
                            value={values.posCode}
                            onChange={handleChange}
                            text='Kode Pos'
                            horizontally
                            important
                        />
                        <InputForm
                            type='number'
                            name='telp'
                            value={values.telp}
                            onChange={handleChange}
                            text='No. Telp Rumah'
                            horizontally
                            important
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
                        <InputForm
                            type='number'
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            text='Email'
                            horizontally
                            important
                        />
                        <InputForm
                            type='number'
                            name='lastEducation'
                            value={values.lastEducation}
                            onChange={handleChange}
                            text='Pendidikan Terakhir'
                            horizontally
                            important
                        />
                        <ComboBoxForm
                            name='lastEducation'
                            text='Pendidikan Terakhir'
                            value={values.lastEducation}
                            items={Constants.educationOptions}
                            placeholder='Pilih Jenis Kelamin'
                            horizontally
                            important
                        />
                        <FileInputForm
                            name='signUpload'
                            onChange={(e) => {
                                if (e.currentTarget.files) {
                                    setFieldValue(
                                        'signUpload',
                                        e.currentTarget.files[0]
                                    );
                                }
                            }}
                            text='Upload Tanda Tangan'
                            horizontally
                            important
                        />
                    </form>
                </div>
            </div>
            <div className='w-full py-4 bg-white rounded-md shadow-sm drop-shadow-sm'></div>
        </div>
    );
};

export default AsesiProfilePage;
