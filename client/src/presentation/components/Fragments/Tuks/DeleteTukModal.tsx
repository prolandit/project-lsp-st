'use client';

import { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import Modal from '../../Elements/Modal';
import LoadingSpinner from '../../Elements/LoadingSpinner';
import TukRemoteDataSource from '../../../../data/datasources/TukRemoteDataSource';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

type Props = {
    id: number;
    onDeleteSuccess: () => void;
};

const DeleteTukModal = ({ id, onDeleteSuccess }: Props) => {
    const [modal, setModal] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => {
        setModal(!modal);
    };

    const handleDelete = async () => {
        console.log(`Delete data with id: ${id}`);
        setIsLoading(true);
        try {
            const numericId = parseInt(id.toString(), 10);
            if (!isNaN(numericId)) {
                await TukRemoteDataSource.deleteTukData(numericId);
                toast.success('TUK berhasil dihapus', {
                    position: 'top-center',
                    hideProgressBar: true,
                });
                onDeleteSuccess();
                handleClose();
            }
        } catch (error) {
            toast.error((error as Error).message, {
                position: 'top-center',
                hideProgressBar: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <MdDeleteOutline
                size={20}
                className='text-red-500 cursor-pointer'
                onClick={handleClose}
            />
            <Modal
                show={modal}
                onClose={handleClose}
                onConfirm={handleDelete}
                className='lg:w-96 max-h-[500px] lg:max-h-[800px]'
            >
                <span className='mx-4 text-base font-semibold'>Hapus TUK</span>
                <hr />
                <span className='mx-4 my-1 font-medium'>
                    Anda yakin ingin menghapus data ini?
                </span>
                <LoadingSpinner show={isLoading} />
            </Modal>
        </div>
    );
};

export default DeleteTukModal;
