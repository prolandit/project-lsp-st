import {
    ColumnDef,
    OnChangeFn,
    PaginationState,
    SortingState,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FaSortDown } from 'react-icons/fa';
import { FaSort, FaSortUp } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import ReactPaginate from 'react-paginate';
import { twMerge } from 'tailwind-merge';
import { SortDirection } from '../../../common/enum';
import useDebounce from '../../../common/hooks/useDebounce';
import Input from './Input';

type Props<T> = {
    data: T[];
    columns: ColumnDef<T, string | undefined>[];
    className?: string;
    pagination?: PaginationState;
    sorting?: SortingState;
    onSearch?: (query: string) => void;
    pageCount?: number;
    onPaginationChange?: OnChangeFn<PaginationState>;
    onSortingChange?: OnChangeFn<SortingState>;
};

const Table = <T,>({
    data,
    columns,
    className,
    onSearch,
    pagination,
    sorting,
    pageCount,
    onPaginationChange,
    onSortingChange,
}: Props<T>) => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const debounceSearch = useDebounce(searchQuery);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        onSearch?.(debounceSearch);
    }, [debounceSearch, onSearch]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const table = useReactTable<T>({
        data,
        columns,
        state: {
            pagination,
            sorting,
        },
        pageCount: pageCount,
        onPaginationChange: onPaginationChange,
        onSortingChange: onSortingChange,
        manualSorting: true,
        manualPagination: true,
        enableMultiSort: true,
        getCoreRowModel: getCoreRowModel(),
    });

    const handlePageClick = (selectedItem: { selected: number }) => {
        table.setPageIndex(selectedItem.selected + 1);
    };

    const handleNumEntries = (
        event: React.ChangeEvent<HTMLSelectElement> | undefined
    ) => {
        table.setPageSize(Number(event?.target.value));
    };

    return (
        <div className='flex flex-col gap-4 px-6 py-4 bg-white rounded-lg shadow'>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center gap-2'>
                    <span className='text-sm'>Show</span>
                    <div className='relative bg-gray-100 rounded-md'>
                        <select
                            className='w-16 px-3 py-1 text-sm bg-gray-100 rounded-md appearance-none'
                            value={table.getState().pagination.pageSize}
                            onChange={handleNumEntries}
                            defaultValue={10}
                        >
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <option
                                    key={pageSize}
                                    value={pageSize}
                                >
                                    {pageSize}
                                </option>
                            ))}
                        </select>
                        <IoIosArrowDown className='absolute right-0 text-sm -translate-y-1/2 top-1/2 me-2' />
                    </div>
                    <span className='text-sm'>entries</span>
                </div>
                <div className='flex-row justify-end lg:flex'>
                    <Input
                        type='text'
                        name='search'
                        placeholder='Search...'
                        className='bg-gray-100'
                        prefix={<BiSearch className='text-gray-500' />}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div
                className={twMerge(
                    'flex flex-col overflow-auto rounded-lg shadow',
                    className
                )}
            >
                <table className='w-full'>
                    <thead className='border-b-2 border-gray-200 bg-gray-50'>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        colSpan={header.colSpan}
                                        className='pe-5'
                                    >
                                        <div className='flex flex-row items-center justify-between'>
                                            <div className='p-5 text-sm font-semibold tracking-wide text-left'>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                          header.column
                                                              .columnDef.header,
                                                          header.getContext()
                                                      )}
                                            </div>
                                            <div
                                                className='cursor-pointer'
                                                onClick={() =>
                                                    header.column.toggleSorting(
                                                        undefined,
                                                        true
                                                    )
                                                }
                                            >
                                                {header.column.getIsSorted() ===
                                                SortDirection.ASC ? (
                                                    <FaSortUp className='text-xs text-blue-500' />
                                                ) : header.column.getIsSorted() ===
                                                  SortDirection.DESC ? (
                                                    <FaSortDown className='text-xs text-blue-500' />
                                                ) : (
                                                    <FaSort className='text-xs text-gray-400' />
                                                )}
                                            </div>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr
                                key={row.id}
                                className=' odd:bg-white even:bg-gray-50'
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className='w-24 px-5 py-4 text-sm text-gray-700 whitespace-nowrap'
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-row justify-between w-full'>
                <div className='flex flex-row items-center justify-between w-full'>
                    <span className='text-sm'>{`Show ${
                        table.getState().pagination.pageSize
                    } of 20 entries`}</span>
                    <ReactPaginate
                        breakClassName='hidden lg:block'
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        marginPagesDisplayed={isMobileScreen ? 0 : 2}
                        pageCount={table.getPageCount()}
                        nextLabel={
                            <span className='flex items-center justify-center w-10 h-10 bg-white rounded-md'>
                                <BsChevronRight />
                            </span>
                        }
                        previousLabel={
                            <span className='flex items-center justify-center w-10 h-10 bg-white rounded-md'>
                                <BsChevronLeft />
                            </span>
                        }
                        renderOnZeroPageCount={null}
                        containerClassName='bg-black'
                        className='flex flex-row items-center justify-center gap-2'
                        pageLinkClassName='px-4 py-2 text-sm font-semibold rounded-md cursor-pointer'
                        activeLinkClassName='bg-blue-500 text-white rounded-md hover:bg-blue-500 hover:text-white'
                    />
                </div>
            </div>
            <pre>{JSON.stringify(sorting, null, 2)}</pre>
        </div>
    );
};

export default Table;
