import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import AdministrativeEvidence from '../../../../data/models/AdministrativeEvidence';
import Schema from '../../../../data/models/Schema';
import Button from '../../../components/Elements/Button';
import DataTable from '../../../components/Elements/DataTable';
import DeleteBuktiAdministratifModal from '../../../components/Fragments/Persyaratan/BuktiAdministratif/DeleteBuktiAdministratifModal';

const ListBuktiAdministratifPage = () => {
    const navigate = useNavigate();

    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 1,
        pageSize: 10,
    });

    const columns: ColumnDef<AdministrativeEvidence>[] = [
        {
            accessorKey: 'schema',
            accessorFn: (row) => row.schema.name,
            header: 'Nama Skema',
        },
        {
            accessorKey: 'proofUrl',
            header: 'Bukti Administratif',
            cell: ({ row }) => (
                <Link
                    to={row.original.proofUrl}
                    className='text-blue-500 hover:underline'
                >
                    {row.original.proofUrl}
                </Link>
            ),
        },
        {
            header: 'Aksi',
            size: 110,
            cell: ({ row }) => (
                <div className='flex flex-row items-center gap-4'>
                    <Button
                        type='button'
                        className='flex flex-row items-center gap-2 text-blue-500 transition-colors duration-300 bg-transparent border border-blue-500 group hover:bg-blue-500 hover:text-white'
                        onClick={() =>
                            navigate(
                                `/persyaratan/bukti-administratif/edit/${row.original.id}`
                            )
                        }
                    >
                        <BiEdit
                            size={20}
                            className='text-blue-500 transition-colors duration-300cursor-pointer group-hover:text-white'
                        />
                    </Button>
                    <DeleteBuktiAdministratifModal id={row.original.id} />
                </div>
            ),
        },
    ];

    const generateData = (
        skip: number,
        pageSize: number
    ): AdministrativeEvidence[] => {
        const personDataList: AdministrativeEvidence[] = [];
        const endIndex = skip + pageSize;

        for (let i = skip; i < endIndex && i < 50; i++) {
            const basicReqs = new AdministrativeEvidence({
                id: i + 1,
                schema: new Schema({
                    id: 1,
                    name: 'Nama Skema',
                }),
                proofUrl: 'https://www.google.com',
            });
            personDataList.push(basicReqs);
        }
        return personDataList;
    };

    const data: AdministrativeEvidence[] = generateData(
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
                    Persyaratan / Master Data Bukti Administratif
                </span>
                <Button
                    type='button'
                    className='flex flex-row items-center gap-2'
                    onClick={() =>
                        navigate('/persyaratan/bukti-administratif/tambah')
                    }
                >
                    <FaPlus />
                    Tambah Bukti Administratif
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

export default ListBuktiAdministratifPage;
