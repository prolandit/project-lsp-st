import { Alert } from 'antd';
import { useFormik } from 'formik';
import React, { useCallback } from 'react';
import { fileInputSchema } from '../../../../common/formSchemas';
import { FileUpload } from '../../../../common/types';
import Button from '../Button';
import CustomFileInput from '../CustomFileInput';
import InputForm from '../InputForm';

type Props = {
    onChange?: (file: File | undefined, exp: string) => void;
    onClose: () => void;
    onSave: () => void;
};

const UploadTabView = ({ onChange, onClose, onSave }: Props) => {
    const handleSubmit = useCallback(
        (values: FileUpload) => {
            console.log(values);
            if (values.fileUpload || values.explanation) {
                onSave();
            }
        },
        [onSave]
    );

    const { errors, values, handleChange, setFieldValue } =
        useFormik<FileUpload>({
            initialValues: {
                fileUpload: null,
                explanation: '',
            },
            validationSchema: fileInputSchema,
            onSubmit: handleSubmit,
        });

    const handleFileInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.currentTarget.files?.[0];
            setFieldValue('fileUpload', file);
        },
        [setFieldValue]
    );

    return (
        <div className='flex flex-col'>
            <div className='flex items-center justify-center w-full h-full'>
                <CustomFileInput
                    name='fileUpload'
                    type='file'
                    accept='image/*'
                    value={values.fileUpload}
                    onChange={handleFileInputChange}
                />
            </div>
            {errors.fileUpload && (
                <Alert
                    className='mx-4 mt-2 lg:w-3/4 lg:self-center lg:mx-0'
                    message={errors.fileUpload}
                    type='error'
                />
            )}
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
            {errors.explanation && (
                <Alert
                    className='mx-4 mt-2 lg:w-3/4 lg:self-center lg:mx-0'
                    message={errors.explanation}
                    type='error'
                />
            )}
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

                        onChange?.(
                            values.fileUpload ?? undefined,
                            values.explanation
                        );
                        handleSubmit(values);
                    }}
                >
                    Simpan
                </Button>
            </div>
        </div>
    );
};

export default UploadTabView;
