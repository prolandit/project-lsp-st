import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { localDateString } from '../../../../common/utils';
import User from '../../../../data/models/User';
import DataTable from '../../../components/Elements/DataTable';
import AssignAsesorModal from '../../../components/Fragments/Asesor/AssignAsesorModal';
import DeleteAsesorModal from '../../../components/Fragments/Asesor/DeleteAsesorModal';

const AssignAsesorTabView = () => {
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
            accessorKey: 'met',
            header: 'No. Reg Asesor',
        },
        {
            accessorKey: 'fullName',
            header: 'Nama Lengkap',
        },
        {
            accessorKey: 'email',
            header: 'Email',
        },
        {
            accessorKey: 'phone',
            header: 'No. Telp',
        },
        {
            header: 'Aksi',
            cell: ({ row }) => (
                <div className='flex flex-row items-center gap-4'>
                    <DeleteAsesorModal id={row.original.id} />
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
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-6 px-4 py-4 border border-gray-200 rounded-md lg:px-6'>
                <span className='text-xl font-semibold text-center'>
                    Detail Asesmen
                </span>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row'>
                        <span className='font-semibold w-60'>
                            Nama Kegiatan
                        </span>
                        <span className='font-medium'>: Tes Simulasi 3</span>
                    </div>
                    <div className='flex flex-row'>
                        <span className='font-semibold w-60'>Nama Skema</span>
                        <span className='font-medium'>
                            : Instruktur Junior (KKNI LEVEL III)
                        </span>
                    </div>
                    <div className='flex flex-row'>
                        <span className='font-semibold w-60'>Lokasi</span>
                        <span className='font-medium'>: Jalan Jalan</span>
                    </div>
                    <div className='flex flex-row'>
                        <span className='font-semibold w-60'>
                            Tanggal Pra Asesmen
                        </span>
                        <span className='font-medium'>
                            : {localDateString(new Date())}
                        </span>
                    </div>
                    <div className='flex flex-row'>
                        <span className='font-semibold w-60'>
                            Tanggal Asesmen
                        </span>
                        <span className='font-medium'>
                            : {localDateString(new Date())}
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 py-4 border border-gray-200 rounded-md'>
                <div className='flex flex-row items-center justify-between px-4 lg:px-6'>
                    <span className='text-xl font-semibold text-center'>
                        Daftar Asesor
                    </span>
                    <AssignAsesorModal />
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
        </div>
    );
};

export default AssignAsesorTabView;
