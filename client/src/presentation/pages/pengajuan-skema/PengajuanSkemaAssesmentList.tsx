import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { PengajuanSkemaAssesmentListStructure } from "../../../data/models/PengajuanSkemaDao";
import DataTable from "../../components/Elements/DataTable";
import { FaPenToSquare, FaCirclePlus } from "react-icons/fa6";
import ButtonLink from "../../components/Elements/ButtonLink";
import {
  Column,
  Table,
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  RowData,
} from "@tanstack/react-table";
import Button from "../../components/Elements/Button";
const totalData = 100;

const PengajuanSkemaAssesmentList: React.FC = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const [data, setData] = useState<PengajuanSkemaAssesmentListStructure[]>([]);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, []);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, [pageIndex]);

  const DummyData = (): PengajuanSkemaAssesmentListStructure => {
    return {
      id: faker.number.int(),
      kodeSkema: faker.lorem.words(5),
      namaSkema: faker.lorem.words(5),
    };
  };

  const columns: ColumnDef<PengajuanSkemaAssesmentListStructure>[] = [
    {
      accessorKey: "kodeSkema",
      header: "Kode Skema",
    },
    {
      accessorKey: "namaSkema",
      header: "Nama Skema",
    },
    {
      accessorKey: "action",
      header: "Aksi",
      cell: ({ row }) => (
        <div className="flex flex-row gap-3">
          <ButtonLink
            to={`/${row.original.id}`}
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600"
          >
            {/* <FaPenToSquare className="text-2xl text-green-600" /> */}
            <span className="text-white-600">Ajukan</span>
          </ButtonLink>
        </div>
      ),
    },
  ];

  const handlePaginate = (page: number, newPageSize: number) => {
    setPagination({ pageIndex: page, pageSize: newPageSize });
  };

  const handleSorting = (states: any[]) => {
    console.log(states);
  };

  const onSearch = () => {};

  return (
    <>
      <div className="flex flex-col mx-3 my-6 bg-white rounded-t-lg lg:mx-8">
        <div className="flex flex-col px-4 py-4 lg:px-6">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold">Pengajuan Assesment</span>
          </div>

          <DataTable
            data={data}
            columns={columns}
            searchFn={onSearch}
            pageCount={Math.ceil(totalData / 10)}
            paginateFn={handlePaginate}
            sortingFn={handleSorting}
            disablePagination={true}
          />

          <div className="flex items-center justify-between px-4 lg:px-1">
            <div className="flex justify-start items-center">
              <ButtonLink
                to={`/ajukan-assesment`}
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600"
              >
                <span>Kembali</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PengajuanSkemaAssesmentList;
