/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikHelpers, useFormik } from 'formik';
import Constants from '../../common/constants';
import { ProfileValues } from '../../common/types';
import Button from '../components/Elements/Button';
import ComboBoxForm from '../components/Elements/ComboBoxForm';
import FileInputForm from '../components/Elements/FileInputForm';
import InputForm from '../components/Elements/InputForm';

const AsesiProfilePage = () => {
    const onSaveProfile = (profile: ProfileValues) => {
        console.log(`Profile: ${JSON.stringify(profile)}`);
    };

    const { values, handleChange, handleSubmit } = useFormik({
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
            signUpload: undefined,
            tuk: '',
        },
        onSubmit: (
            values: ProfileValues,
            { setSubmitting }: FormikHelpers<any>
        ) => {
            onSaveProfile(values);
            setSubmitting(false);
        },
    });

    return (
        <div className='flex flex-col mt-10'>
            <div className='flex flex-col gap-4 mx-3 lg:flex-row lg:mx-8'>
                <div className='w-full py-4 bg-white shadow-sm rounded-xs drop-shadow-sm'>
                    <span className='p-4 lg:p-6'>Data Profile</span>
                    <hr className='my-4' />
                    <div className='flex flex-col px-4 lg:flex-row lg:px-6 '>
                        <form
                            className='flex flex-col w-full gap-5'
                            encType='multipart/form-data'
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
                                onChange={handleChange}
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
                            <FileInputForm
                                name='signUpload'
                                accept='image/*'
                                onChange={handleChange}
                                text='Upload Tanda Tangan'
                                horizontally
                                important
                            />
                        </form>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='w-full py-4 bg-white rounded-md shadow-sm drop-shadow-sm'>
                        <span className='p-4 lg:p-6'>
                            Data TUK (Tempat Uji Kompetensi)
                        </span>
                        <hr className='my-4' />
                        <div className='flex flex-col px-4 lg:flex-row lg:px-6 '>
                            <form className='flex flex-col w-full gap-5'>
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
                            </form>
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
        </div>
    );
};

export default AsesiProfilePage;
