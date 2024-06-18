const Joi = require("joi");
const Boom = require("boom");

const formSkemaValidations = (data) => {
  const schema = Joi.object({
    nama_skema: Joi.string()
      .max(100)
      .required()
      .description(
        "Schema name cannot be empty and must be less than 100 characters"
      ),
    lisensi_skema: Joi.number()
      .integer()
      .required()
      .description("License schema must be an integer"),
    SKKNI_SKKK: Joi.string()
      .max(50)
      .required()
      .description("SKKNI or SKKK code must be less than 50 characters"),
    tahun: Joi.date().optional().description("Year must be a valid date"),
    type_form: Joi.boolean()
      .optional()
      .description("Type form must be a boolean"),
  });

  const validate = schema.validate(data);

  if (validate.error) {
    throw Boom.badRequest(validate.error);
  }

  return validate.value;
};

const unitKerjaValidations = (data) => {
  const schema = Joi.object({
    kode_skema_id: Joi.number()
      .integer()
      .required()
      .description("Kode Schema ID must be an integer and cannot be empty"),
    nama_kel_pekerjaan: Joi.string()
      .required()
      .description(
        "Kelompok Pekerjaan cannot be empty and must be less than 100 characters"
      ),
    no_kel_pekerjaan: Joi.number()
      .integer()
      .required()
      .description("License schema must be an integer"),
  });

  const validate = schema.validate(data);

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }

  return validate.value;
};

const unitKompetensiValidations = (data) => {
  const schema = Joi.object({
    unit_kerja_id: Joi.number()
      .integer()
      .required()
      .description("Unit kerja ID must be an integer and is required"),
    nama_unit_kompetensi: Joi.string()
      .required()
      .description(
        "Unit Kompetensi cannot be empty and must be less than 100 characters"
      ),
    SKKNI_SKKK: Joi.string()
      .required()
      .description("SKKNI or SKKK code must be less than 50 characters"),
    kode_unit_kompetensi: Joi.number()
      .integer()
      .required()
      .description("License schema must be an integer"),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const elemenValidations = (data) => {
  const schema = Joi.object({
    unit_kompetensi_id: Joi.number()
      .integer()
      .required()
      .description("Unit Kompetensi ID must be an integer and is required"),
    nama_element: Joi.string()
      .required()
      .description(
        "Unit Kompetensi cannot be empty and must be less than 100 characters"
      ),
    no_elemen: Joi.number()
      .integer()
      .required()
      .description("License schema must be an integer"),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const kukValidations = (data) => {
  const schema = Joi.object({
    elemen_id: Joi.number()
      .integer()
      .required()
      .description("Elemen ID must be an integer and is required"),
    nama_kuk: Joi.string()
      .required()
      .description(
        "Unit Kompetensi cannot be empty and must be less than 100 characters"
      ),
    no_kuk: Joi.number()
      .integer()
      .required()
      .description("License schema must be an integer"),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

module.exports = {
  formSkemaValidations,
  unitKerjaValidations,
  unitKompetensiValidations,
  elemenValidations,
  kukValidations,
};
