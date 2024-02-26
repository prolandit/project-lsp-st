import { createColumnHelper } from '@tanstack/react-table';
import { UserType } from '../../../common/types';
import Table from '../../components/Elements/Table';

const LSPDataAsesi = () => {
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

    const data: UserType[] = [
        {
            fullName: 'Abdul Azis',
            email: '2aJtT@example.com',
            phone: '08123456789',
            gender: 'Laki-laki',
            address: 'Jalan Jalan',
        },
        {
            fullName: 'Abdul Azis',
            email: '2aJtT@example.com',
            phone: '08123456789',
            gender: 'Laki-laki',
            address: 'Jalan Jalan',
        },
        {
            fullName: 'Abdul Azis',
            email: '2aJtT@example.com',
            phone: '08123456789',
            gender: 'Laki-laki',
            address: 'Jalan Jalan',
        },
        {
            fullName: 'Abdul Azis',
            email: '2aJtT@example.com',
            phone: '08123456789',
            gender: 'Laki-laki',
            address: 'Jalan Jalan',
        },
        {
            fullName: 'Abdul Azis',
            email: '2aJtT@example.com',
            phone: '08123456789',
            gender: 'Laki-laki',
            address: 'Jalan Jalan',
        },
    ];

    return (
        <div className='flex flex-col gap-4 mx-3 mt-10 lg:mx-8'>
            <h1 className='text-2xl font-semibold'>Data Asesi</h1>
            <Table
                data={data}
                columns={columns}
            />
        </div>
    );
};

export default LSPDataAsesi;
