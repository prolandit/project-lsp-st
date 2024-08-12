import { ColumnDef } from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import User from '../../../data/models/User';
import Button from '../../components/Elements/Button';
import DataTable from '../../components/Elements/DataTable';
import DeleteUserModal from '../../components/Fragments/Users/DeleteUserModal';
import UserRemoteDataSource from '../../../data/datasources/UserRemoteDataSource';

const UsersPage = () => {
    const navigate = useNavigate();

    const [usersData, setUsersData] = useState<User[]>([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalCount, setTotalCount] = useState<number>(0);

    useEffect(() => {
        getAllUserData(page, limit);
    }, [page, limit]);

    const getAllUserData = async (page: number, limit: number) => {
        try {
            const data = await UserRemoteDataSource.getAllUserData(page, limit);
            if (typeof data === 'object' && data !== null) {
                setUsersData(data.data);
                setTotalCount(data.meta.total || 0);
            } else {
                console.error('Data format is incorrect');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDeleteSuccess = () => {
        getAllUserData(page, limit); // Refresh data after deletion
    };

    const columns: ColumnDef<User>[] = [
        {
            accessorKey: 'foto',
            header: 'Foto',
            cell: ({ row }) => (
                <img
                    src={row.original.foto}
                    alt="User Foto"
                    style={{ width: 50, height: 50 }}
                />
            ),
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
            accessorKey: 'namaLengkap',
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
                            navigate(`/users/edit/${row.original.id}`)
                        }
                    />
                    <DeleteUserModal id={row.original.id} onDeleteSuccess={handleDeleteSuccess} />
                </div>
            ),
        },
    ];

    const onSearch = (query: string) => {
        console.log(query);
    };

    const paginateFn = (pageIndex: number, pageSize: number) => {
        // Reset page to 1 if the page size changes
        if (pageSize !== limit) {
            setLimit(pageSize);
            setPage(1); // Reset page to 1 when page size changes
        } else {
            setPage(pageIndex + 1); // Convert 0-based index to 1-based page number
        }
        console.log('Current page (1-based):', pageIndex + 1);
        console.log('Page size:', pageSize);
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
                    onClick={() => navigate('/users/create')}
                >
                    <FaPlus />
                    Tambah Pengguna
                </Button>
            </div>
            <hr />
            <div className='px-4 py-4 lg:px-6'>
                <DataTable
                    data={usersData} // Use usersData directly
                    columns={columns}
                    searchFn={onSearch}
                    pageCount={Math.ceil(totalCount / limit)}
                    paginateFn={paginateFn}
                    sortingFn={(states) => {
                        console.log(states);
                    }}
                />
            </div>
        </div>
    );
};

export default UsersPage;
