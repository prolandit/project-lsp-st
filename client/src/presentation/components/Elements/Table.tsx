import {
    ColumnDef,
    PaginationState,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import ReactPaginate from 'react-paginate';
import { twMerge } from 'tailwind-merge';

type Props<T> = {
    data: T[];
    columns: ColumnDef<T, string | undefined>[];
    className?: string;
};

const Table = <T,>({ data, columns, className }: Props<T>) => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);

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

    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 1,
        pageSize: 10,
    });

    const pagination = useMemo(
        () => ({ pageIndex, pageSize }),
        [pageIndex, pageSize]
    );

    const table = useReactTable<T>({
        data,
        columns,
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
        manualPagination: true,
        getCoreRowModel: getCoreRowModel(),
    });

    const handlePageClick = (selectedItem: { selected: number }) => {
        setPagination({
            pageIndex: selectedItem.selected + 1,
            pageSize: pagination.pageSize,
        });
    };

    const handlePaginationChange = (
        event: React.ChangeEvent<HTMLSelectElement> | undefined
    ) => {
        table.setPageSize(Number(event?.target.value));
    };

    return (
        <div>
            <div
                className={twMerge(
                    'flex flex-col overflow-auto rounded-t-lg shadow',
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
                                        className='p-5 text-sm font-semibold tracking-wide text-left'
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
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
            <div className='flex flex-row justify-between w-full gap-3 p-3 bg-white border-t-2 border-gray-200 rounded-b-lg shadow '>
                <div className='flex flex-row justify-end w-full gap-3'>
                    <ReactPaginate
                        breakClassName='hidden lg:block'
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        marginPagesDisplayed={isMobileScreen ? 0 : 2}
                        pageCount={20}
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
                        className='flex flex-row items-center justify-center gap-2'
                        pageLinkClassName='px-4 py-2 text-sm font-semibold rounded-md cursor-pointer'
                        activeLinkClassName='bg-blue-500 text-white rounded-md hover:bg-blue-500 hover:text-white'
                    />
                    <div className='relative bg-gray-100 rounded-md'>
                        <select
                            className='w-16 px-3 py-2 bg-white rounded-md appearance-none'
                            value={table.getState().pagination.pageSize}
                            onChange={handlePaginationChange}
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
                        <IoIosArrowDown className='absolute right-0 -translate-y-1/2 top-1/2 me-3' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
