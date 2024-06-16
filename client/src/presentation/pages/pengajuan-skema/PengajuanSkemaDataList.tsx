import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { PengajuanSkemaDataListStructure } from "../../../data/models/PengajuanSkemaDao";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "../../components/Elements/DataTable";
import { FaPenToSquare, FaCirclePlus } from "react-icons/fa6";
import ButtonLink from "../../components/Elements/ButtonLink";

const totalData = 100;

const PengajuanSkemaDataList: React.FC = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const [data, setData] = useState<PengajuanSkemaDataListStructure[]>([]);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, []);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, [pageIndex]);

  const DummyData = (): PengajuanSkemaDataListStructure => {
    return {
      id: faker.number.int(),
      name: faker.lorem.words(5),
      date: faker.date.anytime(),
      catatan: faker.lorem.words(5),
      status: faker.lorem.words(5),
    };
  };

  const columns: ColumnDef<PengajuanSkemaDataListStructure>[] = [
    {
      accessorKey: "name",
      header: "Nama Skema",
    },
    {
      accessorKey: "date",
      header: "Tanggal Pengajuan",
    },
    {
      accessorKey: "catatan",
      header: "Catatan",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "action",
      header: "Aksi",
      cell: ({ row }) => (
        <div className="flex flex-row gap-3">
          <ButtonLink
            to={`/${row.original.id}`}
            className="bg-transparent flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:bg-transparent-400 lg:text-base"
          >
            <FaPenToSquare className="text-2xl text-green-600" />
            <span className="text-green-600"></span>
          </ButtonLink>
          <ButtonLink
            to={`/${row.original.id}`}
            className="bg-transparent flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:bg-transparent-400 lg:text-base"
          >
            <FaPenToSquare className="text-2xl text-green-600" />
            <span className="text-green-600"></span>
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
            <span className="text-2xl font-semibold">Data Skema</span>
          </div>

          <div className="flex justify-end items-center">
            <ButtonLink
              to={`/ajukan-assesment`}
              className="flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-gray-300 lg:text-base bg-blue-500 rounded-xl text-white px-4 py-2 transition-colors"
            >
              <FaCirclePlus className="text-xl" />
              <span>Ajukan Assesment</span>
            </ButtonLink>
          </div>

          <DataTable
            data={data}
            columns={columns}
            searchFn={onSearch}
            pageCount={Math.ceil(totalData / 10)}
            paginateFn={handlePaginate}
            sortingFn={handleSorting}
          />
          <div
            className="mt-2 text-sm text-gray-500"
            style={{ textAlign: "right" }}
          >
            <b>
              <i>Total: {totalData} data entries</i>
            </b>
          </div>
        </div>
      </div>
    </>
  );
};

export default PengajuanSkemaDataList;
