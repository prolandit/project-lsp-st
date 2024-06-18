const GeneralHelper = require("../helpers/generalHelper");
const Validation = require("../validate/sertifikasi");

const fileName = "server/api/form-skema.js";

const Boom = require("boom");
const _ = require("lodash");
const { createSignToken } = require("../utils/jwt");

/**
 *
 * @param {{formSkema : ReturnType<import('../../models/form-skema')>,unitKerja : ReturnType<import('../../models/unit-kerja')>,unitKompetensi : ReturnType<import('../../models/unit-kompetensi')>,elemen : ReturnType<import('../../models/elemen')>,kuk : ReturnType<import('../../models/kuk')>}} param0
 *
 */

const SkemaSertifikasiUseCase = ({
  formSkema,
  unitKerja,
  unitKompetensi,
  elemen,
  kuk,
  tokenModel,
}) => {
  //#region Get All Schema
  /**
   *
   * Get All Schema
   *
   */
  const getAllSkemaData = async () => {
    try {
      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to view this data")
        );
      }

      const formSchemas = await formSkema.findAll({
        include: [
          {
            model: unitKerja,
            as: "unit_kerja",
            include: [
              {
                model: unitKompetensi,
                as: "unit_kompetensi",
              },
            ],
          },
        ],
      });

      const result = formSchemas.map((schema) => ({
        id_form_skema: schema.id,
        nama_id_form_skema: schema.nama_skema,
        lisensi_skema_form_skema: schema.lisensi_skema,
        SKKNI_SKKK_form_skema: schema.SKKNI_SKKK,
        tahun_form_skema: schema.tahun,
        unit_kerja: (schema.unit_kerja || []).map((unitKerjaItem) => ({
          id_unit_kerja: unitKerjaItem.id,
          kode_skema: unitKerjaItem.kode_skema_id,
          nama_unit_kerja: unitKerjaItem.nama_kel_pekerjaan,
          no_kel_pekerjaan: unitKerjaItem.no_kel_pekerjaan,
          unit_kompetensi: (unitKerjaItem.unit_kompetensi || []).map(
            (unitKompetensiItem) => ({
              id_unit_kompetensi: unitKompetensiItem.id,
              id_unit_kerja_unit_kompetensi: unitKompetensiItem.unit_kerja_id,
              kode_unit_kompetensi: unitKompetensiItem.kode_unit_kompetensi,
              nama_unit_kompetensi: unitKompetensiItem.nama_unit_kompetensi,
              SKKNI_SKKK: unitKompetensiItem.SKKNI_SKKK,
            })
          ),
        })),
      }));

      return {
        data: result,
      };
    } catch (error) {
      console.log(["getAllSkemaData", "ERROR"], { info: `${error}` });
      return Promise.reject(new Error("Failed to fetch skema data"));
    }
  };

  //#endregion

  //#region Form Skema
  /**
   *
   * Form Skema
   *
   */
  const createFormSchema = async (payload) => {
    const { nama_skema, lisensi_skema, no_kuk, tahun, type_form } = payload;
    try {
      console.log("Payload:", payload);

      Validation.formSkemaValidations(payload);

      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to create this data")
        );
      }

      const isFormSkema = await formSkema.findOne({
        where: {
          nama_skema,
        },
      });

      if (isFormSkema) throw Boom.badRequest("Form Schema has been added!");

      await formSkema.create({
        nama_skema,
        lisensi_skema,
        SKKNI_SKKK,
        tahun,
        type_form,
      });

      return {
        statusCode: 200,
        message: "Form Schema created successfully!",
      };
    } catch (error) {
      console.log([fileName, "createFormSchema", "ERROR"], {
        info: `${error}`,
      });
      return Promise.reject(GeneralHelper.errorResponse(error));
    }
  };

  const updateFormSchema = async (paramsID, payload) => {
    try {
      const { nama_skema, lisensi_skema, SKKNI_SKKK, tahun, type_form } =
        payload;
      console.log("Payload:", payload);

      Validation.formSkemaValidations(payload);

      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to update this data")
        );
      }

      const formSchema = await formSkema.findOne({
        where: {
          id: paramsID,
        },
      });

      if (_.isEmpty(formSchema)) {
        return Promise.reject(
          Boom.badRequest(`Form Schema with id ${paramsID} doesn't exist!`)
        );
      }

      await formSchema.update(
        {
          nama_skema: nama_skema || formSchema.dataValues.nama_skema,
          lisensi_skema: lisensi_skema || formSchema.dataValues.lisensi_skema,
          SKKNI_SKKK: SKKNI_SKKK || formSchema.dataValues.SKKNI_SKKK,
          tahun: tahun || formSchema.dataValues.tahun,
          type_form: type_form || formSchema.dataValues.type_form,
        },
        {
          where: {
            kode_skema_id: formSchema.kode_skema_id,
          },
        }
      );
      return {
        statusCode: 200,
        message: "Form Schema updated successfully!",
      };
    } catch (error) {
      console.log([fileName, "updateFormSchema", "ERROR"], {
        info: `${error}`,
      });
      return Promise.reject(GeneralHelper.errorResponse(error));
    }
  };

  const deleteFormSchema = async (paramsID) => {
    try {
      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to delete this data")
        );
      }

      const isFormSkema = await formSkema.findOne({
        where: {
          id: paramsID,
        },
      });
      if (!isFormSkema) throw Boom.badRequest("Form Schema not found!");

      await isFormSkema.destroy();
      return {
        statusCode: 200,
        message: "Form Schema Deleted Successfully!",
      };
    } catch (error) {
      console.log([fileName, "deleteFormSchema", "ERROR"], {
        info: `${error}`,
      });
      return Promise.reject(GeneralHelper.errorResponse(error));
    }
  };
  //#endregion

  //#region Unit Kerja
  /**
   *
   * Unit Kerja
   *
   */
  const createUnitKerja = async (payload) => {
    const {
      kode_skema_id,
      nama_kel_pekerjaan,
      lisensi_skema,
      no_kel_pekerjaan,
    } = payload;

    try {
      console.log("Payload:", payload);

      Validation.unitKerjaValidations(payload);

      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to create this data")
        );
      }
      const isUnitKerja = await unitKerja.findOne({
        where: {
          nama_kel_pekerjaan,
        },
      });

      if (isUnitKerja)
        throw Boom.badRequest("Kelompok Pekerjaan Unit Kerja has been added!");

      await unitKerja.create({
        kode_skema_id,
        nama_kel_pekerjaan,
        lisensi_skema,
        no_kel_pekerjaan,
      });

      return {
        statusCode: 200,
        message: "Unit Kerja created successfully!",
      };
    } catch (error) {
      console.log([fileName, "createUnitKerja", "ERROR"], { info: `${error}` });
      return Promise.reject(GeneralHelper.errorResponse(error));
    }
  };

  const updateUnitKerja = async (paramsID, payload) => {
    try {
      const {
        kode_skema_id,
        nama_kel_pekerjaan,
        lisensi_skema,
        no_kel_pekerjaan,
      } = payload;

      console.log("payload:", payload);

      Validation.unitKerjaValidations(payload);

      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to update this data")
        );
      }
      const responseUnitKerja = await unitKerja.findOne({
        where: {
          id: paramsID,
        },
      });

      if (_.isEmpty(responseUnitKerja)) {
        return Promise.reject(
          Boom.badRequest(`Unit Kerja with id ${paramsID} doesn't exist!`)
        );
      }

      await responseUnitKerja.update(
        {
          kode_skema_id:
            kode_skema_id || responseUnitKerja.dataValues.kode_skema_id,
          nama_kel_pekerjaan:
            nama_kel_pekerjaan ||
            responseUnitKerja.dataValues.nama_kel_pekerjaan,
          lisensi_skema:
            lisensi_skema || responseUnitKerja.dataValues.lisensi_skema,
          no_kel_pekerjaan:
            no_kel_pekerjaan || responseUnitKerja.dataValues.no_kel_pekerjaan,
        },
        {
          where: {
            id: responseUnitKerja.id,
          },
        }
      );
      return {
        statusCode: 200,
        message: "Unit Kerja updated successfully!",
      };
    } catch (error) {
      console.log([fileName, "updateUnitKerja", "ERROR"], { info: `${error}` });
      return Promise.reject(GeneralHelper.errorResponse(error));
    }
  };

  const deleteUnitKerja = async (paramsID) => {
    try {
      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to delete this data")
        );
      }

      const isUnitKerja = await unitKerja.findOne({
        where: {
          id: paramsID,
        },
      });
      if (!isUnitKerja) throw Boom.badRequest("Unit Kerja not found!");

      await isUnitKerja.destroy();
      return {
        statusCode: 200,
        message: "Unit Kerja Deleted Successfully!",
      };
    } catch (error) {
      console.log([fileName, "deleteUnitKerja", "ERROR"], {
        info: `${error}`,
      });
      return Promise.reject(GeneralHelper.errorResponse(error));
    }
  };
  //#endregion

  //#region Unit Kompetensi
  /**
   *
   * Unit Kompetensi
   *
   */

  const createUnitKompetensi = async (payload) => {
    const {
      unit_kerja_id,
      nama_unit_kompetensi,
      SKKNI_SKKK,
      kode_unit_kompetensi,
    } = payload;

    try {
      console.log("Payload:", payload);

      Validation.unitKompetensiValidations(payload);

      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to create this data")
        );
      }
      const isUnitKompetensi = await unitKompetensi.findOne({
        where: {
          nama_unit_kompetensi,
        },
      });

      if (isUnitKompetensi)
        throw Boom.badRequest("Nama Unit Kompetensi has been added!");

      await unitKompetensi.create({
        unit_kerja_id,
        nama_unit_kompetensi,
        SKKNI_SKKK,
        kode_unit_kompetensi,
      });

      return {
        statusCode: 200,
        message: "Unit Kompetensi created successfully!",
      };
    } catch (error) {
      console.log([fileName, "createUnitKompetensi", "ERROR"], {
        info: `${error}`,
      });
      return Promise.reject(GeneralHelper.errorResponse(error));
    }
  };

  const updateUnitKompetensi = async (paramsID, payload) => {
    try {
      const {
        unit_kerja_id,
        nama_unit_kompetensi,
        SKKNI_SKKK,
        kode_unit_kompetensi,
      } = payload;

      console.log("payload:", payload);

      Validation.unitKompetensiValidations(payload);

      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to update this data")
        );
      }
      const responseUnitKompetensi = await unitKompetensi.findOne({
        where: {
          id: paramsID,
        },
      });

      if (_.isEmpty(responseUnitKompetensi)) {
        return Promise.reject(
          Boom.badRequest(`Unit Kompetensi with id ${paramsID} doesn't exist!`)
        );
      }

      await responseUnitKompetensi.update(
        {
          unit_kerja_id:
            unit_kerja_id || responseUnitKompetensi.dataValues.unit_kerja_id,
          nama_unit_kompetensi:
            nama_unit_kompetensi ||
            responseUnitKompetensi.dataValues.nama_unit_kompetensi,
          SKKNI_SKKK:
            SKKNI_SKKK || responseUnitKompetensi.dataValues.SKKNI_SKKK,
          kode_unit_kompetensi:
            kode_unit_kompetensi ||
            responseUnitKompetensi.dataValues.kode_unit_kompetensi,
        },
        {
          where: {
            id: responseUnitKompetensi.id,
          },
        }
      );
      return {
        statusCode: 200,
        message: "Unit Kompetensi updated successfully!",
      };
    } catch (error) {
      console.log([fileName, "updateUnitKompetensi", "ERROR"], {
        info: `${error}`,
      });
      return Promise.reject(GeneralHelper.errorResponse(error));
    }
  };

  const deleteUnitKompetensi = async (paramsID) => {
    try {
      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to delete this data")
        );
      }

      const isUnitKompetensi = await unitKompetensi.findOne({
        where: {
          id: paramsID,
        },
      });
      if (!isUnitKompetensi)
        throw Boom.badRequest("Unit Kompetensi not found!");

      await isUnitKompetensi.destroy();
      return {
        statusCode: 200,
        message: "Unit Kompetensi Deleted Successfully!",
      };
    } catch (error) {
      console.log([fileName, "deleteUnitKompetensi", "ERROR"], {
        info: `${error}`,
      });
      return Promise.reject(GeneralHelper.errorResponse(error));
    }
  };
  //#endregion

  //#region Elemen
  /**
   *
   * Elemen
   *
   */

  const createElemen = async (payload) => {
    const { unit_kompetensi_id, nama_element, no_elemen } = payload;

    try {
      console.log("Payload:", payload);

      Validation.elemenValidations(payload);

      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to create this data")
        );
      }
      const isElemen = await elemen.findOne({
        where: {
          nama_element,
        },
      });

      if (isElemen) throw Boom.badRequest("Nama Elemen has been added!");

      await elemen.create({
        unit_kompetensi_id,
        nama_element,
        no_elemen,
      });

      return {
        statusCode: 200,
        message: "Elemen created successfully!",
      };
    } catch (error) {
      console.log([fileName, "createElemen", "ERROR"], {
        info: `${error}`,
      });
      return Promise.reject(GeneralHelper.errorResponse(error));
    }
  };

  const updateElemen = async (paramsID, payload) => {
    try {
      const { unit_kompetensi_id, nama_element, no_elemen } = payload;

      console.log("payload:", payload);

      Validation.elemenValidations(payload);

      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to update this data")
        );
      }
      const responseElemen = await elemen.findOne({
        where: {
          id: paramsID,
        },
      });

      if (_.isEmpty(responseElemen)) {
        return Promise.reject(
          Boom.badRequest(`Elemen with id ${paramsID} doesn't exist!`)
        );
      }

      await responseElemen.update(
        {
          unit_kompetensi_id:
            unit_kompetensi_id || responseElemen.dataValues.unit_kompetensi_id,
          nama_element: nama_element || responseElemen.dataValues.nama_element,
          no_elemen: no_elemen || responseElemen.dataValues.no_elemen,
        },
        {
          where: {
            id: responseElemen.id,
          },
        }
      );
      return {
        statusCode: 200,
        message: "Elemen updated successfully!",
      };
    } catch (error) {
      console.log([fileName, "updateElemen", "ERROR"], {
        info: `${error}`,
      });
      return Promise.reject(GeneralHelper.errorResponse(error));
    }
  };

  const deleteElemen = async (paramsID) => {
    try {
      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to delete this data")
        );
      }

      const isElemen = await elemen.findOne({
        where: {
          id: paramsID,
        },
      });
      if (!isElemen) throw Boom.badRequest("Elemen not found!");

      await isElemen.destroy();
      return {
        statusCode: 200,
        message: "Elemen Deleted Successfully!",
      };
    } catch (error) {
      console.log([fileName, "deleteElemen", "ERROR"], {
        info: `${error}`,
      });
      return Promise.reject(GeneralHelper.errorResponse(error));
    }
  };
  //#endregion

  //#region KUK
  /**
   *
   * KUK
   *
   */

  const createKuk = async (payload) => {
    const { elemen_id, nama_kuk, no_kuk } = payload;

    try {
      console.log("Payload:", payload);

      Validation.kukValidations(payload);

      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to create this data")
        );
      }
      const isKuk = await kuk.findOne({
        where: {
          nama_kuk,
        },
      });

      if (isKuk) throw Boom.badRequest("Nama KUK has been added!");

      await kuk.create({
        elemen_id,
        nama_kuk,
        no_kuk,
      });

      return {
        statusCode: 200,
        message: "KUK created successfully!",
      };
    } catch (error) {
      console.log([fileName, "createKuk", "ERROR"], {
        info: `${error}`,
      });
      return Promise.reject(GeneralHelper.errorResponse(error));
    }
  };

  const updateKuk = async (paramsID, payload) => {
    try {
      const { elemen_id, nama_kuk, no_kuk } = payload;

      console.log("payload:", payload);

      Validation.kukValidations(payload);

      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to update this data")
        );
      }
      const responseKuk = await kuk.findOne({
        where: {
          id: paramsID,
        },
      });

      if (_.isEmpty(responseKuk)) {
        return Promise.reject(
          Boom.badRequest(`Kuk with id ${paramsID} doesn't exist!`)
        );
      }

      await responseKuk.update(
        {
          elemen_id: elemen_id || responseKuk.dataValues.elemen_id,
          nama_kuk: nama_kuk || responseKuk.dataValues.nama_kuk,
          no_kuk: no_kuk || responseKuk.dataValues.no_kuk,
        },
        {
          where: {
            id: responseKuk.id,
          },
        }
      );
      return {
        statusCode: 200,
        message: "KUK updated successfully!",
      };
    } catch (error) {
      console.log([fileName, "updateKuk", "ERROR"], {
        info: `${error}`,
      });
      return Promise.reject(GeneralHelper.errorResponse(error));
    }
  };

  const deleteKuk = async (paramsID) => {
    try {
      const userRole = "Admin";

      if (userRole !== "Admin") {
        return Promise.reject(
          Boom.unauthorized("You are not authorized to delete this data")
        );
      }

      const isKuk = await kuk.findOne({
        where: {
          id: paramsID,
        },
      });
      if (!isKuk) throw Boom.badRequest("KUK not found!");

      await isKuk.destroy();
      return {
        statusCode: 200,
        message: "KUK Deleted Successfully!",
      };
    } catch (error) {
      console.log([fileName, "deleteKuk", "ERROR"], {
        info: `${error}`,
      });
      return Promise.reject(GeneralHelper.errorResponse(error));
    }
  };
  //#endregion
  return {
    getAllSkemaData,
    createFormSchema,
    updateFormSchema,
    deleteFormSchema,
    createUnitKerja,
    updateUnitKerja,
    deleteUnitKerja,
    createUnitKompetensi,
    updateUnitKompetensi,
    deleteUnitKompetensi,
    createElemen,
    updateElemen,
    deleteElemen,
    createKuk,
    updateKuk,
    deleteKuk,
  };
};

module.exports = SkemaSertifikasiUseCase;
