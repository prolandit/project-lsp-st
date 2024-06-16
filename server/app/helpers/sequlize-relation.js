const whenRelation = (withRelation, relname, cb) =>
  (withRelation.includes("*") || withRelation.includes(relname)) && cb();
module.exports = whenRelation;
