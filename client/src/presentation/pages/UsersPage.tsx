import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import User from '../../data/models/User';
import DataTable from '../components/Elements/DataTable';

const UsersPage = () => {
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
            size: 110,
            cell: ({ row }) => (
                <div className='flex flex-row items-center gap-4'>
                    <BiEdit
                        size={20}
                        className='text-blue-500 cursor-pointer'
                        onClick={() => console.log(row.original.id)}
                    />
                    <MdDeleteOutline
                        size={20}
                        className='text-red-500 cursor-pointer'
                        onClick={() => console.log(row.original.id)}
                    />
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
        <div className='flex flex-col my-6'>
            <div className='flex flex-col gap-4 mx-3 lg:flex-row lg:mx-8'>
                <div className='w-full pt-4 bg-white rounded-md shadow-sm pb-7 drop-shadow-sm'>
                    <span className='px-4 py-6 text-base font-semibold text-blue-600 lg:px-6'>
                        Daftar Pengguna
                    </span>
                    <hr className='my-4' />
                    <div className='px-4 lg:px-6'>
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
            </div>
        </div>
    );
};

export default UsersPage;
