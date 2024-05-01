import { faker } from "@faker-js/faker";
import { PersyaratanPendaftaranStructure } from "../../../../data/models/PemohonDao";
import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "../../../components/Elements/DataTable";
import ButtonLink from "../../../components/Elements/ButtonLink";
import Button from "../../../components/Elements/Button";
import { FaEye } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/Elements/Dialog";

const DummyData = (): PersyaratanPendaftaranStructure => {
  return {
    // id: faker.number.int(),
    name: faker.lorem.words(4),
    file: faker.helpers.arrayElement([1, 0]) >= 1 ? faker.image.urlPicsumPhotos() : null,
    formType: "E-Form",
    status: faker.helpers.arrayElement(["disetujui", "submit"]),
  };
};

const totalData = 10;

const PersyaratanPendaftaran: React.FC = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const [data, setData] = useState<PersyaratanPendaftaranStructure[]>([]);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, []);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, [pageIndex]);

  const columns: ColumnDef<PersyaratanPendaftaranStructure>[] = [
    {
      accessorKey: "name",
      //   enableSorting: false,
      header: "Nama Portofolio",
    },
    {
      accessorKey: "formType",
      //   enableSorting: false,
      header: "Form Type",
    },
    {
      accessorKey: "file",
      header: "File",
      cell: ({ row }) => (
        <>
          {!row.original.file ? (
            <Button
              className="bg-slate-300 text-gray-500 hover:bg-slate-300 cursor-not-allowed inline-flex items-center"
              type="button"
            >
              <FaEye className="mr-2" /> View
            </Button>
          ) : (
            <Dialog>
              <DialogTrigger>
                <Button className="inline-flex items-center" type="button">
                  <FaEye className="mr-2" /> View
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>File Name</DialogTitle>
                  <DialogDescription>
                    <iframe
                      src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                      className="w-full h-[800px]"
                    />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}
        </>
      ),
    },
    {
      accessorKey: "Action",
      cell: ({ row }) => (
        <>
          <ButtonLink to="/e-form"> E-Form </ButtonLink>
          {row.original.status == "submit" && (
            <ButtonLink to="/status" className="ml-3 bg-green-600 hover:bg-green-500">
              Status
            </ButtonLink>
          )}
        </>
      ),
      //   enableSorting: false,
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
          <span className="text-lg font-semibold">Daftar Peserta</span>
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

export default PersyaratanPendaftaran;
