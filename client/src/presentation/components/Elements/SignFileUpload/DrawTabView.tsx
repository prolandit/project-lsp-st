import { Alert } from 'antd';
import { useFormik } from 'formik';
import { fileInputSchema } from '../../../../common/formSchemas';
import { FileUpload } from '../../../../common/types';
import Button from '../Button';
import InputForm from '../InputForm';
import SignatureCanvas from './SignatureCanvas';

type Props = {
    onChange?: (file: File | undefined, exp: string) => void;
    onClose: () => void;
    onSave: () => void;
};

const DrawTabView = ({ onChange, onClose, onSave }: Props) => {
    const { errors, values, handleSubmit, handleChange, setFieldValue } =
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

    return (
        <div className='flex flex-col'>
            <div className='flex items-center justify-center w-full h-full'>
                <SignatureCanvas
                    onChange={(file) => {
                        setFieldValue('fileUpload', file);
                        onChange?.(file, values.explanation);
                    }}
                />
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
                        onChange?.(undefined, e.target.value);
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
