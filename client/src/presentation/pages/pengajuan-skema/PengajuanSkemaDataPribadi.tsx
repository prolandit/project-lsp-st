import React from "react";
import { useFormik } from "formik";
import { userSchema } from "../../../common/formSchemas";
import { PengajuanSkemaDataPribadiStructure } from "../../../data/models/PengajuanSkemaDao";
import Constants from "../../../common/constants";
import Alert from "../../components/Elements/Alert";
import Button from "../../components/Elements/Button";
import ComboBox from "../../components/Elements/ComboBox";
import Input from "../../components/Elements/Input";
import Label from "../../components/Elements/Input/Label";
import { FaCircleInfo } from "react-icons/fa6";
import { ToolTipWrapper } from "../../components/Elements/Tooltip";
import ButtonLink from "../../components/Elements/ButtonLink";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../components/Elements/RadioGroup";
const PengajuanSkemaDataPribadi: React.FC = () => {
  const onCreatePengelolaanSurat = async (
    pengelolaanSurat: PengajuanSkemaDataPribadiStructure
  ) => {
    console.log(pengelolaanSurat);
    console.log("Button Clicked");
  };

  const { errors, touched, values, handleChange, handleSubmit } =
    useFormik<PengajuanSkemaDataPribadiStructure>({
      initialValues: {
        fullName: "",
        nik: "",
        birthPlace: "",
        birthDate: "",
        gender: "",
        nationality: "",
        address: "",
        posCode: "",
        telp: "",
        phone: "",
        areaAddress: "",
        education: "",
        jobStatus: "",
      },
      validationSchema: userSchema,
      onSubmit: onCreatePengelolaanSurat,
    });

  return (
    <>
      <form
        className="flex flex-col my-10"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4 mx-3 lg:flex-row lg:mx-12">
          <div className="w-full pt-4 bg-white rounded-md shadow-sm pb-7 drop-shadow-sm">
            <span className="px-4 py-6 text-base font-semibold text-black-600 lg:px-6">
              Profile
            </span>
            <hr className="my-4" />
            <div className="flex flex-col items-center gap-6 px-4 lg:gap-16 lg:px-12">
              <div className="flex flex-col w-full gap-6 lg:gap-16 lg:grid lg:grid-cols-3 lg:gap-y-10 lg:gap-x-10">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="fullName" className="w-36">
                    Nama Lengkap <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && touched.fullName ? (
                    <Alert message={errors.fullName} type="error" />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="nik" className="w-36">
                    NIK <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="text"
                    name="nik"
                    value={values.nik}
                    onChange={handleChange}
                  />
                  {errors.nik && touched.nik ? (
                    <Alert message={errors.nik} type="error" />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="birthPlace" className="w-36">
                    Tempat Lahir <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="text"
                    name="birthPlace"
                    value={values.birthPlace}
                    onChange={handleChange}
                  />
                  {errors.birthPlace && touched.birthPlace ? (
                    <Alert message={errors.birthPlace} type="error" />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="birthDate" className="w-36">
                    Tanggal Lahir <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="date"
                    name="birthDate"
                    value={values.birthDate}
                    onChange={handleChange}
                  />
                  {errors.birthDate && touched.birthDate ? (
                    <Alert message={errors.birthDate} type="error" />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="gender">
                    Jenis Kelamin <span style={{ color: "red" }}>*</span>
                  </Label>
                  <RadioGroup
                    defaultValue={Constants.genderOptions[0].key}
                    className="flex"
                  >
                    {Constants.genderOptions.map((option) => (
                      <div
                        key={option.key}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem
                          className="light-blue-outline"
                          value={option.key}
                          id={option.key}
                        />
                        <Label htmlFor={option.key}>{option.value}</Label>
                      </div>
                    ))}
                  </RadioGroup>

                  {errors.gender && touched.gender ? (
                    <Alert message={errors.gender} type="error" />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="nationality">
                    Kebangsaan <span style={{ color: "red" }}>*</span>
                  </Label>
                  <ComboBox
                    name="nationality"
                    items={Constants.nationality}
                    value={values.nationality}
                    placeholder="Pilih Kebangsaan"
                    onChange={handleChange}
                  />
                  {errors.nationality && touched.nationality ? (
                    <Alert message={errors.nationality} type="error" />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="address" className="w-36">
                    Alamat <span style={{ color: "red" }}>*</span>
                  </Label>
                  <textarea
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2"
                    rows={5}
                  />
                  {errors.address && touched.address ? (
                    <Alert message={errors.address} type="error" />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="posCode" className="w-36">
                    Kode POS <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="text"
                    name="posCode"
                    value={values.posCode}
                    onChange={handleChange}
                  />
                  {errors.posCode && touched.posCode ? (
                    <Alert message={errors.posCode} type="error" />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="phone" className="w-36">
                    No Telepon <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && touched.phone ? (
                    <Alert message={errors.phone} type="error" />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="areaAddress" className="w-30">
                    {/* Alamat Wilayah (Ketik nama wilayah untuk pencarian) <span style={{ color: "red" }}>*</span> */}
                    Alamat Wilayah <span style={{ color: "red" }}>*</span>
                    <ToolTipWrapper content="Ketik nama wilayah untuk pencarian">
                      <FaCircleInfo className="ml-1 text-blue-500" />
                    </ToolTipWrapper>
                  </Label>
                  <Input
                    type="text"
                    name="areaAddress"
                    value={values.areaAddress}
                    onChange={handleChange}
                  />
                  {errors.areaAddress && touched.areaAddress ? (
                    <Alert message={errors.areaAddress} type="error" />
                  ) : null}
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "2rem" }}></div>
            <span className="px-4 py-6 text-base font-semibold text-black-600 lg:px-6">
              Detail Pendidikan
            </span>
            <hr className="my-4" />
            <div className="flex flex-col items-center gap-6 px-4 lg:gap-16 lg:px-12">
              <div className="flex flex-col w-full gap-6 lg:gap-16 lg:grid lg:grid-cols-3 lg:gap-y-10 lg:gap-x-10">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="education">
                    Pendidikan Terakhir <span style={{ color: "red" }}>*</span>
                  </Label>
                  <ComboBox
                    name="education"
                    items={Constants.education}
                    value={values.education}
                    placeholder="Pilih Pendidikan Terakhir"
                    onChange={handleChange}
                  />
                  {errors.education && touched.education ? (
                    <Alert message={errors.education} type="error" />
                  ) : null}
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "2rem" }}></div>
            <span className="px-4 py-6 text-base font-semibold text-black-600 lg:px-6">
              Detail Pekerjaan
            </span>
            <hr className="my-4" />
            <div className="flex flex-col items-center gap-6 px-4 lg:gap-16 lg:px-12">
              <div className="flex flex-col w-full gap-6 lg:gap-16 lg:grid lg:grid-cols-3 lg:gap-y-10 lg:gap-x-10">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="jobStatus">
                    Pekerjaan <span style={{ color: "red" }}>*</span>
                  </Label>
                  <ComboBox
                    name="jobStatus"
                    items={Constants.jobStatusOptions}
                    value={values.jobStatus}
                    placeholder="Pilih Status Bekerja"
                    onChange={handleChange}
                  />
                  {errors.jobStatus && touched.jobStatus ? (
                    <Alert message={errors.jobStatus} type="error" />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "2rem" }}></div>

        <div className="flex items-center gap-6 px-4 lg:gap-16 lg:px-12 justify-start">
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
      </form>
      {/* <LoadingSpinner show={isLoading} /> */}
    </>
  );
};

export default PengajuanSkemaDataPribadi;
