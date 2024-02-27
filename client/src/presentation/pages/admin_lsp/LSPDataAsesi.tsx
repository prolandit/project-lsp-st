import {
    PaginationState,
    SortingState,
    createColumnHelper,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { UserType } from '../../../common/types';
import Table from '../../components/Elements/Table';

const LSPDataAsesi = () => {
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 1,
        pageSize: 10,
    });
    const [sorting, setSorting] = useState<SortingState>([]);

    const pagination = useMemo(
        () => ({ pageIndex, pageSize }),
        [pageIndex, pageSize]
    );

    const columnHelper = createColumnHelper<UserType>();
    const columns = [
        columnHelper.accessor('fullName', {
            header: 'Full Name',
        }),
        columnHelper.accessor('email', {
            header: 'Email Address',
        }),
        columnHelper.accessor('phone', {
            header: 'HP',
        }),
        columnHelper.accessor('gender', {
            header: 'Jenis Kelamin',
        }),
        columnHelper.accessor('address', {
            header: 'Alamat',
        }),
    ];

    const generateData = (count: number): UserType[] => {
        const personDataList: UserType[] = [];
        for (let i = 0; i < count; i++) {
            personDataList.push({
                fullName: `Abdul Azis ${i + 1}`,
                email: '2aJtT@example.com',
                phone: '08123456789',
                gender: 'Laki-laki',
                address: 'Jalan Jalan',
            });
        }
        return personDataList;
    };

    const data: UserType[] = generateData(pageSize);

    const onSearch = (query: string) => {
        console.log(query);
    };

    console.log(sorting);

    return (
        <div className='flex flex-col gap-4 mx-3 mt-10 lg:mx-8'>
            <h1 className='text-2xl font-semibold'>Data Asesi</h1>
            <Table
                data={data}
                columns={columns}
                pagination={pagination}
                sorting={sorting}
                onSortingChange={setSorting}
                onPaginationChange={setPagination}
                onSearch={onSearch}
            />
        </div>
    );
};

export default LSPDataAsesi;
