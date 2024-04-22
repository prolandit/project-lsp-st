import { useFormik } from 'formik';
import { useState } from 'react';
import { CiLock } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Constants from '../../../common/constants';
import { changePasswordSchema } from '../../../common/formSchemas';
import { ChangePasswordValues } from '../../../common/types';
import UserRemoteDataSource from '../../../data/datasources/UserRemoteDataSource';
import Alert from '../../components/Elements/Alert';
import Button from '../../components/Elements/Button';
import InputForm from '../../components/Elements/InputForm';
import LoadingSpinner from '../../components/Elements/LoadingSpinner';
import AnimationContainer from '../../components/Fragments/AnimationContainer';

const ChangePasswordPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const onChangePassword = async (payload: ChangePasswordValues) => {
        setIsLoading(true);

        try {
            const token = localStorage.getItem('token') ?? '';

            await UserRemoteDataSource.changePassword(token, payload);
            navigate('/login');

            toast.success(Constants.reLoginMessage, {
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

    const { errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            newPasswordConfirmation: '',
        },
        validationSchema: changePasswordSchema,
        onSubmit: onChangePassword,
    });
    return (
        <>
            <AnimationContainer className='flex items-center justify-center min-h-screen duration-300 sm:bg-gray-100'>
                <form
                    className='w-full max-w-md p-10 bg-white rounded-md sm:shadow-lg'
                    onSubmit={handleSubmit}
                >
                    <h1 className='mb-3 text-3xl font-semibold'>
                        Ubah Password
                    </h1>
                    <div className='flex flex-col gap-5 mt-10'>
                        <InputForm
                            name='oldPassword'
                            type='password'
                            text='Password Lama'
                            placeholder='Password Lama'
                            onChange={handleChange}
                            prefix={
                                <CiLock className='text-lg text-black me-3' />
                            }
                        />
                        {errors.oldPassword && touched.oldPassword ? (
                            <Alert
                                message={errors.oldPassword}
                                type='error'
                            />
                        ) : null}
                        <InputForm
                            name='newPassword'
                            type='password'
                            text='Password Baru'
                            placeholder='Password Baru'
                            onChange={handleChange}
                            prefix={
                                <CiLock className='text-lg text-black me-3' />
                            }
                        />
                        {errors.newPassword && touched.newPassword ? (
                            <Alert
                                message={errors.newPassword}
                                type='error'
                            />
                        ) : null}
                        <InputForm
                            name='newPasswordConfirmation'
                            type='password'
                            text='Konfirmasi Password Baru'
                            placeholder='Konfirmasi Password Baru'
                            onChange={handleChange}
                            prefix={
                                <CiLock className='text-lg text-black me-3' />
                            }
                        />
                        {errors.newPasswordConfirmation &&
                        touched.newPasswordConfirmation ? (
                            <Alert
                                message={errors.newPasswordConfirmation}
                                type='error'
                            />
                        ) : null}
                        <Button
                            type='submit'
                            className='mt-6'
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </AnimationContainer>
            <LoadingSpinner show={isLoading} />
        </>
    );
};

export default ChangePasswordPage;
