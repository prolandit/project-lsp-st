import React, { useState } from "react";
import { useFormik } from "formik";
import { createSkemaSertifikat } from "../../../../common/formSchemas";
import Constants from "../../../../common/constants";
import Alert from "../../../components/Elements/Alert";
import Button from "../../../components/Elements/Button";
import ComboBox from "../../../components/Elements/ComboBox";
import Input from "../../../components/Elements/Input";
import Label from "../../../components/Elements/Input/Label";
import { RadioGroup, RadioGroupItem } from "../../../components/Elements/RadioGroup";
import { UnitKompetensiStructure } from "../../../../data/models/SkemaDao";
import { FaCircleInfo } from "react-icons/fa6";
import { ToolTipWrapper } from "../../../components/Elements/Tooltip";
import { FaTrash, FaUpload } from "react-icons/fa";
const UnitKompetensi: React.FC = () => {
  //   const [_s, setSearchParams] = useSearchParams();

  const onSubmit = async (value: UnitKompetensiStructure[]) => {};

  const [skema, setSkema] = useState([
    {
      key: "Skema 1",
      value: "1",
    },
    {
      key: "Skema 2",
      value: "2",
    },
    {
      key: "Skema 3",
      value: "2",
    },
  ]);

  const { errors, touched, values, handleSubmit, setValues } = useFormik<UnitKompetensiStructure[]>(
    {
      initialValues: [
        {
          skema: "",
          namaKelompokKerja: "",
          nomorKelompokKerja: 123,
        },
      ],
      validationSchema: createSkemaSertifikat,
      onSubmit,
    }
  );
  const handleValues = <T extends keyof UnitKompetensiStructure>(
    index: number,
    name: T,
    value: UnitKompetensiStructure[T]
  ) => {
    const newValues = [...values];
    newValues[index][name] = value;

    setValues(newValues);
  };
  const addNewRow = () => {
    const newValues = [...values];
    newValues.push({
      skema: "",
      namaKelompokKerja: "",
      nomorKelompokKerja: 0,
    });

    setValues(newValues);
  };

  const removeRow = (index: number) => {
    const newValues = [...values];
    newValues.splice(index, 1);

    setValues(newValues);
  };

  return (
    <>
      <form className="flex flex-col my-10" encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 mx-3 lg:flex-row lg:mx-12">
          <div className="w-full pt-4 bg-white rounded-md shadow-sm pb-7 drop-shadow-sm">
            <span className="px-4 py-6 text-base font-semibold text-black-600 lg:px-6">
              Buat Skema
            </span>
            <hr className="my-4" />
            <div className="flex flex-col items-center gap-6 px-4 lg:gap-16 lg:px-12">
              {values.map((value, index) => (
                <div className="flex flex-col w-full gap-6 lg:gap-16 lg:grid lg:grid-cols-3 lg:gap-y-10 items-center">
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="kategori">Skema</Label>
                    <ComboBox
                      name="skema"
                      items={skema}
                      value={value.skema}
                      placeholder="Pilih Skema"
                      onChange={(e) => handleValues(index, "skema", e.target.value)}
                    />
                    {/* {errors.kategori && touched.kategori ? (
                      <Alert message={errors.kategori} type="error" />
                    ) : null} */}
                  </div>
                  {/* nama skema */}
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="namaKelompokKerja">
                      Nama Kelompok Kerja
                      {/* <span style={{ color: "red" }}>*</span> */}
                    </Label>
                    <Input
                      type="text"
                      name="namaKelompokKerja"
                      value={value.namaKelompokKerja}
                      onChange={(e) => handleValues(index, "namaKelompokKerja", e.target.value)}
                      // value={values.namaSkema}
                      // onChange={handleChange}
                    />
                    {/* {errors.namaSkema && touched.namaSkema ? (
                    <Alert message={errors.namaSkema} type="error" />
                  ) : null} */}
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* skema */}

                    {/* kode skema */}
                    <Label htmlFor="nomorKelompokKerja">
                      Nomor Kelompok Kerja
                      {/* <span style={{ color: "red" }}>*</span> */}
                    </Label>
                    <div className="flex flex-row items-center">
                      <Input
                        type="text"
                        name="nomorKelompokKerja"
                        value={value.nomorKelompokKerja}
                        onChange={(e) =>
                          handleValues(index, "nomorKelompokKerja", parseInt(e.target.value))
                        }
                      />
                      {/* {errors.kodeSkema && touched.kodeSkema ? (
                    <Alert message={errors.kodeSkema} type="error" />
                  ) : null} */}
                      <Button
                        type="button"
                        className="bg-transparent text-red-600  w-12 h-10 hover:bg-red-100 p-1 flex items-center justify-center border border-red-600 ml-4"
                        onClick={() => removeRow(index)}
                        // onClick={onAction("Revisi Asesi")}
                      >
                        <FaTrash className="" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <hr className="my-4" />
            <div className="flex flex-col lg:flex-row gap-3 relative px-4 lg:gap-16 lg:px-12">
              <Button type="button" onClick={addNewRow}>
                Tambah Data Kelompok Pekerjaan
              </Button>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "2rem" }}></div>

        <div className="flex items-center gap-6 px-4 lg:gap-16 lg:px-12 justify-start">
          <div className="flex justify-start items-center">
            {/* <Button
              //   to={`/skema-sertifikat/create?tab=`}
            //   onClick={() => setSearchParams(`?tab=kuk`)}
              type="button"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600"
            >
              <span>Kembali</span>
            </Button> */}
            <Button
              type="submit"
              //   onClick={handleClickNext}
              className="flex ml-10 items-center gap-3 "
            >
              <span>Selanjutnya</span>
            </Button>
          </div>
        </div>
      </form>
      {/* <LoadingSpinner show={isLoading} /> */}
    </>
  );
};

export default UnitKompetensi;
