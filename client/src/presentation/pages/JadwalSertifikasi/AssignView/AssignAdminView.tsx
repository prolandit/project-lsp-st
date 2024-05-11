import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { TiArrowBack } from 'react-icons/ti';
import User from '../../../../data/models/User';
import Button from '../../../components/Elements/Button';
import DataTable from '../../../components/Elements/DataTable';
import { TabsList, TabsTrigger } from '../../../components/Elements/Tabs';
import AssignAdminModal from '../../../components/Fragments/Asesmen/Admin/AssignAdminModal';
import DeleteAssignAdminModal from '../../../components/Fragments/Asesmen/Admin/DeleteAssignAdminModal';

const AssignAdminView = () => {
    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 1,
        pageSize: 10,
    });

    const columns: ColumnDef<User>[] = [
        {
            accessorKey: 'fullName',
            header: 'Nama Lengkap',
            size: 500,
        },
        {
            accessorKey: 'phone',
            header: 'No. Telp',
            size: 500,
        },
        {
            header: 'Aksi',
            cell: ({ row }) => (
                <div className='flex flex-row items-center gap-4'>
                    <DeleteAssignAdminModal id={row.original.id} />
                </div>
            ),
        },
    ];

    const generateData = (skip: number, pageSize: number): User[] => {
        const personDataList: User[] = [];
        const endIndex = skip + pageSize;

        for (let i = skip; i < endIndex && i < 5; i++) {
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

    const onSearch = (query: string) => {
        console.log(query);
    };

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2 py-4 border border-gray-200 rounded-md'>
                <div className='flex flex-row items-center justify-between px-4 lg:px-6'>
                    <span className='text-xl font-semibold text-center'>
                        Daftar Admin
                    </span>
                    <AssignAdminModal />
                </div>
                <hr />
                <div className='px-4 lg:px-6'>
                    <DataTable
                        data={data}
                        columns={columns}
                        searchFn={onSearch}
                        pageCount={Math.ceil(5 / pageSize)}
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
            <div>
                <TabsList className='p-0 bg-white'>
                    <TabsTrigger
                        value='asesi'
                        className='w-full p-0'
                    >
                        <Button
                            type='button'
                            className='flex flex-row items-center gap-2 text-blue-500 transition-colors duration-300 bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white'
                        >
                            <TiArrowBack />
                            Kembali
                        </Button>
                    </TabsTrigger>
                </TabsList>
            </div>
        </div>
    );
};

export default AssignAdminView;
