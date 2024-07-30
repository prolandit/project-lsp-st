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
    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 1,
        pageSize: 10,
    });

    useEffect(() => {
        getAllDataTuk();
    }, []);

    const getAllDataTuk = async () => {
        try {
            const data = await TukRemoteDataSource.getTukData();
            if (typeof data === 'object' && data !== null) {
                setTukData(data);
            } else {
                console.error('Data format is incorrect');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDeleteSuccess = () => {
        getAllDataTuk(); // Refresh data after deletion
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

    const generateData = (skip: number, pageSize: number): Tuk[] => {
        const tukDataList: Tuk[] = [];
        const endIndex = skip + pageSize;

        for (let i = skip; i < endIndex && i < tukData.length; i++) {
            const tuks = new Tuk({
                id: tukData[i].id,
                nama_tuk: tukData[i].nama_tuk,
                tipe_tuk: tukData[i].tipe_tuk,
                alamat: tukData[i].alamat,
            });
            tukDataList.push(tuks);
        }
        return tukDataList;
    };

    const data: Tuk[] = generateData(pageIndex * pageSize - pageSize, pageSize);

    const onSearch = (query: string) => {
        console.log(query);
    };

    const totalDataCount = tukData.length;
    const showPagination = totalDataCount > pageSize;

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
                    data={data}
                    columns={columns}
                    searchFn={onSearch}
                    pageCount={showPagination ? Math.ceil(totalDataCount / pageSize) : 1}
                    paginateFn={showPagination ? (page, pageSize) => {
                        setPagination({ pageIndex: page, pageSize });
                        console.log(page, pageSize);
                    } : undefined}
                    sortingFn={(states) => {
                        console.log("state: ", states);
                    }}
                />
            </div>
        </div>
    );
};

export default TuksPage;
