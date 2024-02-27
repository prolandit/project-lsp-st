import {
    PaginationState,
    SortingState,
    createColumnHelper,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { TbEdit, TbTrash } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../../../common/types';
import Table from '../../components/Elements/Table';

const AccountsPage = () => {
    const navigate = useNavigate();

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
                    <TbTrash className='text-2xl text-red-500 cursor-pointer' />
                </div>
            ),
        }),
    ];

    const generateData = (count: number): UserType[] => {
        const personDataList: UserType[] = [];
        for (let i = 0; i < count; i++) {
            personDataList.push({
                fullName: `Abdul Azis ${i + 1}`,
                email: '2aJtT@example.com',
                role: 'Asesi',
            });
        }
        return personDataList;
    };

    const data: UserType[] = generateData(pageSize);

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

export default AccountsPage;
