import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Tuk from '../../../data/models/Tuk';
import Button from '../../components/Elements/Button';
import DataTable from '../../components/Elements/DataTable';
import DeleteTukModal from '../../components/Fragments/Tuk/DeleteTukModal';

const ListTukPage = () => {
    const navigate = useNavigate();

    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 1,
        pageSize: 10,
    });

    const columns: ColumnDef<Tuk>[] = [
        {
            accessorKey: 'name',
            header: 'Nama TUK',
        },
        {
            accessorKey: 'address',
            header: 'Alamat',
        },
        {
            accessorKey: 'type',
            header: 'Tipe TUK',
        },
        {
            header: 'Aksi',
            cell: ({ row }) => (
                <div className='flex flex-row items-center gap-4'>
                    <Button
                        type='button'
                        className='flex flex-row items-center gap-2 text-blue-500 transition-colors duration-300 bg-transparent border border-blue-500 group hover:bg-blue-500 hover:text-white'
                        onClick={() => navigate(`/tuk/edit/${row.original.id}`)}
                    >
                        <BiEdit
                            size={20}
                            className='text-blue-500 transition-colors duration-300cursor-pointer group-hover:text-white'
                        />
                    </Button>
                    <DeleteTukModal id={row.original.id} />
                </div>
            ),
        },
    ];

    const generateData = (skip: number, pageSize: number): Tuk[] => {
        const personDataList: Tuk[] = [];
        const endIndex = skip + pageSize;

        for (let i = skip; i < endIndex && i < 50; i++) {
            const tuks = new Tuk({
                id: i + 1,
                name: `TUK ${i + 1}`,
                code: `Kode TUK ${i + 1}`,
                type: 'Tipe TUK',
                validDate: new Date(),
                address: 'Jalan Jalan',
                areaAddress: 'Jalan Jalan',
            });
            personDataList.push(tuks);
        }
        return personDataList;
    };

    const data: Tuk[] = generateData(pageIndex * pageSize - pageSize, pageSize);

    const onSearch = (query: string) => {
        console.log(query);
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
                    onClick={() => navigate('/tuk/tambah')}
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

export default ListTukPage;
