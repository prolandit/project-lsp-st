import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { localDateString } from '../../../common/utils';
import Assesment from '../../../data/models/Assesment';
import Button from '../../components/Elements/Button';
import DataTable from '../../components/Elements/DataTable';
import MeetingLink from '../../components/Elements/MeetingLink';
import DeleteAsesmenModal from '../../components/Fragments/Asesmen/DeleteAsesmenModal';

const ListDaftarAsesmenPage = () => {
    const navigate = useNavigate();

    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 1,
        pageSize: 10,
    });

    const columns: ColumnDef<Assesment>[] = [
        {
            accessorKey: 'eventName',
            header: 'Nama Kegiatan',
        },
        {
            accessorKey: 'role',
            header: 'Peran',
        },
        {
            accessorKey: 'address',
            header: 'Alamat',
        },
        {
            accessorKey: 'praAssesmentDate',
            header: 'Tanggal Pra Asesmen',
            cell: ({ row }) => localDateString(row.original.praAssesmentDate),
        },
        {
            accessorKey: 'assesmentDate',
            header: 'Tanggal Asesmen',
            cell: ({ row }) => localDateString(row.original.assesmentDate),
        },
        {
            accessorKey: 'virtualMeetLink',
            header: 'Link Virtual Meet',
            cell: ({ row }) => (
                <div className='flex flex-col gap-2'>
                    <MeetingLink
                        url={row.original.praAssesmentMeetLink}
                        label='Pra Asesmen'
                    />
                    <MeetingLink
                        url={row.original.assesmentMeetLink}
                        label='Asesmen'
                    />
                    <MeetingLink
                        url={row.original.plenoMeetLink}
                        label='Pleno'
                    />
                </div>
            ),
        },
        {
            accessorKey: 'tukName',
            header: 'Nama TUK',
        },
        {
            accessorKey: 'schema',
            header: 'Skema',
        },
        {
            accessorKey: 'status',
            header: 'Status',
        },
        {
            header: 'Aksi',
            size: 110,
            cell: ({ row }) => (
                <div className='flex flex-row items-center gap-4'>
                    <Button
                        type='button'
                        className='text-green-500 duration-300 bg-white border border-green-500 hover:bg-green-500 hover:text-white transition-color'
                        onClick={() => console.log(row.original.id)}
                    >
                        Assign
                    </Button>
                    <Button
                        type='button'
                        className='text-blue-500 duration-300 bg-white border border-blue-500 hover:bg-blue-500 hover:text-white transition-color'
                        onClick={() => console.log(row.original.id)}
                    >
                        Status
                    </Button>
                    <Button
                        type='button'
                        className='text-yellow-500 duration-300 bg-white border border-yellow-500 hover:bg-yellow-500 hover:text-white transition-color'
                        onClick={() =>
                            navigate(
                                `/jadwal-sertifikasi/daftar-asesmen/edit/${row.original.id}`
                            )
                        }
                    >
                        Edit
                    </Button>
                    <DeleteAsesmenModal id={row.original.id} />
                </div>
            ),
        },
    ];

    const generateData = (skip: number, pageSize: number): Assesment[] => {
        const personDataList: Assesment[] = [];
        const endIndex = skip + pageSize;

        for (let i = skip; i < endIndex && i < 50; i++) {
            const assesmentSchedule = new Assesment({
                id: i + 1,
                eventName: `Kegiatan ${i + 1}`,
                role: 'Asesor',
                address: 'Jalan Jalan',
                praAssesmentMeetLink: 'https://www.google.com',
                assesmentMeetLink: 'https://www.google.com',
                plenoMeetLink: 'https://www.google.com',
                praAssesmentDate: new Date(),
                assesmentDate: new Date(),
                tukName: 'TUK',
                schema: 'Skema',
                status: 'Status',
            });
            personDataList.push(assesmentSchedule);
        }
        return personDataList;
    };

    const data: Assesment[] = generateData(
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
                    Daftar Asesmen
                </span>
                <Button
                    type='button'
                    className='flex flex-row items-center gap-2'
                    onClick={() =>
                        navigate('/jadwal-sertifikasi/daftar-asesmen/tambah')
                    }
                >
                    <FaPlus />
                    Tambah Asesmen
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

export default ListDaftarAsesmenPage;
