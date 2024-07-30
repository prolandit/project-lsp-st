import { ColumnDef } from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Asesor from '../../../data/models/Asesor';
import Button from '../../components/Elements/Button';
import DataTable from '../../components/Elements/DataTable';
import DeleteAsesorModal from '../../components/Fragments/Assesor/DeleteAsesorModal';
import AsesorRemoteDataSource from '../../../data/datasources/AsesorRemoteDataSource';

const AsesorPage = () => {
    const navigate = useNavigate();

    const [asesorsData, setAsesorsData] = useState<Asesor[]>([]);
    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 1,
        pageSize: 10,
    });

    useEffect(() => {
        getAllAsesorsData();
    }, []);

    const getAllAsesorsData = async () => {
        try {
            const data = await AsesorRemoteDataSource.getAsesorData();
            console.log("data: ", data);
            if (typeof data === 'object' && data !== null) {
                setAsesorsData(data);
            } else {
                console.error('Data format is incorrect');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDeleteSuccess = () => {
        getAllAsesorsData(); // Refresh data after deletion
    };

    const columns: ColumnDef<Asesor>[] = [
        {
            accessorKey: 'photo',
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
            accessorKey: 'noRegistration',
            header: 'No. Reg Asesor',
        },
        {
            accessorKey: 'name',
            header: 'Nama',
        },
        {
            header: 'Aksi',
            cell: ({ row }) => (
                <div className='flex flex-row items-center gap-4'>
                    <BiEdit
                        size={20}
                        className='text-blue-500 cursor-pointer'
                        onClick={() =>
                            navigate(`/asesor/edit/${row.original.id}`)
                        }
                    />
                    <DeleteAsesorModal id={row.original.id} onDeleteSuccess={handleDeleteSuccess} />
                </div>
            ),
        },
    ];

    const generateData = (skip: number, pageSize: number): Asesor[] => {
        const personDataList: Asesor[] = [];
        const endIndex = skip + pageSize;

        for (let i = skip; i < endIndex && i < asesorsData.length; i++) {
            const asesor = new Asesor({
                id: asesorsData[i].id,
                foto: asesorsData[i].foto,
                noRegistration: asesorsData[i].noRegistration,
                name: asesorsData[i].name,
            });
            personDataList.push(asesor);
        }
        return personDataList;
    };

    const data: Asesor[] = generateData(pageIndex * pageSize - pageSize, pageSize);

    const onSearch = (query: string) => {
        console.log(query);
    };

    return (
        <div className='flex flex-col mx-3 my-6 bg-white rounded-t-lg lg:mx-8'>
            <div className='flex flex-row items-center justify-between px-4 py-4 lg:px-6'>
                <span className='text-base font-semibold text-blue-600'>
                    Asesor / Daftar Asesor
                </span>
                <Button
                    type='button'
                    className='flex flex-row items-center gap-2'
                    onClick={() => navigate('/asesor/create')}
                >
                    <FaPlus />
                    Tambah Asesor
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
}

export default AsesorPage;