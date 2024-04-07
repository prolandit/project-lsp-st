import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { AssesmentScheduleType } from '../../common/types';
import { localDateString } from '../../common/utils';
import DataTable from '../components/Elements/DataTable';

const AssesmentSchedulePage = () => {
    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 1,
        pageSize: 10,
    });

    const columns: ColumnDef<AssesmentScheduleType>[] = [
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
            header: 'Mulai',
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
    ): AssesmentScheduleType[] => {
        const personDataList: AssesmentScheduleType[] = [];
        const endIndex = skip + pageSize;

        for (let i = skip; i < endIndex && i < 50; i++) {
            personDataList.push({
                status: 'Status',
                eventName: `Kegiatan ${i + 1}`,
                startDate: new Date(),
                tuk: 'TUK',
                asesor: 'Asesor',
            });
        }
        return personDataList;
    };

    const data: AssesmentScheduleType[] = generateData(
        pageIndex * pageSize,
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
                        Beranda
                    </span>
                    <hr className='my-4' />
                    <div className='flex flex-col gap-2 px-4 lg:px-6'>
                        <span className='text-lg font-semibold'>
                            Jadwal Asesmen
                        </span>
                        <DataTable
                            data={data}
                            columns={columns}
                            searchFn={onSearch}
                            pageCount={5}
                            paginateFn={(page, pageSize) => {
                                setPagination({ pageIndex: page, pageSize });
                                console.log(page, pageSize);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssesmentSchedulePage;
