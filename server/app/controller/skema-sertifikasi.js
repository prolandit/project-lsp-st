/**
 *
 * @param {Awaited<ReturnType<import("../use-cases/skema-sertifikasi")>>} skemaSertifikasiUsecase
 * @returns
 */

const SkemaSertifikasiController = (skemaSertifikasiUsecase) => {
  //#region Get All Skema
  /**
   *
   * Get All Skema
   *
   */
  const getAllSkema = async (req, res) => {
    const result = await skemaSertifikasiUsecase.getAllSkemaData();
    res.json(result);
  };

  //#endregion

  //#region Form Skema
  /**
   *
   * Form Skema
   *
   */

  const createFormSchema = async (req, res) => {
    res.send(skemaSertifikasiUsecase.createFormSchema(req.body));
  };

  const updateFormSchema = async (req, res) => {
    res.send(skemaSertifikasiUsecase.updateFormSchema(req.params.id, req.body));
  };
  const deleteFormSchema = async (req, res) => {
    res.send(skemaSertifikasiUsecase.deleteFormSchema(req.params.id));
  };
  //#endregion

  //#region Unit Kerja
  /**
   *
   * Unit Kerja
   *
   */

  const createUnitKerja = async (req, res) => {
    res.send(skemaSertifikasiUsecase.createUnitKerja(req.body));
  };
  const updateUnitKerja = async (req, res) => {
    res.send(skemaSertifikasiUsecase.updateUnitKerja(req.params.id, req.body));
  };
  const deleteUnitKerja = async (req, res) => {
    res.send(skemaSertifikasiUsecase.deleteUnitKerja(req.params.id));
  };
  //#endregion

  //#region Unit Kompetensi
  /**
   *
   * Unit Kompetensi
   *
   */
  const createUnitKompetensi = async (req, res) => {
    res.send(await skemaSertifikasiUsecase.createUnitKompetensi(req.body));
  };
  const updateUnitKompetensi = async (req, res) => {
    res.send(
      await skemaSertifikasiUsecase.updateUnitKompetensi(
        req.params.id,
        req.body
      )
    );
  };
  const deleteUnitKompetensi = async (req, res) => {
    res.send(await skemaSertifikasiUsecase.deleteUnitKompetensi(req.params.id));
  };

  //#endregion

  //#region Elemen
  /**
   *
   * Elemen
   *
   */
  const createElemen = async (req, res) => {
    res.send(await skemaSertifikasiUsecase.createElemen(req.body));
  };
  const updateElemen = async (req, res) => {
    res.send(
      await skemaSertifikasiUsecase.updateElemen(req.params.id, req.body)
    );
  };
  const deleteElemen = async (req, res) => {
    res.send(await skemaSertifikasiUsecase.deleteElemen(req.params.id));
  };

  //#endregion

  //#region KUK
  /**
   *
   * KUK
   *
   */
  const createKUK = async (req, res) => {
    res.send(await skemaSertifikasiUsecase.createKuk(req.body));
  };
  const updateKUK = async (req, res) => {
    res.send(await skemaSertifikasiUsecase.updateKuk(req.params.id, req.body));
  };
  const deleteKUK = async (req, res) => {
    res.send(await skemaSertifikasiUsecase.deleteKuk(req.params.id));
  };
  //#endregion

  return {
    getAllSkema,
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
    createKUK,
    updateKUK,
    deleteKUK,
  };
};

module.exports = SkemaSertifikasiController;
