import React from "react";
import { useFormik } from "formik";
import { databaseAsesiAlumniSchema } from "../../../common/formSchemas";
import { DatabaseAsesiAlumniDataStructure } from "../../../data/models/DatabaseAsesiDao";
import Constants from "../../../common/constants";
import Alert from "../../components/Elements/Alert";
import Button from "../../components/Elements/Button";
import ComboBox from "../../components/Elements/ComboBox";
import Input from "../../components/Elements/Input";
import Label from "../../components/Elements/Input/Label";
import ButtonLink from "../../components/Elements/ButtonLink";
import { FaUpload } from "react-icons/fa6";

const DatabaseAsesiAlumniEdit: React.FC = () => {
  const onCreatePengelolaanSurat = async (
    pengelolaanSurat: DatabaseAsesiAlumniDataStructure
  ) => {
    console.log(pengelolaanSurat);
    console.log("Button Clicked");
  };

  const { errors, touched, values, handleChange, handleSubmit, setFieldValue } =
    useFormik<DatabaseAsesiAlumniDataStructure>({
      initialValues: {
        nama: "",
        noKtp: "",
        skema: "",
        noRegistrasiProduksi: "",
        tanggalBerlaku: "",
        namaTUK: "",
        statusRekomendasi: "",
        statusKelulusan: "",
        alamatAsesmen: "",
        ketuaPleno: "",
        email: "",
        telp: "",
        noRegistrasi: "",
        noSertifikat: "",
        noBlanko: "",
        namaJadwalAsesmen: "",
        tanggalAsesmen: "",
        namaAsesor: "",
        namaAdmin: "",
        aktifitas: "",
        file: undefined,
      },
      validationSchema: databaseAsesiAlumniSchema,
      onSubmit: onCreatePengelolaanSurat,
    });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    setFieldValue("file", file);
  };

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
              Edit Data Alumni
            </span>
            <hr className="my-4" />
            <div className="flex flex-col items-center gap-6 px-4 lg:gap-16 lg:px-12">
              <div className="flex flex-col w-full gap-6 lg:gap-16 lg:grid lg:grid-cols-2 lg:gap-y-10 lg:gap-x-10">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="nama" className="w-36">
                      Nama
                      {/* Nama <span style={{ color: "red" }}>*</span> */}
                    </Label>
                    <Input
                      type="text"
                      name="nama"
                      value={values.nama}
                      onChange={handleChange}
                      placeholder="Nama"
                      disabled
                    />
                    {/* {errors.nama && touched.nama ? (
                      <Alert message={errors.nama} type="error" />
                    ) : null} */}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="email" className="w-36">
                      Email
                      {/* Email <span style={{ color: "red" }}>*</span> */}
                    </Label>
                    <Input
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Email@email.com"
                      disabled
                    />
                    {/* {errors.email && touched.email ? (
                      <Alert message={errors.email} type="error" />
                    ) : null} */}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="noKtp" className="w-36">
                    No. KTP
                    {/* No. KTP <span style={{ color: "red" }}>*</span> */}
                  </Label>
                  <Input
                    type="text"
                    name="noKtp"
                    value={values.noKtp}
                    onChange={handleChange}
                    placeholder="No. KTP"
                    disabled
                  />
                  {/* {errors.noKtp && touched.noKtp ? (
                    <Alert message={errors.noKtp} type="error" />
                  ) : null} */}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="telp" className="w-36">
                    No. Telp
                    {/* No. Telp <span style={{ color: "red" }}>*</span> */}
                  </Label>
                  <Input
                    type="text"
                    name="telp"
                    value={values.telp}
                    onChange={handleChange}
                    placeholder="No. Telp"
                    className="input-white-bg"
                    disabled
                  />
                  {/* {errors.telp && touched.telp ? (
                    <Alert message={errors.telp} type="error" />
                  ) : null} */}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="skema" className="w-36">
                    Skema
                    {/* Skema <span style={{ color: "red" }}>*</span> */}
                  </Label>
                  <Input
                    type="text"
                    name="skema"
                    value={values.skema}
                    onChange={handleChange}
                    placeholder="Skema"
                    disabled
                  />
                  {/* {errors.skema && touched.skema ? (
                    <Alert message={errors.skema} type="error" />
                  ) : null} */}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="noRegistrasi" className="w-35">
                    No. Registrasi <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="text"
                    name="noRegistrasi"
                    value={values.noRegistrasi}
                    onChange={handleChange}
                    placeholder="No. Registrasi"
                  />
                  {errors.noRegistrasi && touched.noRegistrasi ? (
                    <Alert message={errors.noRegistrasi} type="error" />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="noRegistrasiProduksi" className="w-35">
                    No. Registrasi Produksi{" "}
                    <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="text"
                    name="noRegistrasiProduksi"
                    value={values.noRegistrasiProduksi}
                    onChange={handleChange}
                    placeholder="No. Registrasi Produksi"
                  />
                  {errors.noRegistrasiProduksi &&
                  touched.noRegistrasiProduksi ? (
                    <Alert message={errors.noRegistrasiProduksi} type="error" />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="noSertifikat" className="w-35">
                    No. Sertifikat <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="text"
                    name="noSertifikat"
                    value={values.noSertifikat}
                    onChange={handleChange}
                    placeholder="No. Sertifikat"
                  />
                  {errors.noSertifikat && touched.noSertifikat ? (
                    <Alert message={errors.noSertifikat} type="error" />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="tanggalBerlaku" className="w-36">
                    Tanggal Berlaku <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="date"
                    name="tanggalBerlaku"
                    value={values.tanggalBerlaku}
                    onChange={handleChange}
                    placeholder="Tanggal Berlaku"
                  />
                  {errors.tanggalBerlaku && touched.tanggalBerlaku ? (
                    <Alert message={errors.tanggalBerlaku} type="error" />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="noBlanko" className="w-35">
                    No. Blangko <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="text"
                    name="noBlanko"
                    value={values.noBlanko}
                    onChange={handleChange}
                    placeholder="No. Blangko"
                  />
                  {errors.noBlanko && touched.noBlanko ? (
                    <Alert message={errors.noBlanko} type="error" />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="namaTUK" className="w-36">
                    Nama TUK
                    {/* Nama TUK <span style={{ color: "red" }}>*</span> */}
                  </Label>
                  <Input
                    type="text"
                    name="namaTUK"
                    value={values.namaTUK}
                    onChange={handleChange}
                    placeholder="Nama TUK"
                    disabled
                  />
                  {/* {errors.namaTUK && touched.namaTUK ? (
                    <div>{errors.namaTUK}</div>
                  ) : null} */}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="statusRekomendasi" className="w-35">
                    Status Rekomendasi
                    {/* Status Rekomendasi <span style={{ color: "red" }}>*</span> */}
                  </Label>
                  <Input
                    type="text"
                    name="statusRekomendasi"
                    value={values.statusRekomendasi}
                    onChange={handleChange}
                    placeholder="Status Rekomendasi"
                    disabled
                  />
                  {/* {errors.statusRekomendasi && touched.statusRekomendasi ? (
                    <div>{errors.statusRekomendasi}</div>
                  ) : null} */}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="statusKelulusan" className="w-36">
                    Status Kelulusan
                    {/* Status Kelulusan <span style={{ color: "red" }}>*</span> */}
                  </Label>
                  <Input
                    type="text"
                    name="statusKelulusan"
                    value={values.statusKelulusan}
                    onChange={handleChange}
                    placeholder="Status Kelulusan"
                    disabled
                  />
                  {/* {errors.statusKelulusan && touched.statusKelulusan ? (
                    <div>{errors.statusKelulusan}</div>
                  ) : null} */}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="namaJadwalAsesmen" className="w-35">
                    Nama Jadwal Assesmen
                    {/* Nama Jadwal Assesmen <span style={{ color: "red" }}>*</span> */}
                  </Label>
                  <Input
                    type="text"
                    name="namaJadwalAsesmen"
                    value={values.namaJadwalAsesmen}
                    onChange={handleChange}
                    placeholder="Nama Jadwal Assesmen"
                    disabled
                  />
                  {/* {errors.namaJadwalAsesmen && touched.namaJadwalAsesmen ? (
                    <div>{errors.namaJadwalAsesmen}</div>
                  ) : null} */}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="alamatAsesmen" className="w-36">
                    Alamat Asesmen
                    {/* Alamat Asesmen <span style={{ color: "red" }}>*</span> */}
                  </Label>
                  <textarea
                    id="address"
                    name="alamatAsesmen"
                    value={values.alamatAsesmen}
                    onChange={handleChange}
                    placeholder="Alamat Asesmen"
                    className="border border-gray-300 rounded-md p-2"
                    rows={5}
                    disabled
                  />
                  {/* {errors.alamatAsesmen && touched.alamatAsesmen ? (
                    <div>{errors.alamatAsesmen}</div>
                  ) : null} */}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="tanggalAsesmen" className="w-36">
                    Tanggal Asesmen
                    {/* Tanggal Asesmen <span style={{ color: "red" }}>*</span> */}
                  </Label>
                  <Input
                    type="text"
                    name="tanggalAsesmen"
                    value={values.tanggalAsesmen}
                    onChange={handleChange}
                    placeholder="Tanggal Asesmen"
                    disabled
                  />
                  {/* {errors.tanggalAsesmen && touched.tanggalAsesmen ? (
                    <div>{errors.tanggalAsesmen}</div>
                  ) : null} */}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="ketuaPleno" className="w-36">
                    Ketua Pleno
                    {/* Ketua Pleno <span style={{ color: "red" }}>*</span> */}
                  </Label>
                  <Input
                    type="text"
                    name="ketuaPleno"
                    value={values.ketuaPleno}
                    onChange={handleChange}
                    placeholder="Ketua Pleno"
                    disabled
                  />
                  {/* {errors.ketuaPleno && touched.ketuaPleno ? (
                    <div>{errors.ketuaPleno}</div>
                  ) : null} */}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="namaAsesor" className="w-36">
                    Nama Asesor
                    {/* Nama Asesor <span style={{ color: "red" }}>*</span> */}
                  </Label>
                  <Input
                    type="text"
                    name="namaAsesor"
                    value={values.namaAsesor}
                    onChange={handleChange}
                    placeholder="Nama Asesor"
                    disabled
                  />
                  {/* {errors.namaAsesor && touched.namaAsesor ? (
                    <div>{errors.namaAsesor}</div>
                  ) : null} */}
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="namaAdmin" className="w-36">
                    Nama Admin
                    {/* Nama Admin <span style={{ color: "red" }}>*</span> */}
                  </Label>
                  <Input
                    type="text"
                    name="namaAdmin"
                    value={values.namaAdmin}
                    onChange={handleChange}
                    placeholder="Nama Admin"
                    disabled
                  />
                  {/* {errors.namaAdmin && touched.namaAdmin ? (
                    <div>{errors.namaAdmin}</div>
                  ) : null} */}
                </div>
              </div>
            </div>
            <div style={{ marginTop: "2rem" }}></div>
            <div className="flex items-center gap-6 px-4 lg:gap-16 lg:px-12 justify-center">
              <div className="flex justify-start items-center">
                <Button
                  type="submit"
                  //   onClick={handleClickNext}
                  className="flex ml-10 items-center gap-3 "
                >
                  <span>File Archive</span>
                </Button>
              </div>
            </div>
            <div style={{ marginBottom: "2rem" }}></div>

            <hr className="my-4" />
            <div className="my-4" />
            <span className="px-4 py-6 text-base font-semibold text-black-600 lg:px-6">
              Proses Penerbitan Sertifikat
            </span>
            <div className="my-4" />
            <div className="flex flex-col items-center gap-6 px-4 lg:gap-16 lg:px-12">
              <div className="flex flex-col w-full gap-6 lg:gap-16 lg:grid lg:grid-cols-3 lg:gap-y-10 lg:gap-x-10">
                <div className="flex flex-col gap-3">
                  <ComboBox
                    name="aktifitas"
                    items={Constants.aktifitasOptions}
                    value={values.aktifitas}
                    placeholder="Pilih Aktifitas"
                    onChange={handleChange}
                  />
                  {errors.aktifitas && touched.aktifitas ? (
                    <Alert message={errors.aktifitas} type="error" />
                  ) : null}

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
                    {values.file && (
                      <span
                        className="text-sm text-gray-500"
                        style={{ marginLeft: "20px" }}
                      >
                        {values.file.name}
                      </span>
                    )}
                    <span
                      className="text-sm text-gray-500"
                      style={{ marginLeft: "20px" }}
                    />
                    {errors.file && touched.file ? (
                      <Alert message={errors.file} type="error" />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "2rem" }}></div>
            <span className="px-4 py-6 text-base font-semibold text-black-600 lg:px-6">
              Data Logbook
            </span>
            <hr className="my-4" />
            <div className="flex flex-col items-center gap-6 px-4 lg:gap-16 lg:px-12">
              <div className="flex flex-col w-full gap-6 lg:gap-16 lg:grid lg:grid-cols-3 lg:gap-y-10 lg:gap-x-10">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="jobStatus">
                    Data <span style={{ color: "red" }}>*</span>
                  </Label>
                  {/* <ComboBox
                    name="jobStatus"
                    items={Constants.jobStatusOptions}
                    value={values.jobStatus}
                    placeholder="Pilih Status Bekerja"
                    onChange={handleChange}
                  />
                  {errors.jobStatus && touched.jobStatus ? (
                    <Alert message={errors.jobStatus} type="error" />
                  ) : null} */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "2rem" }}></div>

        <div className="flex items-center gap-6 px-4 lg:gap-16 lg:px-12 justify-start">
          <div className="flex justify-start items-center">
            <ButtonLink
              to={`/database-asesi-alumni-list`}
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600"
            >
              <span>Kembali</span>
            </ButtonLink>
            <Button
              type="submit"
              //   onClick={handleClickNext}
              className="flex ml-10 items-center gap-3 "
            >
              <span>Simpan</span>
            </Button>
          </div>
        </div>
      </form>
      {/* <LoadingSpinner show={isLoading} /> */}
    </>
  );
};

export default DatabaseAsesiAlumniEdit;
