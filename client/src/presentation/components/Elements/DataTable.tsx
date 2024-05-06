import {
    ColumnDef,
    PaginationState,
    RowSelectionState,
    SortingState,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { useCallback, useEffect, useMemo, useState } from 'react';
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

interface Props<TData, TValue> {
    data: TData[];
    columns: ColumnDef<TData, TValue | undefined>[];
    className?: string;
    pageCount?: number;
    selectable?: boolean;
    searchFn?: (query: string) => void;
    paginateFn?: (page: number, pageSize: number) => void;
    sortingFn?: (states: SortingState) => void;
    selectionFn?: (selectedData: TData[]) => void;
}

const DataTable = <TData, TValue>({
    data,
    columns,
    className,
    pageCount,
    selectable,
    searchFn,
    paginateFn,
    sortingFn,
    selectionFn,
}: Props<TData, TValue>) => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getRowId = useCallback((row: any) => {
        return row.id;
    }, []);

    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 1,
        pageSize: 10,
    });
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

    const pagination = useMemo(
        () => ({ pageIndex, pageSize }),
        [pageIndex, pageSize]
    );

    const debounceSearch = useDebounce(searchQuery);

    const table = useReactTable({
        data,
        columns,
        getRowId,
        state: {
            pagination,
            sorting,
            rowSelection,
        },
        getCoreRowModel: getCoreRowModel(),
        enableRowSelection: selectable,
        onRowSelectionChange: async (rowSelection) => {
            setRowSelection(rowSelection);

            await setRowSelection(rowSelection);

            const selectedRows = table.getSelectedRowModel();
            if (selectedRows) {
                const selectedData = selectedRows.flatRows.map(
                    (row) => row.original
                );
                selectionFn?.(selectedData);
            }
        },
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        pageCount: pageCount,
        manualSorting: true,
        manualPagination: true,
        manualFiltering: true,
        enableMultiSort: true,
    });

    useEffect(() => {
        searchFn?.(debounceSearch);
    }, [debounceSearch, searchFn]);

    useEffect(() => {
        sortingFn?.(sorting);
    }, [sorting, sortingFn]);

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

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handlePageClick = (selectedItem: { selected: number }) => {
        table.setPageIndex(selectedItem.selected + 1);
        paginateFn?.(selectedItem.selected + 1, pageSize);
    };

    const handleNumEntries = (
        event: React.ChangeEvent<HTMLSelectElement> | undefined
    ) => {
        table.setPageSize(Number(event?.target.value));
        paginateFn?.(pageIndex, Number(event?.target.value));
    };

    return (
        <div className='flex flex-col gap-4 py-4'>
            <div className='flex flex-col justify-between gap-4 lg:items-center lg:flex-row'>
                <div className='flex flex-row items-center gap-2'>
                    <span className='text-sm'>Show</span>
                    <div className='relative bg-gray-100 rounded-md'>
                        <select
                            className='w-16 px-3 py-1 text-sm bg-gray-100 rounded-md appearance-none'
                            value={table.getState().pagination.pageSize}
                            onChange={handleNumEntries}
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
                        type='search'
                        name='search'
                        placeholder='Search...'
                        className='border border-gray-100 bg-gray-50 lg:w-64'
                        value={searchQuery}
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
                                        className='pe-5 whitespace-nowrap'
                                        style={{
                                            width:
                                                header.getSize() !== 150
                                                    ? header.getSize()
                                                    : undefined,
                                        }}
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
                                                onClick={() => {
                                                    header.column.toggleSorting(
                                                        undefined,
                                                        true
                                                    );
                                                }}
                                            >
                                                {header.column.getCanSort() ? (
                                                    header.column.getIsSorted() ===
                                                    SortDirection.ASC ? (
                                                        <FaSortUp className='text-xs text-blue-500' />
                                                    ) : header.column.getIsSorted() ===
                                                      SortDirection.DESC ? (
                                                        <FaSortDown className='text-xs text-blue-500' />
                                                    ) : (
                                                        <FaSort className='text-xs text-gray-400' />
                                                    )
                                                ) : null}
                                            </div>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
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
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className='h-24 text-center'
                                >
                                    Tidak ada data.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-row justify-end w-full'>
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
    );
};

export default DataTable;
