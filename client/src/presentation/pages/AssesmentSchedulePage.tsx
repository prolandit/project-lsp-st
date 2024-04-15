import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { localDateString } from '../../common/utils';
import AssesmentSchedule from '../../data/models/AssesmentSchedule';
import DataTable from '../components/Elements/DataTable';

const AssesmentSchedulePage = () => {
    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 1,
        pageSize: 10,
    });

    const columns: ColumnDef<AssesmentSchedule>[] = [
        {
            accessorKey: 'status',
            header: 'Status',
        },
        {
            accessorKey: 'eventName',
            header: 'Kegiatan',
        },
        {
            accessorKey: 'startDate',
            header: 'Tanggal Mulai',
            cell: ({ row }) => localDateString(row.original.startDate),
        },
        {
            accessorKey: 'tuk',
            header: 'TUK',
        },
        {
            accessorKey: 'asesor',
            header: 'Asesor',
        },
    ];

    const generateData = (
        skip: number,
        pageSize: number
    ): AssesmentSchedule[] => {
        const personDataList: AssesmentSchedule[] = [];
        const endIndex = skip + pageSize;

        for (let i = skip; i < endIndex && i < 50; i++) {
            const assesmentSchedule = new AssesmentSchedule({
                id: i + 1,
                status: 'Status',
                eventName: `Kegiatan ${i + 1}`,
                startDate: new Date(),
                tuk: 'TUK',
                asesor: 'Asesor',
            });
            personDataList.push(assesmentSchedule);
        }
        return personDataList;
    };

    const data: AssesmentSchedule[] = generateData(
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
                <span className='text-lg font-semibold'>Jadwal Asesmen</span>
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

export default AssesmentSchedulePage;
