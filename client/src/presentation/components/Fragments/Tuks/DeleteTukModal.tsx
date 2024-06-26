'use client';

import { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import Modal from '../../Elements/Modal';

type Props = {
    id: number;
};

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
                {/* <LoadingSpinner show={isLoading} /> */}
            </Modal>
        </div>
    );
};

export default DeleteTukModal;
