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
import { FormSkemaStructure } from "../../../../data/models/SkemaDao";
import { FaCircleInfo } from "react-icons/fa6";
import { ToolTipWrapper } from "../../../components/Elements/Tooltip";
import { FaUpload } from "react-icons/fa";
const FormSkema: React.FC = () => {
  //   const [_s, setSearchParams] = useSearchParams();

  const onSubmit = async (value: FormSkemaStructure) => {};

  const [tipeForm, setTipeForm] = useState([
    {
      label: "Form 1",
      value: 1,
    },
    {
      label: "Form 2",
      value: 2,
    },
    {
      label: "Form 3",
      value: 2,
    },
  ]);

  const { errors, touched, values, handleChange, handleSubmit, setFieldValue } =
    useFormik<FormSkemaStructure>({
      initialValues: {
        kodeSkema: "",
        lisensiSkema: "",
        namaSkema: "",
        skkni: "",
        tipeform: 1,
        year: 2023,
        dokumenPendukung: null,
      },
      validationSchema: createSkemaSertifikat,
      onSubmit,
    });
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    setFieldValue("dokumenPendukung", file);
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
              <div className="flex flex-col w-full gap-6 lg:gap-16 lg:grid lg:grid-cols-2 lg:gap-y-10 lg:gap-x-10">
                <div className="flex flex-col gap-3">
                  {/* kode skema */}
                  <Label htmlFor="kodeSkema" className="w-36">
                    Kode Skema <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="text"
                    name="kodeSkema"
                    value={values.kodeSkema}
                    onChange={handleChange}
                  />
                  {errors.kodeSkema && touched.kodeSkema ? (
                    <Alert message={errors.kodeSkema} type="error" />
                  ) : null}
                </div>
                {/* nama skema */}
                <div className="flex flex-col gap-3">
                  <Label htmlFor="kodeSkema" className="w-36">
                    Nama Skema <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="text"
                    name="namaSkema"
                    value={values.namaSkema}
                    onChange={handleChange}
                  />
                  {errors.namaSkema && touched.namaSkema ? (
                    <Alert message={errors.namaSkema} type="error" />
                  ) : null}
                </div>
                {/* lisensi skema */}
                <div className="flex flex-col gap-3">
                  <Label htmlFor="nationality">
                    Lisensi Skema <span style={{ color: "red" }}>*</span>
                  </Label>
                  <ComboBox
                    name="lisensiSkema"
                    items={Constants.linsesiSkema}
                    value={values.lisensiSkema}
                    placeholder="Pilih Lisensi Skema"
                    onChange={handleChange}
                  />
                  {errors.lisensiSkema && touched.lisensiSkema ? (
                    <Alert message={errors.lisensiSkema} type="error" />
                  ) : null}
                </div>

                <div className="flex flex-col gap-3">
                  <Label htmlFor="skkni" className="w-36">
                    SKKNI/SKKK
                  </Label>
                  <Input type="text" name="skkni" value={values.skkni} onChange={handleChange} />
                  {errors.skkni && touched.skkni ? (
                    <Alert message={errors.skkni} type="error" />
                  ) : null}
                </div>

                <div className="flex flex-col gap-3">
                  <Label htmlFor="year" className="w-36">
                    Tahun
                  </Label>
                  <Input type="number" name="year" value={values.year} onChange={handleChange} />
                  {errors.year && touched.year ? (
                    <Alert message={errors.year} type="error" />
                  ) : null}
                </div>

                <div className="flex flex-col gap-3">
                  <Label htmlFor="gender">Tipe Form</Label>
                  <RadioGroup
                    // defaultValue={Constants.genderOptions[0].key}
                    className="flex flex-col"
                  >
                    {tipeForm.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem
                          className="light-blue-outline"
                          value={option.label}
                          id={option.value}
                        />
                        <Label htmlFor={option.value}>{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>

                  {errors.tipeform && touched.tipeform ? (
                    <Alert message={errors.tipeform} type="error" />
                  ) : null}
                </div>
              </div>
            </div>

            <hr className="my-4" />
            <div className="flex flex-col lg:flex-row gap-3 relative px-4 lg:gap-16 lg:px-12">
              <div className="flex flex-col flex-grow gap-3 relative">
                <div className="flex items-center">
                  <Label htmlFor="photo-upload" className="w-30">
                    Unggah Template Dokumen <span style={{ color: "red" }}>*</span>
                  </Label>
                  <ToolTipWrapper content="Ingfokan Detailnya Gan">
                    <FaCircleInfo className="ml-1 text-blue-500" />
                  </ToolTipWrapper>
                </div>
                <div className="flex items-center">
                  <>
                    <Label
                      htmlFor="file_upload"
                      className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-blue-700 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200"
                    >
                      <FaUpload />
                      <span>Upload</span>
                    </Label>
                    <input
                      id="file_upload"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e)}
                      hidden
                    />
                  </>
                  {values.dokumenPendukung && (
                    <span className="text-sm text-gray-500" style={{ marginLeft: "20px" }}>
                      {values.dokumenPendukung.name}
                    </span>
                  )}
                </div>
                {errors.dokumenPendukung && touched.dokumenPendukung ? (
                  <Alert message={errors.dokumenPendukung} type="error" />
                ) : null}
              </div>
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

export default FormSkema;
