'use client';

import { useState } from 'react';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import Button from '../../../Elements/Button';
import Modal from '../../../Elements/Modal';

interface Props {
    id: number;
}

const DetailAsesorModal = ({ id }: Props) => {
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
                className='flex flex-row items-center gap-2 text-blue-500 transition-colors duration-300 bg-transparent border border-blue-500 group hover:bg-blue-500 hover:text-white'
                onClick={handleClose}
            >
                <HiOutlineInformationCircle
                    size={20}
                    className='text-blue-500 transition-colors duration-300 cursor-pointer group-hover:text-white'
                />
            </Button>
            <Modal
                show={modal}
                onClose={handleClose}
                onConfirm={handleDelete}
                className='lg:w-96 max-h-[500px] lg:max-h-[800px]'
            >
                <span className='text-base font-semibold'>Detail Asesor</span>
                <hr />
                {/* <LoadingSpinner show={isLoading} /> */}
            </Modal>
        </div>
    );
};

export default DetailAsesorModal;
