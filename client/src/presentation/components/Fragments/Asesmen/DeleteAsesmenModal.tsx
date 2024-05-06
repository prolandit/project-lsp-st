'use client';

import { useState } from 'react';
import Button from '../../Elements/Button';
import Modal from '../../Elements/Modal';

interface Props {
    id: number;
}

const DeleteAsesmenModal = ({ id }: Props) => {
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
                className='text-red-500 duration-300 bg-white border border-red-500 hover:bg-red-500 hover:text-white transition-color'
                onClick={handleClose}
            >
                Delete
            </Button>
            <Modal
                show={modal}
                onClose={handleClose}
                onConfirm={handleDelete}
                className='lg:w-96 max-h-[500px] lg:max-h-[800px]'
            >
                <span className='text-base font-semibold'>Hapus Asesmen</span>
                <hr />
                <span className='my-1 font-medium'>
                    Anda yakin ingin menghapus data ini?
                </span>
                {/* <LoadingSpinner show={isLoading} /> */}
            </Modal>
        </div>
    );
};

export default DeleteAsesmenModal;
