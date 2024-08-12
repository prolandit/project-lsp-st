import { ColumnDef } from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Tuk from '../../../data/models/Tuk';
import Button from '../../components/Elements/Button';
import DataTable from '../../components/Elements/DataTable';
import DeleteTukModal from '../../components/Fragments/Tuks/DeleteTukModal';
import TukRemoteDataSource from '../../../data/datasources/TukRemoteDataSource';

const TuksPage = () => {
    const navigate = useNavigate();

    const [tukData, setTukData] = useState<Tuk[]>([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalCount, setTotalCount] = useState<number>(0);

    useEffect(() => {
        getAllDataTuk(page, limit);
    }, [page, limit]);

    const getAllDataTuk = async (page: number, limit: number) => {
        try {
            const data = await TukRemoteDataSource.getTukData(page, limit);
            if (typeof data === 'object' && data !== null) {
                setTukData(data.data);
                setTotalCount(data.meta.total || 0);
            } else {
                console.error('Data format is incorrect');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDeleteSuccess = () => {
        getAllDataTuk(page, limit); // Refresh data after deletion
    };

    const columns: ColumnDef<Tuk>[] = [
        {
            accessorKey: 'nama_tuk',
            header: 'Nama TUK',
        },
        {
            accessorKey: 'alamat',
            header: 'Alamat',
        },
        {
            accessorKey: 'tipe_tuk',
            header: 'Tipe TUK',
        },
        {
            header: 'Aksi',
            cell: ({ row }) => (
                <div className='flex flex-row items-center gap-4'>
                    <BiEdit
                        size={20}
                        className='text-blue-500 cursor-pointer'
                        onClick={() =>
                            navigate(`/tuks/edit/${row.original.id}`)
                        }
                    />
                    <DeleteTukModal id={row.original.id} onDeleteSuccess={handleDeleteSuccess} />
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
                    Tempat Uji Kompetensi (TUK)
                </span>
                <Button
                    type='button'
                    className='flex flex-row items-center gap-2'
                    onClick={() => navigate('/tuks/create')}
                >
                    <FaPlus />
                    Tambah TUK
                </Button>
            </div>
            <hr />
            <div className='px-4 py-4 lg:px-6'>
            <DataTable
                    data={tukData} // Use usersData directly
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

export default TuksPage;
