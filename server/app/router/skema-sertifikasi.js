/**
 *
 * @param {ReturnType<import("../controller/skema-sertifikasi")>} skemaSertifikasi
 */
const skemaSertifikasiRouter = (skemaSertifikasi) => {
  const router = require("express").Router();

  //#region Get All Skema
  /**
   *
   * Get All Skema
   *
   */
  
  router.get(
    "/api-lsp/skemaSertifikasi/get_all_skema",
    skemaSertifikasi.getAllSkema
  );
  //#endregion

  //#region Form Skema
  /**
   *
   * Form Skema
   *
   */
  router.post(
    "/api-lsp/skemaSertifikasi/form_skema",
    skemaSertifikasi.createFormSchema
  );
  router.patch(
    "/api-lsp/skemaSertifikasi/update_form_skema/:id",
    skemaSertifikasi.updateFormSchema
  );
  router.delete(
    "/api-lsp/skemaSertifikasi/delete_form_skema/:id",
    skemaSertifikasi.deleteFormSchema
  );
  //#endregion

  //#region Unit Kerja
  /**
   *
   * Unit Kerja
   *
   */
  router.post(
    "/api-lsp/skemaSertifikasi/unit_kerja",
    skemaSertifikasi.createUnitKerja
  );
  router.patch(
    "/api-lsp/skemaSertifikasi/update_unit_kerja/:id",
    skemaSertifikasi.updateUnitKerja
  );
  router.delete(
    "/api-lsp/skemaSertifikasi/delete_unit_kerja/:id",
    skemaSertifikasi.deleteUnitKerja
  );
  //#endregion

  //#region Unit Kompetensi
  /**
   *
   * Unit Kompetensi
   *
   */
  router.post(
    "/api-lsp/skemaSertifikasi/unit_kompetensi",
    skemaSertifikasi.createUnitKompetensi
  );
  router.patch(
    "/api-lsp/skemaSertifikasi/update_unit_kompetensi/:id",
    skemaSertifikasi.updateUnitKompetensi
  );
  router.delete(
    "/api-lsp/skemaSertifikasi/delete_unit_kompetensi/:id",
    skemaSertifikasi.deleteUnitKompetensi
  );
  //#endregion

  //#region KUK
  /**
   *
   * KUK
   *
   */
  router.post(
    "/api-lsp/skemaSertifikasi/elemen",
    skemaSertifikasi.createElemen
  );
  router.patch(
    "/api-lsp/skemaSertifikasi/update_elemen/:id",
    skemaSertifikasi.updateElemen
  );
  router.delete(
    "/api-lsp/skemaSertifikasi/delete_elemen/:id",
    skemaSertifikasi.deleteElemen
  );
  //#endregion

  //#region KUK
  /**
   *
   * KUK
   *
   */
  router.post("/api-lsp/skemaSertifikasi/kuk", skemaSertifikasi.createKUK);
  router.patch(
    "/api-lsp/skemaSertifikasi/update_kuk/:id",
    skemaSertifikasi.updateKUK
  );
  router.delete(
    "/api-lsp/skemaSertifikasi/delete_kuk/:id",
    skemaSertifikasi.deleteKUK
  );
  //#endregion
  return router;
};

module.exports = skemaSertifikasiRouter;
