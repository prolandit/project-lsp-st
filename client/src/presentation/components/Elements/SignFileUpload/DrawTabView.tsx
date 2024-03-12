import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { IoRefresh } from 'react-icons/io5';
import { fileInputSchema } from '../../../../common/formSchemas';
import useCanvas from '../../../../common/hooks/useCanvas';
import { FileUpload } from '../../../../common/types';
import Alert from '../Alert';
import Button from '../Button';
import InputForm from '../InputForm';

type Props = {
    onChange?: (file: File | undefined, exp: string) => void;
    onClose: () => void;
    onSave: () => void;
};

const DrawTabView = ({ onChange, onClose, onSave }: Props) => {
    const [canvasRef, imageFile] = useCanvas();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 640px)');

        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClear = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const { errors, values, setFieldValue, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                fileUpload: null,
                explanation: '',
            },
            validationSchema: fileInputSchema,
            onSubmit: (values: FileUpload) => {
                console.log(values);
            },
        });

    useEffect(() => {
        if (imageFile && setFieldValue) {
            setFieldValue('fileUpload', imageFile);
        }
    }, [imageFile, setFieldValue]);

    return (
        <div className='flex flex-col'>
            <div className='flex items-center justify-center w-full h-full'>
                <div className='flex flex-col items-center justify-center w-full gap-4 mx-4 lg:h-80 lg:mx-0'>
                    <div className='relative'>
                        <canvas
                            className='border-2 border-gray-300 rounded-lg cursor-pointer lg:w-full lg:h-full'
                            ref={canvasRef}
                            width={isMobile ? undefined : 570}
                            height={isMobile ? undefined : 320}
                        />
                        <IoRefresh
                            className='absolute top-0 right-0 mt-4 text-2xl cursor-pointer me-4'
                            onClick={handleClear}
                        />
                    </div>
                </div>
            </div>
            {errors.fileUpload ? (
                <Alert
                    className='mx-4 mt-2 lg:w-3/4 lg:self-center lg:mx-0'
                    message={errors.fileUpload}
                    type='error'
                />
            ) : null}
            <div className='flex flex-col mx-4 mt-6 lg:w-3/4 lg:self-center lg:mx-0'>
                <InputForm
                    type='text'
                    name='explanation'
                    text='Keterangan'
                    value={values.explanation}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    horizontally
                />
            </div>
            {errors.explanation ? (
                <Alert
                    className='mx-4 mt-2 lg:w-3/4 lg:self-center lg:mx-0'
                    message={errors.explanation}
                    type='error'
                />
            ) : null}
            <div className='flex justify-end gap-2 mx-4 mt-8 mb-10 lg:mx-0 lg:w-3/4 lg:self-center'>
                <Button
                    type='button'
                    className='bg-red-500 hover:bg-red-400'
                    onClick={onClose}
                >
                    Batal
                </Button>
                <Button
                    type='button'
                    onClick={(e) => {
                        e.preventDefault();

                        onChange?.(imageFile, values.explanation);

                        handleSubmit();
                        if (values.fileUpload || values.explanation) {
                            onSave();
                        }
                    }}
                >
                    Simpan
                </Button>
            </div>
        </div>
    );
};

export default DrawTabView;
