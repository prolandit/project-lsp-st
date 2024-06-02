import React, { useState, useMemo, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "../../components/Elements/DataTable";
import ButtonLink from "../../components/Elements/ButtonLink";
import { DatabaseAsesiAlumniListStructure } from "../../../data/models/DatabaseAsesiDao";
import {
  FaRegSquarePlus,
  FaRegSquareMinus,
  FaFileLines,
  FaPenToSquare,
  FaClockRotateLeft,
} from "react-icons/fa6";
import { ToolTipWrapper } from "../../components/Elements/Tooltip";

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("id-ID", options).format(date);
};

const generateRandomDate = (): Date => {
  return faker.date.between("2023-01-01", "2024-12-31");
};

const DummyData = (): DatabaseAsesiAlumniListStructure => {
  return {
    id: faker.datatype.number(),
    nama: faker.lorem.words(5),
    assesment: faker.lorem.words(5),
    tuk: faker.lorem.words(5),
    noKtp: faker.number.int({ min: 16 }),
    email: faker.internet.email(),
    telp: faker.number.int({ min: 12 }),
    noSertifikat: faker.number.int({ min: 16 }),
    skema: faker.lorem.words(3),
    lisensiSkema: faker.lorem.words(3),
    metodeUji: faker.lorem.words(1),
    tanggalBerlaku: formatDate(generateRandomDate()),
  };
};

const totalData = 100;

const DatabaseAsesiAlumniList: React.FC = () => {
  const [data, setData] = useState<DatabaseAsesiAlumniListStructure[]>([]);
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, []);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, [pageIndex]);

  const columns = useMemo<ColumnDef<DatabaseAsesiAlumniListStructure>[]>(
    () => [
      {
        accessorKey: "nama",
        header: "Nama",
        cell: ({ row, getValue }) => (
          <div
            style={{
              paddingLeft: `${row.depth * 2}rem`,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              {row.getCanExpand() ? (
                <button
                  {...{
                    onClick: row.getToggleExpandedHandler(),
                    style: {
                      cursor: "pointer",
                      fontSize: "1.2rem",
                      color: "lightblue",
                    },
                  }}
                >
                  {row.getIsExpanded() ? (
                    <FaRegSquareMinus />
                  ) : (
                    <FaRegSquarePlus />
                  )}
                </button>
              ) : null}
            </div>
            <div>{getValue() as React.ReactNode}</div>
          </div>
        ),
      },
      {
        accessorKey: "assesment",
        header: "Assesment",
        cell: ({ getValue }) => <div>{getValue() as React.ReactNode}</div>,
      },
      {
        accessorKey: "tuk",
        header: "TUK",
        cell: ({ getValue }) => <div>{getValue() as React.ReactNode}</div>,
      },
      {
        accessorKey: "noKtp",
        header: "No KTP",
        cell: ({ getValue }) => <div>{getValue() as React.ReactNode}</div>,
      },
      {
        accessorKey: "email",
        header: "Email",
        cell: ({ getValue }) => <div>{getValue() as React.ReactNode}</div>,
      },
      {
        accessorKey: "telp",
        header: "No. Telp",
        cell: ({ getValue }) => <div>{getValue() as React.ReactNode}</div>,
      },
      {
        accessorKey: "noSertifikat",
        header: "No Sertifikat",
        cell: ({ getValue }) => <div>{getValue() as React.ReactNode}</div>,
      },
      {
        accessorKey: "skema",
        header: "Skema",
        cell: ({ getValue }) => <div>{getValue() as React.ReactNode}</div>,
      },
      {
        accessorKey: "lisensiSkema",
        header: "Lisensi Skema",
        cell: ({ getValue }) => <div>{getValue() as React.ReactNode}</div>,
      },
      {
        accessorKey: "metodeUji",
        header: "Metode Uji",
        cell: ({ getValue }) => <div>{getValue() as React.ReactNode}</div>,
      },
      {
        accessorKey: "tanggalBerlaku",
        header: "Tanggal Berlaku",
        cell: ({ getValue }) => <div>{getValue() as React.ReactNode}</div>,
      },
      {
        accessorKey: "action",
        header: "Aksi",
        cell: ({ row }) =>
          row.depth === 0 ? (
            <div className="flex flex-row gap-3">
              <ToolTipWrapper content="Edit">
                <ButtonLink
                  to={`/database-asesi-alumni-list/edit/${row.original.id}`}
                  className="flex items-center gap-3 bg-white-500 hover:bg-green-100 border border-green-600"
                >
                  <FaPenToSquare className="text-green-600" />
                  {/* <span className="text-white-600"></span> */}
                </ButtonLink>
              </ToolTipWrapper>
              <ToolTipWrapper content="Lihat Sertifikat">
                <ButtonLink
                  to={`/pengajuan-skema/ajukan/${row.original.id}`}
                  className="flex items-center gap-3 bg-blue-500 hover:bg-blue-400 border border-blue-600"
                >
                  <FaFileLines className="text-white-600" />
                </ButtonLink>
              </ToolTipWrapper>
              <ToolTipWrapper content="History">
                <ButtonLink
                  to={`/pengajuan-skema/ajukan/${row.original.id}`}
                  className="flex items-center gap-3 bg-white-500 hover:bg-yellow-100 border border-yellow-600"
                >
                  <FaClockRotateLeft className="text-yellow-600" />
                </ButtonLink>
              </ToolTipWrapper>
            </div>
          ) : null,
      },
    ],
    []
  );

  const handleSorting = (states: any[]) => {
    console.log(states);
  };

  const onSearch = (query: string) => {
    console.log("Search query:", query);
  };

  // const expandableConfig = {
  //   renderExpandedContent: (row: any) => (
  //     <ExpandingDataTable
  //       data={row.original.subRows || []}
  //       columns={[
  //         {
  //           accessorKey: "kodeUnit",
  //           header: "Kode Unit",
  //           cell: ({ row }) => (
  //             <div style={{ paddingLeft: "1.4rem" }}>
  //               {row.original.kodeUnit}
  //             </div>
  //           ),
  //         },
  //         {
  //           accessorKey: "namaUnitKompetensi",
  //           header: "Nama Unit Kompetensi",
  //           cell: ({ row }) => (
  //             <div style={{ paddingLeft: "1.4rem" }}>
  //               {row.original.namaUnitKompetensi}
  //             </div>
  //           ),
  //         },
  //       ]}
  //       className="bg-white rounded-t-lg"
  //       disablePagination={true}
  //       disableSearch={true}
  //     />
  //   ),
  // };

  return (
    <>
      <div className="flex flex-col mx-3 my-1 bg-white rounded-t-lg lg:mx-8">
        <div className="flex flex-col px-4 py-4 lg:px-6">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold">
              Daftar Database Alumni
            </span>
          </div>
          <DataTable
            data={data}
            columns={columns}
            className="bg-white rounded-t-lg"
            pageCount={Math.ceil(totalData / 10)}
            paginateFn={(page, pageSize) => {
              setPagination({ pageIndex: page, pageSize });
            }}
            searchFn={onSearch}
            sortingFn={handleSorting}
            disablePagination={false}
            disableEntries={true}
          />
          <div
            className="mt-2 text-sm text-gray-500"
            style={{ textAlign: "right" }}
          >
            {/* <b>
              <i>Total: {totalData} data entries</i>
            </b> */}
          </div>
          <div className="flex items-center gap-6 px-4 lg:gap-16 lg:px-0 justify-start">
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

export default DatabaseAsesiAlumniList;
