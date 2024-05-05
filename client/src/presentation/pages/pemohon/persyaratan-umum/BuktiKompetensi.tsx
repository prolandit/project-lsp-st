import { faker } from "@faker-js/faker";
import { BuktiKompetensiStructure } from "../../../../data/models/PemohonDao";
import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "../../../components/Elements/DataTable";
import { FaFile, FaTrash } from "react-icons/fa";
import { ToolTipWrapper } from "../../../components/Elements/Tooltip";
import Button from "../../../components/Elements/Button";

const DummyData = (): BuktiKompetensiStructure => {
  return {
    // id: faker.number.int(),
    element: faker.lorem.words(4),
    files: Array.from(Array(faker.number.int({ min: 3, max: 9 }))).map(() => {
      return faker.image.urlPicsumPhotos();
    }),
    kuks: Array.from(Array(faker.number.int({ min: 1, max: 4 }))).map(() => {
      return faker.lorem.words(5);
    }),
    unitKompetensi: faker.lorem.words(4),
  };
};

const totalData = 10;

const BuktiKompetensi: React.FC = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const [data, setData] = useState<BuktiKompetensiStructure[]>([]);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, []);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, [pageIndex]);

  const columns: ColumnDef<BuktiKompetensiStructure>[] = [
    {
      accessorKey: "unitKompetensi",
      //   enableSorting: false,
      header: "Unit Kompetensi",
    },
    {
      accessorKey: "element",
      //   enableSorting: false,
      header: "Nama Element",
    },
    {
      accessorKey: "kuk",
      header: "Nama KUK",
      enableSorting: false,

      cell: ({ row }) => (
        <ul className="list-disc">
          {row.original.kuks.map((kuk) => (
            <li className={`w-full mt-3 `}>{kuk}</li>
            // ${index < 0 ? "" : "border-b border-b-slate-200 pb-2"}
          ))}
        </ul>
      ),
    },
    {
      accessorKey: "file",
      header: "File",
      enableSorting: false,
      cell: ({ row }) => (
        <ul className="flex flex-col">
          {row.original.kuks.map((kuk) => (
            <li
              className={`w-full mt-3 p-2 border border-slate-300 rounded-md hover:bg-slate-100 bg-transparent transition-all flex items-center`}
            >
              <FaFile className="mr-3 text-gray-400" />
              <span className="mr-auto">{kuk}</span>

              <ToolTipWrapper content="Delete File">
                <Button
                  type="button"
                  className="bg-transparent text-red-600 rounded-full w-10 h-10 hover:bg-red-100 p-1 flex items-center justify-center"
                  // onClick={onAction("Revisi Asesi")}
                >
                  <FaTrash className="" />
                </Button>
              </ToolTipWrapper>
            </li>
            // ${index < 0 ? "" : "border-b border-b-slate-200 pb-2"}
          ))}
        </ul>
      ),
    },
    {
      accessorKey: "element",
      header: "Aksi",
      enableSorting: false,
      cell: ({ row }) => (
        <Button className="inline-flex items-center" type="button">
          Lampirkan file
          {/* <FaEye className="mr-2" /> View */}
        </Button>
      ),
    },
  ];

  const onSearch = () => {};

  return (
    <>
      <div className="flex flex-col mx-3 my-6 bg-white rounded-t-lg lg:mx-8">
        {/* <div className="flex flex-row items-center justify-between px-4 py-4 lg:px-6">
          <span className="text-base font-semibold text-blue-600">Beranda</span>
        </div>
        <hr /> */}
        <div className="flex flex-col px-4 py-4 lg:px-6">
          {/* <span className="text-lg font-semibold">Berkas Asesi</span> */}
          <DataTable
            data={data}
            columns={columns}
            searchFn={onSearch}
            pageCount={Math.ceil(totalData / 10)}
            paginateFn={(page, pageSize) => {
              setPagination({ pageIndex: page, pageSize });
            }}
            sortingFn={(states) => {
              console.log(states);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default BuktiKompetensi;
