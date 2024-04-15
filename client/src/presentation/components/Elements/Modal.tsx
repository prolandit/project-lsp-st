import React from 'react';
import { twMerge } from 'tailwind-merge';
import Button from './Button';

type Props = {
    show: boolean;
    className?: string;
    children?: React.ReactNode;
    onCloseBuilder?: React.ReactNode;
    onConfirmBuilder?: React.ReactNode;
    onClose: () => void;
    onConfirm: () => void;
};

const Modal = ({
    show,
    className,
    onCloseBuilder,
    onConfirmBuilder,
    onClose,
    onConfirm,
    children,
}: Props) => {
    if (!show) return;
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50'>
            <div
                className={twMerge(
                    'flex flex-col w-full gap-3 p-4 mx-4 bg-white rounded-lg lg:mx-0 lg:w-96',
                    className
                )}
            >
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
