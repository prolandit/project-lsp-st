import { faker } from "@faker-js/faker";
import { PengajuanSkemaPersyaratanPendaftaranStructure } from "../../../data/models/PengajuanSkemaDao";
import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "../../components/Elements/DataTable";
import ButtonLink from "../../components/Elements/ButtonLink";
import Button from "../../components/Elements/Button";
// import { FaUpload } from "react-icons/fa6";
// import Label from "../../components/Elements/Input/Label";

const DummyData = (): PengajuanSkemaPersyaratanPendaftaranStructure => {
  return {
    id: faker.number.int(),
    namaPersyaratan: faker.lorem.words(4),
    formType: "E-Form",
    file: faker.system.fileName({ extensionCount: { min: 1, max: 2 } }),
  };
};

const totalData = 10;

const PengajuanSkemaPersyaratanPendaftaran: React.FC = () => {
//   const [uploadedFileNames, setUploadedFileNames] = useState<(string | null)[]>(
//     []
//   );

//   useEffect(() => {
//     setData(Array.from(Array(pageSize)).map(() => DummyData()));
//     setUploadedFileNames(Array.from(Array(pageSize)).map(() => null));
//   }, []);

  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const [data, setData] = useState<
    PengajuanSkemaPersyaratanPendaftaranStructure[]
  >([]);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, []);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, [pageIndex]);

//   const handleFileUpload = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     rowIndex: number
//   ) => {
//     const file = e.currentTarget.files?.[0];
//     if (file) {
//       const newUploadedFileNames = [...uploadedFileNames];
//       newUploadedFileNames[rowIndex] = file.name;
//       setUploadedFileNames(newUploadedFileNames);
//     }
//   };

//   const handleDeleteFile = (rowIndex: number) => {
//     const newUploadedFileNames = [...uploadedFileNames];
//     newUploadedFileNames[rowIndex] = null;
//     setUploadedFileNames(newUploadedFileNames);
//   };

  const columns: ColumnDef<PengajuanSkemaPersyaratanPendaftaranStructure>[] = [
    {
      accessorKey: "namaPersyaratan",
      //   enableSorting: false,
      header: "Nama Persyaratan",
    },
    {
      accessorKey: "formType",
      //   enableSorting: false,
      header: "Form Type",
    },
    {
      accessorKey: "file",
      header: "File",
    //   cell: ({ row }) => (
    //     <>
    //       <div className="flex flex-row items-center gap-3 mb-3 justify-center">
    //         {uploadedFileNames[row.index] && (
    //           <>
    //             {row.original.file &&
    //             row.original.file.type.startsWith("image/") ? (
    //               <img
    //                 src={URL.createObjectURL(row.original.file)}
    //                 alt="Uploaded Image"
    //                 className="w-10 h-10 object-cover rounded-full"
    //               />
    //             ) : (
    //               <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
    //                 {row.original.file?.name}
    //               </div>
    //             )}
    //             <Label>{uploadedFileNames[row.index]}</Label>
    //           </>
    //         )}
    //       </div>
    //       <div className="flex justify-center">
    //         {uploadedFileNames[row.index] && !row.original.file && (
    //           <button
    //             onClick={() => handleDeleteFile(row.index)}
    //             className="px-6 py-2 text-sm font-medium text-red-100 bg-red-600 rounded-md h-11 hover:bg-red-500"
    //           >
    //             Hapus
    //           </button>
    //         )}
    //       </div>
    //     </>
    //   ),
    },

    {
      accessorKey: "Action",
      cell: () => (
        <>
          <ButtonLink to="/e-form"> E-Form </ButtonLink>
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
        <div className="flex flex-col px-4 py-4 lg:px-4">
          <span className="text-base font-semibold text-black-600 ">
            Daftar Peserta
          </span>
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
        <div className="flex items-center gap-6 px-4 lg:gap-16 lg:px-6 justify-start">
          <div className="flex justify-start items-center">
            <ButtonLink
              to={`/ajukan-assesment`}
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600"
            >
              <span>Kembali</span>
            </ButtonLink>
            <Button
              type="submit"
              //   onClick={handleClickNext}
              className="flex ml-10 items-center gap-3 "
            >
              <span>Ajukan</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PengajuanSkemaPersyaratanPendaftaran;
