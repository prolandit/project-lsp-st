import { useFormik } from 'formik';
import { fileInputSchema } from '../../../../common/formSchemas';
import { FileUpload } from '../../../../common/types';
import Alert from '../../Elements/Alert';
import Button from '../../Elements/Button';
import CustomFileInput from '../../Elements/CustomFileInput';
import InputForm from '../../Elements/InputForm';

interface Props {
    onChange?: (file: File | undefined, exp: string) => void;
    onClose: () => void;
    onSave: () => void;
}

const UploadTabView = ({ onChange, onClose, onSave }: Props) => {
    const { errors, values, handleChange, setFieldValue, handleSubmit } =
        useFormik<FileUpload>({
            initialValues: {
                fileUpload: null,
                explanation: '',
            },
            validationSchema: fileInputSchema,
            onSubmit: () => {
                if (values.fileUpload || values.explanation) {
                    onSave();
                }
            },
        });

    return (
        <div className='flex flex-col'>
            <div className='flex items-center justify-center w-full h-full'>
                <CustomFileInput
                    name='fileUpload'
                    type='file'
                    accept='image/*'
                    value={values.fileUpload}
                    onChange={(e) => {
                        const file = e.currentTarget.files?.[0];
                        setFieldValue('fileUpload', file);
                    }}
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
                        onChange?.(undefined, values.explanation);
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
                        handleSubmit();
                    }}
                >
                    Simpan
                </Button>
            </div>
        </div>
    );
};

export default UploadTabView;
