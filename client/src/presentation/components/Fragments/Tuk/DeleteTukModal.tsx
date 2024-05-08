'use client';

import { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import Button from '../../Elements/Button';
import Modal from '../../Elements/Modal';

interface Props {
    id: number;
}

const DeleteTukModal = ({ id }: Props) => {
    // const navigate = useNavigate();
    const [modal, setModal] = useState(false);

    // const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => {
        setModal(!modal);
    };

    const handleDelete = async () => {
        console.log(`Delete data with id: ${id}`);
    };

    return (
        <div>
            <Button
                type='button'
                className='flex flex-row items-center gap-2 text-red-500 transition-colors duration-300 bg-transparent border border-red-500 group hover:bg-red-500 hover:text-white'
                onClick={handleClose}
            >
                <MdDeleteOutline
                    size={20}
                    className='text-red-500 transition-colors duration-300 cursor-pointer group-hover:text-white'
                />
            </Button>
            <Modal
                show={modal}
                onClose={handleClose}
                onConfirm={handleDelete}
                className='lg:w-96 max-h-[500px] lg:max-h-[800px]'
            >
                <span className='text-base font-semibold'>Hapus TUK</span>
                <hr />
                <span className='my-1 font-medium'>
                    Anda yakin ingin menghapus data ini?
                </span>
                {/* <LoadingSpinner show={isLoading} /> */}
            </Modal>
        </div>
    );
};

export default DeleteTukModal;
