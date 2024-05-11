import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { localDateString } from '../../../common/utils';
import Assesment from '../../../data/models/Assesment';
import DataTable from '../../components/Elements/DataTable';
import MeetingLink from '../../components/Elements/MeetingLink';

const DataAsesmenPage = () => {
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
                    <FaFolderOpen
                        size={20}
                        className='text-green-500 cursor-pointer'
                        onClick={() => console.log(row.original.id)}
                    />
                    <FaPeopleGroup
                        size={20}
                        className='text-blue-500 cursor-pointer'
                        onClick={() => console.log(row.original.id)}
                    />
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
                    Beranda
                </span>
            </div>
            <hr />
            <div className='flex flex-col px-4 py-4 lg:px-6'>
                <span className='text-lg font-semibold'>Data Asesmen</span>
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

export default DataAsesmenPage;
