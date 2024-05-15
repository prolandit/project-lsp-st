import { faker } from "@faker-js/faker";
import { PengajuanSkemaBuktiKompetensiStructure } from "../../../data/models/PengajuanSkemaDao";
import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "../../components/Elements/DataTable";
import ButtonLink from "../../components/Elements/ButtonLink";
import Button from "../../components/Elements/Button";
import { FaUpload } from "react-icons/fa6";
import Label from "../../components/Elements/Input/Label";

const DummyData = (): PengajuanSkemaBuktiKompetensiStructure => {
  const bulletPointParagraphs = faker.lorem
    .paragraphs(5)
    .split("\n")
    .map((paragraph) => `- ${paragraph}`)
    .join("\n\n");
  return {
    id: faker.number.int(),
    unitKompetensi: faker.lorem.words(4),
    namaElemen: faker.lorem.words(4),
    namaKUK: bulletPointParagraphs,
    file: null,
  };
};

const totalData = 10;

const PengajuanSkemaBuktiKompetensi: React.FC = () => {
  const [uploadedFileNames, setUploadedFileNames] = useState<(string | null)[]>(
    []
  );

  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const [data, setData] = useState<PengajuanSkemaBuktiKompetensiStructure[]>(
    []
  );

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
    setUploadedFileNames(Array.from(Array(pageSize)).map(() => null));
  }, []);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, []);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, [pageIndex]);

  // const handleFileUpload = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   rowIndex: number
  // ) => {
  //   const file = e.currentTarget.files?.[0];
  //   if (file) {
  //     const newUploadedFileNames = [...uploadedFileNames];
  //     newUploadedFileNames[rowIndex] = file.name;
  //     setUploadedFileNames(newUploadedFileNames);
  //   }
  // };

  // const handleDeleteFile = (rowIndex: number) => {
  //   const newUploadedFileNames = [...uploadedFileNames];
  //   newUploadedFileNames[rowIndex] = null;
  //   setUploadedFileNames(newUploadedFileNames);
  // };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number
  ) => {
    const file = e.currentTarget.files?.[0];
    if (file) {
      const newData = [...data];
      newData[rowIndex].file = file;
      setData(newData);
      console.log("File yang diunggah:", file);
    }
  };

  const handleDelete = (index: number) => {
    const newData = [...data];
    newData[index].file = null;
    setData(newData);
  };

  const columns: ColumnDef<PengajuanSkemaBuktiKompetensiStructure>[] = [
    {
      accessorKey: "unitKompetensi",
      header: "Unit Kompetensi",
    },
    {
      accessorKey: "namaElemen",
      header: "Nama Element",
    },
    {
      accessorKey: "namaKUK",
      header: "Nama KUK",
      cell: ({ row }) => (
        <ul>
          {row.original.namaKUK &&
            row.original.namaKUK
              .split("\n")
              .map((paragraph, index) => <li key={index}>{paragraph}</li>)}
        </ul>
      ),
    },

    // {
    //   accessorKey: "file",
    //   header: "File",
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
    // },
    {
      accessorKey: "file",
      header: "File",
      cell: ({ row }) => {
        const fileName = row.original.file?.name || "";
        let formattedFileName = fileName;
        if (fileName.length > 10) {
          let index = 0;
          const words = [];
          while (index < fileName.length) {
            words.push(fileName.substr(index, 10));
            index += 10;
          }
          formattedFileName = words.join("<br>");
        }
        return (
          <>
            <div className="flex flex-row  gap-3 mb-3 justify-start">
              {row.original.file && (
                <div className="grid grid-cols-2  gap-2">
                  <div className="flex ">
                    <img
                      src={URL.createObjectURL(row.original.file)}
                      className="object-cover rounded-md h-16 w-16"
                    />
                  </div>
                  <span
                    dangerouslySetInnerHTML={{ __html: formattedFileName }}
                  />
                  <div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleDelete(row.index)}
                        className="px-6 py-2 text-sm font-medium text-red-100 bg-red-600 rounded-md h-11 hover:bg-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        );
      },
    },

    // {
    //   accessorKey: "Action",
    //   cell: ({ row }) => {
    //     const handleUploadClick = () => {
    //       const fileUploadInput = document.getElementById(
    //         `file_upload_${row.original.id}`
    //       );
    //       if (fileUploadInput) {
    //         fileUploadInput.click();
    //       }
    //     };

    //     return (
    //       <>
    //         <button
    //           className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-blue-700 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200"
    //           onClick={handleUploadClick}
    //         >
    //           <FaUpload />
    //           <span>Lampirkan File</span>
    //         </button>
    //         <input
    //           id={`file_upload_${row.original.id}`}
    //           type="file"
    //           accept="image/*"
    //           onChange={(e) => handleFileUpload(e, row.index)}
    //           hidden
    //         />
    //         <Label className="text-sm">
    //           Max File 10 MB <span style={{ color: "red" }}>*</span>
    //         </Label>
    //       </>
    //     );
    //   },
    // },
    {
      accessorKey: "aksi",
      header: "Aksi",
      cell: ({ row }) => (
        <>
          <div>
            <Label
              htmlFor={`file-upload-${row.original.id}`}
              className="flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200 inline-block dynamic-width"
            >
              <span className="flex items-center">
                <FaUpload />
                <span className="ml-2">Lampirkan File</span>
              </span>
            </Label>
          </div>
          <div style={{ marginTop: "10px" }}>
            <Label className="text-sm">
              Max File 10 MB <span style={{ color: "red" }}>*</span>
            </Label>
          </div>

          <input
            id={`file-upload-${row.original.id}`}
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, row.index)}
            hidden
          />
        </>
      ),
    },
  ];

  const onSearch = () => {};

  return (
    <>
      <div className="flex flex-col mx-3 my-6 bg-white rounded-t-lg lg:mx-8">
        <div className="flex flex-col px-4 py-4 lg:px-4">
          <span className="text-base font-semibold text-black-600">
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
              <span>Selanjutnya</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PengajuanSkemaBuktiKompetensi;
