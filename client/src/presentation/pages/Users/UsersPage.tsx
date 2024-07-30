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
    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 1,
        pageSize: 10,
    });

    useEffect(() => {
        getAllUserData();
    }, []);

    const getAllUserData = async () => {
        try {
            const data = await UserRemoteDataSource.getAllUserData();
            if (typeof data === 'object' && data !== null) {
                setUsersData(data);
            } else {
                console.error('Data format is incorrect');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDeleteSuccess = () => {
        getAllUserData(); // Refresh data after deletion
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
            accessorKey: 'name',
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

    const generateData = (skip: number, pageSize: number): User[] => {
        const personDataList: User[] = [];
        const endIndex = skip + pageSize;

        for (let i = skip; i < endIndex && i < usersData.length; i++) {
            const user = new User({
                id: usersData[i].id,
                foto: usersData[i].foto,
                email: usersData[i].email,
                username: usersData[i].username,
                name: usersData[i].name,
                role: usersData[i].role,
                // birthPlace: 'Tempat Lahir',
                // birthDate: new Date(),
                // gender: 'Gender',
                // religion: 'Religion',
                // nik: '2134567890',
                // address: 'Address',
                // phone: '21345678',
                // tandaTangan: usersData[i].tandaTangan,
                // signExplanation: 'Sign Explanation',
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

export default UsersPage;
