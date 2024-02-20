import { useState } from 'react';
import DrawTabView from './DrawTabView';
import UploadTabView from './UploadTabView';

type Props = {
    show: boolean;
    closeModal: () => void;
    onChange?: (file: File | undefined, exp: string) => void;
};

type TabType = {
    id: number;
    children: React.ReactNode;
};

const SignUploadModal = ({ show, closeModal, onChange }: Props) => {
    const [index, setIndex] = useState(0);

    const tabs = [
        { id: 0, text: 'Upload' },
        { id: 1, text: 'Gambar' },
    ];

    const tabsView: TabType[] = [
        {
            id: 0,
            children: (
                <UploadTabView
                    key={0}
                    onChange={onChange}
                    onClose={closeModal}
                    onSave={closeModal}
                />
            ),
        },
        {
            id: 1,
            children: (
                <DrawTabView
                    key={1}
                    onChange={onChange}
                    onClose={closeModal}
                    onSave={closeModal}
                />
            ),
        },
    ];

    const handleTabChange = (tabIndex: number) => {
        setIndex(tabIndex);
    };

    return (
        <div
            className={
                show
                    ? `fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50`
                    : 'hidden'
            }
        >
            <div className='relative w-full mx-4 bg-white rounded-lg lg:mx-0 lg:w-2/5'>
                <div className='flex flex-col h-full'>
                    <div className='flex items-start justify-between mx-4 mt-4 lg:mx-8 lg:mt-8'>
                        <h1 className='text-lg font-semibold lg:text-lg'>
                            Unggah Tanda Tangan
                        </h1>
                    </div>

                    <div>
                        <div className='flex flex-row mt-4 divide-x-2 lg:mt-6'>
                            {tabs.map((tab) => (
                                <span
                                    key={tab.id}
                                    onClick={() => handleTabChange(tab.id)}
                                    className={`px-4 py-2 rounded-sm text-md cursor-pointer w-full text-center ${
                                        index === tab.id
                                            ? 'text-blue-700 bg-blue-100'
                                            : ''
                                    }`}
                                >
                                    {tab.text}
                                </span>
                            ))}
                        </div>
                        <hr />
                    </div>

                    {tabsView.map((tabView) => (
                        <div
                            key={tabView.id}
                            className={`mt-10 ${
                                index !== tabView.id ? 'hidden' : ''
                            }`}
                        >
                            {tabView.children}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SignUploadModal;
