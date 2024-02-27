import { createColumnHelper } from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import useDebounce from '../../../common/hooks/useDebounce';
import { UserType } from '../../../common/types';
import Input from '../../components/Elements/Input';
import Table from '../../components/Elements/Table';

const LSPDataAsesi = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const debounceSearch = useDebounce(searchQuery);

    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        console.log(event.target.value);
    };

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

    useEffect(() => {
        console.log(debounceSearch);
    }, [debounceSearch]);

    return (
        <div className='flex flex-col gap-4 mx-3 mt-10 lg:mx-8'>
            <div className='flex flex-row items-center justify-between'>
                <h1 className='text-2xl font-semibold'>Data Asesi</h1>
                <Input
                    type='text'
                    name='search'
                    placeholder='Search...'
                    className='self-end bg-white w-60'
                    prefix={<BiSearch className='text-gray-500' />}
                    onChange={onSearch}
                />
            </div>
            <Table
                data={data}
                columns={columns}
            />
        </div>
    );
};

export default LSPDataAsesi;
