const fs = require("fs");

const fileRead = (file, raw = false) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
      if (err) {
        return reject(err);
      }

      if (raw === false) {
        return resolve(JSON.parse(content));
      }

      return resolve(content);
    });
  });

const fileWrite = (file, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        return reject(err);
      }

      return resolve("SUCCESS");
    });
  });

module.exports = {
  fileRead,
  fileWrite,
};
