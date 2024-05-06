import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import User from '../../../data/models/User';
import Button from '../../components/Elements/Button';
import DataTable from '../../components/Elements/DataTable';
import DeletePenggunaModal from '../../components/Fragments/Pengguna/DeletePenggunaModal';

const ListPenggunaPage = () => {
    const navigate = useNavigate();

    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 1,
        pageSize: 10,
    });

    const columns: ColumnDef<User>[] = [
        {
            accessorKey: 'photo',
            header: 'Foto',
        },
        {
            accessorKey: 'username',
            header: 'Username',
        },
        {
            accessorKey: 'email',
            header: 'Email',
        },
        {
            accessorKey: 'fullName',
            header: 'Nama Lengkap',
        },
        {
            accessorKey: 'role',
            header: 'Peran',
        },
        {
            header: 'Aksi',
            cell: ({ row }) => (
                <div className='flex flex-row items-center gap-4'>
                    <BiEdit
                        size={20}
                        className='text-blue-500 cursor-pointer'
                        onClick={() =>
                            navigate(`/pengguna/edit/${row.original.id}`)
                        }
                    />
                    <DeletePenggunaModal id={row.original.id} />
                </div>
            ),
        },
    ];

    const generateData = (skip: number, pageSize: number): User[] => {
        const personDataList: User[] = [];
        const endIndex = skip + pageSize;

        for (let i = skip; i < endIndex && i < 50; i++) {
            const user = new User({
                id: i + 1,
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

    const onSearch = (query: string) => {
        console.log(query);
    };

    return (
        <div className='flex flex-col mx-3 my-6 bg-white rounded-t-lg lg:mx-8'>
            <div className='flex flex-row items-center justify-between px-4 py-4 lg:px-6'>
                <span className='text-base font-semibold text-blue-600'>
                    Daftar Pengguna
                </span>
                <Button
                    type='button'
                    className='flex flex-row items-center gap-2'
                    onClick={() => navigate('/pengguna/tambah')}
                >
                    <FaPlus />
                    Tambah Pengguna
                </Button>
            </div>
            <hr />
            <div className='px-4 py-4 lg:px-6'>
                <DataTable
                    data={data}
                    columns={columns}
                    searchFn={onSearch}
                    pageCount={Math.ceil(50 / pageSize)}
                    paginateFn={(page, pageSize) => {
                        setPagination({ pageIndex: page, pageSize });
                        console.log(page, pageSize);
                    }}
                    sortingFn={(states) => {
                        console.log(states);
                    }}
                />
            </div>
        </div>
    );
};

export default ListPenggunaPage;
