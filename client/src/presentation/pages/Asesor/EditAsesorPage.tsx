import { useFormik } from "formik";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AsesorValues } from "../../../common/types";
import { AsesorInputSchema } from "../../../common/formSchemas";
import ImagePlaceholder from "../../components/Elements/ImagePlaceholder";
import Alert from "../../components/Elements/Alert";
import Label from "../../components/Elements/Input/Label";
import Input from "../../components/Elements/Input";
import ComboBox from "../../components/Elements/ComboBox";
import Constants from "../../../common/constants";
import Button from "../../components/Elements/Button";
import UploadSignModal from "../../components/Fragments/SignUpload/UploadSignModal";

const EditAsesorPage = () => {
    const { id } = useParams();
    console.log(id);

    const [isShowModal, setIsShowModal] = useState(false);

    const onSaveAsesor = async (asesor: AsesorValues) => {
        console.log(asesor);
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
            photo: undefined,
            role: '',
            birthPlace: '',
            birthDate: '',
            username: '',
            email: '',
            gender: '',
            nik: '',
            education: '',
            fullName: '',
            religion: '',
            phone: '',
            work: '',
            noreg: undefined,
            signUpload: undefined,
            signExplanation: '',
        },
        validationSchema: AsesorInputSchema,
        onSubmit: onSaveAsesor,
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
                            Edit Asesor
                        </span>
                        <hr className='my-4' />
                        <div className='flex flex-col items-center gap-6 px-4 lg:gap-16 lg:px-16'>
                            <div className='flex flex-col items-center gap-4'>
                                {values.photo ? (
                                    <img
                                        src={URL.createObjectURL(values.photo)}
                                        className='object-cover rounded-md h-52 w-52'
                                    />
                                ) : (
                                    <>
                                        <ImagePlaceholder className='rounded-md h-52 w-52' />
                                        {errors.photo && touched.photo ? (
                                            <Alert
                                                message={errors.photo}
                                                type='error'
                                            />
                                        ) : null}
                                    </>
                                )}
                                <>
                                    <Label
                                        htmlFor='photo-upload'
                                        className='px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200'
                                    >
                                        Upload Foto
                                    </Label>
                                    <input
                                        id='photo-upload'
                                        type='file'
                                        accept='image/*'
                                        onChange={(e) => {
                                            const file =
                                                e.currentTarget.files?.[0];
                                            setFieldValue('photo', file);
                                        }}
                                        hidden
                                    />
                                </>
                            </div>
                            <div className='flex flex-col w-full gap-6 lg:gap-16 lg:grid lg:grid-cols-4 lg:gap-y-10'>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='role'
                                        className='w-36'
                                    >
                                        Peran
                                    </Label>
                                    <Input
                                        type='text'
                                        name='role'
                                        value={values.role}
                                        onChange={handleChange}
                                    />
                                    {errors.role && touched.role ? (
                                        <Alert
                                            message={errors.role}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='birthPlace'
                                        className='w-36'
                                    >
                                        Tempat Lahir
                                    </Label>
                                    <Input
                                        type='text'
                                        name='birthPlace'
                                        value={values.birthPlace}
                                        onChange={handleChange}
                                    />
                                    {errors.birthPlace && touched.birthPlace ? (
                                        <Alert
                                            message={errors.birthPlace}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='birthDate'
                                        className='w-36'
                                    >
                                        Tanggal Lahir
                                    </Label>
                                    <Input
                                        type='date'
                                        name='birthDate'
                                        value={values.birthDate}
                                        onChange={handleChange}
                                    />
                                    {errors.birthDate && touched.birthDate ? (
                                        <Alert
                                            message={errors.birthDate}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='username'
                                        className='w-36'
                                    >
                                        Username
                                    </Label>
                                    <Input
                                        type='text'
                                        name='username'
                                        value={values.username}
                                        onChange={handleChange}
                                    />
                                    {errors.username && touched.username ? (
                                        <Alert
                                            message={errors.username}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='email'
                                        className='w-36'
                                    >
                                        Email
                                    </Label>
                                    <Input
                                        type='text'
                                        name='email'
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && touched.email ? (
                                        <Alert
                                            message={errors.email}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='gender'>
                                        Jenis Kelamin
                                    </Label>
                                    <ComboBox
                                        name='gender'
                                        items={Constants.genderOptions}
                                        value={values.gender}
                                        placeholder='Pilih Jenis Kelamin'
                                        onChange={handleChange}
                                    />
                                    {errors.gender && touched.gender ? (
                                        <Alert
                                            message={errors.gender}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='nik'
                                        className='w-36'
                                    >
                                        NIK
                                    </Label>
                                    <Input
                                        type='text'
                                        name='nik'
                                        value={values.nik}
                                        onChange={handleChange}
                                    />
                                    {errors.nik && touched.nik ? (
                                        <Alert
                                            message={errors.nik}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='nik'
                                        className='w-36'
                                    >
                                        Pendidikan
                                    </Label>
                                    <Input
                                        type='text'
                                        name='education'
                                        value={values.education}
                                        onChange={handleChange}
                                    />
                                    {errors.education && touched.education ? (
                                        <Alert
                                            message={errors.education}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='fullName'
                                        className='w-36'
                                    >
                                        Nama Lengkap
                                    </Label>
                                    <Input
                                        type='text'
                                        name='fullName'
                                        value={values.fullName}
                                        onChange={handleChange}
                                    />
                                    {errors.fullName && touched.fullName ? (
                                        <Alert
                                            message={errors.fullName}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='religion'
                                        className='w-36'
                                    >
                                        Agama
                                    </Label>
                                    <ComboBox
                                        name='religion'
                                        items={Constants.religions}
                                        value=''
                                        placeholder='Pilih Jenis Kelamin'
                                        onChange={handleChange}
                                    />
                                    {errors.religion && touched.religion ? (
                                        <Alert
                                            message={errors.religion}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='phone'
                                        className='w-36'
                                    >
                                        No.Telepon
                                    </Label>
                                    <Input
                                        type='text'
                                        name='phone'
                                        value={values.phone}
                                        onChange={handleChange}
                                    />
                                    {errors.phone && touched.phone ? (
                                        <Alert
                                            message={errors.phone}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='work'
                                        className='w-36'
                                    >
                                        Pekerjaan
                                    </Label>
                                    <Input
                                        type='text'
                                        name='work'
                                        value={values.work}
                                        onChange={handleChange}
                                    />
                                    {errors.work && touched.work ? (
                                        <Alert
                                            message={errors.work}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label
                                        htmlFor='noreg'
                                        className='w-36'
                                    >
                                        Nomor Registerasi
                                    </Label>
                                    <Input
                                        type='number'
                                        name='noreg'
                                        value={values.noreg}
                                        onChange={handleChange}
                                    />
                                    {errors.noreg && touched.noreg ? (
                                        <Alert
                                            message={errors.noreg}
                                            type='error'
                                        />
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Label htmlFor='signUpload'>
                                        Tanda tangan
                                    </Label>
                                    {values.signUpload ? (
                                        <div className='flex flex-col'>
                                            <img
                                                src={URL.createObjectURL(
                                                    values.signUpload
                                                )}
                                                alt='Tanda Tangan'
                                                className='object-contain h-32 bg-gray-50 rounded-t-md'
                                            />
                                            <div className='flex flex-row gap-1 p-4 bg-white shadow rounded-b-md'>
                                                {values.signExplanation && (
                                                    <span className='text-sm'>
                                                        {values.signExplanation}
                                                        .
                                                    </span>
                                                )}
                                                <span
                                                    className='text-sm text-blue-700 cursor-pointer'
                                                    onClick={() =>
                                                        setIsShowModal(true)
                                                    }
                                                >
                                                    Ganti?
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <Button
                                                type='button'
                                                className='px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md h-11 hover:bg-blue-200'
                                                onClick={() =>
                                                    setIsShowModal(true)
                                                }
                                            >
                                                Upload
                                            </Button>
                                            {errors.signUpload &&
                                                touched.signUpload ? (
                                                <Alert
                                                    message={errors.signUpload}
                                                    type='error'
                                                />
                                            ) : null}
                                        </>
                                    )}
                                </div>
                            </div>
                            <Button
                                type='submit'
                                className='self-center w-9/12 lg:w-40 mx-6 lg:mx-10 h-[45px] bg-blue-500 hover:bg-blue-700'
                            >
                                Simpan
                            </Button>
                        </div>
                    </div>
                </div>
                <UploadSignModal
                    show={isShowModal}
                    closeModal={() => setIsShowModal(false)}
                    onChange={(file, exp) => {
                        setFieldValue('signUpload', file);
                        setFieldValue('signExplanation', exp);
                    }}
                />
            </form>
            {/* <LoadingSpinner show={isLoading} /> */}
        </>
    );

}

export default EditAsesorPage