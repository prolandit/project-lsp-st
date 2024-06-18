/**
 * @param {ReturnType<import("./index")>} models
 * @returns {ReturnType<import("./index")>}
 */
const sequilizeRelationInit = (models) => {
  // initate all models and relationships
  Object.keys(models).forEach((model) => {
    if (typeof models[model].initRelation === "function") models[model].initRelation(models);
  });

  return models;
};

module.exports = sequilizeRelationInit;
