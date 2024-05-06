'use client';

import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import User from '../../../../data/models/User';
import Button from '../../Elements/Button';
import DataTable from '../../Elements/DataTable';
import IndeterminateCheckbox from '../../Elements/IndeterminateCheckbox';
import Modal from '../../Elements/Modal';

const AssignAsesiModal = () => {
    // const navigate = useNavigate();
    const [modal, setModal] = useState(false);

    // const [isLoading, setIsLoading] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 1,
        pageSize: 10,
    });

    const columns: ColumnDef<User>[] = [
        {
            id: 'select',
            header: ({ table }) => (
                <IndeterminateCheckbox
                    {...{
                        checked: table.getIsAllRowsSelected(),
                        indeterminate: table.getIsSomeRowsSelected(),
                        onChange: table.getToggleAllRowsSelectedHandler(),
                    }}
                />
            ),
            cell: ({ row }) => {
                return (
                    <div className='px-1'>
                        <IndeterminateCheckbox
                            {...{
                                checked: row.getIsSelected(),
                                disabled: !row.getCanSelect(),
                                indeterminate: row.getIsSomeSelected(),
                                onChange: row.getToggleSelectedHandler(),
                            }}
                        />
                    </div>
                );
            },
        },
        {
            accessorKey: 'photo',
            header: 'Foto',
            size: 500,
        },
        {
            accessorKey: 'fullName',
            header: 'Nama Lengkap',
            size: 500,
        },
        {
            accessorKey: 'email',
            header: 'Email',
            size: 500,
        },
        {
            accessorKey: 'phone',
            header: 'No. Telp',
            size: 500,
        },
    ];

    const generateData = (skip: number, pageSize: number): User[] => {
        const personDataList: User[] = [];
        const endIndex = skip + pageSize;

        for (let i = skip; i < endIndex && i < 50; i++) {
            const user = new User({
                id: i + 1,
                met: 'Met',
                photo: `Foto ${i + 1}`,
                role: 'Peran',
                birthPlace: 'Tempat Lahir',
                birthDate: new Date(),
                username: 'Username',
                email: 'example@ex.com',
                gender: 'Gender',
                fullName: 'Full Name',
                religion: 'Religion',
                nik: '2134567890',
                address: 'Address',
                phone: '21345678',
                education: 'Education',
                job: 'Job',
                sign: 'Sign',
                signExplanation: 'Sign Explanation',
            });
            personDataList.push(user);
        }
        return personDataList;
    };

    const data: User[] = generateData(
        pageIndex * pageSize - pageSize,
        pageSize
    );

    const handleSelectionData = (selectedData: User[]) => {
        const users = selectedData.map((data) => new User(data));
        const uniqueUsers: User[] = [...selectedUsers, ...users].filter(
            (obj, index, self) =>
                index === self.findIndex((t) => t.id === obj.id)
        );
        setSelectedUsers(uniqueUsers);
    };

    const onSearch = (query: string) => {
        console.log(query);
    };

    const handleClose = () => {
        setModal(!modal);
    };

    const onSave = async () => {
        console.log(`Asesi Selected`);
        console.log(selectedUsers);
    };

    return (
        <div>
            <Button
                type='button'
                className='flex flex-row items-center gap-2 text-blue-500 transition-colors duration-300 bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white'
                onClick={handleClose}
            >
                <FaUserPlus />
                Assign Asesi
            </Button>
            <Modal
                show={modal}
                onClose={handleClose}
                onConfirm={onSave}
                onConfirmBuilder={<Button type='button'>Simpan</Button>}
                className='lg:w-3/4 max-h-[70%] lg:max-h-[95%] overflow-y-scroll'
            >
                <span className='text-base font-semibold'>Select Asesi</span>
                <hr />
                <DataTable
                    data={data}
                    columns={columns}
                    searchFn={onSearch}
                    pageCount={Math.ceil(50 / pageSize)}
                    paginateFn={(page, pageSize) => {
                        setPagination({ pageIndex: page, pageSize });
                    }}
                    sortingFn={(states) => {
                        console.log(states);
                    }}
                    selectionFn={(selectedData) => {
                        handleSelectionData(selectedData);
                    }}
                    selectable
                />
                {/* <LoadingSpinner show={isLoading} /> */}
            </Modal>
        </div>
    );
};

export default AssignAsesiModal;
