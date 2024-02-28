import { useLocation } from 'react-router-dom';
import Constants from '../../../common/constants';
import Button from '../../components/Elements/Button';
import ComboBoxForm from '../../components/Elements/ComboBoxForm';
import Input from '../../components/Elements/Input';
import Label from '../../components/Elements/Input/Label';
import InputForm from '../../components/Elements/InputForm';

const VerifyAccountPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const id = searchParams.get('id');
    console.log(id);

    return (
        <>
            <div className='flex flex-col mt-6'>
                <div className='py-4 mx-3 bg-white rounded-md shadow-sm lg:mx-8 drop-shadow-sm'>
                    <span className='px-4 py-6 text-base font-semibold text-blue-600 lg:px-6'>
                        Verifikasi
                    </span>
                    <hr className='my-4' />
                    <div className='flex flex-row px-4 lg:px-6'>
                        <Label
                            htmlFor='verifyAccount'
                            className='w-[200px]'
                        >
                            Verifikasi Akun
                        </Label>
                        <Input
                            className='w-10'
                            name='verifyAccount'
                            type='checkbox'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-4 mx-3 mt-4 lg:flex-row lg:mx-8'>
                    <div className='w-full pt-4 bg-white rounded-md shadow-sm pb-7 drop-shadow-sm'>
                        <span className='px-4 py-6 text-base font-semibold text-blue-600 lg:px-6'>
                            Data Profile
                        </span>
                        <hr className='my-4' />
                        <div className='flex flex-col px-4 lg:flex-row lg:px-6'>
                            <div className='flex flex-col w-full gap-5'>
                                <InputForm
                                    type='text'
                                    name='fullName'
                                    defaultValue='Abdul Azis'
                                    text='Nama Lengkap'
                                    horizontally
                                    important
                                    disabled
                                />
                                <InputForm
                                    type='string'
                                    name='ktpPassport'
                                    text='No KTP / PASPOR'
                                    maxLength={16}
                                    defaultValue='2134567890123456'
                                    horizontally
                                    important
                                    disabled
                                />
                                <InputForm
                                    type='text'
                                    name='birthPlace'
                                    defaultValue='Rumah Sakit'
                                    text='Tempat Lahir'
                                    horizontally
                                    important
                                    disabled
                                />
                                <InputForm
                                    type='date'
                                    name='birthDate'
                                    defaultValue='1111-11-11'
                                    text='Tanggal Lahir'
                                    horizontally
                                    important
                                    disabled
                                />
                                <ComboBoxForm
                                    name='gender'
                                    text='Jenis Kelamin'
                                    items={Constants.genderOptions}
                                    value='Pria'
                                    placeholder='Pilih Jenis Kelamin'
                                    horizontally
                                    important
                                    disabled
                                />
                                <ComboBoxForm
                                    name='nationality'
                                    text='Kebangsaan'
                                    items={Constants.nationalities}
                                    value='Indonesia'
                                    placeholder='Pilih Kebangsaan'
                                    horizontally
                                    important
                                    disabled
                                />
                                <InputForm
                                    type='text'
                                    name='address'
                                    defaultValue='Jalan Jalan'
                                    text='Alamat'
                                    horizontally
                                    important
                                    disabled
                                />
                                <InputForm
                                    type='text'
                                    name='province'
                                    defaultValue='Pulau Dua Ribu'
                                    text='Provinsi'
                                    horizontally
                                    important
                                    disabled
                                />
                                <InputForm
                                    type='text'
                                    name='city'
                                    defaultValue='Kota Kita'
                                    text='Kota / Kabupaten'
                                    horizontally
                                    important
                                    disabled
                                />
                                <InputForm
                                    type='number'
                                    name='posCode'
                                    defaultValue='421211'
                                    text='Kode Pos'
                                    horizontally
                                    important
                                    disabled
                                />
                                <InputForm
                                    type='number'
                                    name='telp'
                                    defaultValue='0211234567'
                                    text='No. Telp Rumah'
                                    horizontally
                                />
                                <InputForm
                                    type='number'
                                    name='phone'
                                    defaultValue='081234567890'
                                    text='HP'
                                    horizontally
                                    important
                                    disabled
                                />
                                <InputForm
                                    type='text'
                                    name='email'
                                    defaultValue='3NQpO@example.com'
                                    text='Email'
                                    horizontally
                                    important
                                    disabled
                                />
                                <ComboBoxForm
                                    name='lastEducation'
                                    text='Pendidikan Terakhir'
                                    items={Constants.educationOptions}
                                    value='S4'
                                    placeholder='Pilih Pendidikan Terakhir'
                                    horizontally
                                    important
                                    disabled
                                />
                                <div className='flex flex-col gap-2 lg:flex-row'>
                                    <Label className='lg:w-60'>
                                        <span className='flex items-center gap-0.5'>
                                            <span>Tanda Tangan</span>
                                            <span className='text-red-700'>
                                                {'*'}
                                            </span>
                                        </span>
                                    </Label>
                                    <div className='flex flex-row items-start justify-start w-full gap-1'>
                                        <span className='text-sm font-semibold'>
                                            Keterangan:
                                        </span>
                                        <span className='text-sm'>
                                            Tidak punya tanda tangan
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full gap-5'>
                        <div className='w-full pt-4 bg-white rounded-md shadow-sm pb-7 drop-shadow-sm'>
                            <span className='px-4 py-6 text-base font-semibold text-blue-600 lg:px-6'>
                                Data Kantor
                            </span>
                            <hr className='my-4' />
                            <div className='flex flex-col px-4 lg:flex-row lg:px-6 '>
                                <div className='flex flex-col w-full gap-5'>
                                    <ComboBoxForm
                                        name='institution'
                                        text='Kementrian Agama'
                                        items={Constants.institutions}
                                        value='Lembaga Lembigu'
                                        placeholder='Pilih Lembaga'
                                        horizontally
                                        important
                                        disabled
                                    />
                                    <InputForm
                                        type='text'
                                        name='company'
                                        defaultValue='PT Pencari Cinta Sejati'
                                        text='Nama Perusahaan'
                                        horizontally
                                        important
                                        disabled
                                    />
                                    <ComboBoxForm
                                        name='fund'
                                        text='Sumber Dana'
                                        items={Constants.funds}
                                        value='Sumber Anggaran Biaya Mandiri'
                                        placeholder='Pilih Sumber Dana'
                                        horizontally
                                        important
                                        disabled
                                    />
                                    <ComboBoxForm
                                        name='job'
                                        text='Pekerjaan'
                                        items={Constants.jobs}
                                        value='Tidak/Belum Bekerja'
                                        placeholder='Pilih Pekerjaan'
                                        horizontally
                                        important
                                        disabled
                                    />
                                    <InputForm
                                        type='text'
                                        name='position'
                                        defaultValue='Diatas'
                                        text='Jabatan'
                                        horizontally
                                        important
                                        disabled
                                    />
                                    <InputForm
                                        type='text'
                                        name='companyAddress'
                                        defaultValue='Jalan Jalan'
                                        text='Alamat Kantor'
                                        horizontally
                                        important
                                        disabled
                                    />
                                    <InputForm
                                        type='number'
                                        name='telpCompany'
                                        defaultValue='0211234567'
                                        text='No Telepon Kantor'
                                        horizontally
                                    />
                                    <InputForm
                                        type='number'
                                        name='companyPosCode'
                                        defaultValue='421211'
                                        text='Kode Pos'
                                        horizontally
                                    />
                                    <InputForm
                                        type='text'
                                        name='fax'
                                        defaultValue='0211234567'
                                        text='Fax'
                                        horizontally
                                    />
                                    <InputForm
                                        type='text'
                                        name='companyEmail'
                                        defaultValue='3NQpO@example.com'
                                        text='Email'
                                        horizontally
                                    />
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
            </div>
            {/* <LoadingSpinner show={isLoading} /> */}
        </>
    );
};

export default VerifyAccountPage;
