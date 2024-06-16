import React from "react";
import { useFormik } from "formik";
import { pengelolaanSuratSchema } from "../../../common/formSchemas";
import { EditPengelolaanSuratValues } from "../../../common/types";
import Constants from "../../../common/constants";
import Alert from "../../components/Elements/Alert";
import Button from "../../components/Elements/Button";
import ComboBox from "../../components/Elements/ComboBox";
import Input from "../../components/Elements/Input";
import Label from "../../components/Elements/Input/Label";
import {
  FaCircleInfo,
  FaFile,
  FaDownload,
  FaUpload,
  FaCirclePlus,
} from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/Elements/Dialog";
import { ToolTipWrapper } from "../../components/Elements/Tooltip";
import ButtonLink from "../../components/Elements/ButtonLink";

const EditPengelolaanSurat = () => {
  const onEditPengelolaanSurat = async (
    pengelolaanSurat: EditPengelolaanSuratValues
  ) => {
    console.log(pengelolaanSurat);
    console.log("Button Clicked");
  };

  const { errors, touched, values, handleChange, handleSubmit, setFieldValue } =
    useFormik<EditPengelolaanSuratValues>({
      initialValues: {
        kategori: "",
        namaSurat: "",
        upload: null,
      },
      validationSchema: pengelolaanSuratSchema,
      onSubmit: onEditPengelolaanSurat,
    });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    setFieldValue("upload", file);
  };

  return (
    <>
      <form
        className="flex flex-col my-10"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div
          className="flex flex-col mx-3 my-6 bg-white rounded-t-lg lg:mx-8 mb-6 justify-start"
          style={{ paddingBottom: "50px" }}
        >
          <div className="flex flex-col px-4 py-4 lg:px-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">
                Edit Pengelolaan Surat
              </span>
            </div>
            <hr className="my-4" />

            <div className="flex justify-end items-center">
              <button
                // onClick={() => onCreatePengelolaanSurat()}
                className="flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-gray-300 lg:text-base bg-blue-500 rounded-xl text-white px-4 py-2 transition-colors"
              >
                <FaCirclePlus className="text-xl" />
                <span>Tambah Jenis Surat</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 px-4 lg:gap-16 lg:px-16">
            <div className="flex flex-col w-full gap-6 lg:gap-16 lg:grid lg:grid-cols-3 lg:gap-y-10">
              <div className="flex flex-col gap-3">
                <Label htmlFor="kategori">
                  Kategori Surat <span style={{ color: "red" }}>*</span>
                </Label>
                <ComboBox
                  name="kategori"
                  items={Constants.kategoriOptions}
                  value={values.kategori}
                  placeholder="Pilih Kategori Surat"
                  onChange={handleChange}
                />
                {errors.kategori && touched.kategori ? (
                  <Alert message={errors.kategori} type="error" />
                ) : null}
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="namaSurat" className="w-36">
                  Nama Surat <span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="namaSurat"
                  value={values.namaSurat}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-3 relative">
                <div className="flex flex-col flex-grow gap-3 relative">
                  <div className="flex items-center">
                    <Label htmlFor="nik" className="w-30">
                      Sample Template Document
                    </Label>
                    <ToolTipWrapper content="Ingfokan Detailnya Gan">
                      <FaCircleInfo className="ml-1 text-blue-500" />
                    </ToolTipWrapper>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Input
                      type="text"
                      name="nik"
                      value={"WKOOWKWOK.docx"}
                      disabled
                      className="w-full"
                    />
                    <Dialog>
                      <DialogTrigger>
                        <Button
                          type="button"
                          // onClick={(e) => e.preventDefault()}
                          className="bg-transparent hover:bg-transparent"
                        >
                          <ToolTipWrapper content="View File">
                            <FaFile className="text-xl text-blue-500" />
                          </ToolTipWrapper>
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
                    <Button
                      type="button"
                      className="bg-transparent hover:bg-transparent"
                    >
                      <ToolTipWrapper content="Download">
                        <FaDownload className="text-xl text-blue-500" />
                      </ToolTipWrapper>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 relative">
                <div className="flex flex-col flex-grow gap-3 relative">
                  <div className="flex items-center">
                    <Label htmlFor="photo-upload" className="w-30">
                      Unggah Template Dokumen{" "}
                      <span style={{ color: "red" }}>*</span>
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
                    {values.upload && (
                      <span
                        className="text-sm text-gray-500"
                        style={{ marginLeft: "20px" }}
                      >
                        {values.upload.name}
                      </span>
                    )}
                  </div>
                  {errors.upload && touched.upload ? (
                    <Alert message={errors.upload} type="error" />
                  ) : null}
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              {/* <div className="flex items-center justify-start gap-3 mt-4 ml-4"> */}
              <div className="flex justify-start items-center ">
                <ButtonLink
                  to={`/pengelolaan-surat`}
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-600"
                >
                  <span>Kembali</span>
                </ButtonLink>
                <Button
                  type="submit"
                  // onClick={() => onCreatePengelolaanSurat()}
                  className="flex ml-10 items-center gap-3 "
                >
                  <span>Tambahkan</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* <LoadingSpinner show={isLoading} /> */}
    </>
  );
};

export default EditPengelolaanSurat;
