const TokenModel = require("./token");
const UserModel = require("./user");
const FormSkemaModel = require("./form-skema");
const UnitKerjaModel = require("./unit-kerja");
const UnitKompetensiModel = require("./unit-kompetensi");
const elemenModel = require("./elemen");
const kukModel = require("./kuk");

const models = (database) => ({
  user: UserModel(database),
  token: TokenModel(database),
  formSkema: FormSkemaModel(database),
  unitKerja: UnitKerjaModel(database),
  unitKompetensi: UnitKompetensiModel(database),
  elemen: elemenModel(database),
  kuk: kukModel(database),
});

module.exports = models;
