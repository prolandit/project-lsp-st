import { createColumnHelper } from '@tanstack/react-table';
import { useState } from 'react';
import { TbEdit, TbTrash } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../../common/types';
import DataTable from '../components/Elements/DataTable';
import Modal from '../components/Elements/Modal';

const AccountsPage = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 1,
        pageSize: 10,
    });
    // const [sorting, setSorting] = useState<SortingState>([]);

    const columnHelper = createColumnHelper<UserType>();
    const columns = [
        columnHelper.accessor('fullName', {
            header: 'Full Name',
        }),
        columnHelper.accessor('email', {
            header: 'Email Address',
        }),
        columnHelper.accessor('role', {
            header: 'Role',
        }),
        columnHelper.display({
            header: 'Aksi',
            enableSorting: false,
            cell: ({ row }) => (
                <div className='flex flex-row items-center justify-center gap-3'>
                    <TbEdit
                        onClick={() =>
                            navigate(
                                `/verifikasi-akun/${row.original.fullName}`
                            )
                        }
                        className='text-2xl text-blue-500 cursor-pointer'
                    />
                    <TbTrash
                        onClick={() => setModalOpen(true)}
                        className='text-2xl text-red-500 cursor-pointer'
                    />
                </div>
            ),
        }),
    ];

    const generateData = (skip: number, pageSize: number): UserType[] => {
        const personDataList: UserType[] = [];
        const endIndex = skip + pageSize;

        for (let i = skip; i < endIndex && i < 50; i++) {
            personDataList.push({
                fullName: `Abdul Azis ${i + 1}`,
                email: '2aJtT@example.com',
                role: 'Asesi',
            });
        }
        return personDataList;
    };

    const data: UserType[] = generateData(pageIndex * pageSize, pageSize);

    const onSearch = (query: string) => {
        console.log(query);
    };

    return (
        <div className='flex flex-col mx-3 my-6 bg-white rounded-t-lg lg:mx-8'>
            <div className='flex flex-row items-center justify-between'>
                <span className='px-4 py-4 text-base font-semibold text-blue-600 lg:px-6'>
                    Akun User
                </span>
            </div>
            <hr />
            <DataTable
                data={data}
                columns={columns}
                searchFn={onSearch}
                paginateFn={(page, pageSize) => {
                    setPagination({ pageIndex: page, pageSize });
                    console.log(page, pageSize);
                }}
            />
            <Modal
                show={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={() => {
                    console.log('Hapus');
                    setModalOpen(false);
                }}
            >
                <span className='font-semibold text-red-600'>
                    Peringatan!!!
                </span>
                <hr />
                <span>Anda yakin ingin menghapus data ini?</span>
            </Modal>
        </div>
    );
};

export default AccountsPage;
