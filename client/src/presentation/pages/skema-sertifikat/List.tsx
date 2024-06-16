import React, { useState, useMemo, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { ColumnDef } from "@tanstack/react-table";
import ExpandingDataTable from "../../components/Elements/ExpandingDataTable";
import ButtonLink from "../../components/Elements/ButtonLink";
import { PengajuanSkemaAssesmentListStructure } from "../../../data/models/PengajuanSkemaDao";
import { FaRegSquarePlus, FaRegSquareMinus, FaCirclePlus } from "react-icons/fa6";

const DummyData = (): PengajuanSkemaAssesmentListStructure => {
  return {
    id: faker.datatype.number(),
    kodeSkema: faker.lorem.words(5),
    namaSkema: faker.lorem.words(5),
    kodeUnit: faker.lorem.words(5),
    namaUnitKompetensi: faker.lorem.words(3),
    subRows: Array.from(Array(3)).map(() => ({
      id: faker.datatype.number(),
      kodeUnit: faker.lorem.words(5),
      namaUnitKompetensi: faker.lorem.words(3),
    })),
  };
};

const SkemaSertifikatList: React.FC = () => {
  const [data, setData] = useState<PengajuanSkemaAssesmentListStructure[]>([]);
  const [pageCount, setPageCount] = useState(10);

  useEffect(() => {
    setData(Array.from(Array(10)).map(() => DummyData()));
  }, []);

  const columns = useMemo<ColumnDef<PengajuanSkemaAssesmentListStructure>[]>(
    () => [
      {
        accessorKey: "kodeSkema",
        header: "Kode Skema",
        cell: ({ row, getValue }) => (
          <div
            style={{
              paddingLeft: `${row.depth * 2}rem`,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "1.5rem" }}>
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
                  {row.getIsExpanded() ? <FaRegSquareMinus /> : <FaRegSquarePlus />}
                </button>
              ) : null}
            </div>
            <div style={{ marginLeft: "1.5rem" }}>{getValue() as React.ReactNode}</div>
          </div>
        ),
      },
      {
        accessorKey: "namaSkema",
        header: "Nama Skema",
        cell: ({ getValue }) => (
          <div style={{ marginLeft: "1.5rem" }}>{getValue() as React.ReactNode}</div>
        ),
      },
      {
        accessorKey: "action",
        header: "Aksi",
        cell: ({ row }) =>
          row.depth === 0 ? (
            <div className="flex flex-row gap-3">
              <ButtonLink
                to={`/pengajuan-skema/ajukan/${row.original.id}`}
                className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600"
              >
                <span className="text-white-600">Edit</span>
              </ButtonLink>
              <ButtonLink
                to={`/pengajuan-skema/ajukan/${row.original.id}`}
                className="flex items-center gap-3 bg-red-500 hover:bg-red-600"
              >
                <span className="text-white-600">Delete</span>
              </ButtonLink>
            </div>
          ) : null,
      },
    ],
    []
  );

  const handlePaginate = (page: number, pageSize: number) => {
    setData(Array.from(Array(pageSize)).map(() => DummyData()));
    setPageCount(page);
  };

  const handleSorting = (states: any[]) => {
    console.log(states);
  };

  const onSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const expandableConfig = {
    renderExpandedContent: (row: any) => (
      <ExpandingDataTable
        data={row.original.subRows || []}
        columns={[
          {
            accessorKey: "kodeUnit",
            header: "Kode Unit",
            cell: ({ row }) => <div style={{ paddingLeft: "1.4rem" }}>{row.original.kodeUnit}</div>,
          },
          {
            accessorKey: "namaUnitKompetensi",
            header: "Nama Unit Kompetensi",
            cell: ({ row }) => (
              <div style={{ paddingLeft: "1.4rem" }}>{row.original.namaUnitKompetensi}</div>
            ),
          },
        ]}
        className="bg-white rounded-t-lg"
        disablePagination={true}
        disableSearch={true}
      />
    ),
  };

  return (
    <>
      <div className="flex flex-col mx-3 my-1 bg-white rounded-t-lg lg:mx-8">
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
              <span>Daftar Skema</span>
            </ButtonLink>
          </div>
          <ExpandingDataTable
            data={data}
            columns={columns}
            className="bg-white rounded-t-lg"
            pageCount={pageCount}
            searchFn={onSearch}
            paginateFn={handlePaginate}
            sortingFn={handleSorting}
            // disablePagination={true}
            expandableConfig={expandableConfig}
          />
          <div className="mt-2 text-sm text-gray-500" style={{ textAlign: "right" }}>
            {/* <b>
              <i>Total: {totalData} data entries</i>
            </b> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkemaSertifikatList;
