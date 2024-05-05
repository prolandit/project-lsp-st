import { faker } from "@faker-js/faker";
import { PemohonPortofolioStructure } from "../../../../data/models/PemohonDao";
import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "../../../components/Elements/DataTable";

const DummyData = (): PemohonPortofolioStructure => {
  return {
    // id: faker.number.int(),
    name: faker.lorem.words(4),
    file: faker.helpers.arrayElement([1, 0]) >= 1 ? faker.image.urlPicsumPhotos() : null,
  };
};

const totalData = 10;

const PersyaratanDasar: React.FC = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const [data, setData] = useState<PemohonPortofolioStructure[]>([]);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, []);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, [pageIndex]);

  const columns: ColumnDef<PemohonPortofolioStructure>[] = [
    {
      accessorKey: "name",
      //   enableSorting: false,
      header: "Nama Portofolio",
    },
    {
      accessorKey: "file",
      header: "File",
      cell: ({ row }) => <>{!row.original.file ? <span>-</span> : <div>i Love PDF.pdf</div>}</>,
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
          {/* <span className="text-lg font-semibold">Daftar Peserta</span> */}
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

export default PersyaratanDasar;
