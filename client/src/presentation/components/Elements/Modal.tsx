import React from 'react';
import Button from './Button';

type Props = {
    show: boolean;
    children?: React.ReactNode;
    onCloseBuilder?: React.ReactNode;
    onConfirmBuilder?: React.ReactNode;
    onClose: () => void;
    onConfirm: () => void;
};

const Modal = ({
    show,
    onCloseBuilder,
    onConfirmBuilder,
    onClose,
    onConfirm,
    children,
}: Props) => {
    return (
        <div
            className={
                show
                    ? `fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50`
                    : 'hidden'
            }
        >
            <div className='flex flex-col w-full gap-3 p-4 mx-4 bg-white rounded-lg lg:mx-0 lg:w-96'>
                {children}
                <div className='flex flex-row justify-end gap-2 mt-6 lg:mx-0'>
                    <div onClick={onClose}>
                        {onCloseBuilder ? (
                            onCloseBuilder
                        ) : (
                            <Button
                                className='bg-red-500 hover:bg-red-400'
                                type='button'
                            >
                                Batal
                            </Button>
                        )}
                    </div>
                    <div onClick={onConfirm}>
                        {onConfirmBuilder ? (
                            onConfirmBuilder
                        ) : (
                            <Button
                                type='button'
                                onClick={(e) => {
                                    e.preventDefault();
                                    onConfirm();
                                }}
                            >
                                Ya
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
