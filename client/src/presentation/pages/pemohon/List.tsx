import React, { useEffect, useState } from "react";
import DataTable from "../../components/Elements/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { PemohonStructure } from "../../../data/models/PemohonDao";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import ButtonLink from "../../components/Elements/ButtonLink";
import Button from "../../components/Elements/Button";
import { FaBackward, FaCheck } from "react-icons/fa";
import { ToolTipWrapper } from "../../components/Elements/Tooltip";
import { FaRotateLeft, FaX } from "react-icons/fa6";

const DummyData = (): PemohonStructure => {
  return {
    id: faker.number.int(),
    purpose: faker.lorem.words(3),
    institute: faker.company.name(),
    notes: faker.lorem.paragraph(2),
    photo: faker.image.avatar(),
    status: faker.music.songName(),
    tuk: faker.person.firstName(),
    requestDate: faker.date.past().toDateString(),
    scheme: {
      code: faker.color.human(),
      name: faker.company.buzzPhrase(),
      units: Array.from(Array(3)).map(() => {
        return {
          code: faker.color.human(),
          name: faker.company.buzzPhrase(),
        };
      }),
    },
  };
};

const totalData = 100;

const List: React.FC = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const [data, setData] = useState<PemohonStructure[]>([]);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, []);

  useEffect(() => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
  }, [pageIndex]);

  const onAction = (type: string) => {
    return () => {
      console.log(type);
    };
  };

  const columns: ColumnDef<PemohonStructure>[] = [
    {
      accessorKey: "photo",
      enableSorting: false,
      header: "Photo",
      cell: ({ row }) => (
        <img className="w-12 h-12 object-cover rounded-full" src={row.original.photo} />
      ),
    },
    {
      accessorKey: "scheme",
      header: "Nama Skema",
      cell: ({ row }) => `(${row.original.scheme.code}) ${row.original.scheme.name}`,
    },
    {
      accessorKey: "purpose",
      header: "Tujuan Assesmen",
    },
    {
      accessorKey: "requestDate",
      header: "Tanggal Assesmen",
    },
    {
      accessorKey: "institute",
      header: "Institusi",
    },
    {
      accessorKey: "tuk",
      header: "Nama TUK",
    },
    {
      accessorKey: "purpose",
      header: "Persyaratan Umum",
      enableSorting: false,
      cell: ({ row }) => (
        <>
          <ButtonLink to={`/pemohon/berkas/${row.original.id}`}>Berkas Asesi</ButtonLink>
        </>
      ),
    },
    {
      accessorKey: "id",
      header: "Aksi",
      cell: ({ row }) => (
        <>
          <ToolTipWrapper content="Setujui Asesi">
            <Button
              type="button"
              className="bg-green-200 text-green-600 rounded-full w-10 h-10 hover:bg-green-300"
              onClick={onAction("Setujui Asesi")}
            >
              <FaCheck className="-ml-0.5" />
            </Button>
          </ToolTipWrapper>
          <ToolTipWrapper content="Tolak Asesi">
            <Button
              type="button"
              className="bg-red-200 text-red-600 rounded-full w-10 h-10 hover:bg-red-300 ml-5"
              onClick={onAction("Tolak Asesi")}
            >
              <FaX className="-ml-0.5" />
            </Button>
          </ToolTipWrapper>
          <ToolTipWrapper content="Revisi Asesi">
            <Button
              type="button"
              className="bg-orange-200 text-orange-600 rounded-full w-10 h-10 hover:bg-orange-300 ml-5"
              onClick={onAction("Revisi Asesi")}
            >
              <FaRotateLeft className="-ml-0.5" />
            </Button>
          </ToolTipWrapper>
        </>
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

export default List;
