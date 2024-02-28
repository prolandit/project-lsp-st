import { useFormik } from 'formik';
import Constants from '../../../common/constants';
import { createNewUserSchema } from '../../../common/formSchemas';
import { CreateUserValues } from '../../../common/types';
import Alert from '../../components/Elements/Alert';
import Button from '../../components/Elements/Button';
import ComboBoxForm from '../../components/Elements/ComboBoxForm';
import InputForm from '../../components/Elements/InputForm';

const CreateAccountPage = () => {
    // const [isLoading, setIsLoading] = useState(false);

    const onCreateUser = (payload: CreateUserValues) => {
        console.log(payload);
    };

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            role: '',
        },
        validationSchema: createNewUserSchema,
        onSubmit: onCreateUser,
    });

    return (
        <>
            <form
                className='flex flex-col mt-6'
                encType='multipart/form-data'
                onSubmit={handleSubmit}
            >
                <div className='flex flex-col gap-4 mx-3 lg:flex-row lg:mx-8'>
                    <div className='w-full pt-4 bg-white rounded-md shadow-sm drop-shadow-sm'>
                        <span className='px-4 py-6 text-base font-semibold text-blue-600 lg:px-6'>
                            Buat Akun Baru
                        </span>
                        <hr className='my-4' />
                        <div className='flex flex-col gap-5 px-4 lg:px-6'>
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
                                type='email'
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                                text='Alamat Email'
                                horizontally
                                important
                            />
                            {errors.email && touched.email ? (
                                <Alert
                                    message={errors.email}
                                    type='error'
                                />
                            ) : null}
                            <InputForm
                                type='password'
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                                text='Password'
                                horizontally
                                important
                            />
                            {errors.password && touched.password ? (
                                <Alert
                                    message={errors.password}
                                    type='error'
                                />
                            ) : null}
                            <ComboBoxForm
                                name='role'
                                text='Role'
                                items={Constants.dummyRoles}
                                value={values.role}
                                placeholder='Pilih Role'
                                onChange={handleChange}
                                horizontally
                                important
                            />
                            {errors.role && touched.role ? (
                                <Alert
                                    message={errors.role}
                                    type='error'
                                />
                            ) : null}
                        </div>
                        <hr className='mt-6' />
                        <footer className='flex flex-col w-full shadow-sm rounded-xs drop-shadow-sm'>
                            <Button
                                type='submit'
                                className='self-center lg:self-end w-9/12 lg:w-40 mx-6 lg:mx-10 my-4 h-[45px] bg-blue-500 hover:bg-blue-700'
                            >
                                Simpan
                            </Button>
                        </footer>
                    </div>
                </div>
            </form>
            {/* <LoadingSpinner show={isLoading} /> */}
        </>
    );
};

export default CreateAccountPage;
