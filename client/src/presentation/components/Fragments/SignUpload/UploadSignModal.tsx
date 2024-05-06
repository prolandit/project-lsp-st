import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../Elements/Tabs';
import DrawTabView from './DrawTabView';
import UploadTabView from './UploadTabView';

interface Props {
    show: boolean;
    closeModal: () => void;
    onChange?: (file: File | undefined, exp: string) => void;
}

const UploadSignModal = ({ show, closeModal, onChange }: Props) => {
    if (!show) {
        return <></>;
    } else {
        return (
            <div className='fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50'>
                <div className='relative w-full mx-4 bg-white rounded-lg lg:mx-0 lg:w-2/5'>
                    <div className='flex flex-col h-full'>
                        <div className='flex items-start justify-between mx-4 mt-4 lg:mx-8 lg:mt-8'>
                            <h1 className='text-lg font-semibold lg:text-lg'>
                                Unggah Tanda Tangan
                            </h1>
                        </div>
                        <Tabs defaultValue='upload'>
                            <div className='flex flex-row items-center mx-4 my-6 lg:mx-8'>
                                <TabsList className='w-full bg-gray-100'>
                                    <TabsTrigger
                                        value='upload'
                                        className='w-full'
                                    >
                                        Persyaratan Dasar
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value='draw'
                                        className='w-full'
                                    >
                                        Persyaratan Pendaftaran
                                    </TabsTrigger>
                                </TabsList>
                            </div>
                            <TabsContent value='upload'>
                                <UploadTabView
                                    onChange={onChange}
                                    onClose={closeModal}
                                    onSave={closeModal}
                                />
                            </TabsContent>
                            <TabsContent value='draw'>
                                <DrawTabView
                                    onChange={onChange}
                                    onClose={closeModal}
                                    onSave={closeModal}
                                />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
};

export default UploadSignModal;
